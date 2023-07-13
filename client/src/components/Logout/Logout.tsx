import { useAuthContext } from "@/contexts/authContext";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from "@/services/userService";

const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useAuthContext()!;

  useEffect(() => {
    userService.logout(user.accessToken).then(() => {
      userLogout();
      navigate("/");
    });
  });
  return null;
};

export default Logout;
