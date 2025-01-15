import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload07 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.4 5.5A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.423-2.872-8.176-6.853-9.495-.714-.236-1.072-.355-1.637-.212-.41.103-.97.508-1.197.865C12 3.649 12 4.166 12 5.2v10.021m5.151-4.467L12 15.906l-5.152-5.152"
    />
  </svg>
);
export default SvgDownload07;
