import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTelescope = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m4.308 12.01-1.458.835a1.675 1.675 0 0 0 1.665 2.906l1.467-.84M12.5 16 9 22m6-6 3.5 6M4 11.33l12.124-7 2.5 4.33-12.124 7zm17.104-2.947c-.23.133-.344.2-.447.244a2 2 0 0 1-2.41-.645 5 5 0 0 1-.265-.436l-1.214-2.103a5 5 0 0 1-.244-.447 2 2 0 0 1 .645-2.41c.09-.066.205-.132.435-.265.173-.1.259-.15.336-.183a1.5 1.5 0 0 1 1.807.484c.05.068.1.154.199.326l1.786 3.093c.1.173.149.259.183.336a1.5 1.5 0 0 1-.485 1.807c-.067.05-.154.1-.326.2m-5.61 4.497a2.09 2.09 0 1 1-3.62 2.09 2.09 2.09 0 0 1 3.62-2.09"
    />
  </svg>
);
export default SvgTelescope;
