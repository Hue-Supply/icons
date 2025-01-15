import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAirpodsPro = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m11.5 3-4.527.533c-.414.048-.62.073-.798.11a4 4 0 0 0-3.159 3.552C3 7.375 3 7.584 3 8s0 .624.016.805a4 4 0 0 0 3.16 3.552c.177.037.383.062.797.11L11.5 13m2 1-2.644 4.928c-.745 1.39.262 3.072 1.838 3.072.799 0 1.527-.456 1.876-1.175l3.907-8.046m-3.873-6.172H17M21 8c0 2.416-2.686 6-6 6a6 6 0 0 1 0-12c3.902 0 6 .513 6 6"
    />
  </svg>
);
export default SvgAirpodsPro;
