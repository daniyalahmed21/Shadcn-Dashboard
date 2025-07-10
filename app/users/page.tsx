import React from "react";

import UserBadge from "./UserBadge";
import BreadCrumb from "./Breadcrumb";
import UserSheet from "./UserSheet";
import UserProgress from "./UserProgress";
import UserInformation from "./UserInformation";
import {  SalesPerformanceChart } from "./UserLineChart";

const UserPage = () => {
  return (
    <div className="px-6 p-4">
      <BreadCrumb />
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/3 h-full space-y-4">
          <div className="bg-primary-foreground p-4 rounded-lg ">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <UserBadge />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg ">
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold">User Information</h1>
              <div className="bg-white text-black rounded-md p-2 font-sans px-3" >
                <UserSheet />
              </div>
            </div>
            <h1 className="text-muted-foreground text-sm font-medium mt-2 mb-2">
              Profile completion
            </h1>
            <UserProgress />
            <UserInformation/>
          </div>
        </div>
        <div className="w-full xl:w-2/3 ">
          <div className="bg-primary-foreground p-4 rounded-lg h-full space-y-4">
            <h1 className="text-xl font-semibold">User Activity</h1>

            <SalesPerformanceChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
