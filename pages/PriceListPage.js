import { Selector, t } from "testcafe";

class PriceListPage {
  constructor() {
    this.setupmenu = Selector("#leftNavigation_I2i3_T");
    this.setuppricelist = Selector("#NavViewCommon_I0i3_T");
    this.newpricelist = Selector("#MainMenu_DXI0_T");
    this.pricelistname = Selector("input[name='PriceList.Name'], #PriceList.Name_I")
    this.pricelistnamearabic = Selector("input[name='PriceList.NameL2'], #PriceList.NameL2_I");
    this.pricelistdescription = Selector("textarea[name='PriceList.Description'], #PriceList.Description_I");
    this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img");
    this.pricelistinputname = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]');
    this.pricelistselect = Selector(".list-hyperlink");
    this.pricelistedit = Selector("#MainMenu_DXI2_T");
    this.pricelistview = Selector("#MainMenu_DXI1_T");
    this.pricelistcontextmenu = Selector("#MainMenu_DXI12_PImg");
    this.deletebutton = Selector("#MainMenu_DXI3_T");
    this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok');
  }

  async navigateToPriceListSection() {
    await t.click(this.setupmenu).click(this.setuppricelist);
  }
  async createNewPriceList(name, namearabic, description) {
    await t
      .click(this.newpricelist)
      .wait(5000)
      .typeText(this.pricelistname, name)
      .typeText(this.pricelistnamearabic, namearabic)
      .typeText(this.pricelistdescription, description)
      .click(this.savebutton);
  }

  async deletePriceList(name) {
    await t
    .typeText(this.pricelistinputname, name)
    .wait(2000)
    .click(this.pricelistselect)
    .click(this.pricelistcontextmenu)
    .click(this.deletebutton)
    .click(this.deleteokbutton)
  }

  async duplicatePriceList(name) {
    await t
    .click(this.newpricelist)
    .wait(2000)
    .typeText(this.pricelistname, name)
    .click(this.savebutton)       
  }

  async updatePriceList(name, namearabic, description) {
    await t
    .typeText(this.pricelistinputname, name)
    .wait(2000)
    .click(this.pricelistselect)
    .wait(1000)
    .click(this.pricelistedit)
    // .typeText(this.pricelistname, name)
    // .typeText(this.pricelistnamearabic, namearabic)
    // .typeText(this.pricelistdescription, description)
    // .click(this.savebutton) 
    // .click(this.pricelistview)   
  }
}

export default new PriceListPage();
