import { fixture, test, t, Role, Selector } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import PriceListPage from "../../pages/PriceListPage";
const config = require("../../utils/login.json");
const pricelist = require("../../utils/pricelist.json");
import {
  assertPriceListCreated,
  assertPriceListDuplicate,
  assertPriceListDelete,
  assertPriceListUpdate,
} from "../../assertions/pricelistAssertions";

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

async function clearAndType(selector, value) {
    await t
        .click(selector)
        .pressKey("ctrl+a delete")
        .typeText(selector, value);
}

fixture("Price List Test").page("./");

test.skip("CreateNewPriceList: " + pricelist.new.name, async (t) => {
  await t.useRole(login);
  await PriceListPage.navigateToPriceListSection();
  await PriceListPage.createNewPriceList(
    pricelist.new.name,
    pricelist.new.arabicname,
    pricelist.new.description
  );
  await assertPriceListCreated(t, "Price List created successfully!");
});

test.skip("DuplicatePriceList-Not Allowed: " + pricelist.new.name, async (t) => {
  await t.useRole(login);
  await PriceListPage.navigateToPriceListSection();
  await PriceListPage.duplicatePriceList(pricelist.new.name);
  await assertPriceListDuplicate(t, "Cannot insert duplicate");
});

test.ski("UpdateExistingPriceList: " + pricelist.update.name, async (t) => {
  await t.useRole(login);
  await PriceListPage.navigateToPriceListSection();
  await PriceListPage.updatePriceList(pricelist.new.name);

  const name = Selector("input[name='PriceList.Name'], #PriceList.Name_I")
  const arabicname = Selector("input[name='PriceList.NameL2'], #PriceList.NameL2_I")
  const pricelistdescription = Selector("textarea[name='PriceList.Description'], #PriceList.Description_I")
  

  await clearAndType(name, pricelist.update.name);
  await clearAndType(arabicname, pricelist.update.arabicname);
  await clearAndType(pricelistdescription, pricelist.update.description);
  await t
    //Click on Save
    .click("#MainMenu_DXI0_T")
    //Click on view
    .click("#MainMenu_DXI1_T");
  //Assertion
  await assertPriceListUpdate(t, pricelist.update.name);
});

test.skip("DeleteExistingPriceList: " + pricelist.delete.name, async (t) => {
  await t.useRole(login);
  await PriceListPage.navigateToPriceListSection();
  await PriceListPage.deletePriceList(pricelist.delete.name);
  await assertPriceListDelete(t, "Record deleted successfully!");
});
