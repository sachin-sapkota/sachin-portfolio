import React from 'react';
import { motion, useScroll } from 'framer-motion';
const LiIcon = ({ reference }: any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });
  return (
    <figure className="absolute -left-4 " style={{ stroke: '#1b1b1b' }}>
      <svg width="80" height="80" viewBox="0 0 100 140">
        <circle
          cx="75"
          cy="50"
          r="28"
          className="stroke-1"
          style={{ stroke: '#B63E96', strokeWidth: '1px', fill: 'none' }}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="28"
          style={{
            fill: '#f5f5f5',
            strokeWidth: '5px',
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="13"
          className="animate-pulse"
          style={{ fill: '#B63E96' }}
        />
      </svg>
    </figure>
  );
};

export default LiIcon;

// <figure className="absolute left-0 stroke-1 stroke-dark">
//   <svg width="75" height="75" viewBox="0 0 100 100">
//     <circle cx="75" cy="50" r="20" className="stroke-1 stroke-current" />
//     <circle cx="75" cy="50" r="20" className="stroke-2 text-transparent" />
//     <circle cx="75" cy="50" r="20" />
//   </svg>
// </figure>
