import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from './Services/Reducers/rootReducer'


const initialState = {}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;  

const store = createStore(rootReducer,initialState,composeEnhancer(applyMiddleware(thunk)) )

export default store