import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAtom01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.659 9.35C8.18 5.113 9.927 2 11.999 2c2.486 0 4.5 4.477 4.5 10S14.485 22 12 22c-1.367 0-2.592-1.355-3.417-3.493m11.009-6.704c1.999-2.1 2.902-4.145 2.159-5.432-1.243-2.153-6.616-1.377-12 1.732s-8.743 7.374-7.5 9.526c1.054 1.827 5.082 1.545 9.568-.482M8.48 5.639c-3.03-.818-5.449-.623-6.231.732-1.243 2.152 2.115 6.417 7.5 9.526s10.758 3.885 12 1.733c1.068-1.849-1.258-5.255-5.347-8.15M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgAtom01;
