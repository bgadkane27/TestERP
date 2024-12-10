import { Selector, Role, fixture, t } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import ItemPage from "../../pages/ItemPage";
const config = require("../../utils/login.json");
const item = require("../../utils/item.json");
import {
  assertItemCreated,
  assertItemDuplicate,
  assertItemDelete,
  assertItemUpdate,
} from "../../assertions/itemAssertions";

const login = Role(
  "./",
  async (t) => {
    await t.maximizeWindow();
    await LoginPage.login(
      config.logincredentials.username,
      config.logincredentials.password
    );
  },
  { preserveUrl: true }
);

async function handleDropdownofUOM(dropdownSelector, optionText) {
  const dropdownType = Selector(dropdownSelector).nth(9);
  const dropdownOptions = Selector(
    ".dx-item-content, .dx-list-item-content"
  ).withText(optionText);

  await t.click(dropdownType).click(dropdownOptions);
}

async function handleDropdownofItemType(dropdownSelector, optionText) {
  const dropdownType = Selector(dropdownSelector).nth(10);
  const dropdownOptions = Selector(
    ".dx-item-content, .dx-list-item-content"
  ).withText(optionText);

  await t.click(dropdownType).click(dropdownOptions);
}

async function handleDropdownofTrackingMode(dropdownSelector, optionText) {
  const dropdownType = Selector(dropdownSelector).nth(11);
  const dropdownOptions = Selector(
    ".dx-item-content, .dx-list-item-content"
  ).withText(optionText);

  await t.click(dropdownType).click(dropdownOptions);
}

async function handleDropdownofCostingMethod(dropdownSelector, optionText) {
  const dropdownType = Selector(dropdownSelector).nth(12);
  const dropdownOptions = Selector(
    ".dx-item-content, .dx-list-item-content"
  ).withText(optionText);

  await t.click(dropdownType).click(dropdownOptions);
}

fixture("Item Tests").page("./");

test(
  "CreateNewItem: " +
    item.new.name1 +
    " UOM :" +
    item.new.UOM +
    " Item Type: " +
    item.new.Type +
    " Tracking Mode: " +
    item.new.TrackingMode +
    " Costing Method: " +
    item.new.CostingMethod1,
  async (t) => {
    await t.useRole(login);
    await ItemPage.navigateToItemSection();
    await ItemPage.createItem(item.new.name1, item.new.arabicname);
    await handleDropdownofUOM("div.dx-button-content", item.new.UOM); // Provide UOM
    await handleDropdownofItemType(".dx-button-content", item.new.Type); // Provide Item Type
    await handleDropdownofTrackingMode(
      "div.dx-button-content",
      item.new.TrackingMode
    ); // Provide Tracking Mode
    await handleDropdownofCostingMethod(
      "div.dx-button-content",
      item.new.CostingMethod1
    ); // Provide Costing Method
    await t.click("#MainMenu_DXI0_T");
    await assertItemCreated(t, item.new.name1);
  }
);

test(
    "CreateNewItem: " +
      item.new.name2 +
      " UOM :" +
      item.new.UOM +
      " Item Type: " +
      item.new.Type +
      " Tracking Mode: " +
      item.new.TrackingMode +
      " Costing Method: " +
      item.new.CostingMethod2,
    async (t) => {
      await t.useRole(login);
      await ItemPage.navigateToItemSection();
      await ItemPage.createItem(item.new.name2, item.new.arabicname);
      await handleDropdownofUOM("div.dx-button-content", item.new.UOM); // Provide UOM
      await handleDropdownofItemType(".dx-button-content", item.new.Type); // Provide Item Type
      await handleDropdownofTrackingMode(
        "div.dx-button-content",
        item.new.TrackingMode
      ); // Provide Tracking Mode
      await handleDropdownofCostingMethod(
        "div.dx-button-content",
        item.new.CostingMethod2
      ); // Provide Costing Method
      await t.click("#MainMenu_DXI0_T");
      await assertItemCreated(t, item.new.name2);
    }
  );

test(
    "CreateNewItem: " +
      item.new.name3 +
      " UOM :" +
      item.new.UOM +
      " Item Type: " +
      item.new.Type +
      " Tracking Mode: " +
      item.new.TrackingMode +
      " Costing Method: " +
      item.new.CostingMethod3,
    async (t) => {
      await t.useRole(login);
      await ItemPage.navigateToItemSection();
      await ItemPage.createItem(item.new.name3, item.new.arabicname);
      await handleDropdownofUOM("div.dx-button-content", item.new.UOM); // Provide UOM
      await handleDropdownofItemType(".dx-button-content", item.new.Type); // Provide Item Type
      await handleDropdownofTrackingMode(
        "div.dx-button-content",
        item.new.TrackingMode
      ); // Provide Tracking Mode
      await handleDropdownofCostingMethod(
        "div.dx-button-content",
        item.new.CostingMethod3
      ); // Provide Costing Method
      await t.click("#MainMenu_DXI0_T");
      await assertItemCreated(t, item.new.name3);
    }
  );  

test.skip("DeleteExistingItem: " + item.delete.name, async (t) => {
  await t.useRole(login);
  await t.wait(2000).click("#leftNavigation_I0i2_");
  await ItemPage.deleteItem(item.delete.name);
  await assertItemDelete(t, "Item deleted successfully");
});
