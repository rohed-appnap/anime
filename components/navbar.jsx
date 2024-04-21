"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const sectionIds = ["#test1", "#test2", "#test3"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const section = document.querySelector(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4 fixed z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-semibold">Anime</h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavLink href="/" active={activeLink === "test1"}>
                Home
              </NavLink>
              <NavLink href="#test1" active={activeLink === "test1"}>
                Test 1
              </NavLink>
              <NavLink href="#test2" active={activeLink === "test2"}>
                Test 2
              </NavLink>
              <NavLink href="#test3" active={activeLink === "test3"}>
                Test 3
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
        active ? "bg-red-500" : "hover:bg-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
