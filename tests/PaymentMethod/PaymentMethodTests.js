import { fixture, Role, Selector, t } from "testcafe";
import LoginPage from "../../pages/LoginPage";
import PaymentMethodPage from "../../pages/PaymentMethodPage";
const config = require("../../utils/login.json");
const paymentmethod = require("../../utils/paymentmethod.json");
//import { assertPaymentMethodCreated, assertPaymentMethodDuplicate, assertPaymentMethodDelete, assertPaymentMethodUpdate } from "../../assertions/paymentMethodAssertions";


const login = Role('./', async t => {
    await t.maximizeWindow()
    await LoginPage.login(config.logincredentials.username, config.logincredentials.password)

}, { preserveUrl: true });

fixture("PaymentMethod").page("./")

test("Create New PaymentMethod: " + paymentmethod.new.name, async t => {
    await t
    .useRole(login);
    await PaymentMethodPage.navigateToPaymentMethodSection()
    await PaymentMethodPage.createNewPaymentMethod(
        paymentmethod.new.name,
        paymentmethod.new.namearabic,
        paymentmethod.new.description
    );
});