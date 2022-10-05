import React, { Component } from "react";
import Header from "../../components/header/Header";
import HobbiesCard from "../../components/hobbiesCard/HobbiesCard";
import HobbiesSection from "../../containers/hobbiesSection/HobbiesSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Hobbies.css";

class Hobbies extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="hobbies-page">
        <Header theme={theme} />
        <HobbiesSection theme={theme} />
        <HobbiesCard theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Hobbies;
