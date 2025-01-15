import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDumplings = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.12 10.69a6.457 6.457 0 1 0-9.145 8.453m4.558-15.855.664.265c.3.12.616.192.937.214l.714.05a3.1 3.1 0 0 1 2.072.997l.483.527a3.1 3.1 0 0 0 .751.6c.851.484 1.152 1.57.62 2.392-1.243 1.928-2.999 4.216-5.448 6.666-2.852 2.852-5.485 4.763-7.585 6.021a1.73 1.73 0 0 1-1.75.005 3.1 3.1 0 0 1-1.433-1.798l-.207-.684a3.1 3.1 0 0 0-.417-.866l-.406-.588a3.1 3.1 0 0 1-.512-2.242l.11-.707c.05-.318.05-.643 0-.961l-.11-.706a3.1 3.1 0 0 1 .512-2.242l.406-.589a3.1 3.1 0 0 0 .417-.866l.207-.684a3.1 3.1 0 0 1 1.434-1.798l.62-.354a3.1 3.1 0 0 0 .752-.599l.483-.527a3.1 3.1 0 0 1 2.072-.998l.714-.049a3.1 3.1 0 0 0 .937-.214l.664-.265a3.1 3.1 0 0 1 2.3 0"
    />
  </svg>
);
export default SvgDumplings;
