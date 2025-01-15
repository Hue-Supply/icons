import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTiktok = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.343 7.38c.643.318.964.477 1.089.575.346.275.442.43.535.861.033.156.033.387.033.85v0c0 .492 0 .739-.097.994-.186.496-.825.953-1.355.97-.273.009-.44-.048-.776-.163A10 10 0 0 1 16 10v4.5A6.5 6.5 0 1 1 5.313 9.527c.418-.353.627-.529 1.159-.539.365-.006.964.272 1.193.556.335.413.335.83.335 1.666v.09c0 .204 0 .306-.013.406-.025.185-.003.085-.06.262-.031.095-.248.547-.681 1.45a2.5 2.5 0 0 0-.236 1.307A2.5 2.5 0 0 0 12 14.5V5.213c0-.664 0-.996.103-1.26a1.5 1.5 0 0 1 .85-.85C13.217 3 13.549 3 14.213 3v0c.553 0 .83 0 1.019.05.36.096.473.165.724.44.131.145.327.522.72 1.276a6 6 0 0 0 2.667 2.614"
    />
  </svg>
);
export default SvgTiktok;
