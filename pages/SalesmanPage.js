import { Selector, t } from "testcafe";


class SalesmanPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I2i3_T")
        this.setupsalesman = Selector("#NavViewCommon_I0i2_T")
        this.newsalesman = Selector("#MainMenu_DXI0_T")
        this.salesmanname=  Selector("input[name='Salesman.Name']")
        this.salesmangrid= Selector("#Other_RPHT")
        this.salespercentage =Selector("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I")
        this.salestitle= Selector("input[name='Salesman.Title'], #Salesman.Title_I")
        this.salesemail= Selector("input[name='Salesman.Email'], #Salesman.Email_I")
        this.salesextension= Selector("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I")
        this.salesmobile= Selector("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I")
        this.savebutton= Selector("#MainMenu_DXI0_T")
        this.doubleclick= Selector(".list-hyperlink")
        this.salesmaninput= Selector(".dx-texteditor-input").nth(2)
        this.salesmancontextmenu= Selector("#MainMenu_DXI12_PImg")
        this.deletebutton= Selector("#MainMenu_DXI3_T")
        this.deleteokbutton= Selector(".dx-button-content").nth(6)        
    }

    async navigateToSalesmanSection(){
        await t
        .click(this.setupmenu)
        .click(this.setupsalesman)        
    }
    async createNewSalesman(name, percentage, title, email, extension, mobile){
        await t
        .click(this.newsalesman)
        .typeText(this.salesmanname, name)
        .click(this.salesmangrid)
        .typeText(this.salespercentage, percentage)
        .typeText(this.salestitle, title)
        .typeText(this.salesemail, email)
        .typeText(this.salesextension, extension)
        .typeText(this.salesmobile, mobile)
        .click(this.savebutton)        
    }

    async duplicateSalesman(name){
        await t
        .click(this.newsalesman)
        .wait(2000)
        .typeText(this.salesmanname, name)
        .click(this.savebutton)       
    }

    async deleteSalesman(name){
        await t
        .typeText(this.salesmaninput, name)
        .wait(2000)
        .click(this.doubleclick)
        .click(this.salesmancontextmenu)
        .click(this.deletebutton)
        .wait(2000)
        .click(this.deleteokbutton)
    }

    async updateSalesman(name){
        await t
        .typeText(this.salesmaninput, name)
        .wait(2000)
        .doubleClick(this.doubleclick)
        .click(this.salesmangrid)
    }

    async gridSalesman(percentage, title, email, extension, mobile){
        await t
        .typeText(this.salespercentage, percentage)
        .typeText(this.salestitle, title)
        .typeText(this.salesemail, email)
        .typeText(this.salesextension, extension)
        .typeText(this.salesmobile, mobile)
        .click(this.savebutton)
    }
}

export default new SalesmanPage();