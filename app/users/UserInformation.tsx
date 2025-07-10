import React from "react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Make sure to import your cn utility

// Define the shape of our user data
export interface User {
  username: string;
  email: string;
  phone: string;
  location: string;
  role: "Admin" | "Customer";
  status: "Active" | "Inactive" | "Suspended";
  joinDate: Date;
  lastOrderDate: Date;
  totalSpent: number;
}
const sampleUser: User = {
    username: "alex.chen",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Admin",
    status: "Active",
    joinDate: new Date("2023-01-15"),
    lastOrderDate: new Date("2025-05-28"),
    totalSpent: 1450.75,
  };

const UserInformation = () => {
  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Username:</span>
        <span>{sampleUser.username}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Email:</span>
        <span>{sampleUser.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Phone:</span>
        <span>{sampleUser.phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Location:</span>
        <span>{sampleUser.location}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Role:</span>
        <Badge
          className={cn({
            "bg-blue-100 text-blue-800 hover:bg-blue-100": sampleUser.role === "Admin",
          })}
        >
          {sampleUser.role}
        </Badge>
      </div>
       <div className="flex items-center gap-2">
        <span className="font-bold w-28">Status:</span>
        <Badge
          variant="outline"
          className={cn("border-2",{
            "border-green-500 text-green-600": sampleUser.status === "Active",
            "border-yellow-500 text-yellow-600": sampleUser.status === "Inactive",
            "border-red-500 text-red-600": sampleUser.status === "Suspended",
          })}
        >
          {sampleUser.status}
        </Badge>
      </div>

      {/* E-commerce Specific Info */}
      <div className="flex items-center gap-2">
        <span className="font-bold w-28">Date Joined:</span>
        <span>{format(sampleUser.joinDate, "PPP")}</span>
      </div>
       <div className="flex items-center gap-2">
        <span className="font-bold w-28">Last Order:</span>
        <span>{format(sampleUser.lastOrderDate, "PPP")}</span>
      </div>
       <div className="flex items-center gap-2">
        <span className="font-bold w-28">Total Spent:</span>
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(sampleUser.totalSpent)}
        </span>
      </div>
    </div>
  );
};

export default UserInformation;