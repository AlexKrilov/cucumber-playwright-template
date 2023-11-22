interface IBrowserConfig {
  browser: string;
  BASE_URL: string;
}

export const config: IBrowserConfig = {
  browser: process.env.BROWSER || "chromium",
  BASE_URL: 'https://google.com/'
};