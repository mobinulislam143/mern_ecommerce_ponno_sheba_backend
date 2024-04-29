import { Fragment } from 'react';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import RegistrationPage from './Pages/RegistrationPage';
import VerifyOtpPage from './Pages/VerifyOtpPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import PostAdsPage from './Pages/PostAdsPage';
import AdsDetailPage from './Pages/AdsDetailPage';
import AllAdsPage from './Pages/AllAdsPage';


function App() {
  return(
    <>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/registration' element={<RegistrationPage/>} />
            <Route path='/verifyEmail' element={<VerifyOtpPage/>} />
            <Route path='/login' element={<LoginPage/>} />

            {/* product */}
            <Route path='/post-ads' element={<PostAdsPage/>} />
            <Route path='/ads-details' element={<AdsDetailPage/>} />
            <Route path='/all-ads' element={<AllAdsPage/>} />

          </Routes>
        </BrowserRouter>
      </Fragment>
    </>
  )
}

export default App
