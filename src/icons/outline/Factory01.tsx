import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFactory01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 12v9H4V9.296c0-.569 0-.853.115-.992a.5.5 0 0 1 .406-.18c.18.007.391.197.814.578L9 12V9.188c0-.54 0-.809.11-.946a.5.5 0 0 1 .394-.187c.176.002.385.172.803.514l3.309 2.708c.328.268.491.402.674.497a2 2 0 0 0 .515.184c.203.042.414.042.837.042zm0 0-1.5-9h-2l-1.345 8.069c-.053.32-.08.48-.034.605a.5.5 0 0 0 .22.26c.116.066.279.066.603.066zM3 21h18M8.48 16h1.177m4.755 0h1.176"
    />
  </svg>
);
export default SvgFactory01;
