// import API from '../../utils/Api';
// import { showNotification } from './Notification';


export const setInUse = (list) => ({
    type: 'SET_USE_LIST',
    list
});

export const renderPopup = (bool) => ({
    type: 'RENDER_POPUP',
    bool
});



export const showPopup = (i) => {
    return async (dispatch, getState) => {
        try {
            // const id = 1;
            // const res = await API.get(`/v1/in-use?id=${id}`);
            // dispatch(setInUse(res.data));
            dispatch(renderPopup(true));
        } catch (err) {
            console.log(err);
        }
    }
}

export const showPopupLot = (i) => {
    return async (dispatch, getState) => {
        try {
            // const res = await API.get(`/v1/in-use?id=${id}`);
            // dispatch(setInUse(res.data));
            dispatch(renderPopup(true));
        } catch (err) {
            console.log(err);
        }
    }
}