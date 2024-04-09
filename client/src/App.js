import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";
import { AuthFunction } from "./context/front-auth";
import { TokenStatusFunction } from "./context/tokenStatus";
import ProfilePage from "./pages/ProfilePage";
import { StatesFunction } from "./context/States";
import { HotelContextFunc } from "./context/HotelsContext";
import Hotels from "./pages/Hotels";
import { EditProfileContextFunc } from "./context/EditProfile";
import CircleProgress from "./pages/CircleProgress";
import FrontPage from "./Layout/FrontPage";
import HotelDetails from "./pages/HotelDetails";
import ShowProfile from "./pages/ShowProfile";
import Accomodation from "./pages/Accomadation"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Booking  from "./pages/Booking"

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}>
        <StatesFunction>
          <TokenStatusFunction>
            <AuthFunction>
              <HotelContextFunc>
                <EditProfileContextFunc>
                  <Router>
                    <Routes>
                      <Route exact path="/" element={<FrontPage />} />
                      <Route exact path="/login" element={<LoginPage />} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route
                        exact
                        path="/account/:name"
                        element={<ShowProfile />}
                      />
                      <Route
                        exact
                        path="/account/edit-profile"
                        element={<ProfilePage />}
                      />
                      <Route
                        exact
                        path="/hotel/:id"
                        element={<HotelDetails />}
                      />
                      <Route
                        exact
                        path="/booking/:name"
                        element={<Booking />}
                      />
                      <Route
                        exact
                        path="/accommodation/:name"
                        element={<Accomodation />}
                      />
                      <Route
                        exact
                        path="/About"
                        element={<About />}
                      />
                      <Route
                        exact
                        path="/Contact"
                        element={<Contact />}
                      />
                      <Route
                        exact
                        path="/fetching-data"
                        element={<CircleProgress />}
                      />
                      <Route exact path="*" element={<NotFoundPage />} />
                    </Routes>
                  </Router>
                </EditProfileContextFunc>
              </HotelContextFunc>
              <ToastContainer autoClose={2000} transition={Slide} />
            </AuthFunction>
          </TokenStatusFunction>
        </StatesFunction>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
