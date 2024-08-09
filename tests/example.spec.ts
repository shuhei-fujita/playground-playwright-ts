import { test, expect } from '@playwright/test';

test('タイトルが存在すること', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // タイトルが指定の文字列を含むことを期待します。
  await expect(page).toHaveTitle(/Playwright/);
});

test('タイトル2が存在すること', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // タイトルが指定の文字列を含むことを期待します。
  await expect(page).toHaveTitle(/end-to-end/);
});

test('Get startedリンクを取得すること', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Get startedリンクをクリックします。
  await page.getByRole('link', { name: 'Get started' }).click();

  // ページには「Installation」という名前の見出しを持つことを期待します。
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
