import { Selector } from "testcafe";


class PaymentMethodPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I2i3_T");        
        this.setuppaymentmethod = Selector("#NavViewCommon_I0i4_T")
        this.newpaymentmethod = Selector("#MainMenu_DXI0_T")
        this.paymentmethodname = Selector("input[name='PaymentMethod.Name'], #PaymentMethod.Name_I")
        this.paymentmethodnamearabic = Selector("input[name='PaymentMethod.NameL2'], #PaymentMethod.NameL2_I")
        this.paymentmethoddescription = Selector("textarea[name='PaymentMethod.Description'], #PaymentMethod.Description_I")
        this.savebutton = Selector("#MainMenu_DXI0_T, #MainMenu_DXI0_Img")
        this.paymentmethodinputname = Selector('input[aria-label="Filter cell"][role="textbox"][aria-describedby="dx-col-3"]')
        this.paymentmethodselect = Selector(".list-hyperlink")
        this.paymentmethodedit = Selector("#MainMenu_DXI2_T")
        this.paymentmethodcontextmenu = Selector("#MainMenu_DXI12_PImg")
        this.deletebutton = Selector("#MainMenu_DXI3_T")
        this.deleteokbutton = Selector('.dx-button-content .dx-button-text').withText('Ok')
    }

    async navigateToPaymentMethodSection() {
        await t.click(this.setupmenu).click(this.setuppaymentmethod);
    }

    async createNewPaymentMethod(name, namearabic, description) {
        await t
            .click(this.newpaymentmethod)
            .typeText(this.paymentmethodname, name)
            .typeText(this.paymentmethodnamearabic, namearabic)
            .typeText(this.paymentmethoddescription, description)
            .click(this.savebutton);
    }
}

export default new PaymentMethodPage();