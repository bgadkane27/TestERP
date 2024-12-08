const { Selector, t } = require("testcafe")

class ItemPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I0i2_")
        this.newitem = Selector("#MainMenu_DXI0_T")
        this.itemname = Selector("input[name='Name']")
        this.itemnamearabic = Selector("input[name='NameL2']")
        //this.itemsalesprice = Selector("#dx_dx-8a1a678e-397c-a2ca-1d0a-162148c2e22c_SalesPrice")
        //this.itempurchaseprice = Selector("#dx_dx-8a1a678e-397c-a2ca-1d0a-162148c2e22c_PurchasePrice")
        this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img")
        this.iteminput = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]')
        this.itemcontextmenu = Selector("#MainMenu_DXI12_PImg")
        this.deletebutton = Selector("#MainMenu_DXI3_T")
        this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok') 
    }

    async navigateToItemSection() {
        await t
        .click(this.setupmenu)
        .click(this.newitem)

    }
    async createItem(itemname, itemnamearabic, itemsalesprice, itempurchaseprice) {
        await t
        .typeText(this.itemname, itemname)
        .typeText(this.itemnamearabic, itemnamearabic)
        //.typeText(this.itemsalesprice, itemsalesprice)
        //.typeText(this.itempurchaseprice, itempurchaseprice)
    }
}

export default new ItemPage();