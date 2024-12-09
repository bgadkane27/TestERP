
import { Selector } from "testcafe";

export const assertItemCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector("input[name='Name']").value).contains(expectedMessage);
};


export const assertItemDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};

export const assertItemDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertItemUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='Salesman.Email'], #Salesman.Email_I").value).contains(expectedMessage)
};
