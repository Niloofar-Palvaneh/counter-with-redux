import { plusAction , minuseAction , refreshAction } from "./../Redux/actionTypes.js"


export const plusActionCretor = ()=>{
    return { 
        type : plusAction
    }
}
export const minuseActionCretor = ()=>{
    return { 
        type : minuseAction
    }
}
export const refreshActionCretor = ()=>{
    return { 
        type : refreshAction
    }
}