import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNoBackpack = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 7h10.5a2.5 2.5 0 0 0 0-5H6a2 2 0 0 0-2 2m3.5 3H18v10.5M16.5 22H8.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C6 20.861 6 20.441 6 19.6V11m12 3h1.6c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.32.163.74.163 1.581v0c0 2.067-2.498 3.102-3.96 1.64L2 2m6 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2v-.8c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.655C3.139 14 3.559 14 4.4 14h.731c.27 0 .404 0 .479.008.138.013.062 0 .197.033.073.017.374.121.975.33.663.23 1.817.498 3.718.593M10 16v1.5m-1-15v4m6-4v4"
    />
  </svg>
);
export default SvgNoBackpack;
