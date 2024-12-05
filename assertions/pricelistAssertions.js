import { Selector } from "testcafe";

export const assertPriceListCreated = async (t, expectedMessage) => {
    await t
        .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage);
};


export const assertPriceListDuplicate = async(t, expectedMessage) => {
    await t
    .expect(Selector('#ValidationSummary').innerText).contains(expectedMessage)
};

export const assertPriceListDelete = async(t, expectedMessage) => {
    await t
    .expect(Selector('.dx-toast-message').innerText).contains(expectedMessage)
};

export const assertPriceListUpdate = async(t, expectedMessage) => {
    await t
    .expect(Selector("input[name='PriceList.Name'], #PriceList.Name_I").value).contains(expectedMessage)
};
