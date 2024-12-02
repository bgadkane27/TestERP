import { Selector, t } from "testcafe";

class PriceListPage {
  constructor() {
    this.setupmenu = Selector("#leftNavigation_I2i3_T");
    this.setuppricelist = Selector("#NavViewCommon_I0i3_T");
    this.newpricelist = Selector("#MainMenu_DXI0_T");
    this.pricelistname = Selector(
      "input[name='PriceList.Name'], #PriceList.Name_I"
    );
    this.pricelistnamearabic = Selector(
      "input[name='PriceList.NameL2'], #PriceList.NameL2_I"
    );
    this.pricelistdescription = Selector(
      "textarea[name='PriceList.Description'], #PriceList.Description_I"
    );
    this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img");
  }

  async navigateToPriceListSection() {
    await t.click(this.setupmenu).click(this.setuppricelist);
  }
  async createNewPriceList(name, namearabic, description) {
    await t
      .click(this.newpricelist)
      .typeText(this.pricelistname, name)
      .typeText(this.pricelistnamearabic, namearabic)
      .typeText(this.pricelistdescription, description)
      .click(this.savebutton);
  }
}

export default new PriceListPage();
