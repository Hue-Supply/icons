import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerspective02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.348 12h6m-6 0v8.64m0-8.64V3.36m0 8.64H3m13.348 0h4.646m-4.646 0v7.528m0-7.528V4.472M20.994 12V9.326c0-1.42 0-2.131-.256-2.71a3 3 0 0 0-1.051-1.264c-.523-.358-1.222-.487-2.618-.746l-.721-.134M20.994 12v2.674c0 1.42 0 2.131-.256 2.71a3 3 0 0 1-1.051 1.264c-.523.358-1.222.487-2.618.746l-.721.134m0 0V4.472m0 15.056-6 1.112m6-16.168-6-1.112m0 17.28-1.668.308c-1.948.361-2.922.542-3.683.27A3 3 0 0 1 3.412 19.9c-.406-.699-.406-1.69-.406-3.671L3 12.006l.006-4.235c0-1.981 0-2.972.406-3.67a3 3 0 0 1 1.585-1.32c.761-.271 1.735-.09 3.683.27l1.668.31"
    />
  </svg>
);
export default SvgPerspective02;
