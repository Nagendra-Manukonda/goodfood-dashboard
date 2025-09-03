"use client";

import { Button } from "@/component/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { Charts } from "./Charts";
import { OrderChart } from "./OrderChart";
import MostOrdered from "./MostOrdered";
import Rating from "./Rating";
import Graph from "./Graph";

export default function Revenue() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader className=" relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Revenue</CardTitle>
            <CardDescription className="font-semibold mt-1.5">
              IDR 7.852.000
            </CardDescription>
          </div>
          <CardAction className="absolute top-4 right-3 sm:static sm:ml-" >
            <Button className="bg-white text-violet-500 hover:bg-white">
              View Report
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-green-600 flex items-center font-semibold mt-1">
            <IconArrowUp className="w-4 h-4 mr-1" />
            2.1%{" "}
            <span className="text-violet-400 font-normal ml-1">
              vs last week
            </span>
          </CardDescription>
          <CardDescription className="text-violet-500 mt-3">
            Sales from 1-12 Dec, 2020
          </CardDescription>
          <Charts />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className=" relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Order Time</CardTitle>
            <CardDescription className="font-normal text-violet-400 mt-1.5">
              From 1-6 Dec, 2020
            </CardDescription>
          </div>
          <CardAction className="absolute top-4 right-4 sm:static sm:ml-auto">
            <Button className="bg-white text-violet-500 hover:bg-white">
              View Report
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <OrderChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Rating</CardTitle>
          <CardDescription className="font-normal text-violet-400 mt-1.5">
            Lorem ipsum dolor sit amet, consectetur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Rating />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Ordered Food</CardTitle>
          <CardDescription className="font-normal text-violet-400 mt-1.5">
            Adipiscing elit, sed do eiusmod tempor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MostOrdered />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className=" relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Order</CardTitle>
            <CardDescription className="font-medium text-xl mt-1.5">
              2.568
            </CardDescription>
          </div>
          <CardAction className="absolute top-4 right-4 sm:static sm:ml-auto">
            <Button className="bg-white text-violet-500 hover:bg-white">
              View Report
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-red-600 flex items-center font-semibold mt-1">
            <IconArrowDown className="w-4 h-4 mr-1" />
            2.1%{" "}
            <span className="text-violet-400 font-normal ml-1">
              vs last week
            </span>
          </CardDescription>
          <CardDescription className="text-violet-500 mt-2">
            Sales from 1-6 Dec, 2020
          </CardDescription>
          <Graph />
        </CardContent>
      </Card>
    </div>
  );
}
