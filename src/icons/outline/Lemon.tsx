import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLemon = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.367 4.52A7.61 7.61 0 1 1 4.583 15.26m5.4 2.247v-2.81c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327h2.81m-7.471.141 4.771 4.772m7.108-4.919C22.001 16.578 16.581 22 9.893 22c-2.482 0-4.79-.747-6.71-2.028-.56-.373-.84-.56-1.018-.926a1.68 1.68 0 0 1-.102-1.034c.103-.394.39-.681.965-1.256l13.729-13.73c.574-.574.862-.861 1.256-.964.306-.08.749-.036 1.034.102.366.178.553.458.926 1.018a12.05 12.05 0 0 1 2.028 6.71"
    />
  </svg>
);
export default SvgLemon;
