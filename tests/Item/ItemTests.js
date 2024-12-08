import { Selector, Role, fixture, t } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import ItemPage from "../../pages/ItemPage";
const config = require("../../utils/login.json");
const item = require("../../utils/item.json");
//import { assertItemCreated, assertItemDuplicate, assertItemDelete, assertItemUpdate } from "../../assertions/itemAssertions";


const login = Role('./', async t => {
    await t.maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password);

}, { preserveUrl: true });


async function handleDropdownofUOM(dropdownSelector, optionText) {
    const dropdownType = Selector(dropdownSelector).nth(9); 
    const dropdownOptions = Selector('.dx-item-content, .dx-list-item-content').withText(optionText);

    await t
        .click(dropdownType)
        .click(dropdownOptions);
}

fixture('Item Tests').page('./')

test("CreateNewItem: " + item.new.name, async (t) => {
    await t
        .useRole(login)
    await ItemPage.navigateToItemSection()

    await handleDropdownofUOM('.dx-button-content', 'EA | Each');

    await ItemPage.createItem(item.new.name, item.new.arabicname, item.new.salesprice, item.new.purchaseprice)

    await t
        .click("#MainMenu_DXI0_T")
});