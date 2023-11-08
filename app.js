// import action types
import { plusAction , minuseAction , refreshAction } from "./Redux/actionTypes.js"

// import action type creators 
import { plusActionCretor , minuseActionCretor , refreshActionCretor } from "./Redux/actionCreator.js"

// select elements
let number = document.querySelector(".number")
let plusBtn = document.querySelector(".plus-btn")
let refreshBtn = document.querySelector(".refresh-btn")
let minusBtn = document.querySelector(".minus-btn")


// counter reduser 
const counterReduser = (state = 0  ,action)=> {
    switch (action.type) {
        case (plusAction):{
            return state + 1
        }
        case (minuseAction) : {
            return state -1
        }
        case (refreshAction) : {
            return state - state
        }
        default:{
            return state
        }
    }
}

// counter store
const store = Redux.createStore(counterReduser)


// handel events
plusBtn.addEventListener("click" , ()=>{
    store.dispatch(plusActionCretor())
    number.innerHTML = store.getState()
})

minusBtn.addEventListener("click" , ()=>{
    store.dispatch(minuseActionCretor())
    number.innerHTML = store.getState()

})
refreshBtn.addEventListener("click" , ()=>{
    store.dispatch(refreshActionCretor())
    number.innerHTML = store.getState()

})

