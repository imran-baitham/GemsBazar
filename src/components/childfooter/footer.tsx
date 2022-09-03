import React from "react";

function SmallBar() {
  return (
    <div className="relative bg-gray-200">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-black">
            <span className="md:hidden">Copyright © 2022 tripperpk.</span>
            <span className="hidden md:inline">
              Copyright © 2022 tripperpk. All Right Reserved.
            </span>
            <span className="block sm:ml-2 sm:inline-block pl-60">
              <a href="#" className="font-bold text-black hover:underline">
                Privacy Policy
              </a>
            </span>
            <span className="block sm:ml-2 sm:inline-block pl-3">
              <a href="#" className="font-bold text-black hover:underline">
                Terms & Conditions
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmallBar;
