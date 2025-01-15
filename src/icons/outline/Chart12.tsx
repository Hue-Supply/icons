import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart12 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 21v-8H5.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C3 14.139 3 14.559 3 15.4v3.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163zm0 0h6m-6 0V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C10.139 3 10.559 3 11.4 3h1.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581V21m0 0h3.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-8.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C19.861 8 19.441 8 18.6 8H15z"
    />
  </svg>
);
export default SvgChart12;
