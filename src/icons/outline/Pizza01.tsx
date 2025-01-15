import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPizza01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.166 16.233c-1.482.774-4.09 1.288-7.058 1.288-3.118 0-5.837-.567-7.272-1.406m5.39-3.812v-.009m1.773-4.236v-.01m2.643 5.824v-.01m-.47-9.333L20.14 17.24c.452.963.678 1.444.632 1.979a2.23 2.23 0 0 1-.578 1.242c-.38.38-.813.497-1.682.729-1.928.516-4.15.81-6.513.81s-4.581-.294-6.51-.81c-.868-.232-1.302-.348-1.682-.728a2.23 2.23 0 0 1-.578-1.242c-.045-.535.18-1.016.633-1.98L9.827 4.53c.694-1.477 1.04-2.215 1.517-2.447a1.5 1.5 0 0 1 1.312 0c.477.232.823.97 1.516 2.447m-3.946 7.319a.455.455 0 1 0 0 .91.455.455 0 0 0 0-.91m1.773-4.246a.455.455 0 1 0 0 .91.455.455 0 0 0 0-.91m2.643 5.814a.455.455 0 1 0 0 .911.455.455 0 0 0 0-.91"
    />
  </svg>
);
export default SvgPizza01;
