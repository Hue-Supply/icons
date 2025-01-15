import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShuffle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.496 2 22 5.504l-3.504 3.504m0 5.998L22 18.51l-3.504 3.504M22 5.5h-.858c-2.225 0-3.338 0-4.312.346a6 6 0 0 0-2.282 1.46c-.723.74-1.19 1.75-2.122 3.771l-.852 1.846c-.932 2.02-1.399 3.03-2.122 3.77a6 6 0 0 1-2.282 1.46c-.974.347-2.087.347-4.312.347H2m0-13h4.247c.804 0 1.206 0 1.568.091a3 3 0 0 1 1.599 1.023c.234.29.403.656.74 1.386M22 18.5h-4.247c-.804 0-1.206 0-1.568-.091a3 3 0 0 1-1.599-1.023c-.234-.29-.403-.656-.74-1.386"
    />
  </svg>
);
export default SvgShuffle;
