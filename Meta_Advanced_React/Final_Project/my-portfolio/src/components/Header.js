import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {icon: faEnvelope, url: "mailto: hello@example.com"},
  {icon: faGithub, url: "https://github.com"},
  {icon: faLinkedin, url: "https://www.linkedin.com"},
  {icon: faMedium, url: "https://medium.com"},
  {icon: faStackOverflow, url: "https://stackoverflow.com"},
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleClick = (focal) => () => {
    const id = `${focal}-section`;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const currentScrollY = window.scrollY;

      // dynamically update transform using style property
      headerRef.current.style.transform =
        currentScrollY > prevScrollY.current
          ? "translateY(-200px)" // scrolling down → hide
          : "translateY(0)"; // scrolling up → show

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      style={{ transform: "translateY(0)", transition: "transform 0.3s ease-in-out" }}
      backgroundColor="#250821"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;