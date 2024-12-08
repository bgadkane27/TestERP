
import { Selector } from "testcafe";

export const assertSalesmanCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


export const assertSalesmanDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};

export const assertSalesmanDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertSalesmanUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='Salesman.Email'], #Salesman.Email_I").value).contains(expectedMessage)
};
