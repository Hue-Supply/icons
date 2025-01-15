import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlag02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21V4m0-.5v11s2-1 5-1c2.343 0 3.657 1.5 6 1.5 1.755 0 3.007-.251 3.82-.502.266-.082.4-.123.624-.306.153-.124.375-.424.448-.607.108-.269.108-.469.108-.87v-8.22c0-.54 0-.81-.075-.93a.43.43 0 0 0-.288-.218c-.136-.039-.43.044-1.019.21C17.806 3.787 16.616 4 15 4c-2.343 0-3.657-1.5-6-1.5-3 0-5 1-5 1"
    />
  </svg>
);
export default SvgFlag02;
