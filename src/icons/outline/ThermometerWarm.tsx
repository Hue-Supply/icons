import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometerWarm = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.952 16.363a4.43 4.43 0 0 1 1.426-8.744M11.72 3.14v1.771M2.86 12h1.772m.824-6.265L6.71 6.988M5.457 18.265l1.253-1.253M17.647 2c1.112 0 2.013.901 2.013 2.013v11.558a3.53 3.53 0 1 1-4.026 0V4.013C15.634 2.9 16.535 2 17.647 2"
    />
  </svg>
);
export default SvgThermometerWarm;
