import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWallet01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.791 8.17 9.814-4.472c1.13-.515 1.695-.773 2.152-.693.399.07.753.297.982.631C17 4.02 17 4.64 17 5.882v2.145m0 6.473h.01M5.4 21h13.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-8.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C19.861 8 19.441 8 18.6 8H5.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C3 9.139 3 9.559 3 10.4v8.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163m12.1-6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgWallet01;
