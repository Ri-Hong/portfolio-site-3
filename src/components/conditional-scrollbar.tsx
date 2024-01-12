import React, { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const ConditionalScrollbar = () => {
  const location = useLocation();
  const [parallaxContainer, setParallaxContainer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const parallax = document.querySelector(".parallax");
      if (parallax) {
        setParallaxContainer(parallax);
        clearInterval(interval);
      }
    }, 100); // checks every 100ms
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!parallaxContainer) return;

    // Because we need the navbar to be transparent on the homepage AND the blog page, we need to target different compoenents. The blog page doesn't have a parallax container
    const scrollContainer = document.documentElement; // Targets the html tag
    const navbar = document.querySelector(".navbar");

    const handleScrollHomePage = () => {
      if (parallaxContainer.scrollTop > 375) { // Adjust this threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleScrollBlogPage = () => {
      if (scrollContainer.scrollTop > 350) { // Adjust this threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };


    if (location.pathname === "/" && parallaxContainer) {
      // Add the event listener to the parallax container
      parallaxContainer.addEventListener("scroll", handleScrollHomePage);
    } else if (location.pathname === "/blog/") {
      // Add the event listener to the scroll container
      scrollContainer.addEventListener("scroll", handleScrollBlogPage);
    }

    // Cleanup function
    return () => {
      if (parallaxContainer) {
        parallaxContainer.removeEventListener("scroll", handleScrollHomePage);
      }
      if (location.pathname === "/blog/") {
        scrollContainer.removeEventListener("scroll", handleScrollBlogPage);
      }
    };
  }, [parallaxContainer, location.pathname]); // Dependency array

  return null; // This component does not render anything
};

export default ConditionalScrollbar;
