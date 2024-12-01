import { Role, Selector } from "testcafe";
import loginPage from "../../pages/LoginPage";
const config = require('../../utils/login.json')
const sales = require('../../utils/salesman.json')

// const login = Role('./', async t => {
//     await t.maximizeWindow()
//     await loginPage.login(config[0].username, config[0].password);

// }, { preserveUrl: true });

fixture("Salesman")
    .page("./")
    .beforeEach(async t => {
        await t.maximizeWindow()
        await loginPage.login(config[0].username, config[0].password)
    })

test("CreateNewSalesman : " + sales[0].name, async (t) => {

    await t
        //.useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .click("#MainMenu_DXI0_T")
        .typeText("input[name='Salesman.Name']", sales[0].name)
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

test("CreateDulplicateSalesman-Not Allowed : " + sales[0].name, async (t) => {

    await t
        //.useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .click("#MainMenu_DXI0_T")
        .wait(2000)
        .typeText("input[name='Salesman.Name']", sales[0].name)
        //Click on Save
        .click("#MainMenu_DXI0_T")
        //Assertion
        .expect(Selector('#ValidationSummary').innerText).contains("Cannot insert duplicate")
    // await t
    //     .takeScreenshot({ path: `${Date.now()}.png` })
});

test("UpdateExistingSalesman: " + sales[0].name, async (t) => {

    await t
        //.useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .typeText(Selector('.dx-texteditor-input').nth(2), sales[0].name)
        .wait(2000)
        .doubleClick(".list-hyperlink")
        .click("#Other_RPHT")

    const salesCommissionInPercent = Selector("input[name='Salesman.SalesCommissionInPercent'], #Salesman.SalesCommissionInPercent_I")
    const title = Selector("input[name='Salesman.Title'], #Salesman.Title_I")
    const email = Selector("input[name='Salesman.Email'], #Salesman.Email_I")
    const extension = Selector("input[name='Salesman.ExtensionNumber'], #Salesman.ExtensionNumber_I")
    const mobile = Selector("input[name='Salesman.MobileNumber'], #Salesman.MobileNumber_I")
    await t

        .click(salesCommissionInPercent)
        .pressKey("ctrl+a delete")
        .typeText(salesCommissionInPercent, sales[1].percentage)

        .click(title)
        .pressKey("ctrl+a delete")
        .typeText(title, sales[1].title)

        .click(email)
        .pressKey("ctrl+a delete")
        .typeText(email, sales[1].email)

        .click(extension)
        .pressKey("ctrl+a delete")
        .typeText(extension, sales[1].extension)

        .click(mobile)
        .pressKey("ctrl+a delete")
        .typeText(mobile, sales[1].mobile)

        //Click on Save
        .click("#MainMenu_DXI0_T")
        .click("#MainMenu_DXI1_T")
        //Assertion
        .expect(Selector("input[name='Salesman.Email'], #Salesman.Email_I").value).contains(sales[1].email);
});

test("DeleteExistingSalesman : " + sales[0].name, async (t) => {

    await t
        //.useRole(login)
        .click("#leftNavigation_I2i3_T")
        .click("#NavViewCommon_I0i2_T")
        .typeText(Selector('.dx-texteditor-input').nth(2), sales[0].name)
        .wait(2000)
        .click(".list-hyperlink")
        .click("#MainMenu_DXI12_PImg")
        .click("#MainMenu_DXI3_T")
        .wait(2000)

        .click(Selector(".dx-button-content").nth(8))
        //Assertion
        .expect(Selector('.dx-toast-message').innerText).contains("Record deleted successfully!");
});

