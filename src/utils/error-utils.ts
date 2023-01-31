import {appAction,} from '../app/app-reducer'
import {ResponseType} from '../api/todolists-api'
import {Dispatch} from 'redux'

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch/*<SetAppErrorActionType | SetAppStatusActionType>*/) => {
    if (data.messages.length) {
        dispatch(appAction.setAppErrorAC({error: data.messages[0]}))
    } else {
        dispatch(appAction.setAppErrorAC({error: 'Some error occurred'}))
    }
    dispatch(appAction.setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch/*<SetAppErrorActionType | SetAppStatusActionType>*/) => {
    dispatch(appAction.setAppErrorAC({error: error.message ? error.message : 'Some error occurred'}))
    dispatch(appAction.setAppStatusAC({status: 'failed'}))
}
