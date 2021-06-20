import {combineReducers} from 'redux'
import {customerInfoReducer} from '../Reducers/customerInfoReducer'
import {accessTokenReducer} from '../Reducers/accessTokenReducer'


const rootReducer  = combineReducers({
    customerInfoReducer,accessTokenReducer
})
export default rootReducer