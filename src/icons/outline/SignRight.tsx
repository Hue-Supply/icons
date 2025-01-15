import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSignRight = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 20v-7m0-9V2M9 21h6m5.646-14.069-1.814-2.1c-.264-.305-.396-.458-.556-.568-.142-.098-.3-.17-.466-.214C17.622 4 17.42 4 17.016 4H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C5 5.139 5 5.559 5 6.4v4.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h9.616c.404 0 .606 0 .794-.05a1.5 1.5 0 0 0 .466-.213c.16-.11.292-.263.556-.569l1.814-2.1c.48-.556.72-.834.812-1.146a1.5 1.5 0 0 0 0-.844c-.092-.312-.332-.59-.812-1.147"
    />
  </svg>
);
export default SvgSignRight;
