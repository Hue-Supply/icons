import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSnowing01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.546 15.592a4.28 4.28 0 0 0-1.826-8.153h-.183a.037.037 0 0 1-.037-.037A5.4 5.4 0 0 0 12.106 2h-.212A5.4 5.4 0 0 0 6.5 7.402c0 .02-.017.037-.037.037H6.28a4.28 4.28 0 0 0-1.826 8.153m11.204-.812h.01m-.01 3.953h.01m-3.678-1.701H12m-.01 3.953H12M8.323 14.78h.01m-.01 3.953h.01"
    />
  </svg>
);
export default SvgCloudSnowing01;
