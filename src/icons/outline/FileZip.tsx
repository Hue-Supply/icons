import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileZip = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.75 10V9m-1.5-1V7m1.5-1V5m-1.5-1V3M20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8Zm-6.298 8.422c-.465.603-.698.904-.959 1.053a1.5 1.5 0 0 1-1.486 0c-.261-.149-.494-.45-.959-1.053a2 2 0 0 1-.168-.235 1 1 0 0 1-.12-.351c-.01-.07-.01-.143-.01-.29V12.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C10.76 11 11.04 11 11.6 11h.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C14 11.76 14 12.04 14 12.6v1.747c0 .146 0 .219-.01.289a1 1 0 0 1-.12.35c-.035.063-.08.12-.168.236Z"
    />
  </svg>
);
export default SvgFileZip;
