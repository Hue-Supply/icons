import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining08Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.274 15.501A4.28 4.28 0 0 1 6.28 7.44h.182c.02 0 .037-.016.037-.037C6.5 4.422 8.967 2 11.947 2 14.984 2 17.5 4.462 17.5 7.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 0 1 1.801 6.501M7.79 13.538v1.744m4.21-.788v2.033m4.212-2.989v1.744m-8.422 3.73v1.742m4.21-.788V22m4.212-2.989v1.743"
    />
  </svg>
);
export default SvgCloudRaining08Alt;
