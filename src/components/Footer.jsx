import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
     

      <div className="footer_down">
        <div className="down_left">
          <h1>TIMTAM</h1>
          <p>
            TimTam hadir dengan konten untuk membantu meningkatkan kontrol diri,
            mengurangi kecemasan dan memberikan saran praktis untuk mengatasi
            gejala-gejala kecemasan.
          </p>
          <Link to="/about" className="down_btn">
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="down_right">
            <div className="ilnks">
                <h1>TimTam</h1>
                <p>Tentang Kami</p>
                <p>Blog</p>
            </div>
            <div className="ilnks">
                <h1>Layanan</h1>
                <p>Game</p>
                <p>Jurnal Online</p>
                <p>Komunitas</p>
            </div>
            <div className="ilnks">
                <h1>Bantuan dan Panduan</h1>
                <p>Syarat dan Ketentuan</p>
                <p>Kebijakan Privasi</p>
                <p>Bantuan</p>
                <div className="socmed">
                    <img src="../../assets/instagram.png" alt="" />
                    <img src="../../assets/linkedin.png" alt="" />
                    <img src="../../assets/youtube.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
