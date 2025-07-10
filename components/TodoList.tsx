"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "@/components/ui/label";

// 1. Created an array of relevant e-commerce tasks.
const dailyTasks = [
  { id: 1, task: "Fulfill all pending orders from yesterday" },
  { id: 2, task: "Respond to new customer support tickets" },
  { id: 3, task: "Check inventory levels for top-selling products" },
  { id: 4, task: "Schedule social media posts for the new collection" },
  { id: 5, task: "Review and approve new product reviews" },
  { id: 6, task: "Update the 'On Sale' category with new discounts" },
];

const TodoList = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Daily Tasks</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full"   >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="mt-4 h-72 w-full pr-4">
        <div className="space-y-2">
          {dailyTasks.map((item) => (
            <Card key={item.id} className="p-3">
              <div className="flex items-center gap-3">
                <Checkbox id={`task-${item.id}`} />
                <Label
                  htmlFor={`task-${item.id}`}
                  className="text-sm font-normal text-muted-foreground"
                >
                  {item.task}
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;