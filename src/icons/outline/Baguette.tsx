import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBaguette = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.841 14.342-2.096-3.776m5.059.813L8.708 7.603m5.057.813-2.096-3.775M8.547 20.71l11.96-11.96.082-.082a3 3 0 0 0-.082-4.252 6 6 0 0 0-8.505-.164l-.164.164-7.625 7.625a6 6 0 0 0-.164 8.504c.035.037.078.08.164.165l.082.082a3 3 0 0 0 4.252-.082"
    />
  </svg>
);
export default SvgBaguette;
