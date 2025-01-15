import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHurricane012 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21.96 7.108-.54-.518c-1.204-1.154-2.99-1.217-4.26-.151a3.14 3.14 0 0 1-4.093 0l-.07-.06a3.246 3.246 0 0 0-4.234 0 3.246 3.246 0 0 1-4.234 0L4 5.937m15.96 6.776-.54-.518c-1.204-1.154-2.99-1.218-4.26-.151a3.14 3.14 0 0 1-4.093 0l-.07-.06a3.246 3.246 0 0 0-4.234 0 3.246 3.246 0 0 1-4.234 0L2 11.54m19.96 6.776-.54-.517c-1.204-1.155-2.99-1.218-4.26-.151a3.14 3.14 0 0 1-4.093 0l-.07-.06a3.246 3.246 0 0 0-4.234 0 3.245 3.245 0 0 1-4.234 0L4 17.143"
    />
  </svg>
);
export default SvgHurricane012;
