import Link from "next/link";
import "./globals.css";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="bacgroudColor-white flex min-h-screen justify-center items-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Hi User</CardTitle>
            <CardDescription>wecome to anji profile...</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>
              <Link href="/dashboard">Open</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
