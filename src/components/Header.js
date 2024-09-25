import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: 110703011@g.nccu.edu.tw",
  },
  {
    icon: faGithub,
    url: "https://github.com/I-Sheng?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/%E9%80%B8%E7%9B%9B-%E6%9D%8E-5673a1261/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const componentRef = useRef("up");
  const [scrollDir, setScrollDir] = useState("down");
  const prevScrollY = useRef(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY.current) {
      setScrollDir("down");
    } else if (currentScrollY < prevScrollY.current) {
      setScrollDir("up");
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDir === "up") {
      componentRef.current.style.transform = "translateY(0)";
    } else {
      componentRef.current.style.transform = "translateY(-200px)";
    }
  }, [scrollDir]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={componentRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((item, index) => {
              return (
                <a
                  key={index}
                  value={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="2x"
                    style={{ margin: "0.5vw" }}
                  />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick("projects")} value="project">
                Projects
              </a>
              {/* <a onClick={handleClick("contactme")} value="contactme">
                Contact me
              </a> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
