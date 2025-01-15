import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPin03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 12.375c3.532.694 6 2.28 6 4.125 0 2.485-4.477 4.5-10 4.5S2 18.985 2 16.5c0-1.845 2.468-3.431 6-4.126M12 16V8m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgMarkerPin03;
