import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPinX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m9.6 8.867 2.4 2.4m0 0 2.4 2.401m-2.4-2.4 2.4-2.4m-2.4 2.4-2.4 2.4M20 11c0 4.96-4.659 8.756-6.866 10.276-.34.233-.51.35-.776.416-.2.05-.517.05-.716 0-.267-.066-.436-.183-.776-.416C8.659 19.756 4 15.96 4 11a8 8 0 1 1 16 0Z"
    />
  </svg>
);
export default SvgMarkerPinX;
