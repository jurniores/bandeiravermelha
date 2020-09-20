import { createStore, combineReducers } from 'redux';


import {Login, Aside, AreaAdm, EditADM} from './Reducers/Reducer'

const combineReuce = combineReducers({
    Login,
    Aside,
    AreaAdm,
    EditADM
})

export default createStore(combineReuce)
