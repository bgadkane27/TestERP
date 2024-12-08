
import { Selector } from "testcafe";

export const assertCustomerCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


<<<<<<< HEAD
export const assertCustomerDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};
=======
// export const assertCustomerDuplicate = async(t, expectedMessage) => {
//     await t
//     .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
// };
>>>>>>> f4f2b0814ea9addf51b620f92ea8d2862d891b7e

export const assertCustomerDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};


export const assertCustomerUpdate = async(t, expectedMessage) => {
    await t
<<<<<<< HEAD
    .expect(Selector("input[name='Name']").value).contains(expectedMessage)
};
=======
    .expect(Selector("input[name='Salesman.Email'], #Salesman.Email_I").value).contains(expectedMessage)
};
>>>>>>> f4f2b0814ea9addf51b620f92ea8d2862d891b7e
