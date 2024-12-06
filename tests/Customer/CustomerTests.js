import { fixture, test, Role, t } from 'testcafe';
import LoginPage from '../../pages/LoginPage';
import config from '../../utils/login.json';
import CustomerPage from '../../pages/CustomerPage';
import customer from '../../utils/customer.json';
//import { assertCustomerCreated, assertCustomerDuplicate, assertCustomerDelete, assertCustomerUpdate } from '../../assertions/customerAssertions';

const login = Role('./', async t => {
    await t.maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password);

}, { preserveUrl: true });

fixture("Customer Test").page("./");

test.skip("CreateNewCustomer: " + customer.new.name, async (t) => {    
    await t
        .useRole(login)
    await CustomerPage.navigateToCustomerSection()       
    await CustomerPage.createNewCustomer(customer.new.name, customer.new.arabicname) 
});

test("DeleteExistingCustomer: " + customer.delete.name, async (t) => {
    await t
        .useRole(login)
    await CustomerPage.navigateToCustomerSection()
    await CustomerPage.deleteCustomer(customer.delete.name)
})