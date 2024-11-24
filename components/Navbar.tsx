"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Phone, GraduationCap } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "#",
    dropdownItems: [
      { title: "Introduction", href: "/about/introduction" },
      { title: "Our Mission and Vision", href: "/about/mission-vision" },
      { title: "Mandatory Disclosure", href: "/about/disclosure" },
      { title: "Principal's Desk", href: "/about/principal" },
    ],
  },
  { 
    title: "Infrastructure", 
    href: "/infrastructure",
    dropdownItems: [
      { title: "Reception", href: "/infrastructure/reception" },
      { title: "Mathematics Laboratory", href: "/infrastructure/math-lab" },
      { title: "Bio,Chem,Phy Lab", href: "/infrastructure/bio-chem-phy-lab" },
      { title: "Playzone", href: "/infrastructure/playzone" },
      { title: "Music", href: "/infrastructure/music" },
      { title: "Playground", href: "/infrastructure/playground" },
      { title: "Library", href: "/infrastructure/library" },
      { title: "Transportation", href: "/infrastructure/transport" },
      { title: "Classroom", href: "/infrastructure/classroom" },
    ],
  },
  { 
    title: "Admission", 
    href: "/admission",
    dropdownItems: [
      { title: "Procedure", href: "/admission/procedure" },
      { title: "Registration Form", href: "/admission/registration" },
      { title: "Admission/Withdrawal Rule", href: "/admission/rules" },
    ],
  },
  { 
    title: "Activities", 
    href: "/activities",
    dropdownItems: [
      { title: "Glimpse of activities", href: "/activities/glimpse" },
      { title: "Planner", href: "/activities/planner" },
    ],
  },
  { 
    title: "Academics", 
    href: "/academics",
    dropdownItems: [
      { title: "Rules and Regulations", href: "/academics/rules" },
      { title: "Assessments", href: "/academics/assessments" },
      { title: "Counselling", href: "/academics/counselling" },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="rounded-full bg-blue-100 p-2"
            >
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vishal Bharti School
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg py-2"
                >
                  {item.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
                    initial={{ width: "0%" }}
                    animate={{ width: activeDropdown === item.title ? "100%" : "0%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <motion.div
                          key={dropdownItem.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg mx-2"
                          >
                            {dropdownItem.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="tel:+1234567890"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}