import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.395 19.577 7.183 22m5.422-2.423L11.394 22m5.422-2.423L15.605 22M22 10.973v.277A4.75 4.75 0 0 1 17.25 16H9A7 7 0 1 1 9 2h2.806a5.82 5.82 0 0 1 5.52 3.98l.165.495q.01.024.036.025A4.473 4.473 0 0 1 22 10.973"
    />
  </svg>
);
export default SvgCloudRaining03;
