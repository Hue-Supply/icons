import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.743 4.195c1.148-1.062 1.723-1.592 2.375-1.793a3 3 0 0 1 1.764 0c.652.2 1.227.731 2.375 1.793L18.943 7.6c.758.7 1.137 1.05 1.408 1.467a4 4 0 0 1 .527 1.204c.122.482.122.998.122 2.03v3.9c0 1.68 0 2.52-.327 3.161a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2v-3.9c0-1.031 0-1.547.122-2.03a4 4 0 0 1 .527-1.203c.271-.417.65-.767 1.408-1.467z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12.846a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgHome05;
