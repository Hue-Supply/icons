import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBank = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6.95c0-.423 0-.635.072-.815a1 1 0 0 1 .3-.405c.15-.121.352-.184.757-.308l6.93-2.132c.35-.108.525-.162.703-.183q.238-.03.476 0c.178.021.353.075.703.183l6.93 2.132c.405.124.608.187.758.308a1 1 0 0 1 .299.405c.072.18.072.392.072.816V7.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 9 19.96 9 19.4 9H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 8.24 3 7.96 3 7.4zM3 18.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 17 4.04 17 4.6 17h14.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 17.76 21 18.04 21 18.6v.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 21 19.96 21 19.4 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4zM14 9h5v8h-5zM5 9h5v8H5z"
    />
  </svg>
);
export default SvgBank;
