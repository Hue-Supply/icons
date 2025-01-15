import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGraduationHat02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.5 10.5v3.772c0 .718 0 1.077-.11 1.394a2 2 0 0 1-.462.747c-.235.24-.556.4-1.198.721l-4.3 2.15c-.524.263-.787.394-1.062.446a2 2 0 0 1-.738 0c-.275-.052-.537-.183-1.062-.446l-4.3-2.15c-.642-.32-.963-.481-1.198-.72a2 2 0 0 1-.462-.748c-.109-.317-.109-.676-.109-1.394V10.5M11.991 9l.01.005m-1.454-4.511-6.05 3.08c-.904.46-1.356.69-1.501 1a1 1 0 0 0 0 .852c.145.31.597.54 1.5 1l6.051 3.08c.532.271.798.407 1.078.46.247.047.501.047.749 0 .28-.053.545-.189 1.077-.46l6.05-3.08c.904-.46 1.356-.69 1.502-1a1 1 0 0 0 0-.852c-.146-.31-.598-.54-1.502-1l-6.05-3.08c-.532-.271-.798-.407-1.077-.46a2 2 0 0 0-.75 0c-.279.053-.545.189-1.077.46"
    />
  </svg>
);
export default SvgGraduationHat02;
