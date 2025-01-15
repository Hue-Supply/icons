import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasCandy01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m4.88 19.814 5.448.767M7.62 16.987l6.302.886m-2.386-3.837 6.302.887m-3.008-3.994 5.3.389m-4.764-3 4.497-1.51m-5.842-.277 1.991-4.004m-4.19 4.409-1.11-4.798m8.205 2.583A7.5 7.5 0 0 0 8.414 3.243a2.5 2.5 0 0 0 3.008 3.994 2.5 2.5 0 0 1 3.008 3.993L5.644 17.85a2.5 2.5 0 0 0 3.009 3.993l8.786-6.618A7.5 7.5 0 0 0 18.917 4.72Z"
    />
  </svg>
);
export default SvgChristmasCandy01;
