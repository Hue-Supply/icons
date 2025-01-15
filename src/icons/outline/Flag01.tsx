import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlag01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21V2.508M4 4.5v10s2-1 5-1c2.343 0 3.657 1.5 6 1.5 1.755 0 3.007-.251 3.82-.502.266-.082.4-.123.624-.306.153-.124.375-.424.448-.607.108-.269.108-.469.108-.87v-7.22c0-.54 0-.81-.075-.93a.43.43 0 0 0-.288-.218c-.136-.039-.43.044-1.019.21C17.806 4.787 16.616 5 15 5c-2.343 0-3.657-1.5-6-1.5-3 0-5 1-5 1"
    />
  </svg>
);
export default SvgFlag01;
