import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class Interest extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">Interest</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Saya senang untuk menginprove stack-stack terbaru, selalu punya rasa
            penasaran setiap ada fitur-fitur update. saya sangat penasaran
            bagaimana bisa ngesolve pada soal algoritme.
          </p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">
            Saya memiliki hobi seperti mendengarkan musik, bermain football,
            menonton film.
          </p>
        </div>
      </div>
    );
  }
}
