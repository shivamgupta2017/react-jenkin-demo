import { CUSTOMER_INFO_FETCH, CUSTOMER_INFO_SUCCESS, CUSTOMER_INFO_FAILED } from '../constants'
import { Api } from '../../config/_axios'

export const customerInfo = (msisdn) => async (dispatch) => {

    console.log("customerInfo Action called")
    dispatch({
        type: CUSTOMER_INFO_FETCH
    })

    // mobileNumber=959750200072


    try {
        const url = `external-partners/v1/customer?mobileNumber=${msisdn}`
        const {data,status} = await Api({ method: "get", url: url })

        console.log("status---",status)
        let customerData = "";
        if(status >= 400)
        {
            console.log("if---")
            customerData = {error_message: data.title} 
        }
        else
        {
            console.log("else---",customerData)
            // const c_identity = "";
            // data.identifiers[0].value != null ? c_identity = data.identifiers[0].value : c_identity = "N/a"
            customerData = 
            {
                customer_name:data.customerEntityName,
                customer_id :data.customerID,
                customer_type : data.customerTypeDescription ,
                customer_identity : data.identifiers[0].identifierTypeDescription+":-"+data.identifiers[0].value ,
                customer_identity_value : data.identifiers[0].value ,
                customer_verification : data.identifiers[0].verified ,
                customer_status : data.status ,
                created_date : data.creationDate ,
                address_type : data.addresses[0].addressTypeDescription ,
                address_1 : data.addresses[0].address1 +"  "+data.addresses[0].address2 +"  "+data.addresses[0].address3 ,
                address_2 : data.addresses[0].address4 +"  "+data.addresses[0].address5 +"  "+data.addresses[0].address6 ,
                city : data.addresses[0].city ,
                state : data.addresses[0].state ,
                postal_code : data.addresses[0].postalCode ,
                country : data.addresses[0].country ,
    
                account_id : data.accounts[0].accountID ,
                account_type : data.accounts[0].accountTypeDescription ,
                account_status : data.accounts[0].status ,
                fraud_lock : data.accounts[0].fraudLocked ,
                is_suspended : data.accounts[0].suspended,
                device_type : data.accounts[0].accesses[0].deviceTypeDescription+" -> "+ data.accounts[0].accesses[0].deviceNumber,
                //device_number : data.accounts[0].accesses[1].deviceTypeDescription+" -> "+ data.accounts[0].accesses[1].deviceNumber,
               
                wallet_type : data.accounts[0].balances[0].balanceTypeDescription,
                balance : data.accounts[0].balances[0].balanceDisplayAmount + " "+data.accounts[0].balances[0].balanceUnit,
                min_balance : data.accounts[0].balances[0].balanceHardMinDisplayAmount + " "+ data.accounts[0].balances[0].balanceUnit,
                max_balance : data.accounts[0].balances[0].balanceHardMaxDisplayAmount + " "+ data.accounts[0].balances[0].balanceUnit,
    
    
            }
            console.log("else---2",customerData)
        }

       
        console.log("customerData---",customerData)
        dispatch({
            type: CUSTOMER_INFO_SUCCESS,
            payload: customerData

        })

    } catch (err) {

        console.log("catch called",err)

        dispatch({
            type: CUSTOMER_INFO_FAILED,
            payload: err

        })

    }


}