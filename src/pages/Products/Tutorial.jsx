import React from "react";
import { Container } from "@mui/material";
import installguide1 from "../../image/installguide1.png";
import installguide2 from "../../image/installguide2.png";
import installguide3 from "../../image/installguide3.png";

function Tutorial() {
  return (
    <Container>
      <h1>Self-hosting guide</h1>
      <p>
        The simplest way to install the whole application stack is to use
        {" " /* prettier-ignore */}
        <a
          href="https://docs.docker.com/compose/"
          target="_blank"
          rel="noreferrer"
        >
          Docker Compose
        </a>
      </p>
      <p>
        To get started, download Docker from
        {" " /* prettier-ignore */}
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          https://www.docker.com/
        </a>
      </p>
      <p>
        From our
        {" " /* prettier-ignore */}
        <a
          href="https://github.com/o2buzzle/CDCN_Covid19"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
        , download the Docker Compose (<code>docker-compose.yml</code>) file.
      </p>
      <img
        src={installguide1}
        width="100%"
        alt="Docker Compose file from GitHub"
      />
      <p>
        Within the directory containing <code>docker-compose.yml</code>, run{" "}
        <code>docker-compose-up</code>. This should bring up all containers
        necessary to run the application.
      </p>
      <img src={installguide2} width="100%" alt="Running Docker Compose" />
      <p>
        The service should now be reachable through localhost on port 80
        (http://localhost).
      </p>
      <img src={installguide3} width="100%" alt="Running Docker Compose" />
      <p>
        Should you decide to run the each part of the application separately,
        visit their respective git repositories or Docker Hub images for the
        appropriate instructions.
      </p>
    </Container>
  );
}

export default Tutorial;
