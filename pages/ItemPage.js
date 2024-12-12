const { Selector, t } = require("testcafe")

class ItemPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I0i2_")
        this.newitem = Selector("#MainMenu_DXI0_T")
        this.itemname = Selector("input[name='Name']")
        this.itemnamearabic = Selector("input[name='NameL2']")
        this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img")
        this.iteminput = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]')
        //this.selectitem= Selector(".list-hyperlink").withExactText("Weight")
        this.itemcontextmenu = Selector("#MainMenu_DXI18_P")
        this.deletebutton = Selector("#MainMenu_DXI4_T")
        this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok') 
    }

    async navigateToItemSection() {
        await t
        .click(this.setupmenu)
        .click(this.newitem)

    }
    async createItem(itemname, itemnamearabic) {
        await t
        .typeText(this.itemname, itemname)
        .typeText(this.itemnamearabic, itemnamearabic)
    }

    async deleteItem(name){
        const selectitem = Selector(".list-hyperlink").withExactText(name);
        await t
        .typeText(this.iteminput, name)
        .wait(2000)
        .click(selectitem)
        .wait(2000)
        .click(this.itemcontextmenu)
        .click(this.deletebutton)
        .click(this.deleteokbutton)
    }
}

export default new ItemPage();