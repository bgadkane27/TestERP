import { Selector, t } from "testcafe";


class PaymentTermPage {
    constructor() {
        this.setupmenu = Selector("#leftNavigation_I2i3_T");
        this.setuppaymentterm= Selector()
        this.newpaymentterm = Selector()
        this.paymenttermname= Selector()
        this.duedays = Selector()
        this.autoinsertcustomer= Selector()
        this.autoinsertsupplier = Selector()
        this.description = Selector()       
    }

    async navigateToPaymentTermSection() {

    }
    async createNewPaymentTerm(paymentterm) {

    }
    async duplicatePaymentTerm(paymentterm) {
        
    }
    async updatePaymentTerm(paymentterm) {

    }
    async deletePaymentTerm(paymentterm) {  

    }    
}