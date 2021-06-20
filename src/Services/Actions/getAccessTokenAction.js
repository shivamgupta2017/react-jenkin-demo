import { GET_ACCESS_TOKEN } from '../constants'
import { api } from '../../config/_axios'
import Axios from 'axios'

export const getToken = () => async (dispatch) => {
 
  const session_url = "/uaa/oauth/token?grant_type=client_credentials&scope=yt_tp_ops&client_id=h2h_test"
  const uname = 'h2h_test';
  const pass = 'da2c646e-7c5f-4eb9-aeb6-887740e96100';


  const { data } = await Axios.post(session_url, {}, {
    auth: {
      username: uname,
      password: pass
    }
  })

  console.log("Auth Response" , data.access_token)

  dispatch({
    type:GET_ACCESS_TOKEN,
    payload:data.access_token
  })
  
  // .then(function (response) {
  //   console.log('Authenticated', response);
  // }).catch(function (error) {
  //   console.log('Error on Authentication', error.response);
  // });


}