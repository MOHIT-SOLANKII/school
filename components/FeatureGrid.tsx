"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Palette } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Nurturing young minds with excellence",
  },
  {
    icon: BookOpen,
    title: "Creative Learning",
    description: "Making education fun and engaging",
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Dedicated to student success",
  },
  {
    icon: Palette,
    title: "Arts & Activities",
    description: "Fostering creativity and growth",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="animate-float">
            <feature.icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}