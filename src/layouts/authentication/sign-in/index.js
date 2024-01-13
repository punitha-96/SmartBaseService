import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

const clientId = "696129603757-olgq89jjas7bl0fsrgdg4hvlfkahvrfe.apps.googleusercontent.com";

function Basic() {
  const [googleApiInitialized, setGoogleApiInitialized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Dynamically load the gapi script
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;

    script.onload = () => {
      // Handle script loaded, e.g., initialize gapi
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            clientId: clientId,
            scope: "",
          })
          .then(() => {
            // Google API client initialized
            setGoogleApiInitialized(true);
          });
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the dynamically added script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const onSuccess = (res) => {
    if (googleApiInitialized) {
      const userProfile = res.profileObj;
      console.log("LOGIN SUCCESS! Current user:", userProfile);

      // Set the user state to store user details
      setUser(userProfile);
    } else {
      console.log("Google API client is not initialized yet.");
      // You may want to handle this scenario appropriately (e.g., show a loading indicator).
    }
  };

  const onFailure = (error) => {
    if (error.error === "popup_closed_by_user") {
      console.log("User closed the login popup.");
      // Add code to handle this scenario (e.g., show a message to the user).
    } else {
      console.log("LOGIN FAILED! Error:", error);
      // Handle other types of errors as needed.
    }
  };

  return (
    <div>
      {/* Display the user's username if signed in */}

      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          {/* Add any other content you want to display for authenticated users */}
        </div>
      ) : (
        // Display the Google login button if not signed in
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google LOREM IPSUM Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
      <h1>Sign In</h1>
      {/* Other sign-in content */}
      <p>
        Dont have an account? <Link to="/update-profile">Create one</Link>.
      </p>
    </div>
  );
}

export default Basic;
