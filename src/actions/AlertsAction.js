import {
    SHOW_ALERT,
    HIDE_ALERT
} from "../types"

export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch(showErrorAlert(alert))
    }
}

const showErrorAlert = (alert) => ({
    type: SHOW_ALERT,
    payload: alert
})

export function hideAlertAction() {
    return (dispatch) => {
        dispatch(hideErrorAlert())
    }
}

const hideErrorAlert = () => ({
    type: HIDE_ALERT,
    payload: null
})


