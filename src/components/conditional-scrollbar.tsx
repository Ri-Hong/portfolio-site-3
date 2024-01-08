import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const ConditionalScrollbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Because we need the navbar to be transparent on the homepage AND the blog page, we need to target different compoenents. The blog page doesn't have a parallax container
    const parallaxContainer = document.querySelector(".parallax"); // replace with your container's selector
    const scrollContainer = document.documentElement; // Targets the html tag

    const handleScrollHomePage = () => {
      const navbar = document.querySelector(".navbar");
      if (parallaxContainer.scrollTop > 375) { // Adjust this threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleScrollBlogPage = () => {
      const navbar = document.querySelector(".navbar");
      console.log(scrollContainer.scrollTop)
      if (scrollContainer.scrollTop > 350) { // Adjust this threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };


    if (location.pathname === "/") {
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
    };
  }, [location.pathname]); // Dependency array

  return null; // This component does not render anything
};

export default ConditionalScrollbar;
