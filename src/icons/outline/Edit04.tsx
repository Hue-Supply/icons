import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.156 5.578 3.196 3.196m-13.3 12.633.68-.244c.377-.136.566-.204.742-.295q.236-.12.447-.283c.157-.12.3-.262.583-.546L21.251 6.292a2.503 2.503 0 1 0-3.54-3.54L3.963 16.5c-.283.283-.425.425-.546.582q-.16.211-.282.446c-.091.177-.16.365-.295.743l-.244.68c-.44 1.223-.66 1.835-.521 2.235a1.2 1.2 0 0 0 .741.741c.4.139 1.012-.081 2.235-.52"
    />
  </svg>
);
export default SvgEdit04;
