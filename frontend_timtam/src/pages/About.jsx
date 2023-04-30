import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../pages/About.css";

const About = () =>{

    return(
        <body>
            <div className="outer_about">
            <div className="outer_navbar_about">
            <Navbar/>
            </div>
            <section className="first_section_about" >
                <div className="left_about_first">
                        <h3>Tentang TIMTAM</h3>
                        <h1>Apa Sih TIMTAM itu?</h1>
                        <p>TIMTAM adalah sebuah platform pendidikan teknologi yang
                        menyediakan konten Self-Improvement dengan metode
                         “Cognitive Behavioral Therapy” dalam bentuk online.</p>
                </div>
                <div className="right_about_first">
                    <img src="../../assets/James_confused.png" alt="" />
                    <img src="../../assets/mikir fix 1.png" alt="" />
                </div>
            </section>
            <section className="second_section_about">
                <div className="second_content">
                    <h1>Kenapa TIMTAM?</h1>
                    <div className="second_content_card">
                        <div className="card">
                            <img src="../../assets/book_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Solusi Berdasarkan Masalah Nyata</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                        <div className="card">
                        <img src="../../assets/Gadget_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Proses Pembelajaran yang menyenangkan</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                        <div className="card">
                        <img src="../../assets/People_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Komunitas Yang selalu ada</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                        <div className="card">
                        <img src="../../assets/Pena_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Menemukan Informasi dari masalah yang dihadapi</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                        <div className="card">
                        <img src="../../assets/Sarjana_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Membuat anda semakin terstruktur</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                        <div className="card">
                        <img src="../../assets/Medal_card.png" alt="" />
                            <div className="deskripsi">
                            <h3>Menambah Wawasan Anda</h3>
                            <p>Hemat waktu dan tenaga dengan website kami telah <br/> menyiapkan berbagai materi untuk meningkat diri anda <br/> dan mengurasi kecemasan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </body>
    )
}

export default About;