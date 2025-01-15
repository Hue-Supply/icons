import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuilding01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.5 21H22m-2.213-4.16c1.222 0 2.213-1.436 2.213-3.206s-.99-3.204-2.213-3.204c-1.222 0-2.213 1.435-2.213 3.204s.991 3.205 2.213 3.205m0 0V21M6 7h3.5M6 11h3.5M6 15h3.5m3.5 6V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C10.72 3 9.88 3 8.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8V21z"
    />
  </svg>
);
export default SvgBuilding01;
