import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDroplets01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11.282 2.74c.235-.412.353-.618.507-.687a.52.52 0 0 1 .423 0c.154.069.272.275.507.687l4.646 8.13c.56.981.966 2.042 1.203 3.146.881 4.104-2.247 7.976-6.446 7.976h-.244c-4.198 0-7.327-3.872-6.445-7.976a11 11 0 0 1 1.202-3.145z"
    />
  </svg>
);
export default SvgDroplets01;
