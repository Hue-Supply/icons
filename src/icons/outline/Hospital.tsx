import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHospital = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21h18M9.6 9.025h4.8m-2.4-2.4v4.8M19.158 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.31-1.311C16.877 3 16.037 3 14.357 3H9.642c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.327.642-.327 1.482-.327 3.162V21zM14.4 21v-3.811c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.58V21z"
    />
  </svg>
);
export default SvgHospital;
