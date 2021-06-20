import React from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { baseApi } from './baseApi'
import store from '../Store';
import { getToken } from '../Services/Actions/getAccessTokenAction'

export const Api = (payload) => {

    var { access_token } = getAccessToken()

    if (access_token == null) {
        store.dispatch(getToken())
        var { access_token } = getAccessToken()
    } 

    var { access_token } = getAccessToken()

    const config = {}

    config.method = payload.method
    config.url = payload.url
    config.headers =  { 'Authorization': `Bearer ${access_token}` }


    if (payload.data !== undefined) {
        config.data = payload.data
    }



    return axios(config).then((res) => {
        console.log("Response from API- ", res)
        return res
    }).catch(err => {
        return err.response
    })

}




function getAccessToken() {
    console.log("getStoreDetails called", store.getState().accessTokenReducer);
    return store.getState().accessTokenReducer
}

