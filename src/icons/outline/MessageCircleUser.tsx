import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleUser = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 16.538s.444-2.908 4-2.908 4 2.908 4 2.908M21 12a9 9 0 0 1-10.708 8.838c-.778-.15-1.168-.224-1.35-.237a2.2 2.2 0 0 0-.486.007c-.182.017-.402.065-.843.162l-1.504.33c-1.347.294-2.02.442-2.468.244a1.5 1.5 0 0 1-.821-.91c-.151-.466.064-1.12.495-2.43l.023-.069c.2-.608.3-.913.338-1.164.047-.311.049-.36.025-.674-.02-.253-.157-.805-.433-1.909A9 9 0 1 1 21 12m-6.75-3.389a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
    />
  </svg>
);
export default SvgMessageCircleUser;
