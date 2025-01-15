import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.041 11.756c-1.607-.803-2.41-1.205-2.627-1.712a1.5 1.5 0 0 1 .09-1.354c.281-.474 1.13-.766 2.83-1.35l12.573-4.322c1.49-.512 2.236-.768 2.728-.595a1.5 1.5 0 0 1 .917.916c.173.493-.083 1.238-.596 2.73L16.635 18.64c-.585 1.7-.877 2.55-1.35 2.83a1.5 1.5 0 0 1-1.354.09c-.507-.216-.909-1.02-1.713-2.626l-2.034-4.07c-.133-.265-.2-.398-.288-.513a1.5 1.5 0 0 0-.272-.272c-.115-.089-.248-.155-.514-.288z"
    />
  </svg>
);
export default SvgNavPointer02;
