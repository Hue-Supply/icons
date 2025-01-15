import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSignLeft = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 20v-7m0-9V2M9 21h6M4.355 6.931l1.813-2.1c.264-.305.396-.458.556-.568a1.5 1.5 0 0 1 .466-.214C7.378 4 7.58 4 7.984 4H17.6c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v4.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.58.163H7.983c-.404 0-.606 0-.794-.05a1.5 1.5 0 0 1-.466-.213c-.16-.11-.292-.263-.556-.569l-1.813-2.1c-.48-.556-.721-.834-.813-1.146a1.5 1.5 0 0 1 0-.844c.092-.312.332-.59.813-1.147"
    />
  </svg>
);
export default SvgSignLeft;
