// assertions/salesmanAssertions.js
import { Selector } from "testcafe";

export const assertPaymentTermCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


export const assertPaymentTermDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};

export const assertPaymentTermDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertPaymentTermUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='PaymentTerm.Name'], #PaymentTerm.Name_I").value).contains(expectedMessage)
};

