import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Person Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam ullam, in aperiam, voluptates sapiente fugit a, quo id reiciendis quisquam asperiores dicta. Quis enim temporibus voluptatibus cupiditate, laborum maxime?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam ullam, in aperiam, voluptates sapiente fugit a, quo id reiciendis quisquam asperiores dicta. Quis enim temporibus voluptatibus cupiditate, laborum maxime?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri09"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam ullam, in aperiam, voluptates sapiente fugit a, quo id reiciendis quisquam asperiores dicta. Quis enim temporibus voluptatibus cupiditate, laborum maxime?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
