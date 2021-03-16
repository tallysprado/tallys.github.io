import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Jquery from "jquery";
import $ from "jquery";

import {
  TransitionGroup,
  Transition,
  CSSTransition,
} from "react-transition-group";

import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const buttons = ["Início", "Sobre mim", "Contato"];
const icons = [faWhatsapp, faGithub, faLinkedin];
const Buttons = (props) => {
  return (
    <div {...props} className="buttons">
      {buttons.map((button) => (
        <button>{button}</button>
      ))}
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <div {...props} className="presentation">
        <img src="/perfil.jpeg" height={150} width={150} className="image" />
        <h1>&#60; Tallys Prado /&#62;</h1>
        <p>
          <i>Coding made simple.</i>
        </p>
      </div>
      <Buttons {...props} />
    </>
  );
};

const Links = (props) => {
  return (
    <div {...props} id='links' className="links">
      {icons.map((icon) => (
        <FontAwesomeIcon
          size="2x"
          color="#f2a365"
          className="icon"
          icon={icon}
        />
      ))}
    </div>
  );
};

function growAnimation(document, animationPercentage) {
  const animationDecimal = animationPercentage / 100;

  // Your existing .grow CSS values
  const startPositionPercent = 50; // top/left at start of animation
  const finishSizePercent = 300; // width/height at end of animation
  const finishPositionPercent = -100; // top/left at end of animation

  // The current CSS values, based on how far the user has scrolled
  const currentSizePercent = getProgressFromTo(0, finishSizePercent, animationDecimal);
  const currentPositionPercent = getProgressFromTo(startPositionPercent, finishPositionPercent, animationDecimal);

  $(document).ready(function() {
    $(".links").css({
      zIndex: 5000,
      top: `${currentPositionPercent+20}%`,
    });
  })
  
}

// A util function to get the progress between two values
// e.g. 50% between 0 and 10 is 5
function getProgressFromTo(from, to, animationDecimal) {
  return from + (to - from) * animationDecimal;
}

export default function Menu() {
  const [isOpen, setOpen] = useState(true);
  const [windowOffset, setWindowOffset] = useState();
  
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = function () {
        const currentScrollPosition = window.pageYOffset;
        const h = Math.min(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        const index = parseInt((currentScrollPosition + 0.25 * h) / h);
        if (index == 0) {
          setOpen(true);
        } else {
          setOpen(false);
        }
        setWindowOffset(Math.min(100 / currentScrollPosition, 1));
      };

      const scrollTop = $(window).scrollTop();
      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      growAnimation(document, scrollPercent)
    }
  });

  /*
  return (
    <TransitionGroup className="menu">
      <CSSTransition
      key={0}
      timeout={1000}
      classNames='fade'
      >
        <FadeMenu in={isOpen} />
      </CSSTransition>
    </TransitionGroup>
  );
  */
  return (
    <div id="menu" className="menu">
      <Header style={{ opacity: windowOffset < 0.2 ? "0" : windowOffset }} />
      <Links />
    </div>
  );
}
