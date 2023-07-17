import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages/Home/Home";
import Offerings from "./Pages/offering/Offerings";
import Profile from "./Pages/Profile/Profile";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import SingleOffering2 from "./Pages/offering/SingleOffering2";
import { ToastContainer } from "react-toastify";
import SendEmail from "./Pages/auth/Signup/sendemail";
import Emailverification from "./Pages/auth/Signup/emailverification";
import AdminSignin from "./Pages/admin/Login";
import AdminProfile from "./Pages/admin/Profile";
import Stories from "./Pages/Stories";

function App() {
  return (
    <div className="App ">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stories" element={<Stories />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/offerings" element={<Offerings />} />
        <Route exact path="/offerings/:name" element={<SingleOffering2 />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/update" element={<UpdateProfile />} />
        <Route exact path="/auth/signin" element={<Signin />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route exact path="/auth/signup/sendemail" element={<SendEmail />} />
        <Route
          exact
          path="/auth/signup/emailverification"
          element={<Emailverification />}
        />
        <Route exact path="/admin" element={<AdminSignin />} />
        <Route exact path="/admin-profile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
}

export default App;
