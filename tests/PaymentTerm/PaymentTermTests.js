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

test("DeleteExistingPaymentTerm: " + paymentterm.delete.name, async (t) => {

    await t
        .useRole(login);
    await   
        PaymentTermPage.navigateToPaymentTermSection();
    await
        PaymentTermPage.deletePaymentTerm(paymentterm.delete.name);
    await assertPaymentTermDelete(t, "Record deleted successfully!")
})