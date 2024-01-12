"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const DotSwapper = () => {
  const sentences = [
    "Please hold on, your response is on its way...",
    "Bear with us, we're nearly there...",
    "Just a moment longer, we're finalizing the details...",
    "Your patience is appreciated, we're wrapping things up...",
    "Hang tight, your answer is being prepared...",
    "We're in the final stages, your reply will be with you shortly...",
    "We're just putting the finishing touches on your answer...",
    "A little more patience, we're on the home stretch...",
    "We're just dotting the i's and crossing the t's, your answer is almost ready...",
    "Just a tad longer, we're making sure everything is perfect...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 13000);
    return () => clearInterval(interval);
  }, [sentences]);

  return (
    <div className="flex gap-2">

      <div className="flex gap-3 mt-2">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-2 bg-whileRed rounded-full"
        />
        <motion.div
          initial={{ x: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
          animate={{ x: -20 }}
          className="w-2 h-2 bg-blue-700 rounded-full"
        />
      </div>
    </div>
  );
};

export default DotSwapper;
