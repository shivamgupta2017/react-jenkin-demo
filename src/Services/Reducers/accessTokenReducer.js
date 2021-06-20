import { GET_ACCESS_TOKEN } from '../constants'
export const   accessTokenReducer = (state={access_token:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJ5dF90cF9vcHMiXSwiZXhwIjoxNjIzMzgwNDcwLCJqdGkiOiJjZTcyNzRmMi03ODZkLTRkOTgtYTYwNS1lNjQ3OWIyZTRiNzMiLCJjbGllbnRfaWQiOiJoMmhfdGVzdCJ9.Zjl67h2l4Drl98ncApKwMFv2bGD5anxV4Eck0OcqtEuUmMgwJju9DHUsujvt2TtJwYs4LVTx4EBf5V1N3ZP83g7t_AvrC3dLX1tWMwbtgebxRYT4dGX1FMvTpw-RhsXot_-9ygRNCWGaqkFj6X_OSIJbm5912O0hbfTv0BXbV365dxlgNlqZ5lhgCFRXdo4bW-Fo5HE7Va1sGcbYKYupBEwE5IxVK2Ev0ZimtuSQem-sQTvunFe3QCP1fteexucC58vhiuhsGcDew36klb2HezRqUw6mvU-puZJUoAxphL1gcy_VYqIV0mJo3Bjh_VH0272acWcHO_jfH7NrV0HMoA"},action) =>

{
    switch(action.type){

        case GET_ACCESS_TOKEN:
            return ({access_token:action.payload})

            
        default:
            return state
    }
}