import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBall01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12H2m20 0a9.97 9.97 0 0 1-2.994 7.135M22 12a9.97 9.97 0 0 0-3.001-7.143M2 12a9.97 9.97 0 0 1 3.002-7.143M2 12a9.97 9.97 0 0 0 3.001 7.143M18.998 4.857A9.97 9.97 0 0 0 16 12a9.96 9.96 0 0 0 3.006 7.135m-.008-14.278A9.97 9.97 0 0 0 12 2a9.97 9.97 0 0 0-6.998 2.857m14.004 14.278A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-6.999-2.857m0 0A9.97 9.97 0 0 0 8 12a9.97 9.97 0 0 0-2.998-7.143"
    />
  </svg>
);
export default SvgBall01;
