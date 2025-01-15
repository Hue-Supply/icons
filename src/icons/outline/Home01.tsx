import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.743 4.194c1.148-1.06 1.723-1.591 2.375-1.792a3 3 0 0 1 1.764 0c.652.2 1.227.731 2.375 1.792L18.943 7.6c.758.7 1.137 1.05 1.408 1.467a4 4 0 0 1 .527 1.203c.122.483.122.999.122 2.03v3.9c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2v-3.9c0-1.031 0-1.547.122-2.03a4 4 0 0 1 .527-1.203c.271-.417.65-.767 1.408-1.467z"
    />
  </svg>
);
export default SvgHome01;
