import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class Skills extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">Skills</h1>
          <div className="container">
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <p>Language</p>
              <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Node</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <p>Framework</p>
              <ul className="skill-list">
                <li>React and React Native</li>
                <li>Next Js</li>
                <li>Tailwind Css</li>
                <li>Boostrap</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <p>DataBase</p>
              <ul className="skill-list">
                <li>MYSQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
