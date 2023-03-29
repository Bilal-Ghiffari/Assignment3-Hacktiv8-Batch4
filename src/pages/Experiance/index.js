import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class Experiance extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">
            Experiance
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Saya memulai perjalanan sebagai front end developer hampir 1 tahun,
            berkolaborasi dengan orang-orang pengalaman untuk membuat produk web
            user dan konsumen.
          </p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">
            Saya berhasil membuat situs web responsif yang cepat dan mudah
            digunakan, Bidang utama keahlian saya adalah pengembangan front-end,
            HTML, CSS, JS, membangun aplikasi web kecil dan menengah, plugin
            khusus, fitur, animasi, dan pengkodean tata letak interaktif.
          </p>
        </div>
      </div>
    );
  }
}
