"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import supaBase from "../auth/supabaseConfig";

const DynamicLoginComponent = dynamic(() => import("./LoginComponent"), {
  ssr: false,
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleGoogleLogin = async () => {
    setLoading(true);
    const { data, error } = await supaBase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });
    if (error) {
    } else {
      console.log("Data: ", data);
    }
  };
  return (
    <div className="flex flex-col basis-[100%] justify-center items-center h-full-screen w-full">
      <DynamicLoginComponent
        handleGoogleLogin={handleGoogleLogin}
        loading={loading}
      />
    </div>
  );
};

export default Login;
