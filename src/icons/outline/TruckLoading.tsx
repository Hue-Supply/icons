import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTruckLoading = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 4h.6c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656C5 5.139 5 5.559 5 6.4v7.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163H22m-10.822 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m8.322 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-.943-2V9.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C17.417 7 16.997 7 16.157 7h-5.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581V16z"
    />
  </svg>
);
export default SvgTruckLoading;
