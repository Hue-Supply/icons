import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightbulb06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.095 22h3.81M12 13.901v-2.537m0 0h2.857m-2.857 0H9.143M4.38 9.619a7.619 7.619 0 1 1 11.367 6.635c-.52.295-.891.822-.891 1.42 0 .811-.657 1.469-1.469 1.469h-2.777a1.47 1.47 0 0 1-1.468-1.469c0-.598-.37-1.125-.891-1.42A7.62 7.62 0 0 1 4.38 9.619"
    />
  </svg>
);
export default SvgLightbulb06;
