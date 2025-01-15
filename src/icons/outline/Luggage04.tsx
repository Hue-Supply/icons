import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLuggage04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 11.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 7 5.12 7 6.8 7h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2zM8 7c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.606 3 11.07 3 12 3s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 5.605 16 6.07 16 7z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 14.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C13.38 14 13.52 14 13.8 14h4.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v2.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C18.62 18 18.48 18 18.2 18h-4.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C13 17.62 13 17.48 13 17.2z"
    />
  </svg>
);
export default SvgLuggage04;
