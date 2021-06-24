import React from 'react'
// import ParticleBackground from './particle';
import './spons.scss';
import './button.scss';
import Astra from './Astra.svg'
import Atlasian from './Atlasian.svg'
import Boeing from './Boeing.svg'
import CAT from './CAT.svg'
import KLA from './KLA.svg'
import Mahindra from './Mahindra.svg'
import Salesforces from './Salesforce.svg'
import Wells from './Wells_Fargo.svg';
import foxmula from './foxmula.png';
import innovaccer from './innovaccer.png';
import kamal from './kamal_wears.png';
import LT from './L&T.jpg';
import mtx from './mtx.png';
import subex from './subex.png';
import surana from './surana.png';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CustomBox from '../shared/CustomBox';

var script = document.createElement('script');

script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideToggle("slow");
//     });
//   });

function Spons() {

    return (
        <>
            <CustomBox>
            <Header /><br />
            <br />
            <br/>
            <br/>
            <br/>
            <a href="#google"></a>
            <div id="google"></div>
            <button title="mitesh" id="flip" className="fill">More Info</button>
            {/* <h1 className="ourspons">Our trustable Sponsors</h1> */}
            {/* <p className="text11">Shaastra, ever since it's conception has been growing by leaps and bounds and this wouldn't have been achieved without the support of the student community and our corporate partners. We are continuously on the look out for long-term and mutually beneficial associations with reputed organizations from around the globe. In case your organization shares and believes in Shaastra’s vision, we would love to work out an association. We always welcome ideas, queries and criticism of any kind and hence, do feel free to contact us.</p> */}
            <br />
            <br />
            <br />

            <div className="card__collection clear-fix">
                <div className="cards cards--three">
                    <img src={Astra} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={Atlasian} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={Boeing} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={CAT} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={KLA} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={Mahindra} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={Salesforces} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={foxmula} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={innovaccer} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={kamal} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={LT} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={mtx} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={subex} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={surana} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

                <div className="cards cards--three">
                    <img src={Wells} className="img-responsive" alt="" />
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p className="text">MTX</p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>

            </div>
            <br />
            <br />

            <div className="tooltip">

                <button id="flip" className="fill">Approach Us</button>
                <span className="tooltiptext">sponsorship@shaastra.org<br />Nithish Venkatesh - 7200939339<br />Anand Logesh RR - 7358232804</span>
            </div>
            <br />
            <br />
            <p id="about">About Us</p><br/><br/>
            <p className="boxx">Shaastra, ever since it's conception has been growing by leaps and bounds and this wouldn't have been achieved without the support of the student community and our corporate partners. We are continuously on the look out for long-term and mutually beneficial associations with reputed organizations from around the globe. In case your organization shares and believes in Shaastra’s vision, we would love to work out an association. We always welcome ideas, queries and criticism of any kind and hence, do feel free to contact us.</p>
            <br />
            <br />

            <Footer/>
            </CustomBox>
        </>
    )
}

export default Spons