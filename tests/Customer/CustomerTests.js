import { fixture, test, Role, t, Selector } from 'testcafe';
import LoginPage from '../../pages/LoginPage';
import config from '../../utils/login.json';
import CustomerPage from '../../pages/CustomerPage';
import customer from '../../utils/customer.json';
import { assertCustomerCreated, assertCustomerDuplicate, assertCustomerDelete, assertCustomerUpdate } from '../../assertions/customerAssertions';

const login = Role('./', async t => {
    await t.maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password);

}, { preserveUrl: true });

async function clearAndType(selector, value) {
    await t
        .click(selector)
        .pressKey("ctrl+a delete")
        .typeText(selector, value);
}

fixture("Customer Test").page("./");

test.skip("CreateNewCustomer: " + customer.new.name, async (t) => {    
    await t
        .useRole(login)
    await CustomerPage.navigateToCustomerSection()       
    await CustomerPage.createNewCustomer(customer.new.name, customer.new.arabicname) 
    //await assertCustomerCreated(t, "Customer created successfully")
});

test.skip("UpdateExistingCustomer: " + customer.update.name, async (t) => {
    await t
        .useRole(login)
    await CustomerPage.navigateToCustomerSection()
    await CustomerPage.updateCustomer(customer.new.name)
    

    const name = Selector("input[name='Name']")
    const arabicname = Selector("input[name='NameL2']")
    const email = Selector("input[name='Email']")
    //const mobile = Selector('#dx-4e57e90d-4e5a-67ae-a463-15998d978286').nth(1)
    const telephone = Selector("#TelephoneNumber, input[aria-labelledby='dx-d9024e4b-b356-e829-efd2-c8ba74b53411']")
    const description = Selector("textarea[name='Description']")

    await clearAndType(name, customer.update.name);
    await clearAndType(arabicname, customer.update.arabicname);
    await clearAndType(email, customer.update.email);
    await clearAndType(description, customer.update.description);

    await t
        //.typeText(mobile, customer.update.mobile)
        .typeText(telephone, customer.update.telephone)

        .click(Selector(".dx-button-content .dx-button-text").withText("Save"))
        //Click on view
        //.click("#MainMenu_DXI1_T")
        //Assertion
})

test.skip("DeleteExistingCustomer: " + customer.delete.name, async (t) => {
    await t
        .useRole(login)
    await CustomerPage.navigateToCustomerSection()
    await CustomerPage.deleteCustomer(customer.delete.name)
    await assertCustomerDelete(t, "Customer deleted successfully")
})
