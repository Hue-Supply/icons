import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBeer = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.242 8.666s1.973-.836 5.92 0c3.945.836 5.918 0 5.918 0M6.5 11.75c-.277-.76-.415-1.141-.527-1.527a12 12 0 0 1-.446-2.534C5.5 7.288 5.5 6.883 5.5 6.074V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C6.639 3 7.059 3 7.9 3h8.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v.674c0 .81 0 1.214-.027 1.615a12 12 0 0 1-.446 2.534c-.112.386-.25.766-.527 1.527s-.415 1.141-.527 1.527a12 12 0 0 0-.446 2.534c-.027.401-.027.806-.027 1.615V18.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H9.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656c-.163-.32-.163-.74-.163-1.581v-1.174c0-.81 0-1.214-.027-1.615a12 12 0 0 0-.446-2.534c-.112-.386-.25-.766-.527-1.527"
    />
  </svg>
);
export default SvgBeer;
