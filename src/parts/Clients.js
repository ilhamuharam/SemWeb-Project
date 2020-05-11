import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";

import Course01 from "assets/images/course01.png";
import Course02 from "assets/images/course02.png";
import Course03 from "assets/images/course03.jpg";
import Course04 from "assets/images/course04.png";
import Course05 from "assets/images/course05.png";

export default function Clients() {
  return (
    <Section className="clients">
      <Fade bottom delay={500}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Course01} alt="Codepolitan" width="100"/>
              </li>
              <li>
                <img src={Course02} alt="Dicoding" width="150"/>
              </li>
              <li>
                <img src={Course03} alt="Sekolah Koding" width="80"/>
              </li>
              <li>
                <img src={Course04} alt="PixelNinja" width="150"/>
              </li>
              <li>
                <img src={Course05} alt="Build With Angga" width="80"/>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
