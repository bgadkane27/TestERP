
import { Selector } from "testcafe";

export const assertCustomerCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


// export const assertCustomerDuplicate = async(t, expectedMessage) => {
//     await t
//     .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
// };

export const assertCustomerDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertCustomerUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='Salesman.Email'], #Salesman.Email_I").value).contains(expectedMessage)
};