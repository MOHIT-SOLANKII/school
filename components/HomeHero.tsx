"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to Vishal Bharti School
      </h1>
      <p className="text-xl text-gray-600 mb-8">Where Learning Meets Fun!</p>
    </motion.div>
  );
}