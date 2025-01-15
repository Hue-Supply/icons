import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReflect = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 3v1.5m0 3v3m0 3v3m0 3V21M2 13.27v-2.54c0-1.205 0-1.807.25-2.131a1.2 1.2 0 0 1 .906-.466c.408-.016.899.335 1.88 1.036l1.777 1.269c.737.526 1.106.79 1.237 1.117a1.2 1.2 0 0 1 0 .89c-.13.327-.5.59-1.237 1.117l-1.777 1.27c-.981.7-1.472 1.05-1.88 1.035a1.2 1.2 0 0 1-.906-.466C2 15.077 2 14.475 2 13.27m20 0v-2.54c0-1.205 0-1.807-.25-2.131a1.2 1.2 0 0 0-.905-.466c-.41-.016-.9.335-1.881 1.036l-1.777 1.269c-.737.526-1.106.79-1.237 1.117a1.2 1.2 0 0 0 0 .89c.13.327.5.59 1.237 1.117l1.777 1.27c.981.7 1.472 1.05 1.88 1.035a1.2 1.2 0 0 0 .906-.466c.25-.324.25-.926.25-2.132"
    />
  </svg>
);
export default SvgReflect;
