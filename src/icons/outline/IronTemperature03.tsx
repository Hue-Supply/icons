import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIronTemperature03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.5 9.5h-8.049a11.89 11.89 0 0 0-9.966 5.409C1.2 16.886 2.619 19.5 4.977 19.5h13.62c1.338 0 2.007 0 2.476-.275a2 2 0 0 0 .878-1.071c.178-.514.047-1.17-.216-2.482zm0 0-.485-2.428c-.183-.916-.275-1.374-.514-1.717a2 2 0 0 0-.839-.688c-.383-.167-.85-.167-1.785-.167H7.001m2.144 10h.004m3.945 0h.005m3.944 0h.005m-7.68 0a.222.222 0 1 0-.445 0 .222.222 0 0 0 .444 0m3.948 0a.222.222 0 1 0-.444 0 .222.222 0 0 0 .444 0m3.95 0a.222.222 0 1 0-.445 0 .222.222 0 0 0 .445 0"
    />
  </svg>
);
export default SvgIronTemperature03;
