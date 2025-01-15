import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSliders02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 19H3m18-7h-6m-1-7H3m18 14h-5m0 0v2m0-2v-2m-5-5H3m8 0v2m0-2v-2m10-5h-3m0 0v2m0-2V3"
    />
  </svg>
);
export default SvgSliders02;
