import { fixture, Role, Selector, t } from "testcafe";
import loginPage from "../../pages/LoginPage";
import SalesmanPage from '../../pages/SalesmanPage'
const config = require('../../utils/login.json')
const salesman = require('../../utils/salesman.json')
import { assertSalesmanCreated, assertSalesmanDuplicate, assertSalesmanDelete, assertSalesmanUpdate } from '../../assertions/salesmanAssertions'


const login = Role('./', async t => {
    await t.maximizeWindow()
    await loginPage.login(config.logincredentials.username, config.logincredentials.password);

}, { preserveUrl: true });

async function clearAndType(selector, value) {
    await t
        .click(selector)
        .pressKey("ctrl+a delete")
        .typeText(selector, value);
}

fixture('Salesman').page('./')

test.skip('CreateNewSalesman: ' + salesman.new.name, async t => {
    await t
        .useRole(login);
    await
        SalesmanPage.navigateToSalesmanSection();
    await
        SalesmanPage.createNewSalesman(salesman.new.name,
            salesman.new.percentage,
            salesman.new.title,
            salesman.new.email,
            salesman.new.extension,
            salesman.new.mobile);
    await assertSalesmanCreated(t, "Salesman created successfully!");
});

test.skip("CreateDulplicateSalesman-Not Allowed: " + salesman.new.name, async (t) => {

    await t
        .useRole(login)
    await
        SalesmanPage.navigateToSalesmanSection();
    await
        SalesmanPage.duplicateSalesman(salesman.new.name);
    await assertSalesmanDuplicate(t, "Cannot insert duplicate")

});

test.skip("UpdateExistingSalesman: " + salesman.update.name, async t => {
    await t
        .useRole(login)
    await
        SalesmanPage.navigateToSalesmanSection()
    await
        SalesmanPage.updateSalesman(salesman.update.name)

    const salesCommissionInPercent = Selector("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I")
    const title = Selector("input[name='Salesman.Title'], #Salesman.Title_I")
    const email = Selector("input[name='Salesman.Email'], #Salesman.Email_I")
    const extension = Selector("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I")
    const mobile = Selector("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I")


    await clearAndType(salesCommissionInPercent, salesman.update.percentage);
    await clearAndType(title, salesman.update.title);
    await clearAndType(email, salesman.update.email);
    await clearAndType(extension, salesman.update.extension);
    await clearAndType(mobile, salesman.update.mobile);

    await t
        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Click on view
        .click("#MainMenu_DXI1_T")
        //Assertion
        await assertSalesmanUpdate(t, salesman.update.email);
});

test.skip("DeleteExistingSalesman: " + salesman.delete.name, async (t) => {

    await t
        .useRole(login)
    await
        SalesmanPage.navigateToSalesmanSection()
    await
        SalesmanPage.deleteSalesman(salesman.delete.name)
    await assertSalesmanDelete(t, "Record deleted successfully!")

});


