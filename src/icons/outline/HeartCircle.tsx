import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.123 8.772c-.047.051-.07.076-.094.085a.1.1 0 0 1-.065 0c-.024-.009-.048-.034-.095-.085-1.095-1.185-2.82-1.466-4.127-.316a3.393 3.393 0 0 0-.484 4.608c.6.794 2.022 2.184 3.153 3.25.539.508.808.762 1.139.865.281.087.611.087.893 0 .33-.103.6-.357 1.139-.865 1.13-1.066 2.552-2.456 3.152-3.25 1.068-1.414.9-3.426-.483-4.608-1.33-1.138-3.034-.868-4.128.316Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeartCircle;
