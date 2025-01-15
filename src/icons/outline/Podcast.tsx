import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPodcast = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.463 14.534a5 5 0 1 1 7.122-.048M6.343 18a9 9 0 1 1 11.315 0M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 11a2 2 0 0 1-2-2v-2a2 2 0 1 1 4 0v2a2 2 0 0 1-2 2"
    />
  </svg>
);
export default SvgPodcast;
