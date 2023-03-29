import { Component } from "react";
import MenuContainer from "../../components/MenuContainer";

export default class About extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer />
        <div className="body">
          <h1 className="animate__animated animate__bounceInDown">About Me</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">
            Halo... Nama lengkap saya Bilal Al Ghiffari, jadi bisa dipanggil
            "Bilal". Saat ini saya adalah seorang mahasiswa S1 di Universitas
            Paramadina yang sedang mengejar gelar di bidang Teknik Informatika,
            saya selalu berusaha mempelajari teknologi baru untuk memuaskan rasa
            ingin tahu saya dan meningkatkan keterampilan saya. Bergairah
            tentang teknologi seluler dan web modern menggunakan
            JavaScript/TypeScript dengan mengingat tren dan teknik terbaru.
          </p>
        </div>
      </div>
    );
  }
}
