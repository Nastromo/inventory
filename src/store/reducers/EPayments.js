export const epayments = (state = [], action) => {
    switch (action.type) {
        case `SET_E_PAYMENTS_LIST`:
            return action.list;

        default: return state;
    }
}

export const eclient = (state = {}, action) => {
    switch (action.type) {
        case `SET_E_CLIENT_DATA`:
            return action.obj;

        default: return state;
    }
}

export const paymentSelected = (state = 0, action) => {
    switch (action.type) {
        case `SET_E_PAY_SELECTED`:
            return action.i;

        default: return state;
    }
}

export const kits = (state = {}, action) => {
    switch (action.type) {
        case `SET_E_KITS_TEST`:
            return action.obj;

        default: return state;
    }
}

export const notPrinted = (state = 0, action) => {
    switch (action.type) {
        case `SET_E_PAYMENTS_NOT`:
            return action.count;

        default: return state;
    }
}