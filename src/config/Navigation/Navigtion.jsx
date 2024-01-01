import { Route, Routes } from "react-router";
import Login from "../../Screen/Login";
import HomePage from "../../Screen/HomePage";
import PostScreen from "../../Screen/PostScreen";
import AllRequest from "../../Screen/AllRequest";
import ApprovalRequest from "../../Screen/ApprovalRequest";
import RejectRequest from "../../Screen/RejectRequest";
import Donation from "../../Screen/Donation";
import TermAndCondition from "../../Screen/TermAndCondition";
import PrivacyPolicy from "../../Screen/PrivacyPolicy";
import About from "../../Screen/About";

  let Navigators=()=>{

    
          return (
            <>

                <Routes>
                    <Route path='/' element={<Login />}>
                    </Route>
                    <Route path='/HomePage' element={<HomePage />}>
                    </Route>

{/* 
                    <Route path='/postscreen' element={<PostScreen />}>
                    </Route>
                    <Route path='/allrequest' element={<AllRequest />}>                  </Route> 
                    <Route path='/approvalrequest' element={<ApprovalRequest />}>                  </Route> 
                    <Route path='/rejectrequest' element={<RejectRequest />}>                  </Route> 
                    <Route path='/donation' element={<Donation />}>                  </Route> 
                    <Route path='/termandcondition' element={<TermAndCondition/>}>                  </Route> 
                    <Route path='/privacypolicy' element={<PrivacyPolicy />}>                  </Route> 
                    <Route path='/about' element={<About />}></Route> */}
                  
                </Routes>


            </>
        );
        
      
  }

  export default Navigators