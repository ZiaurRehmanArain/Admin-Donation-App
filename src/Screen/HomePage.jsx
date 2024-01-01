import React, { useEffect, useState } from 'react'
import { FaCoffee } from 'react-icons/fa';
import { Route, Routes } from "react-router";
import Login from './Login';
import PostScreen from './PostScreen';
import AllRequest from './AllRequest';
import ApprovalRequest from './ApprovalRequest';
import RejectRequest from './RejectRequest';
import Donation from './Donation';
import TermAndCondition from './TermAndCondition';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import { useNavigate } from "react-router";
import Navigators from '../config/Navigation/Navigtion';
import HomeScreenPost from './HomePagePost';



function HomePage() {
  let navigates = useNavigate()


  let [islogin, setIslogon] = useState(false);
  useEffect(() => {
    // localStorage.setItem('islogin',false)

    setIslogon(localStorage.getItem('islogin'))
    // alert(islogin)
  }, [islogin])
  return (

    <>
      {

        islogin !== null || islogin ?


          <div className=''>



            <div className="bg-blue-200 font-bold text-2xl text-black p-4">Admin panel</div>
            <div style={{ display: 'flex' }}>
              <div className="bg-gray-100  h-screen  text-black p-4" style={{ width: '20%' }}>
                <button onClick={() => navigates('/')} className="bg-gray-50  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                
                  Home
                </button>
                <button onClick={() => navigates('/post')} className="bg-gray-50  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                
                Post
              </button>

                <button onClick={() => navigates('/allrequest')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  All  Request
                </button>

                <button onClick={() => navigates('/approvalrequest')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Request  Approved
                </button>

                <button onClick={() => navigates('/rejectrequest')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Request Reject
                </button>
                <button onClick={() => navigates('/donation')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Donation
                </button>
                <button onClick={() => navigates('/termandcondition')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Term and condition
                </button>
                <button onClick={() => navigates('/privacypolicy')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Privacy Policy
                </button>
                <button onClick={() => navigates('/about')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  About
                </button>
                <button onClick={() => { localStorage.clear(); navigates('/'); window.location.reload(false) }} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
                  Logout
                </button>


              </div>

              <div className="bg-white text-black p-4" style={{ width: '80%', height: '100%', backgroundColor: 'grey' }}>
                {/* <Navigators/> */}
                <Routes>

                  {/* <Route path='/' element={<Login />}> */}
                  {/* </Route> */}
                  <Route path='/' element={<HomeScreenPost />}>
                  </Route>
                  <Route path='/post' element={<PostScreen />}>
                  </Route>
                  <Route path='/allrequest' element={<AllRequest />}>                  </Route>
                  <Route path='/approvalrequest' element={<ApprovalRequest />}>                  </Route>
                  <Route path='/rejectrequest' element={<RejectRequest />}>                  </Route>
                  <Route path='/donation' element={<Donation />}>                  </Route>
                  <Route path='/termandcondition' element={<TermAndCondition />}>                  </Route>
                  <Route path='/privacypolicy' element={<PrivacyPolicy />}>                  </Route>
                  <Route path='/about' element={<About />}>                  </Route>
                  <Route path='/login' element={<Login />}>                  </Route>
                </Routes>




              </div>


            </div>


          </div>
          :
          <Login />
      }


    </>
  )
}

export default HomePage