"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1741531568112.json"; // Replace with your JSON file
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
  const handleCancel = () => {
    alert("You can manually close this tab if needed.");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      {/* Animated Professional Cartoon Character */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: [0, 10, -10, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-52 h-52 md:mr-12"
      >
        <Lottie animationData={animationData} loop autoPlay />
      </motion.div>

      {/* Motion Card with Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Card className="w-[420px] bg-white/10 shadow-lg rounded-2xl border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              👋 Hi, User
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              Welcome to{" "}
              <span className="text-blue-400 font-semibold">
                Anji's Profile
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 text-center text-gray-300">
            Explore my projects and experience. Click{" "}
            <b className="text-blue-400">"Open"</b> to continue.
          </CardContent>
          <CardFooter className="flex justify-between p-6">
            <Button
              variant="outline"
              className="text-red-400 border-red-500 hover:bg-red-500 hover:text-white transition-all px-5 py-2 rounded-lg shadow-lg"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Link href="/dashboard">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow-lg hover:shadow-blue-400/50">
                Open
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
