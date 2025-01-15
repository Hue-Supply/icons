import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMusicNote01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0V8.832c0-1.328 0-1.993.23-2.547a3 3 0 0 1 .956-1.235c.478-.363 1.12-.53 2.406-.864l2.4-.624c2.046-.532 3.069-.798 3.875-.554a3 3 0 0 1 1.694 1.31c.439.72.439 1.776.439 3.89V15.5M9.056 9.516 20.76 6.398M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgMusicNote01;
