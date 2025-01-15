import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkipBack = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.155 4.48v15.04m10.564-2.06-3.137-2.156c-1.613-1.109-2.42-1.663-2.703-2.357a2.5 2.5 0 0 1 0-1.894c.283-.694 1.09-1.248 2.703-2.357l3.137-2.157c2.036-1.4 3.054-2.099 3.9-2.057.736.037 1.42.396 1.867.983C20 6.138 20 7.373 20 9.843v4.314c0 2.47 0 3.705-.514 4.378a2.5 2.5 0 0 1-1.867.983c-.846.042-1.864-.658-3.9-2.057"
    />
  </svg>
);
export default SvgSkipBack;
