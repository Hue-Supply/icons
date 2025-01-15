import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins09 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 2h4.85c.678 0 1.017 0 1.543.146.321.09 1.024.43 1.293.628.44.323.53.437.711.667C19.985 5.457 21 8.542 21 12s-1.015 6.543-2.603 8.56c-.18.229-.27.343-.71.666-.27.197-.973.538-1.294.628-.526.146-.865.146-1.542.146H10m6-10c0 5.523-2.91 10-6.5 10S3 17.523 3 12 5.91 2 9.5 2 16 6.477 16 12"
    />
  </svg>
);
export default SvgCoins09;
