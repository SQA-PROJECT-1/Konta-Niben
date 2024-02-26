
import { Auth } from "../hooks/Auth";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const SecureRoute = ({children}) => {
    const { isAuthenticated } = Auth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate('/');
      }
  
    }, [isAuthenticated]);
  
    if (isAuthenticated()) {
      return children;
    }
    return null;
  }

