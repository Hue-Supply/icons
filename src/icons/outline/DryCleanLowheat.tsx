import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDryCleanLowheat = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m22.002 14.99-7.004 7.005m-5.004-3.997a8 8 0 1 1 0-16 8 8 0 0 1 0 16"
    />
  </svg>
);
export default SvgDryCleanLowheat;
