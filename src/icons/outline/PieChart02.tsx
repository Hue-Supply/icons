import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPieChart02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.42 17.5A9.5 9.5 0 1 0 17.5 4.42m-8.327-.659a10 10 0 0 1 1.45-.474c.618-.152.926-.227 1.325-.102.302.094.672.385.836.656C13 4.198 13 4.599 13 5.4v5.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.58.163H5.4c-.802 0-1.202 0-1.56-.216a1.72 1.72 0 0 1-.656-.836c-.125-.399-.05-.708.102-1.325A10 10 0 0 1 9.173 3.76"
    />
  </svg>
);
export default SvgPieChart02;
