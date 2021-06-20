import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { customerInfo } from '../Services/Actions/customerInfoAction'
import Loading from "./Loading";
import Error from "./Error";
import ErrorBar from "./ErrorBar";

export default function CustomerInfo(props) {

  const dispatch = useDispatch();

  const [msisdn, setMsisdn] = useState("")

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("msisdn", msisdn)
    dispatch(customerInfo(msisdn))
  }

  const {customerInfoData,loading,error} = useSelector(state => state.customerInfoReducer)

  console.log("customerInfo----->", customerInfoData)

  return (
    loading ? <Loading></Loading> : error ? <Error></Error> :

      <section className="container content_area2 py-4">
        {customerInfoData.error_message != null? <ErrorBar message={customerInfoData.error_message}></ErrorBar>:""}

        <div className="mb-3 row table_content">
          <div className="col-md-6">
            <div className="mb-5">
              <div className="table_header py-3 px-3 uppercase">
                <div className="table_wrap row">
                  <p className="bold_avenir px-3">Customer Information</p>
                </div>
              </div>
              <div className="table_body mb-3 px-3">
                <div className="row table_row">
                  <form className="col-md-12" onSubmit={formSubmitHandler}>
                    <div className="row">
                      <div className="selectParent col-lg-9">
                        <input type="number" placeholder="Customer MSISDN" value={msisdn} onChange={e => setMsisdn(e.target.value)} />
                      </div>
                      <div className="col-lg-3">
                        <button id="submit-button" className="btn btn_primary" type="submit">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Name</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_name  || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Id</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_id || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Type</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_type || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Identity</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_identity || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Verification</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_verification || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Customer Status</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.customer_status || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Created Date</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.created_date || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Address Type</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.address_type || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Address 1</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.address_1 || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Address 2</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.address_2 || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">City </p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.city || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">State</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.state || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Postal Code</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.postal_code || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Country</p>
                  </div>
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="px-3">{customerInfoData.country || "N/A" }</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="table_header py-3 px-3 uppercase">
                <div className="table_wrap row">
                  <p className="bold_avenir px-3">Contacts</p>
                </div>
              </div>
              <div className="table_body mb-3 px-3">
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Contact ID</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">42420</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Contact Type Description</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">Unknown</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Address 1</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">NULL</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">First Name</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">SAM</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Middle Name</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">NULL</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Last Name</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">Doe</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Gender</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">Female</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Email</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">eugene.mercado@youtap.com</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Email 2</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">hudson.sattler@youtap.com</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">DOB</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">2000-01-10</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Nationality</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">Australian</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Status</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">ACT</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          <div className="col-md-6">
            <div className="mb-5">
              <div className="table_header py-3 px-3 uppercase">
                <div className="table_wrap row">
                  <p className="bold_avenir px-3">Account Info</p>
                </div>
              </div>
              <div className="table_body mb-3 px-3">
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Account Id</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.account_id || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Account Type </p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.account_type || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Account Status</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.account_status || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Fraud Lock</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.fraud_loack || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Is Suspended</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.is_suspended || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Device Type </p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.device_type || "N/A" }</p>
                  </div>
                </div>
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Device Number</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.device_number || "N/A" }</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="mb-5">
              <div className="table_header py-3 px-3 uppercase">
                <div className="table_wrap row">
                  <p className="bold_avenir px-3">Balances</p>
                </div>
              </div>
              <div className="table_body mb-3 px-3">
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Wallet Type </p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.wallet_type || "N/A" }</p>
                  </div>
                </div>
               
               
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Balance  Amount</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.balance || "N/A" }</p>
                  </div>
                </div>
               
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Min  Amount</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.min_balance || "N/A" }</p>
                  </div>
                </div>
                
                <div className="row table_row">
                  <div className="col-6 col-md-5 col-lg-5">
                    <p className="bold_avenir">Max  Amount</p>
                  </div>
                  <div className="col-6 col-md-7 col-lg-7">
                    <p className="px-3">{customerInfoData.max_balance || "N/A" }</p>
                  </div>
                </div>
               
              </div>
            </div>
          
            
            </div>
        </div>
      </section>

  )
}