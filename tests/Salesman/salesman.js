import { Role, Selector } from "testcafe";
import loginPage from "../../pages/LoginPage";
const config = require('../../utils/login.json')
const sales = require('../../utils/salesman.json')

const login = Role('./', async t => {
    await t.maximizeWindow()
    await loginPage.login(config[0].username, config[0].password);
    
}, { preserveUrl: true });

fixture("Salesman")
    .page("./")
    // .beforeEach(async t => {
    //     await t.maximizeWindow()
    //     await loginPage.login(config[0].username, config[0].password)
    // })

test("CreateSalesman", async (t) => {

    await t
        .useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .click("#MainMenu_DXI0_T")
        .typeText("input[name='Salesman.Name']", sales[0].name)
        //.typeText("#Salesman\.NameL2_I", sales[0].name)
        .click("#Other_RPHT")
        .typeText("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I", sales[0].percentage)
        .typeText("input[name='Salesman.Title'], #Salesman.Title_I", sales[0].title)
        .typeText("input[name='Salesman.Email'], #Salesman.Email_I", sales[0].email)
        .typeText("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I", sales[0].extension)
        .typeText("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I", sales[0].mobile)

        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Assertion
        .expect(Selector('.dx-toast-message').innerText).contains("Salesman created successfully!");
});

test.skip("DulplicateSalesman", async (t) => {

    await t
        .useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .click("#MainMenu_DXI0_T")
        .typeText("input[name='Salesman.Name']", sales[0].name)
        //.typeText("#Salesman\.NameL2_I", sales[0].name)
        .click("#Other_RPHT")
        .typeText("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I", sales[0].percentage)
        .typeText("input[name='Salesman.Title'], #Salesman.Title_I", sales[0].title)
        .typeText("input[name='Salesman.Email'], #Salesman.Email_I", sales[0].email)
        .typeText("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I", sales[0].extension)
        .typeText("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I", sales[0].mobile)

        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Assertion
        .expect(Selector('#ValidationSummary').innerText).contains("Cannot insert duplicate");
});

test("DeleteSalesman", async (t) => {

    await t
        .useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .typeText(Selector('.dx-texteditor-input').nth(2), sales[0].name)
        .wait(2000)
        .click(".list-hyperlink")
        .click("#MainMenu_DXI12_PImg")
        .click("#MainMenu_DXI3_T")
        .wait(2000)
        // .click(Selector(".dx-button-normal, aria-label= 'Ok'"))
        .click(Selector(".dx-button-content").nth(8))        

        // .typeText("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I", sales[0].percentage)
        // .typeText("input[name='Salesman.Title'], #Salesman.Title_I", sales[0].title)
        // .typeText("input[name='Salesman.Email'], #Salesman.Email_I", sales[0].email)
        // .typeText("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I", sales[0].extension)
        // .typeText("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I", sales[0].mobile)

        // //Click on Save
        // .click("#MainMenu_DXI0_T")
        // //Assertion
        // .expect(Selector('#ValidationSummary').innerText).contains("Cannot insert duplicate");
});
