import './About.scss';

const About: React.FC = () => {
  return (
    <section className="landingAbout">
      <div className="abtsub">
        <h4>Lorem</h4>
        <p>subtitle</p>
      </div>

      <div className="stackimages">
        {[
          { imgSrc: "assets/images/slide1.png", number: "01" },
          { imgSrc: "assets/images/slide2.png", number: "02" },
          { imgSrc: "assets/images/slide3.png", number: "03" },
        ].map((item, idx) => (
          <div key={idx}>
            <div>
              <img src={item.imgSrc} alt="aboutimg" />
            </div>
            <div className="stackimgcont">
              <div><p>{item.number}</p></div>
              <div><p>Lorem ipsum dolor sit.</p></div>
              <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
            </div>
          </div>
        ))}
      </div>

      <div className="abtdiv">
        <div className="aboutsec">
          <div>
            <img src="assets/images/abtimg.png" alt="abtimg" className="abtimg" />
          </div>

          <div>
            <div className="abtflex">
              <div className="abtcont">
                <div className="abtconth4div">
                  <h4>Lorem, ipsum.</h4>
                </div>
                <div className="abtimgmob">
                  <img src="assets/images/abtimg.png" alt="abtimg" className="abtimgmobdev" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <a href="#">
                  <p>
                    Lorem, ipsum{' '}
                    <span>
                      <img src="assets/images/arrow.svg" alt="arrow" className="arrowimg" />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
