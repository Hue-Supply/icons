import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBrushOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.245 12.653c.154-.3.451-.963.634-1.25l.882-1.392m-1.516 2.642a3.98 3.98 0 0 0-3.419 1.135c-1.538 1.539-2.383 5.974-1.485 6.871s5.333.054 6.871-1.485a3.98 3.98 0 0 0 1.139-3.398m-3.106-3.123a3.71 3.71 0 0 1 3.106 3.123m0 0c.248-.132 1.009-.502 1.247-.653l1.382-.893m0 0L21.75 22m-7.77-7.77-4.22-4.22m0 0L1.75 2m14.964 10.066q.372-.375.718-.776l.074-.086a14.64 14.64 0 0 0 3.45-7.83.296.296 0 0 0-.328-.33 14.64 14.64 0 0 0-7.83 3.451l-.087.075q-.436.376-.843.785"
    />
  </svg>
);
export default SvgBrushOff;
