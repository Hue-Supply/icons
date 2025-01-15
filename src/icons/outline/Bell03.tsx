import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBell03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.98 17.981a2.98 2.98 0 1 1-5.96 0M11.79 2.135h.575a5.48 5.48 0 0 1 5.091 3.446c.413 1.032.707 2.108.876 3.207l.443 2.88a6.08 6.08 0 0 0 1.71 3.373c.956.957.278 2.593-1.075 2.593H4.744c-1.353 0-2.031-1.636-1.074-2.593a6.08 6.08 0 0 0 1.709-3.373l.443-2.88c.17-1.099.463-2.175.876-3.207a5.48 5.48 0 0 1 5.09-3.446"
    />
  </svg>
);
export default SvgBell03;
