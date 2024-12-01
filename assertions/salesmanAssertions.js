// assertions/salesmanAssertions.js
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

