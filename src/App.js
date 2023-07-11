import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import Contact from "./Pages/contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Offerings from "./Pages/offering/Offerings";
import Profile from "./Pages/Profile/Profile";
import Raisefunds from "./Pages/raise-funds/Raisefunds";
import Organization from "./Pages/Organizations/Organization";
import SingleOrganization from "./Pages/Organizations/SingleOrganization";
// import SingleOffering from "./Pages/offering/SingleOffering";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import SingleOffering2 from "./Pages/offering/SingleOffering2";
import Invest from "./Pages/Invest/Invest";
import { ToastContainer } from "react-toastify";
import SendEmail from "./Pages/auth/Signup/sendemail";
import Emailverification from "./Pages/auth/Signup/emailverification";
import DonateToOffering from "./Pages/offering/Donate";

function App() {
  return (
    <div className="App ">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/raise-funds" element={<Raisefunds />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/offerings" element={<Offerings />} />
        <Route exact path="/offerings/:name" element={<SingleOffering2 />} />
        <Route
          exact
          path="/offerings/:name/donate"
          element={<DonateToOffering />}
        />
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
        <Route exact path={"/organizations"} element={<Organization />} />
        <Route
          exact
          path="/organizations/:name"
          element={<SingleOrganization />}
        />
        <Route exact path="/offerings/:id/invest" element={<Invest />} />
      </Routes>
    </div>
  );
}

export default App;
