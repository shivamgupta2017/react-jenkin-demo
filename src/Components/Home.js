import React from 'react'
import { useDispatch } from 'react-redux'
import { getToken } from '../Services/Actions/getAccessTokenAction'

export default function Home(){

    const dispatch = useDispatch()

    dispatch(getToken())

    return (
        <div style={{backgroundColor:"#ffw" , minHeight:690}}> Hi Home </div>
    )
}