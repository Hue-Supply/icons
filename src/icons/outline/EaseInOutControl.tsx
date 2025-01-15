import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEaseInOutControl = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 4c-4.8 0-8 8-8 8s-3.2 8-8 8M9 4l-.009-.005M12 4l-.009-.005M15 20l.009.005M12 20l.009.005M6 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgEaseInOutControl;
