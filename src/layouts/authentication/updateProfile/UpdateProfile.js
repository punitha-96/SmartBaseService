// Placeholder function for demonstration purposes
const fetchUserDetails = () => {
  // Simulating an asynchronous API call
  return new Promise((resolve) => {
    // Simulated user details
    const userDetails = {
      username: "JohnDoe",
      phoneNumber: "1234567890",
      email: "john.doe@example.com",
    };

    // Simulate some delay before resolving
    setTimeout(() => {
      resolve(userDetails);
    }, 1000);
  });
};

// UpdateProfile.js
import React, { useState, useEffect } from "react";
import { useGoogleLogout } from "react-google-login";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
    email: "", // Email will be fetched from login details
  });

  useEffect(() => {
    // Fetch user details or set them from your authentication state
    // For demonstration, assuming you have a function to fetch user details
    // Replace the following line with your actual logic to fetch user details
    const userDetails = fetchUserDetails();
    setUser({
      username: userDetails.username,
      phoneNumber: userDetails.phoneNumber,
      email: userDetails.email,
    });
  }, []);

  const { signOut } = useGoogleLogout({
    clientId: "your-google-client-id",
    onLogoutSuccess: () => {
      // Handle logout, e.g., redirect to sign-in page
      console.log("User signed out");
    },
  });

  const handleUpdateProfile = () => {
    // Implement logic to update the user profile
    console.log("User profile updated:", user);
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form>
        <label> Username:</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={user.phoneNumber}
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
        />
        <label>Email:</label>
        <input type="email" value={user.email} readOnly />
        <button type="button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <button type="button" onClick={signOut}>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
