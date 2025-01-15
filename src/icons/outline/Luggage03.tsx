import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLuggage03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 8v13m8-13v6m0 4v3m-9.2 0h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 7 18.88 7 17.2 7H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 9.28 2 10.12 2 11.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21M16 7H8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.606 3 11.07 3 12 3s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 5.605 16 6.07 16 7m-2.2 11h4.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C19 17.62 19 17.48 19 17.2v-2.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C18.62 14 18.48 14 18.2 14h-4.4c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C13 14.38 13 14.52 13 14.8v2.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055"
    />
  </svg>
);
export default SvgLuggage03;
