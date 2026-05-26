"use client";

import { Menu } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <div>
        {/* Top logo */}
      <div className="bg-blue-300 flex gap-3 justify-beetween md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">CentSeller</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4 " />
        </button>
      </div>
        {/* LINKS */   }
        <div className="grow mt-8">
            {/* Links here*/}
        </div>
        {/* FOOTER */}
        <div>
            <p className="text-center text-xs text-gray-500">&copy; 2026 CentSeller. All rights reserved.</p>
        </div>

    </div>
  );
}

export default Sidebar;
