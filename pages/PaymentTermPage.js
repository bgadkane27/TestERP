import { Selector, t } from "testcafe";


class PaymentTermPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I2i3_T")
        this.setuppaymentterm= Selector("#NavViewCommon_I0i1_T")
        this.newpaymentterm = Selector("#MainMenu_DXI0_T")
        this.paymenttermname= Selector("input[name='PaymentTerm.Name'], #PaymentTerm.Name_I")
        this.paymenttermnamearabic= Selector("input[name='PaymentTerm.NameL2'], #PaymentTerm.NameL2_I")
        this.duedays = Selector("input[name='PaymentTerm.DueDays']")
        this.autoinsertcustomer= Selector('.dxSwitcher').nth(0)
        this.autoinsertsupplier =Selector('.dxSwitcher').nth(1)
        this.description = Selector("textarea[name='PaymentTerm.Description'], #PaymentTerm.Description_I") 
        this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img")   
        this.paymenttermnameinput = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]');//Selector(".dx-texteditor-input").nth(2)
        this.paymenttermselect = Selector(".list-hyperlink")
        this.paymenttermedit = Selector("#MainMenu_DXI2_T")
        this.paymenttermcontextmenu = Selector("#MainMenu_DXI12_PImg")
        this.deletebutton = Selector("#MainMenu_DXI3_T")
        this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok')
    }

    async navigateToPaymentTermSection() {
        await t
        .click(this.setupmenu)
        .click(this.setuppaymentterm)

    }
    async createNewPaymentTerm(name, namearabic, duedays, description) {
        await t
        .click(this.newpaymentterm)
        .typeText(this.paymenttermname, name)
        .typeText(this.paymenttermnamearabic, namearabic) 
        .typeText(this.duedays, duedays)
        .click(this.autoinsertcustomer)
        .click(this.autoinsertsupplier)
        .typeText(this.description, description)
        .click(this.savebutton)  
    }
    async duplicatePaymentTerm(name, duedays) {
        await t
        .click(this.newpaymentterm)
        .typeText(this.paymenttermname, name)
        .typeText(this.duedays, duedays)
        .click(this.savebutton)        
    }
    async updatePaymentTerm(name) {
        await t
        .typeText(this.paymenttermnameinput, name)
        .wait(2000)
        .click(this.paymenttermselect)
        .wait(1000)
        .click(this.paymenttermedit)
    }
    async deletePaymentTerm(name) {
        await t
        .typeText(this.paymenttermnameinput, name)
        .wait(2000)
        .click(this.paymenttermselect)
        .click(this.paymenttermcontextmenu)
        .click(this.deletebutton)
        .click(this.deleteokbutton)
    }    
}

export default new PaymentTermPage();