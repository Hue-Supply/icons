import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareHeart02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 11.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.223.114.47.188.767.236.487.08.731.119.865.176.387.165.595.409.695.818.035.14.035.325.035.694 0 .573 0 .86.07 1.056a1.2 1.2 0 0 0 1.252.789c.207-.022.466-.145.982-.392L11.5 20m6.497-4.66c-.8-.91-2.133-1.154-3.135-.322s-1.143 2.224-.356 3.209 3.491 3.282 3.491 3.282 2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.824-2.336-.588-3.136.321"
    />
  </svg>
);
export default SvgMessageSquareHeart02;
