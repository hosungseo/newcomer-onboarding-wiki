import { test, expect, type Page } from '@playwright/test';

// Helper: wait for landing to be populated (gate cards rendered after fetch)
async function gotoLanding(page: Page) {
  await page.goto('/');
  await page.waitForSelector('.gate-card', { timeout: 10_000 });
}

// Helper: deep-link to a gate and wait for entry question
async function gotoGate(page: Page, gateId: string) {
  await page.goto(`/#${encodeURIComponent(gateId)}`);
  await page.waitForSelector('.q', { timeout: 10_000 });
}

test.describe('gate renderer e2e', () => {
  test('landing-visible', async ({ page }) => {
    await gotoLanding(page);
    await expect(page.locator('.hero h1')).toBeVisible();
    const cards = page.locator('.gate-card');
    expect(await cards.count()).toBeGreaterThanOrEqual(10);
  });

  test('pick-gate', async ({ page }) => {
    await gotoLanding(page);
    await page.locator('.gate-card').first().click();
    await expect(page.locator('.q')).toBeVisible();
    await expect(page.locator('#head-gate')).toBeVisible();
    await expect(page.locator('#head-current')).not.toHaveText('');
  });

  test('answer-flow reaches a leaf', async ({ page }) => {
    await gotoGate(page, 'gate-첫문서처리');
    // Happy path: keep clicking first non-dim option until a leaf appears.
    for (let i = 0; i < 10; i++) {
      if (await page.locator('.leaf-badge').count() > 0) break;
      const firstOpt = page.locator('.opt:not(.dim)').first();
      await firstOpt.waitFor({ state: 'visible', timeout: 5_000 });
      await firstOpt.click();
      // small wait for re-render
      await page.waitForTimeout(80);
    }
    await expect(page.locator('.leaf-badge')).toBeVisible();
    await expect(page.locator('.notes-card')).toBeVisible();
    expect(await page.locator('.note').count()).toBeGreaterThan(0);
  });

  test('back-to-previous returns to prior question', async ({ page }) => {
    await gotoGate(page, 'gate-첫문서처리');
    // Q1 text
    const q1Text = (await page.locator('.q').textContent())?.trim() ?? '';
    // Hop 1
    await page.locator('.opt:not(.dim)').first().click();
    await page.waitForTimeout(80);
    const q2Text = (await page.locator('.q').textContent())?.trim() ?? '';
    expect(q2Text).not.toBe(q1Text);
    // Hop 2 (need another question node, not a leaf)
    // find an option that leads to another node
    const hop2 = page.locator('.opt:not(.dim)').first();
    await hop2.click();
    await page.waitForTimeout(80);
    // Either q3 or leaf — we need at least 2 question hops. If leaf, back still returns to q2.
    // Click "← 뒤로"
    const back = page.locator('.nav-btn', { hasText: '뒤로' }).first();
    await back.click();
    await page.waitForTimeout(80);
    const afterBack = (await page.locator('.q').textContent().catch(() => ''))?.trim() ?? '';
    // After back, we should be on q2 (not on q1 entry).
    expect(afterBack).toBe(q2Text);
    expect(afterBack).not.toBe(q1Text);
  });

  test('crumb-jump returns to gate entry after 3 hops', async ({ page }) => {
    await gotoGate(page, 'gate-첫문서처리');
    const entryText = (await page.locator('.q').textContent())?.trim() ?? '';
    // 3 hops, preferring non-leaf branches where possible
    for (let i = 0; i < 3; i++) {
      if (await page.locator('.leaf-badge').count() > 0) break;
      await page.locator('.opt:not(.dim)').first().click();
      await page.waitForTimeout(80);
    }
    // Click the gate chip (2nd .crumb .chip: [처음, gate, ...hops])
    const chips = page.locator('.crumb .chip');
    expect(await chips.count()).toBeGreaterThanOrEqual(2);
    await chips.nth(1).click();
    await page.waitForTimeout(80);
    await expect(page.locator('.q')).toHaveText(entryText);
  });

  test('subgate-parent-return: 첫승진 → 특별승진심화 → 부모 관문', async ({ page }) => {
    await gotoGate(page, 'gate-첫승진');
    // Entry → click "특별승진 / 추서..." (goto E)
    await page.locator('.opt', { hasText: '특별승진' }).first().click();
    await page.waitForTimeout(80);
    // Now at node E — click "절차·공적설명..." leaf E-특승심화진입
    await page.locator('.opt', { hasText: '절차' }).first().click();
    await page.waitForTimeout(80);
    await expect(page.locator('.leaf-badge')).toBeVisible();
    // Click "↓ 깊게" which goes to gate-첫승진-특별승진심화 (subgate)
    await page.locator('.nav-btn', { hasText: '깊게' }).first().click();
    // Wait for subgate to load: head-current should be 첫승진-특별승진심화
    await expect(page.locator('#head-current')).toHaveText('첫승진-특별승진심화', { timeout: 10_000 });
    // A "부모 관문" back button must appear
    const parentBtn = page.locator('.nav-btn', { hasText: '부모 관문' });
    await expect(parentBtn).toBeVisible();
    await expect(parentBtn).toContainText('첫승진');
    await parentBtn.click();
    await page.waitForTimeout(120);
    await expect(page.locator('#head-current')).toHaveText('첫승진');
  });

  test('deep-link-hash: #gate-첫급여 opens 첫급여 entry', async ({ page }) => {
    await gotoGate(page, 'gate-첫급여');
    await expect(page.locator('.q')).toBeVisible();
    await expect(page.locator('#head-current')).toContainText('첫급여');
  });

  test('moreum-dimmed: a 모름 option is rendered with class dim', async ({ page }) => {
    // gate-첫승진 entry has no "모름" label exactly, but node B has "모름 — 세 재료 한 번에".
    await gotoGate(page, 'gate-첫승진');
    // Click "무엇이 명부에 반영되나" (goto B)
    await page.locator('.opt', { hasText: '명부에 반영' }).first().click();
    await page.waitForTimeout(80);
    // There should be a dim option containing "모름"
    const dim = page.locator('.opt.dim');
    await expect(dim.first()).toBeVisible();
    await expect(dim.first()).toContainText('모름');
  });
});
