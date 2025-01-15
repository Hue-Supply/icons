import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsb = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 6v1m4-1v1m3.418 5V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C16.28 2 15.86 2 15.02 2H8.982c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581V12zM10 20h4v2h-4zm.628 0h2.744c.664 0 .995 0 1.275-.031a5 5 0 0 0 4.408-4.41c.032-.278.032-.61.032-1.273 0-.266 0-.398-.013-.51a2 2 0 0 0-1.763-1.763C17.199 12 17.066 12 16.8 12H7.2c-.266 0-.398 0-.51.013a2 2 0 0 0-1.763 1.763c-.013.112-.013.244-.013.51 0 .663 0 .995.032 1.274a5 5 0 0 0 4.408 4.409c.28.031.611.031 1.274.031"
    />
  </svg>
);
export default SvgUsb;
