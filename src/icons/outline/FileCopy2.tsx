import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileCopy2 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M13.3 4.213V8.05c0 .746.604 1.35 1.35 1.35h3.947M11 1h2.623c.694 0 1.04 0 1.37.075a3 3 0 0 1 .83.324c.291.168.546.403 1.056.874l3.577 3.302c.569.525.853.787 1.057 1.1.18.277.314.582.395.903.092.362.092.75.092 1.524V11M8 18h7m-7-3.5h4.5M11.62 4h-3c-1.512 0-2.268 0-2.846.294a2.7 2.7 0 0 0-1.18 1.18C4.3 6.052 4.3 6.808 4.3 8.32v9.36c0 1.512 0 2.268.294 2.846a2.7 2.7 0 0 0 1.18 1.18C6.352 22 7.108 22 8.62 22h5.76c1.512 0 2.268 0 2.846-.294a2.7 2.7 0 0 0 1.18-1.18c.294-.578.294-1.334.294-2.846v-6.83c0-.7 0-1.05-.083-1.377a2.7 2.7 0 0 0-.359-.815c-.185-.283-.443-.52-.959-.992l-2.76-2.53c-.458-.42-.687-.63-.95-.78a2.7 2.7 0 0 0-.743-.29C12.552 4 12.24 4 11.62 4Z"
    />
  </svg>
);
export default SvgFileCopy2;
