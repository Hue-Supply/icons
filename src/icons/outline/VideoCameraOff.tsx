import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVideoCameraOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 5h8a3 3 0 0 1 3 3v8m-3 3H5a3 3 0 0 1-3-3V8m-.25-6 20 20m.25-7.227V8.885c0-1.372-1.689-2.024-2.61-1.008l-2.524 2.78a1.5 1.5 0 0 0-.054 1.954l2.524 3.108c.89 1.096 2.664.467 2.664-.946"
    />
  </svg>
);
export default SvgVideoCameraOff;
