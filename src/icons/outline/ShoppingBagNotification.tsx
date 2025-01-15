import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBagNotification = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 9.404V6a4 4 0 0 0-8 0v3.404m12.14 2.168-.094-.715c-.193-1.48-.29-2.22-.64-2.778a3 3 0 0 0-1.282-1.125c-.598-.276-1.345-.276-2.838-.276H8.715c-1.493 0-2.24 0-2.837.276a3 3 0 0 0-1.282 1.125c-.351.557-.448 1.297-.64 2.778l-.748 5.722c-.244 1.872-.366 2.808-.076 3.535a3 3 0 0 0 1.32 1.504C5.136 22 6.08 22 7.969 22h4.537M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgShoppingBagNotification;
