import React, { useEffect, useState } from "react";
import { provider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./context/stateProvider";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const [userDisplayName, setUserDisplayName] = useState("");
  const loginFunction = async () => {
     await signInWithPopup(auth, provider).then((result)=>{
       setUserDisplayName(result.user.providerData[0].displayName);
       dispatch({
        type:"SET_USER",
        user:result.user
       })
       localStorage.setItem("user",JSON.stringify(result.user.providerData[0]))
     }).catch((error)=>{
      console.log(error)
     })
  };

  return (
    <div
      onClick={loginFunction}
      className=" text-black py-2 px-6 tracking-wider  "
    >
      {user ? <p>Hello,{user?.displayName}</p> : <p>Login</p>}
    </div>
  );
};

export default Login;
