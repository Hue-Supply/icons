import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPinOff02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18 5.708A8 8 0 0 0 4 11c0 2.42 1.108 4.562 2.5 6.298M19.938 10q.062.492.062 1c0 4.96-4.659 8.756-6.866 10.276-.34.233-.51.35-.776.416-.2.05-.517.05-.716 0-.267-.066-.438-.183-.78-.418-.257-.178-.549-.387-.862-.625m-7.5.851 19-19"
    />
  </svg>
);
export default SvgMarkerPinOff02;
