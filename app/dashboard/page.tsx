"use client";

import { useState } from "react";

import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="lg:pl-72">
          <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Main />
        </div>
      </div>
    </>
  );
}
