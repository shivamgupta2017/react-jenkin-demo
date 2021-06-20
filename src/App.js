import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom'


import CustomerInfo from './Components/CustomerInfo';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Citizen | MiBS</title>

            <link rel="shortcut icon" href="images/logo.ico" />


            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/bootstrap4-toggle.min.css" />


            <link rel="stylesheet" href="fonts/fontawesome/css/all.css" />


            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/responsive.css" />
          </head>
          <body>
            <header>
              <section className="container">
                <div className="row">
                  <div className="col-md-10 col-lg-10 col-sm-10 menu-lg d-lg-block d-none">
                    <div className="row">
                      <div className="col-md-2 col-lg-2 col-sm-2 py-3">
                        <a href="index.html" className="logo">
                          <h1>Logo</h1>
                        </a>
                      </div>

                      <div className="col-md-10 col-lg-10 col-sm-10">
                        <ul className="menu-wrap text-brown">
                          <li className="list-group-item">
                            <Link to="/" className="active">
                              Dashboard
                                        </Link>
                          </li>
                          <li className="list-group-item">
                            <Link to="/customerinfo">
                              Customer Info
                                        </Link>
                          </li>
                          <li className="list-group-item">
                            <a href="articles.html">
                              Call Logs
                                        </a>
                          </li>
                          <li className="list-group-item">
                            <a href="help_center.html">
                              SMS Logs
                                        </a>
                          </li>
                          <li className="list-group-item">
                            <a href="feedback.html">
                              Analytics
                                        </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2 col-lg-2 col-sm-2 py-2 d-lg-block d-none">
                    <div className="row">
                      <div className="col-5">
                        <a className="btn notification" href="notification.html">
                          <span className="noti_amount">2</span>
                        </a>
                      </div>
                      <div className="col-7">
                        <img src="images/sample_profile.jpg" className="profile_mini" />
                                Emily
                            </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-12 col-sm-12 d-lg-none my-2">
                    <div className="row">
                      <div className="col-7">
                        <div className="logo">
                          <a href="index.html">
                            <h1>Logo</h1>
                          </a>
                        </div>
                      </div>

                      <div className="col-5 pr-5">
                        <div className="row">
                          <div className="col-4">
                            <a className="btn notification" href="notification.html">
                              <span className="noti_amount">2</span>
                            </a>
                          </div>
                          <div className="col-8">
                            <img src="images/sample_profile.jpg" className="profile_mini" />
                                        Emily
                                    </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix d-lg-none flex-wrap d-md-flex">
                    <div className="menu-btn">
                      <a href="#" className="off-canvas-toggle bar-btn ml-auto">
                        <div className="bar-one"></div>
                        <div className="bar-two"></div>
                      </a>
                    </div>

                    <div className="off-canvas-overlay"></div>

                    <div className="off-canvas p-3">
                      <div className="container h-100">
                        <div className="row h-100">
                          <div className="col-12 p-4">
                            <a href="#" className="off-canvas-toggle canvas-btn ml-auto text-white"><i className="fas fa-times"></i></a>
                            <ul className="menu-list justify-content-md-center list-group list-group-flush">
                              <li className="list-group-item">
                                <Link to="/" className="active">
                                  Dashboard
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <a href="learning.html">
                                  Contact
                                                </a>
                              </li>
                              <li className="list-group-item">
                                <a href="articles.html">
                                  Call Logs
                                                </a>
                              </li>
                              <li className="list-group-item">
                                <a href="help_center.html">
                                  SMS Logs
                                                </a>
                              </li>
                              <li className="list-group-item">
                                <a href="feedback.html">
                                  Analytics
                                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </header>
            <Route path="/" component={Home} exact />
            <Route path="/customerinfo" component={CustomerInfo} exact />

            <footer className="mt-5">
              <section className="container pt-3 ">
                <div className="row">
                  <div className="col-lg-7 mb-3 my-2">
                    <p>© copyright 2021-2022. All Right Reserved.</p>
                  </div>
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-lg-7 mb-3">
                        <p>
                          <i className="fas fa-phone"></i>
                          <a href="tel:+ 959-77777777">+959-77777777 </a>, <a href="tel:+ 959-77777777">+959-77777777 </a>
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <p>
                          <i className="fas fa-envelope"></i>
                          <a href="mailto:info@ymaxcollege.com">info@sample.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </footer>

            <section className="row">
              <div className="float_area text-right">
                <a href="#" className="mb-3">
                  <img src="images/icons/icon_help.png" />
                </a>
                <a href="#">
                  <img src="images/icons/icon_livechat.png" className="img-responsive" />
                </a>
              </div>
            </section>

            <script type="text/javascript" src="js/jquery.min.js"></script>
            <script type="text/javascript" src="js/popper.min.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script src="js/bootstrap4-toggle.min.js"></script>
            <script type="text/javascript" src="js/script.js"></script>
          </body>
        </html>

      </div>
    </BrowserRouter>
  );
}

export default App;
