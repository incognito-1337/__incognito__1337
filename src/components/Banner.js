import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/uwu.jfif";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50 - Math.random() * 25);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI Developer", "Python Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`I am incognito__1337,    `} <span className="txt-rotate" dataPeriod="2000" data-rotate='[ "Web Developer", "Python Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Welcome to my portfolio! I am a passionate coder who started my journey at the age of 10. I have developed proficiency in Python and HTML/CSS/JS over the years and have applied my skills to create a variety of exciting projects.

My portfolio features some of the exploits I have created, which demonstrate my ability to solve complex problems through creative thinking and programming expertise. These projects have helped me hone my skills and expand my knowledge of different programming languages.

As you browse through my portfolio, you will see the diverse range of projects I have worked on, showcasing my versatility in coding. From web development to game development, my portfolio demonstrates my ability to tackle different kinds of problems and produce high-quality results.

I am constantly learning and expanding my skills, and I believe that my portfolio is a reflection of my dedication to my craft. Whether you are a fellow programmer or someone interested in technology, I hope that my portfolio will inspire you and showcase the endless possibilities of coding.





</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{ borderRadius: "50%" }} />

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
