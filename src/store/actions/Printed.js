import API from '../../utils/Api';




export const setPatient = (obj) => ({
    type: 'SET_PATIENT_P',
    obj
});

export const showPrinted = (i) => {
    return async (dispatch, getState) => {
        try {
            const barCode = getState().kits.list[i].barCode;
            const res = await API.get(`/v1/printed?barCode=${barCode}`);
            console.log(res.data);
            dispatch(setPatient(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}