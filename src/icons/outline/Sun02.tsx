import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSun02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 13.028a5 5 0 0 1 10 0m-5-10v2m-10 8h2m16 0h2M4.93 5.958l1.414 1.414m11.312 0 1.415-1.415M3 17.713l1.5-.777a3.26 3.26 0 0 1 3 0c.94.487 2.06.487 3 0a3.26 3.26 0 0 1 3 0l.056.029c.913.473 1.99.505 2.93.088l.179-.08a3.79 3.79 0 0 1 3.54.246l.795.494m-4.514 2.998a3.38 3.38 0 0 1-2.93-.088l-.056-.03a3.26 3.26 0 0 0-3 0 3.26 3.26 0 0 1-3 0"
    />
  </svg>
);
export default SvgSun02;
