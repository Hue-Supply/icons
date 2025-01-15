import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLinkExternal = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19 13.889V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 21 15.88 21 14.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 5 6.12 5 7.8 5h2.311m10.98-2.003h-5.386m5.386 0v5.468m0-5.468L7.8 16.287"
    />
  </svg>
);
export default SvgLinkExternal;
