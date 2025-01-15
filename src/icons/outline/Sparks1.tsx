import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSparks1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <g clipPath="url(#sparks-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.063}
        d="M19.817 5.763q.311.39.583.809M16.935 3.3A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.718-.076-1.418-.22-2.093m-13.335.621c.314-.091.47-.137.611-.199a2.45 2.45 0 0 0 1.273-1.273c.062-.14.107-.297.2-.61.233-.799.35-1.198.463-1.362a1.227 1.227 0 0 1 2.016 0c.114.164.23.563.464 1.361.091.314.137.47.199.611.247.57.702 1.026 1.273 1.274.14.06.297.107.61.198.799.234 1.198.35 1.362.464a1.227 1.227 0 0 1 0 2.016c-.164.114-.563.23-1.361.464-.314.091-.47.137-.611.199a2.45 2.45 0 0 0-1.274 1.273 5 5 0 0 0-.198.61c-.234.799-.35 1.198-.464 1.362a1.227 1.227 0 0 1-2.016 0c-.114-.164-.23-.563-.464-1.361a5 5 0 0 0-.199-.611 2.45 2.45 0 0 0-1.273-1.274c-.14-.06-.297-.107-.61-.198-.799-.234-1.198-.35-1.362-.464a1.227 1.227 0 0 1 0-2.016c.164-.114.563-.23 1.361-.464Z"
      />
    </g>
    <defs>
      <clipPath id="sparks-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSparks1;
