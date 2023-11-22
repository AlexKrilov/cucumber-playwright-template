import {BrowserDriver, IBrowserDriver} from "./browserDriver";
export interface IPageFeatures extends IBrowserDriver {
  openUrl(url: string): Promise<void>;
}

export class PageFeatures extends BrowserDriver implements IPageFeatures {

  async openUrl(url: string): Promise<void> {
    const context = await this.browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
  };

}