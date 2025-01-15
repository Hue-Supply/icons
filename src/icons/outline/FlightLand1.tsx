import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlightLand1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.523 12.914 9.5 17.5l-2.64 1.551c-.26.154-.39.23-.493.33a1.2 1.2 0 0 0-.334.582c-.033.139-.033.29-.033.593 0 .559 0 .839.086 1.053a1.2 1.2 0 0 0 .79.71c.223.062.5.032 1.057-.028L12 21.85l4.067.44c.556.06.834.09 1.057.027a1.2 1.2 0 0 0 .79-.709c.086-.214.086-.494.086-1.053 0-.303 0-.454-.033-.593a1.2 1.2 0 0 0-.334-.583c-.102-.098-.233-.175-.494-.329L14.5 17.5l.024-4.586 5.418 2.174A1.5 1.5 0 0 0 22 13.696v-.934a1.5 1.5 0 0 0-.727-1.286l-6.75-4.062V4.5a2.5 2.5 0 0 0-5 0v2.914l-6.75 4.063a1.5 1.5 0 0 0-.727 1.285v.934a1.5 1.5 0 0 0 2.058 1.392z"
    />
  </svg>
);
export default SvgFlightLand1;
