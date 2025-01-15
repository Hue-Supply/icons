import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursorHand03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.857 13v.143a8.857 8.857 0 1 1-17.714 0V11.84a1.771 1.771 0 0 1 3.542 0V13m3.543-2.926v-.809a1.771 1.771 0 1 0-3.543 0v4.48m7.086-2.475V3.77a1.771 1.771 0 0 0-3.543 0v7.499m7.086.184v-1.49a1.771 1.771 0 0 0-3.543 0v.669m7.086 2.426V11.27c0-.978-.793-1.771-1.771-1.771h-.887a.884.884 0 0 0-.885.884"
    />
  </svg>
);
export default SvgCursorHand03;
