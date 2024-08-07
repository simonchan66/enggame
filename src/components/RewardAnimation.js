import React from 'react';
import { useSpring, animated } from 'react-spring';

function RewardAnimation({ item }) {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={props} className="reward-animation">
      {item} Correct! {item}
    </animated.div>
  );
}

export default RewardAnimation;