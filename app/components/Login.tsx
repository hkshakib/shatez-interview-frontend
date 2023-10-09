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
    <div className="flex flex-1 justify-center items-center bg-[#1F2937] text-white rounded-lg">
      <div className="flex h-[50px] w-[300px] bg-[#1F2937] text-white rounded-lg hover:bg-white hover:text-black">
        <DynamicLoginComponent
          handleGoogleLogin={handleGoogleLogin}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Login;
