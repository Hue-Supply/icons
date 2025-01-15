import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSimcard = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 11.184c0-.624 0-.936-.061-1.235a3 3 0 0 0-.267-.762c-.14-.27-.334-.514-.724-1.002L15.25 3.562c-.34-.427-.511-.64-.707-.812a3 3 0 0 0-1.466-.705C12.819 2 12.546 2 12 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C8 17.62 8 17.48 8 17.2z"
    />
  </svg>
);
export default SvgSimcard;
