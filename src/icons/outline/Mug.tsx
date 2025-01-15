import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMug = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 8h2.667c.31 0 .464 0 .594.017a2 2 0 0 1 1.722 1.722c.017.13.017.285.017.594 0 .62 0 .93-.034 1.19a4 4 0 0 1-3.444 3.443c-.26.034-.57.034-1.189.034H17m-7 4c-.929 0-1.393 0-1.783-.051a6 6 0 0 1-5.166-5.166C3 13.393 3 12.93 3 12V7.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C4.139 5 4.559 5 5.4 5h9.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581V12c0 .929 0 1.393-.051 1.783a6 6 0 0 1-5.166 5.166C11.393 19 10.93 19 10 19"
    />
  </svg>
);
export default SvgMug;
