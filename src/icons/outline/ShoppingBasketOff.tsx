import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBasketOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.75 7.434c-1.504 0-2.256 0-2.817.238a3 3 0 0 0-1.76 2.113c-.131.594.005 1.334.278 2.812l.824 4.473c.258 1.398.387 2.097.744 2.621a3 3 0 0 0 1.264 1.053c.58.256 1.29.256 2.713.256h8.555c.9 0 1.35 0 1.734-.104A3 3 0 0 0 19.738 20M11.999 7.434h5.25c1.504 0 2.256 0 2.817.238a3 3 0 0 1 1.759 2.113c.132.594-.005 1.334-.277 2.812l-.72 3.903m-3.615-6.98L15.71 5.08a3 3 0 0 0-2.841-2.037h-1.735a3 3 0 0 0-2.307 1.082m2.674 7.641a2.5 2.5 0 1 0 2.92 3.08M1.75 2l20 20"
    />
  </svg>
);
export default SvgShoppingBasketOff;
