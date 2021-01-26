import React, { useState } from "react";
import { Transition } from "react-transition-group";

import "./styles.css";

const duration = 3000 * (process.env.TIME_SCALE_FACTOR || 1);

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Post() {
  const [showContent, setShowContent] = useState(true);

  function toggleContent() {
    setShowContent(!showContent);
  }

  return (
    <div>
      <h1>A very interesting title</h1>
      <button onClick={toggleContent}>Toggle content</button>
      <Transition
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        in={showContent}
        timeout={duration}
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <h2>A subtitle</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Post;
