import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeat02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9 2 3.504 3.504L9 9.008m4.004 13.5L9.5 19.004l3.504-3.504m-.504-10H5a3 3 0 0 0-3 3V16a3 3 0 0 0 3 3m6.5 0h5.7c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2v-3.9c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 5.5 18.88 5.5 17.2 5.5H17"
    />
  </svg>
);
export default SvgRepeat02;
