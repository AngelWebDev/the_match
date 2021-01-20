import React, { Component } from "react";
import Stripe from "../../../assets/images/stripes.png";
import { Tag } from "../../utils/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./Cards";

export class MeetPlayers extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#ffffff url(${Stripe})`,
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px",
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: "inline-block",
                      marginBottom: "27px",
                      border: "1px solid #0e1731",
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
