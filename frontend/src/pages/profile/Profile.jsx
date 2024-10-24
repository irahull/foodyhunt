import React, { useContext } from "react";
import "./profile.scss";
import { Context } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const { currentUser } = useContext(Context);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    setToken("");
    toast.success("User logged out");
  };
  console.log(currentUser);
  return (
    <div className="profileWrapper">
      <div className="profileContent">
        <p className="profileName">{currentUser.name}</p>
        <p className="profileEmail">{currentUser.email}</p>
        <div className="profileLogout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
