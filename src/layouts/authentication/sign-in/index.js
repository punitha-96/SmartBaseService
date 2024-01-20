import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

import backgroundImage from "assets/images/logos/sbbackground.avif";

const clientId = "696129603757-olgq89jjas7bl0fsrgdg4hvlfkahvrfe.apps.googleusercontent.com";

function Basic() {
  const [googleApiInitialized, setGoogleApiInitialized] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;

    script.onload = () => {
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            clientId: clientId,
            scope: "",
          })
          .then(() => {
            setGoogleApiInitialized(true);
          });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log("User signed out.");
    });

    navigate("/");
  };

  const onSuccess = (res) => {
    if (googleApiInitialized) {
      const userProfile = res.profileObj;
      console.log("LOGIN SUCCESS! Current user:", userProfile);
      setUser(userProfile);
      handleLogin();
    } else {
      console.log("Google API client is not initialized yet.");
    }
  };

  const onFailure = (error) => {
    if (error.error === "popup_closed_by_user") {
      console.log("User closed the login popup.");
    } else {
      console.log("LOGIN FAILED! Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Increase the center box height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "50px", // Adjust the padding
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          textAlign: "left",
          maxWidth: "350px", // Adjust the maximum width
          height: "500px", // Adjust the height
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontFamily: "Canva Sans",
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          Login or sign up in seconds
        </h3>
        <h5
          style={{
            fontWeight: "normal",
            marginBottom: "20px",
            fontFamily: "Noto Sans Variable",
            fontSize: "16px",
          }}
        >
          Use your email to continue with SmartBase (its free)!
        </h5>

        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        <h6
          style={{
            fontWeight: "normal",
            marginTop: "30px",
            fontFamily: "Noto Sans Variable",
            fontSize: "13px",
          }}
        >
          By continuing, you agree to SmartBase Terms of use. Read our privacy policy.
        </h6>
        {/* <h6
          style={{
            fontWeight: "normal",
            marginBottom: "10px",
            fontFamily: "Noto Sans Variable",
            fontSize: "13px",
          }}
        >
          Read our privacy policy.
        </h6> */}
      </div>
    </div>
  );
}

export default Basic;
