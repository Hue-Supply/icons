import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSnowflake01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5v14m0-14 4-3m-4 3L8 2m4 17 4 3m-4-3-4 3M5 12h14M5 12 2 8m3 4-3 4m17-4 3-4m-3 4 3 4m-6.457-.458L8.458 8.458m7.085 7.084.305 2.731m-.305-2.73 2.73.305m-9.815-7.39-2.73-.306m2.73.306-.305-2.73m7.39 2.73-7.085 7.084m7.084-7.084 2.731-.306m-2.73.306.305-2.73m-7.39 9.814-.305 2.73m.305-2.73-2.73.306"
    />
  </svg>
);
export default SvgSnowflake01;
