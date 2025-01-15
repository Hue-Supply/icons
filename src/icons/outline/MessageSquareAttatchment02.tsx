import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareAttatchment02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 10.376V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.221.113.466.187.761.235.494.081.74.121.876.18.383.165.589.406.69.812.035.143.035.33.035.703 0 .578 0 .867.072 1.065a1.2 1.2 0 0 0 1.239.785c.21-.02.471-.142.994-.389l1.194-.563m7.993-1.952-3.17-3.17a1.488 1.488 0 1 1 2.104-2.104l3.158 3.158a3 3 0 1 1-4.242 4.243l-2.122-2.122"
    />
  </svg>
);
export default SvgMessageSquareAttatchment02;
