import { CUSTOMER_INFO_FETCH,CUSTOMER_INFO_SUCCESS,CUSTOMER_INFO_FAILED} from '../constants'

export const  customerInfoReducer = (state={customerInfoData:[]}, action) => {

    switch (action.type)
    {
        case CUSTOMER_INFO_FETCH:
            return ({loading : true })

        case CUSTOMER_INFO_SUCCESS:
            return ({loading : false, customerInfoData: action.payload})

        case CUSTOMER_INFO_FAILED:
            return ({loading : false,error : action.payload})

        default:
            return state
    }
     

}