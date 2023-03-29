import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class Awards extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">Awards</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Membantu membuat atau mendevelop website event kampus, untuk
            mempermudah mahasiswa yang ingin mendaftar event tersebut ataupun
            yang ingin mengunduh sertifikat pada event yang ia ikuti.
          </p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">
            Juara 3 Pada Hackatown yang diselenggarakan dikampus pada tahun
            2022.
          </p>
        </div>
      </div>
    );
  }
}
