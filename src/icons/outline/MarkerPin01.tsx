import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPin01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 11c0 4.96-4.659 8.756-6.866 10.276-.34.233-.51.35-.776.416-.2.05-.517.05-.716 0-.267-.066-.436-.183-.776-.416C8.659 19.756 4 15.96 4 11a8 8 0 1 1 16 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.598 11a2.598 2.598 0 1 1-5.196 0 2.598 2.598 0 0 1 5.196 0"
    />
  </svg>
);
export default SvgMarkerPin01;
