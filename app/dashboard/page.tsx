"use client";

import { useState, useEffect } from "react";
import supaBase from "../auth/supabaseConfig";

import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supaBase.auth.getUser();
      if (data && !error) {
        setUserLoggedIn(true);
        console.log(data);
        localStorage.setItem("email", data.user.user_metadata.email);
        localStorage.setItem("name", data.user.user_metadata.name);
        localStorage.setItem("avatar", data.user.user_metadata.avatar_url);
      }
    };

    checkSession();
  }, []);

  console.log(userLoggedIn);

  if (userLoggedIn) {
    return (
      <>
        <div>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="lg:pl-72">
            <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Main />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>SignIn First</div>
      </>
    );
  }
}
