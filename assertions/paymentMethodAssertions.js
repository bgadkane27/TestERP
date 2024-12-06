
import { Selector } from "testcafe";

export const assertPaymentMethodCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


export const assertPaymentMethodDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};

export const assertPaymentMethodDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertPaymentMethodUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='PaymentMethod.Name'], #PaymentMethod.Name_I").value).contains(expectedMessage)
};

