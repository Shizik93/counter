import {combineReducers, createStore} from "redux";
import {reducer} from "../reducer/reducer";
export type AppRootType=ReturnType<typeof RootReducer>
const RootReducer = combineReducers({
    state:reducer
})
export const store=createStore(RootReducer)
//@ts-ignore
window.store=store