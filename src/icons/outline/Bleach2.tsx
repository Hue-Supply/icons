import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBleach2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.414 20.982c-.363.02-.814.02-1.379.02H4.967c-1.394 0-2.091 0-2.494-.293a1.53 1.53 0 0 1-.624-1.08c-.052-.496.296-1.1.994-2.308l5.264-9.118m10.928 5.438L14.126 5.14c-.697-1.208-1.046-1.812-1.501-2.015a1.53 1.53 0 0 0-1.247 0c-.361.161-.655.574-1.11 1.341M2.001 2l20 20"
    />
  </svg>
);
export default SvgBleach2;
