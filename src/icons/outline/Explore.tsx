import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExplore = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.464 3.512 8.768 6.744c-.557.186-.835.278-1.066.436a2 2 0 0 0-.522.522c-.158.231-.25.51-.436 1.066l-3.232 9.696c-.326.977-.489 1.466-.373 1.79a1 1 0 0 0 .606.607c.325.116.814-.047 1.79-.373l9.697-3.232c.557-.186.835-.278 1.066-.436a2 2 0 0 0 .522-.522c.158-.231.25-.51.436-1.066l3.232-9.696c.326-.977.489-1.466.373-1.79a1 1 0 0 0-.606-.607c-.325-.116-.814.047-1.79.373"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgExplore;
