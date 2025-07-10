import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Edit, Save, XCircle } from "lucide-react";

const UserSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button >
          <Edit className=" h-4 w-4" />
          Edit Profile
        </Button>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader>
          <SheetTitle>Edit User Profile</SheetTitle>
          <SheetDescription>
            Modify user details and account settings. Click save when done.
          </SheetDescription>
        </SheetHeader>

        <div className="flex px-4 flex-col space-y-6 ">
          <div>
            <h3 className="text-md font-medium mb-4">Personal Information</h3>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Alex Chen" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="alex.chen" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
            </div>
            </div>
            </div>
            
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">
              <XCircle className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </SheetClose>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UserSheet;