import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining03Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.995 15.127A4.74 4.74 0 0 0 22 11.25v-.277A4.473 4.473 0 0 0 17.527 6.5a.04.04 0 0 1-.036-.025l-.165-.496A5.82 5.82 0 0 0 11.806 2H9a7 7 0 0 0-4.426 12.423m8.043-1.055L10.178 22m6.523-8.632-1.865 6.6m-6.303-6.6-1.865 6.6"
    />
  </svg>
);
export default SvgCloudRaining03Alt;
