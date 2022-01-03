import React from "react";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <div className="flex justify-center mt-20">
      <h1 className="font-medium mr-4">Welcome, {user.displayName}</h1>
      <button
        onClick={handleLogOut}
        className="px-3 py-2 bg-blue-700 text-white block"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
