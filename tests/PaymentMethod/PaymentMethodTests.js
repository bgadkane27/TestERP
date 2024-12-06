import { fixture, Role, Selector, t } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import PaymentMethodPage from "../../pages/PaymentMethodPage";
const config = require("../../utils/login.json");
const paymentmethod = require("../../utils/paymentmethod.json");
import { assertPaymentMethodCreated, assertPaymentMethodDuplicate, assertPaymentMethodDelete, assertPaymentMethodUpdate } from "../../assertions/paymentMethodAssertions";


const login = Role('./', async t => {
    await t.maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password)

}, { preserveUrl: true });

async function handleDropdownofType(dropdownSelector, optionText) {
    const dropdownType = Selector(dropdownSelector);
    const dropdownOptions = Selector('#PaymentMethod.Type_DDD_L_LBI0T0, .dxeListBoxItem_Office365').withText(optionText);

    await t
        .click(dropdownType)
        .click(dropdownOptions);
}

async function handleDropdownofAccount(dropdownSelector, optionText) {
    const dropdownType = Selector(dropdownSelector).nth(1);
    const dropdownOptions = Selector('div.lookup-text').withText(optionText);

    await t
        .click(dropdownType)
        .click(dropdownOptions);
}

async function clearAndType(selector, value) {
    await t
        .click(selector)
        .pressKey("ctrl+a delete")
        .typeText(selector, value);
}

fixture("PaymentMethod").page("./")

test.skip("Create New PaymentMethod: " + paymentmethod.new.name, async (t) => {
    await t
        .useRole(login);
    await PaymentMethodPage.navigateToPaymentMethodSection()
    await PaymentMethodPage.createNewPaymentMethod(
        paymentmethod.new.name,
        paymentmethod.new.arabicname,
        paymentmethod.new.description
    )
    await handleDropdownofType('td.dxeButton.dxeButtonEditButton_Office365', 'Cash');
    await handleDropdownofAccount('td.dxeButton.dxeButtonEditButton_Office365', 'Cash on Hand');

    await t
        .click("#MainMenu_DXI0_T");

    await assertPaymentMethodCreated(t, "Payment Method created successfully!")

});

test.skip("Create Duplicate Payment Term: " + paymentmethod.new.name, async t => {
    await t
        .useRole(login)
    await PaymentMethodPage.navigateToPaymentMethodSection()
    await PaymentMethodPage.duplicatePaymentMethod(paymentmethod.new.name, paymentmethod.new.arabicname,
        paymentmethod.new.description)

    await handleDropdownofAccount('td.dxeButton.dxeButtonEditButton_Office365', 'Cash on Hand');
    await t
        .click("#MainMenu_DXI0_T");
    await assertPaymentMethodDuplicate(t, "Cannot insert duplicate")
});

test.skip("Update Existing Payment Term: " + paymentmethod.new.name, async t => {
    await t
        .useRole(login)

    await PaymentMethodPage.navigateToPaymentMethodSection()
    await PaymentMethodPage.updatePaymentMethod(paymentmethod.new.name)

    const name = Selector("input[name='PaymentMethod.Name'], #PaymentMethod.Name_I")
    const arabicname = Selector("input[name='PaymentMethod.NameL2'], #PaymentMethod.NameL2_I")
    const description = Selector("textarea[name='PaymentMethod.Description'], #PaymentMethod.Description_I")

    await clearAndType(name, paymentmethod.update.name);
    await clearAndType(arabicname, paymentmethod.update.arabicname);
    await clearAndType(description, paymentmethod.update.description);

    await t
        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Click on view
        .click("#MainMenu_DXI1_T")
    //Assertion           
    await assertPaymentMethodUpdate(t, paymentmethod.update.name)

})

test.skip("Delete Existing Payment Term: " + paymentmethod.update.name, async t => {
    await t
        .useRole(login)

    await PaymentMethodPage.navigateToPaymentMethodSection()
    await PaymentMethodPage.deletePaymentMethod(paymentmethod.update.name)
    await assertPaymentMethodDelete(t, "Record deleted successfully!")
})