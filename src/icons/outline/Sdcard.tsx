import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSdcard = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 6v2m-4-2v2m0-6h3.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-6.016c0-.624 0-.936.061-1.235a3 3 0 0 1 .267-.762c.14-.27.334-.514.724-1.002L8.75 3.562c.34-.427.511-.64.707-.812a3 3 0 0 1 1.466-.705C11.181 2 11.454 2 12 2M8.8 18h6.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C16 17.62 16 17.48 16 17.2v-3.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C15.62 13 15.48 13 15.2 13H8.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C8 13.38 8 13.52 8 13.8v3.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218C8.38 18 8.52 18 8.8 18"
    />
  </svg>
);
export default SvgSdcard;
