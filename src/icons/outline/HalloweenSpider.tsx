import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenSpider = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14 7.5V5a2 2 0 1 0-4 0v2.5m6.5 2.5 2.758-3.152A3 3 0 0 0 20 4.873V2m-3 10.5 2.525.947a3 3 0 0 1 1.857 2.081L22 18m-5.5.5 1.2.9a2 2 0 0 1 .8 1.6m-11-11L4.742 6.848A3 3 0 0 1 4 4.873V2m3 10.5-2.525.947a3 3 0 0 0-1.857 2.081L2 18m5.5.5-1.2.9a2 2 0 0 0-.8 1.6m6.5-9.5v2m0 0v4m0-4h2m-2 0h-2m2 7.5a5 5 0 0 1-5-5v-4a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4a5 5 0 0 1-5 5"
    />
  </svg>
);
export default SvgHalloweenSpider;
