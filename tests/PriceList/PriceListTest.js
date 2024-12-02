import { fixture, test,t, Role } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import PriceListPage from '../../pages/PriceListPage'
const config = require('../../utils/login.json')
const pricelist = require('../../utils/pricelist.json')
//import { assertPriceListCreated, assertPriceListDuplicate, assertPriceListDelete, assertPriceListUpdate } from '../../assertions/pricelistAssertions'

const login = Role('./', async t => {
    await t
    .maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password);
}, { preserveUrl: true });

fixture("Price List Test").page("./");

test("CreateNewPriceList: " + pricelist.new.name, async t => {

    await t
        .useRole(login);
    await PriceListPage.navigateToPriceListSection();
    await PriceListPage.createNewPriceList(pricelist.new.name, pricelist.new.arabicname, pricelist.new.description);
});