export const usePopup = (state = false, action) => {
    switch (action.type) {
        case `RENDER_POPUP`:
            return action.bool;

        default: return state;
    }
}