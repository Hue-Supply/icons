import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGoogleDrive = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m5.333 20.333 5.68-9.464c.358-.599.538-.898.608-1.218a2 2 0 0 0 0-.858c-.07-.32-.25-.619-.609-1.217l-2.345-3.91M5.333 20.334l-2.345-3.909c-.36-.598-.539-.898-.61-1.217a2 2 0 0 1 0-.858c.071-.32.25-.619.61-1.218l5.679-9.464M5.333 20.333h11.522c.66 0 .99 0 1.288-.095a2 2 0 0 0 .712-.403c.234-.206.404-.489.744-1.055L22 14.778M8.667 3.667l5.734 9.557c.34.567.51.85.744 1.056.207.182.45.32.712.403.297.095.628.095 1.288.095H22M8.667 3.667h4.855c.66 0 .99 0 1.287.094a2 2 0 0 1 .713.404c.234.205.404.489.743 1.055L22 14.778m-13.333 0H22"
    />
  </svg>
);
export default SvgGoogleDrive;
