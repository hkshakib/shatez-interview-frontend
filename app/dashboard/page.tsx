"use client";

import { useState } from "react";

import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";


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
          <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>

      </div>
    </>
  );
}
