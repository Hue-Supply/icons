import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBone = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m10.349 10.388 2.389-2.389a3.583 3.583 0 1 1 6.202-2.94A3.583 3.583 0 1 1 16 11.262l-2.388 2.389m-3.224-3.302-2.389 2.389a3.583 3.583 0 1 0-2.94 6.203A3.583 3.583 0 1 0 11.263 16l2.39-2.389"
    />
  </svg>
);
export default SvgBone;
