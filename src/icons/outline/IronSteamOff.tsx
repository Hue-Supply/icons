import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIronSteamOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 7.339h7.5m0 0 1.085 4.656c.313 1.341.469 2.012.3 2.539a2 2 0 0 1-.876 1.103M20.5 7.339l-.424-1.818c-.205-.883-.308-1.325-.55-1.654a2 2 0 0 0-.83-.66c-.375-.16-.829-.16-1.736-.16H9m6.5 12.875H4.914c-2.224 0-3.488-2.544-2.146-4.317A10.76 10.76 0 0 1 7.5 8.052M12 22v-2.63m-5.143 1.644L8.5 19.371M2 2l20 20"
    />
  </svg>
);
export default SvgIronSteamOff;
