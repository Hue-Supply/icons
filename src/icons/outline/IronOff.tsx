import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIronOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m20.5 9.5 1.235 6.172M20.501 9.5h-5.454m5.454 0-.486-2.428c-.183-.916-.275-1.374-.514-1.717a2 2 0 0 0-.839-.688c-.383-.167-.85-.167-1.785-.167h-6.742m-.739 5.4a11.9 11.9 0 0 0-6.911 5.009C1.2 16.886 2.619 19.5 4.977 19.5h14.09M2 2l20 20"
    />
  </svg>
);
export default SvgIronOff;
