import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.95 18.749c-.575.251-1.276.251-2.678.251H8.394c-1.445 0-2.168 0-2.754-.263a3 3 0 0 1-1.27-1.077c-.356-.535-.474-1.248-.711-2.673L2.296 6.779M22 5l-1.857 9.314M7.63 7.916c-1.293.535-3.094.535-4.387 0l-.549-.227m18.614.599-.56-.265c-1.248-.59-3.099-.621-4.416-.077-.68.282-1.506.41-2.32.385M2 2l20 20"
    />
  </svg>
);
export default SvgWashOff;
