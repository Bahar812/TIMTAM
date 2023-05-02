import React, { useState } from "react";
import "../components/TestScreening.css";
import { useNavigate } from "react-router-dom";

const TestScreening = () => {
  const questions = [
    "Apakah Anda merasa cemas atau khawatir sepanjang waktu?",
    "Apakah Anda merasa sulit untuk mengontrol perasaan cemas Anda?",
    "Apakah Anda merasa sangat khawatir tentang hal-hal yang mungkin terjadi di masa depan?",
    "Apakah Anda merasa takut untuk melakukan hal-hal yang sebelumnya Anda nikmati?",
    "Apakah Anda merasa ketakutan yang tidak dapat dijelaskan?",
    "Apakah Anda merasa kesulitan untuk tidur atau merasa terbangun terlalu sering?",
    "Apakah Anda merasa mudah tersinggung, lelah, atau mudah merasa tegang?",
    "Apakah Anda merasa gelisah atau seringkali tidak bisa diam?",
    "Apakah Anda merasa takut kehilangan kendali atau menjadi gila?",
    "Apakah Anda merasa memiliki gejala fisik seperti sakit kepala, sakit perut, atau detak jantung yang cepat?",
    "Apakah kekhawatiran Anda mengganggu aktivitas sehari-hari dan hubungan sosial?",
    "Apakah perasaan cemas Anda merespon kejadian-kejadian tertentu atau muncul tanpa sebab yang jelas?",
    "Apakah Anda merasa cemas secara berkelanjutan selama lebih dari enam bulan?",
    "Apakah Anda mengalami perubahan suasana hati atau gangguan pada pola makan dan berat badan?",
    "Apakah Anda merasa lebih sensitif terhadap suara, cahaya, atau bau daripada sebelumnya?",
  ];

  const navigate = useNavigate();

  const[question, setQuestion] = useState(0)
  const[percentage, setPercentage] = useState(0)
  const[width, setWidth] = useState(0)
  const nextQuestion = () => {
    setPercentage(Math.floor((question * 100)/15))
    setWidth(percentage)
    setQuestion(question + 1)
    if (question === 14) {
      navigate("/")
    }
  }

  return (
    <div className="test-screening-container">
      <div className="test-screening-progress-bar">
        <div style={{width: `${width}%`}} className="test-screening-bar">
          <div className="test-screening-bar-percentage">
            <p>{percentage}%</p>
          </div>
        </div>
      </div>

      <div className="test-screening-question-container">
        <h1>{questions[question]}</h1>
      </div>

      <div className="test-screening-btn">
        <button onClick={() => nextQuestion()} className="test-screen-answer-btn">Ya</button>
        <button onClick={() => nextQuestion()} className="test-screen-answer-btn">Tidak</button>
      </div>
    </div>
  );
};

export default TestScreening;
