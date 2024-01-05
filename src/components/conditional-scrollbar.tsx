import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const ConditionalScrollbar = () => {
  const location = useLocation();

  useEffect(() => {
    const parallaxContainer = document.querySelector(".parallax"); // replace with your container's selector

    const handleScroll = () => {
      console.log(parallaxContainer.scrollTop); // Logging the scroll position of the container

      const navbar = document.querySelector(".navbar");
      if (parallaxContainer.scrollTop > 300) { // Adjust this threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    if (location.pathname === "/") {
      // Add the event listener to the parallax container
      parallaxContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup function
    return () => {
      if (parallaxContainer) {
        parallaxContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [location.pathname]); // Dependency array

  return null; // This component does not render anything
};

export default ConditionalScrollbar;
