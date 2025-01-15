import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserImage01Plus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M16.389 19.63a1 1 0 1 0 2 0zm-10.778 0a1 1 0 1 0 2 0zm17.266-9.279a1 1 0 1 0-1.978.298zm-9.526-7.25a1 1 0 0 0 .298-1.978zM16 4a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zm-2-4a1 1 0 1 0-2 0zm-2 6a1 1 0 1 0 2 0zm-7.636 8.44h3.272v-2h-3.272zm6.025 2.891v.3h2v-.3zm-8.778.3v-.3h-2v.3zm6.025-3.192c1.486 0 2.753 1.26 2.753 2.892h2c0-2.667-2.094-4.892-4.753-4.892zm-3.272-2c-2.659 0-4.753 2.225-4.753 4.892h2c0-1.631 1.267-2.892 2.753-2.892zm3.667-4.239c0 1.219-.943 2.144-2.031 2.144v2c2.26 0 4.031-1.89 4.031-4.144zM12 12.344c-1.088 0-2.031-.925-2.031-2.144h-2c0 2.254 1.77 4.144 4.031 4.144zM9.969 10.2c0-1.218.943-2.143 2.031-2.143v-2c-2.26 0-4.031 1.89-4.031 4.143zM12 8.057c1.088 0 2.031.925 2.031 2.143h2c0-2.253-1.77-4.143-4.031-4.143zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.9-1.351q.1.66.1 1.351h2q0-.84-.123-1.649zM12 3q.69 0 1.351.1l.298-1.977A11 11 0 0 0 12 1zm4 3h3V4h-3zm3 0h3V4h-3zm-1-4v3h2V2zm0 3v3h2V5z"
    />
  </svg>
);
export default SvgUserImage01Plus;
