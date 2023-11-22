import {After, Before, Given, Then, When} from "@cucumber/cucumber";
import {PageFeatures} from "../utils/pageFeatures";
import {config} from "../../config/browserConfig";

Before(async function (): Promise<void> {
  this.page = new PageFeatures;
  await this.page.setUpBrowser();
});

After(async function (): Promise<void> {
  await this.page.closeBrowser();
});

Given('I am on Dashboard main page', async function (): Promise<void> {
 await this.page.openUrl(config.BASE_URL)
});

Then('I see the main page', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

