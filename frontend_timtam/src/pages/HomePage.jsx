import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../pages/HomePage.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide <= 60 ? 750 : prevSlide - 250));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide >= 750 ? 0 : prevSlide + 250));
  };

  return (
    <div className="outer">
      <Navbar />
      <section className="first_section">
        <div className="left">
          <div className="up">
            <h1>
              Bangun Rasa <br />
              Semangatmu Dengan <br />
              Bangun Pagi Setiap Hari!
            </h1>
          </div>
          <div className="down">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              molestiae quae obcaecati fuga autem amet dolor, praesentium
              doloremque ea vitae unde facilis nulla quo? Est expedita debitis
              asperiores nihil molestias.
            </p>
            <Link to="/about" className="our_story">
              Our Story
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="../../assets/hero.png" alt="" />
        </div>
      </section>

      <section className="second_section">
        <h1>Our Features</h1>
        <p>Below are our features that will make you even better than before</p>
        <div className="carousel_container">
          <div
            className="carousel_items"
            style={{ transform: `translateX(-${currentSlide}px)` }}
          >
            <img src="../../assets/screening.png" alt="" />
            <img src="../../assets/chat.png" alt="" />
            <img src="../../assets/community.png" alt="" />
            <img src="../../assets/games.png" alt="" />
            <img src="../../assets/studies.png" alt="" />
            <img src="../../assets/improvement.png" alt="" />
            <img src="../../assets/journal.png" alt="" />
          </div>
        </div>
        <div className="btns">
          <button className="btn prev_btns" onClick={handlePrevClick}>
            prev
          </button>
          <button className="btn next_btns" onClick={handleNextClick}>
            next
          </button>
        </div>
      </section>

      <section className="third_section">
        <div className="third_container">
          <div className="header">
            <p>
              Below are our features that will make you even better than before
            </p>
            <h1>
              How To Deal With Anxiety <br /> In A Fun Way
            </h1>
          </div>
          <div className="points">
            <div className="third_left">
              <ul>
                <li>
                  <p>
                    When someone is experiencing stress or anxiety, their brain
                    often gets stuck on the problems causing them stress.
                    Playing games can help relieve the tension in the brain and
                    distract from those problems, helping to reduce stress and
                    anxiety.
                  </p>
                </li>
                <li>
                  <p>
                    Playing challenging games and successfully completing levels
                    or missions can give a sense of satisfaction and stimulate
                    dopamine hormones in the brain. This can help increase
                    confidence and provide a sense of achievement, helping to
                    reduce anxiety and improve mental well-being.
                  </p>
                </li>
                <li>
                  <p>
                    Playing challenging games and successfully completing levels
                    or missions can give a sense of satisfaction and stimulate
                    dopamine hormones in the brain. This can help increase
                    confidence and provide a sense of achievement, helping to
                    reduce anxiety and improve mental well-being.
                  </p>
                </li>
              </ul>
              <div className="third_btn">
                <Link to="/about">
                  <button>See More</button>
                </Link>
              </div>
            </div>

            <div className="third_right">
              <div className="third_images">
                <div className="img_left">
                  <img src="../../assets/home_big.png" alt="" />
                </div>
                <div className="img_right">
                  <img src="../../assets/home_1.png" alt="" />
                  <img src="../../assets/home_2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth_section">
        <div className="fourth_hero">
          <img src="../../assets/four_hero.png" alt="" />
        </div>
        <div className="fourth_content">
          <h1>
            Start Your Journey <br />
            To Better Mental Health <br />
            With Anxiety Test Screening
          </h1>
          <p>
            Our anxiety test screening is designed to provide you with valuable
            insights into your mental health, so you can make informed decisions
            about your care.
          </p>
          <Link className="fourth_btn" to="/about">
            <button>See More</button>
          </Link>
        </div>
      </section>
      <div className="footer_up">
        <div className="footer_content">
          <h1>
            What Are You Waiting For? Let's Join The <br />
            TimTam Community
          </h1>
          <p>
            TimTam hadir dengan konten untuk membantu meningkatkan kontrol diri,
            mengurangi kecemasan dan memberikan saran praktis untuk mengatasi
            gejala-gejala kecemasan.
          </p>
        </div>
        <div className="footer_button">
          <Link to="/about">
            <button>See More</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
