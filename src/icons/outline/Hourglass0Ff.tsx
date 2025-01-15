import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHourglass0Ff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.8 2H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.52 6 4.08 6 5.2v.231M14.8 2c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 3.52 18 4.08 18 5.2v.231c0 .94 0 1.409-.13 1.835a3 3 0 0 1-.552 1.033c-.283.344-.674.605-1.455 1.126L12.75 11.5M14.8 2H20M9.2 22c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6 20.48 6 19.92 6 18.8v-.231c0-.94 0-1.409.13-1.835a3 3 0 0 1 .552-1.033c.283-.344.674-.605 1.455-1.126l.966-.644M9.2 22H4m5.2 0H17M2 2l20 20"
    />
  </svg>
);
export default SvgHourglass0Ff;
