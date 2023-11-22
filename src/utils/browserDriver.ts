import {Browser, chromium, ChromiumBrowser, firefox, FirefoxBrowser, webkit, WebKitBrowser} from "@playwright/test";
import {config} from "../../config/browserConfig";

export interface IBrowserDriver {
  browser: Browser;
  setUpBrowser(): Promise<void>;
  closeBrowser(): Promise<void>;
}

export class BrowserDriver implements IBrowserDriver {
  private _browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser | undefined;

  public get browser(): any {
    return this._browser;
  };

  public set browser(newBrowser: Browser) {
    this._browser = newBrowser;
  };

  constructor() {
    this._browser = undefined;
  };

  public async setUpBrowser(): Promise<void> {
    switch (config.browser) {
      case "chromium":
        this._browser = await chromium.launch({headless: false});
        break;
      case "firefox":
        this._browser = await firefox.launch({headless: false});
        break;
      case "webkit":
        this._browser = await webkit.launch({headless: false});
        break;
    }
  };

  public async closeBrowser(): Promise<void> {
    if (this._browser) {
      await this._browser.close();
    }
  };
}