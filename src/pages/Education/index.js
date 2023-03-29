import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class Educations extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">Education</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Berkuliah di Universitas Paramadina Jakarta Selatan,
          </p>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Mengambil Jurusan Teknik Informatika Selama 4 Tahun, dengan gelar
            pendidikan SKOM.
          </p>
        </div>
      </div>
    );
  }
}
