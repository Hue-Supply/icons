import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogin07 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.07 12-4.269 3.867M15.071 12 10.8 8.133M15.071 12H3m1.516-5a9 9 0 1 1 0 10"
    />
  </svg>
);
export default SvgLogin07;
