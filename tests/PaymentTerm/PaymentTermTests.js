import { fixture, Role, Selector, t } from "testcafe";
import loginpage from "../../pages/LoginPage";
import PaymentTermPage from '../../pages/PaymentTermPage'
const config = require('../../utils/login.json')
const paymentterm = require('../../utils/paymentterm.json')
import { assertPaymentTermCreated,  assertPaymentTermDuplicate, assertPaymentTermDelete, assertPaymentTermUpdate } from '../../assertions/paymentTermAssertions'

const login = Role('./', async t => {
    await t.maximizeWindow()
    await loginpage.login(config.logincredentials.username, config.logincredentials.password);

}, { preserveUrl: true });

async function clearAndType(selector, value) {
    await t
        .click(selector)
        .pressKey("ctrl+a delete")
        .typeText(selector, value);
}

fixture('Payment Term').page('./')

test('CreateNewPaymentTerm: ' + paymentterm.new.name, async t => {
    await t
        .useRole(login);
    await
        PaymentTermPage.navigateToPaymentTermSection();
    await
        PaymentTermPage.createNewPaymentTerm(paymentterm.new.name,
            paymentterm.new.arabicname,
            paymentterm.new.duedays,
            paymentterm.new.description);
    await assertPaymentTermCreated(t, "Payment Term (Payable) created successfully!");
});

test("CreateDulplicatePaymentTerm-Not Allowed: " + paymentterm.new.name, async (t) => {

    await t
        .useRole(login);
    await   
        PaymentTermPage.navigateToPaymentTermSection();
    await
        PaymentTermPage.duplicatePaymentTerm(paymentterm.new.name, paymentterm.new.duedays);
    await assertPaymentTermDuplicate(t, "Cannot insert duplicate")
})

test("UpdateExistingPaymentTerm: " + paymentterm.new.name, async (t) => {    
    await t
        .useRole(login);
    await   
        PaymentTermPage.navigateToPaymentTermSection();
    await
        PaymentTermPage.updatePaymentTerm(paymentterm.new.name)

        const name = Selector("input[name='PaymentTerm.Name'], #PaymentTerm.Name_I")
        const arabicname = Selector("input[name='PaymentTerm.NameL2'], #PaymentTerm.NameL2_I")
        const duedays = Selector("input[name='PaymentTerm.DueDays']")
        const autoinsertcustomer = Selector('.dxSwitcher').nth(0)
        const autoinsertsupplier = Selector('.dxSwitcher').nth(1)
    
    
        await clearAndType(name, paymentterm.update.name);
        await clearAndType(arabicname, paymentterm.update.arabicname);
        await clearAndType(duedays, paymentterm.update.duedays);
        await t
        .click(autoinsertcustomer)
        .click(autoinsertsupplier)
        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Click on view
        .click("#MainMenu_DXI1_T")
        //Assertion           
    await assertPaymentTermUpdate(t, paymentterm.update.name)
})

test("DeleteExistingPaymentTerm: " + paymentterm.delete.name, async (t) => {

    await t
        .useRole(login);
    await   
        PaymentTermPage.navigateToPaymentTermSection();
    await
        PaymentTermPage.deletePaymentTerm(paymentterm.delete.name);
    await assertPaymentTermDelete(t, "Record deleted successfully!")
})
