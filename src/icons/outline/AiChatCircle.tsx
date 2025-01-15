import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiChatCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.889 7.906a6.96 6.96 0 0 1 5.919 8.584c-.17.687-.255 1.031-.273 1.135-.101.583-.098.674.047 1.248.026.102.075.251.173.549.18.545.27.818.28 1.018a1.5 1.5 0 0 1-1.424 1.578c-.2.01-.48-.052-1.042-.175l-.838-.184c-.386-.084-.579-.127-.736-.144-.235-.026-.222-.026-.458-.016-.158.007-.59.071-1.455.2q-.505.075-1.03.075a6.96 6.96 0 0 1-6.874-5.863M15.9 9.004a6.96 6.96 0 0 1-7.99 6.884c-.865-.129-1.297-.193-1.454-.2-.237-.01-.224-.01-.46.016-.156.018-.349.06-.735.144l-.838.184c-.561.123-.842.185-1.042.175a1.5 1.5 0 0 1-1.424-1.578c.01-.2.1-.472.28-1.018.098-.298.147-.446.173-.549.145-.574.148-.664.047-1.247-.018-.105-.103-.448-.273-1.136A6.96 6.96 0 1 1 15.9 9.004m-9.484-.392c.199-.058.298-.087.39-.121A2.85 2.85 0 0 0 8.49 6.806c.034-.092.063-.191.121-.39.037-.127.056-.19.07-.219a.356.356 0 0 1 .637 0c.013.029.032.092.069.219.058.199.087.298.121.39a2.85 2.85 0 0 0 1.685 1.685c.092.034.191.063.39.121.127.037.19.056.219.07a.356.356 0 0 1 0 .636 2 2 0 0 1-.219.07 6 6 0 0 0-.39.121 2.84 2.84 0 0 0-1.685 1.685c-.034.092-.063.191-.121.39-.037.127-.056.19-.07.219a.356.356 0 0 1-.636 0c-.014-.029-.033-.092-.07-.219-.058-.199-.087-.298-.121-.39A2.84 2.84 0 0 0 6.806 9.51a6 6 0 0 0-.39-.121 2 2 0 0 1-.219-.07.356.356 0 0 1 0-.637c.029-.013.092-.032.219-.069"
    />
  </svg>
);
export default SvgAiChatCircle;
