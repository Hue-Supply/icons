import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSend0505 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 12H5.515M4.203 3.163l16.816 7.456c1.19.527 1.19 2.215 0 2.742L4.203 20.817c-1.29.572-2.584-.792-1.945-2.05l3.094-6.098a1.5 1.5 0 0 0 0-1.358L2.258 5.213c-.639-1.258.655-2.622 1.945-2.05"
    />
  </svg>
);
export default SvgSend0505;
