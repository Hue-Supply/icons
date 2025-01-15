import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBellOff03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.479 21.506h5.005M3.076 3l18 18m-.593-5.959a6.08 6.08 0 0 1-1.709-3.373l-.443-2.88a14.6 14.6 0 0 0-.876-3.207 5.48 5.48 0 0 0-5.09-3.446h-.576c-1.203 0-2.34.392-3.264 1.077m9.146 14.423H4.744c-1.353 0-2.031-1.637-1.074-2.594a6.08 6.08 0 0 0 1.709-3.373l.443-2.88c.115-.747.288-1.484.516-2.203"
    />
  </svg>
);
export default SvgBellOff03;
