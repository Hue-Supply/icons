import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPin05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 12.375c3.532.694 6 2.28 6 4.125 0 2.485-4.477 4.5-10 4.5S2 18.985 2 16.5c0-1.845 2.468-3.431 6-4.126M12 16V8m0 0h7l-1.321-2.642a1 1 0 0 1-.111-.266.5.5 0 0 1 0-.184c.012-.069.045-.135.11-.266L19 2h-7z"
    />
  </svg>
);
export default SvgMarkerPin05;
