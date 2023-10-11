"use client";

import { useState, useEffect } from "react";
import supaBase from "../auth/supabaseConfig";

import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supaBase.auth.getUser();
      if (data && !error) {
        setUserLoggedIn(true);
        localStorage.setItem("email", data.user.user_metadata.email);
        localStorage.setItem("name", data.user.user_metadata.name);
        localStorage.setItem("avatar", data.user.user_metadata.avatar_url);
      }
      const email = data.user?.user_metadata.email;
      const name = data.user?.user_metadata.name;
      const role = "users";

      // Check weather profile is already existed or not
      const { data: existingUserData, error: existingUserError } =
        await supaBase
          .from("user_profile")
          .select("*")
          .eq("email", email)
          .single();

      if (existingUserData && !existingUserError) {
        setUserRole(existingUserData.role);
        console.log("User profile already exists:", existingUserData);
      } else {
        const { data: insertData, error: insertError } = await supaBase
          .from("user_profile")
          .upsert([
            {
              email,
              name,
              role,
            },
          ]);

        if (insertError) {
          console.error("Error inserting user profile:", insertError);
          return;
        }
        setUserRole(role);
        console.log("User profile inserted successfully:", insertData);
      }
    };

    checkSession();
  }, []);

  console.log(userLoggedIn);

  if (userLoggedIn) {
    return (
      <>
        <div>
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            role={userRole}
          />

          <div className="lg:pl-72">
            <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Main />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center p-20 gap-8">
        <span className="text-[20px]">
          Please login Before accesing Dashboard
        </span>
        <a href="/auth" className="text-[18px]">
          <button className="h-12 w-32 bg-black text-white rounded-lg hover:bg-white hover:text-black">
            Login
          </button>
        </a>
      </div>
    );
  }
}
