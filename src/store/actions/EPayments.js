import API from '../../utils/Api';
import { showNotification } from './Notification';



export const setPayments = (list) => ({
    type: 'SET_E_PAYMENTS_LIST',
    list
});

export const setNotPrinted = (count) => ({
    type: 'SET_E_PAYMENTS_NOT',
    count
});

export const getPayments = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/e-payments`);
            dispatch(setPayments(res.data));
            let count = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (!res.data[i].isPrinted) count++;
            }
            dispatch(setNotPrinted(count));
            dispatch(showClientData(0));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setClientData = (obj) => ({
    type: 'SET_E_CLIENT_DATA',
    obj
});

export const setPaySelected = (i) => ({
    type: 'SET_E_PAY_SELECTED',
    i
});

export const setKits = (obj) => ({
    type: 'SET_E_KITS_TEST',
    obj
});

export const showClientData = (i) => {
    return async (dispatch, getState) => {
        try {
            const payment = getState().epayments[i];
            dispatch(setPaySelected(i))
            const res = await API.get(`/v1/e-kits?id=${payment.id}`);
            dispatch(setKits(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const printBarcodes = () => {
    return async (dispatch, getState) => {
        try {
            const i = getState().paymentSelected;
            const payment = getState().epayments[i];
            const list = getState().kits.list;
            const res = await API.post(`/v1/e-payments?`, {id: payment.id, list});
            let count = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (!res.data[i].isPrinted) count++;
            }
            dispatch(setPayments(res.data));
            dispatch(setNotPrinted(count));
            dispatch(showNotification(`Printed...`, `notification-show notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}

