import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import "../pages/Games.css"
import { FaStar} from 'react-icons/fa';

const Games = () =>{
    return (
        <body>
            <div className="outer_games">
                <div className="outer_navbar_games">
                <Navbar/>
                </div>
                <section className="first_section_games"></section>
                <section className="second_section_games">
                    <div className="second_content_games">
                        <div className="title_games">
                        <h3 className="exclusive">Exclusive</h3>
                        <h3 className="gam">Games</h3>
                        </div>
                        <button className="see_all">SEE ALL</button>
                        <div className="second_container_card">
                            <div className="card_games">
                                <img src="../../assets/karen game.png" alt="" />
                                <h4>Karen</h4>
                                <p>If you are longing for San Francisco.</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/electricity-bill png.png" alt="" />
                                <h4>Electricity Bill</h4>
                                <p>Keep the power on</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/ai-gone-astray 1.png" alt="" />
                                <h4>A.I. Gone Astray</h4>
                                <p>Defeat the evil robots.</p>
                                <p className="rating">Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/pro-wrestling-action 1.png" alt="" />
                                <h4>Pro Wrestling Action</h4>
                                <p>Are YOU ready for the Royal Rumble?</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="second_content_games">
                        <div className="title_games">
                        <h3 className="exclusive">Room</h3>
                        <h3 className="gam">Escape</h3>
                        </div>
                        <button className="see_all">SEE ALL</button>
                        <div className="second_container_card">
                            <div className="card_games">
                                <img src="../../assets/lifespan-candle 1.png" alt="" />
                                <h4>Lifespan Candle</h4>
                                <p>Help a candle burn wood</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/coco-monkey 1.png" alt="" />
                                <h4>Coco Monkey</h4>
                                <p>Monkey goes nuts, with coconuts</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/heatwave-antarctica 1.png" alt="" />
                                <h4>Heatwave Antarctica</h4>
                                <p>Help me, I’m melting!</p>
                                <p className="rating">Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                            <div className="card_games">
                                <img src="../../assets/plug-me 1.png" alt="" />
                                <h4>Plug Me</h4>
                                <p>Harness the power of power</p>
                                <p>Rating</p>
                                <div className="star">
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                <FaStar className = "FaStar"/>
                                </div>
                                <button className="btn_play">Play</button>
                            </div>
                        </div>
                    
                    </div>
                    <div className="marginaja"></div>
                </section>
            </div>
            
            <Footer/>
        </body>
    );
};

export default Games;