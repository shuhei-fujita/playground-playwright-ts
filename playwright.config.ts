import { defineConfig, devices } from '@playwright/test';

/**
 * 環境変数をファイルから読み込む。
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * 詳細はこちらを参照してください。https://playwright.dev/docs/test-configuration。
 */
export default defineConfig({
  testDir: './tests',
  /* ファイル内のテストを並列で実行する */
  fullyParallel: true,
  /* CIでtest.onlyがソースコードに残っていた場合、ビルドを失敗させる */
  forbidOnly: !!process.env.CI,
  /* CIでのみリトライする */
  retries: process.env.CI ? 2 : 0,
  /* CIでは並列テストをオプトアウトする */
  workers: process.env.CI ? 1 : undefined,
  /* 使用するレポーター。詳細はこちらを参照してください。https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* すべてのプロジェクトで共有する設定。詳細はこちらを参照してください。https://playwright.dev/docs/api/class-testoptions */
  use: {
    /* `await page.goto('/')`などのアクションで使用するベースURL */
    // baseURL: 'http://127.0.0.1:3000',

    /* 失敗したテストをリトライする際にトレースを収集する。詳細はこちらを参照してください。https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* 主要なブラウザのプロジェクトを設定する */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* モバイルビューポートでのテスト */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* ブランド付きブラウザでのテスト */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* テストを開始する前にローカルの開発サーバーを実行する */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
