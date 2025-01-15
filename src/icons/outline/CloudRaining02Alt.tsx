import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining02Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.182 15.451A4.28 4.28 0 0 1 6.28 7.44h.183c.02 0 .037-.016.037-.037C6.5 4.422 8.967 2 11.947 2 14.984 2 17.5 4.462 17.5 7.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 0 1 1.882 6.451m-7.765-2.083L10.178 22m6.523-8.632-1.865 6.6m-6.303-6.6-1.865 6.6"
    />
  </svg>
);
export default SvgCloudRaining02Alt;
