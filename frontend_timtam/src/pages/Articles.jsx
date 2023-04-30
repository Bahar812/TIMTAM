import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import "../pages/Articles.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Articles = () =>{

    return(
            <div className="outer_articles">
                <div className="outer_navbar_about">
                <Navbar/>
                </div>
                <section className="first_section_articles">
                    <div className="first_left">
                        <h1>Tambah Wawasan-mu dengan<br/> Blog TimTam</h1>
                        <p>Baca Blog dari Skilvul untuk menambah wawasan kamu agar <br/> semakin kaya akan pengetahuan.</p>
                    </div>
                    <div className="first_right">
                        <img src="../../assets/James Sitting normal.png" alt="" />
                    </div>
                </section>
                <section className="second_section_articles">
                    <div className="article_second">
                        <div className="article_second_content">
                            <div className="article_card">
                                <img src="../../assets/kecemasan anak.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <div className="article_card">
                                <img src="../../assets/raih impian.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <div className="article_card">
                                <img src="../../assets/kecerdasan emosional.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <div className="article_card">
                                <img src="../../assets/wear-face-mask.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <div className="article_card">
                                <img src="../../assets/Terapi Kognitif.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <div className="article_card">
                                <img src="../../assets/yoga.png" alt="" />
                                <div className="author">
                                    <p>Bahar Al Hamid</p>
                                    <span></span>
                                    <p>Senin, 10 April 2023</p>
                                </div>
                                <h4>Raih Tingkat kebahagiaan Maksimal di <br/>Tengah Keterbatasan Fisik</h4>
                                <p>Keterbatasan memunculkan stigma terhadap <br/> kelompok difabel, namun menjadi individu dengan <br/> disabilitas tidak menjadikan Dolos putus asa dengan <br/> keterbatasan untuk meraih pekerjaan impiannya.</p>
                                <button className="baca_selengkapnya">Baca Selengkapnya</button>
                            </div>
                            <button className="previous_btn"> <FaArrowLeft className="FaArrowRight" /> </button>
                            <button className="next_btn"> <FaArrowRight className="FaArrowRight" /></button>
                        </div>
                    </div>  
                </section>
                <Footer />
            </div>
    );
};

export default Articles;