import { playwrightLauncher } from '@web/test-runner-playwright';
// import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  rootDir: '.',
  files: ['./tests/**/*.test.js'], // "default" group
  watch: process.argv.includes("--watch"),
  concurrentBrowsers: 3,
  nodeResolve: true,
  testFramework: {
    config: {
      ui: 'tdd',
      timeout: 3000,
      retries: 1
    }
  },
  plugins: [

  ],
  browsers: [
    playwrightLauncher({ product: 'chromium', launchOptions: {
      headless: !(process.env.DEBUG?.toLowerCase() === "chrome")
    }}),
    playwrightLauncher({ product: 'firefox', launchOptions: {
      headless: !(process.env.DEBUG?.toLowerCase() === "firefox")
    }}),
    playwrightLauncher({ product: 'webkit', launchOptions: {
      headless: !(process.env.DEBUG?.toLowerCase() === "webkit")
    }}),
  ],
}
