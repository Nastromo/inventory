export const patient = (state = {}, action) => {
    switch (action.type) {
        case `SET_PATIENT_P`:
            return action.obj;

        default: return state;
    }
}