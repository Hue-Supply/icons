import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAward03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.35 16-.8 3.702c-.182.843-.273 1.264-.15 1.555a1 1 0 0 0 .573.549c.297.11.714 0 1.547-.218l3.074-.806c.151-.04.227-.06.304-.068q.102-.01.204 0c.077.008.153.028.304.068l3.074.806c.833.219 1.25.328 1.547.218a1 1 0 0 0 .573-.549c.123-.29.032-.712-.15-1.555L16.65 16m2.85-6.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
    />
  </svg>
);
export default SvgAward03;
