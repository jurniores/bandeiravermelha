import { ADICIONA_POST, AREA_ADM_POST } from './types'

const initialState = {
    MaisLidas:'',
    covidData:''
}

export const Aside  = function (state=initialState, action) {
    

    switch(action.type) {
        case ADICIONA_POST: 
        return {
            ...state,
            ...action.data
        }
        
        default: return state
    }
    
}
const initialState2 = {
    valida: true
}
export const Login = function (state=initialState2, action){
    if(action.type==="LOGIN_SUCCESS") return {...state, valida: action.data}
    return state
}
const initialState3 ={
    areaAdmPost: null
}

export const AreaAdm = function(state=initialState3, action){
    switch(action.type){
        case AREA_ADM_POST: return {areaAdmPost:action.data}
        default: return state
    }
    
}
const initialState4 ={
    dadosDaPostagem:false
}
export const EditADM = function(state=initialState4, action){
    switch(action.type){
        case 'EDIT_ADM_POST': return {dadosDaPostagem:action.data}
        default: return state
    }
    
}


