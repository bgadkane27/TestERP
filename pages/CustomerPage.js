import { Selector, t } from "testcafe";


class CustomerPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I2i3_T");
        this.setupcustomer = Selector("#NavViewCommon_I0i0_T");
        this.newcustomer = Selector("#MainMenu_DXI0_T");
        this.customername = Selector("input[name='Name']");
        this.customernamearabic = Selector("input[name='NameL2']");
        //this.customerdescription = Selector("textarea[name='Customer.Description'], #Customer.Description_I");
        this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img");
        this.customerinputname = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]');
        this.customerselect = Selector(".list-hyperlink");
        this.customeredit = Selector("#MainMenu_DXI2_T");
        this.customercontextmenu = Selector("#MainMenu_DXI19_PImg");
        this.deletebutton = Selector("#MainMenu_DXI3_T");
        this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok');
    }

    async navigateToCustomerSection() {
        await t
            .click(this.setupmenu)
            .click(this.setupcustomer);
    }
    async createNewCustomer(name, namearabic) {
        await t
            .click(this.newcustomer)
            .wait(2000)
            .typeText(this.customername, name)
            .typeText(this.customernamearabic, namearabic)
            .click(this.savebutton)
    }

    async deleteCustomer(name) {
        await t
            .typeText(this.customerinputname, name)
            .wait(3000)
            .click(this.customerselect)
            .click(this.customercontextmenu)
            .click(this.deletebutton)
            .click(this.deleteokbutton);
    }

    async updateCustomer(name) {
        await t
            .typeText(this.customerinputname, name)
            .wait(3000)
            .click(this.customerselect)
            .click(this.customeredit)
    } 
}

export default new CustomerPage();