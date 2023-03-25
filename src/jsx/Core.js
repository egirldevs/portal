import React, { useState, useEffect } from "react";
import TypeAnimation from "react-type-animation";
import "./css/Core.css";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "./componetry/GenericFasIcon";
import { faServer, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [countdown, setCountdown] = useState(60 * 60 * 24); // 24 hours in seconds

  const toggleLogo = () => {
    setShowLogo(!showLogo);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        const seconds = prevCountdown - 1;
        const days = Math.floor(seconds / (3600 * 24));
        if (days > 30) {
          // Set countdown to 30 days
          setCountdown(30 * 3600 * 24);
          return;
        }
        return seconds;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    if (days > 0) {
      return `Testing starts in ${days} days and ${formatTime(
        seconds - days * 3600 * 24
      )}`;
    }
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `Testing starts in ${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds`;
  };

  return (
    <div className="Core">
      {showLogo && (
        <img
          alt="Logo"
          src="https://cdn.discordapp.com/attachments/1075154945394868288/1081395587708112976/soup_2-01.png"
          width="256px"
          onClick={toggleLogo}
          style={{ cursor: "pointer" }}
        />
      )}
      <TypeAnimation
        className="Core-Typewrite"
        cursor={false}
        sequence={["We'll be ready soon"]}
        wrapper="h1"
      />
      <h2 className="Core-Subheader">
        At the moment, SoupGG is preparing to enter closed alpha testing. Our
        team is working incredibly hard to prepare the service for public beta
        testing. More updates coming.
      </h2>
      <div className="row gap-x-6 text-center">
    <Tooltip title="Click me to visist our Discord" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://discord.soup.gg">
         <GenericFasIcon size="2x" icon={faDiscord} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to visit our Store" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://store.soup.gg">
         <GenericFasIcon size="2x" icon={faShoppingCart} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to visit our NameMC" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://namemc.com/soup.gg">
         <GenericFasIcon size="2x" icon={faServer} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to go to our Twitter" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/playsoupgg">
         <GenericFasIcon size="2x" icon={faTwitter} color="white" />
       </a>
    </Tooltip>
     </div>
      <button className="Core-Button" onClick={toggleLogo}>
        {showLogo ? "Hide Logo" : "Show Logo"}
      </button>
      <div className="Core-Countdown">{formatTime(countdown)}</div>
    </div>
  );
}

export default App;