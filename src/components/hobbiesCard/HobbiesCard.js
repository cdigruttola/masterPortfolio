import React, { Component } from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "./HobbiesCard.css";

class HobbiesCard extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="hobbies-card">
        <Fade bottom duration={2000} distance="40px">
          <div className="hobbies-card-body-div">
            {hobbies.hobbies.map((hobbiesData) => {
              return (
                <div className="hobbies-data" key={hobbiesData.title}>
                  <div className="hobbies-heading">
                    <Fade left duration={2000}>
                      <div
                        className="hobbies-card-title"
                        style={{ color: theme.text }}
                      >
                        {hobbiesData.title}
                      </div>
                      <div
                        className="hobbies-card-subtitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {hobbiesData.description}
                      </div>
                    </Fade>
                  </div>
                  <Fade right duration={2000}>
                    <div className="hobbies-card-img">
                      <img
                        className="hobbies-image"
                        src={require(`../../assets/images/${hobbiesData["image_path"]}`)}
                        alt={hobbiesData.title}
                      />
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    );
  }
}

export default HobbiesCard;
