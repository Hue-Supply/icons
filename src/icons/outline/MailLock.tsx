import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailLock = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 11V7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7M3.5 5.585l7.508 6.625a1.5 1.5 0 0 0 1.984 0L20.5 5.585M20.4 17.2v-1.6a1.6 1.6 0 1 0-3.2 0v1.6m-.064 4.8h3.328c.538 0 .806 0 1.012-.105a.96.96 0 0 0 .42-.42c.104-.205.104-.473.104-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.205-.104-.473-.104-1.011-.104h-3.328c-.538 0-.806 0-1.012.105a.96.96 0 0 0-.42.42c-.104.204-.104.473-.104 1.011v1.728c0 .538 0 .806.105 1.012a.96.96 0 0 0 .42.42c.204.104.473.104 1.011.104Z"
    />
  </svg>
);
export default SvgMailLock;
