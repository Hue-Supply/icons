import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRedoSmall = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.692 6h-7.448a6 6 0 0 0 0 12h9m-1.337-9.924L20 5.927l-2.148-2.093"
    />
  </svg>
);
export default SvgRedoSmall;
