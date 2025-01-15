import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBleach = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.877 5.139c.697-1.208 1.045-1.812 1.5-2.015.398-.176.851-.176 1.248 0 .455.203.804.807 1.501 2.014l7.034 12.183c.697 1.208 1.046 1.812.994 2.308a1.53 1.53 0 0 1-.624 1.08c-.403.293-1.1.293-2.495.293H4.967c-1.394 0-2.091 0-2.494-.293a1.53 1.53 0 0 1-.624-1.08c-.052-.496.296-1.1.994-2.308z"
    />
  </svg>
);
export default SvgBleach;
