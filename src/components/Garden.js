import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const rewardItems = [
    '🦄', '🌈', '🎀', '🧚', '🦋', '🌺', '🍭', '🎠', '🌟', '🧁',
    '🐱', '🐶', '🦄', '🎈', '🎁', '👑', '🧸', '🪄', '🌻', '🍦',
      '👗', '👠', '🩰', '👒', '👜', '💄', '💍', '🎨', '📚', '🎵',
    '🎤', '🎭', '🌸', '🌼', '💫', '👸', '🧜‍♀️', '🌷', '🎻', '📔',
    '🍒', '🌕', '🏰', '👓', '🕶', '🐞', '🌈', '🍓', '🎠', '🌟',
    '🌿', '🍄', '👽', '👟', '🧶', '🕯', '🛍', '🖼', '🧵', '🛳',
    '🌱', '🏞', '🪁', '🪀', '🧩', '🚀', '🎈', '🎏', '🎀', '🧚',
    '🍉', '🐬', '🦩', '🥥', '🍍', '🦜', '🌴', '🌺', '🌊', '🏖',
    '🍩', '🍰', '🍫', '🍬', '🥤', '🍼', '🍟', '🍕', '🍿', '🍳',
    '🧁', '🍪', '🍨', '🥧', '🧋', '🥳', '🎉', '🎊', '🎀', '🎁',
    '🎡', '🎢', '🚗', '🚌', '🚜', '🛵', '🚲', '🛼', '🪂', '🎠'
  ];

const Reward = ({ item, delay }) => {
  const props = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    delay,
  });

  return (
    <animated.div style={props} className="reward-item">
      {item}
    </animated.div>
  );
};

function Garden({ score }) {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (score > rewards.length) {
      const newRewards = [...rewards];
      for (let i = rewards.length; i < score; i++) {
        const randomItem = rewardItems[Math.floor(Math.random() * rewardItems.length)];
        newRewards.push(randomItem);
      }
      setRewards(newRewards);
    }
  }, [score, rewards]);

  return (
    <div className="garden">
      {rewards.map((item, i) => (
        <Reward key={i} item={item} delay={i * 100} />
      ))}
    </div>
  );
}

export default Garden;