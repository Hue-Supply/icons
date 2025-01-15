import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarkerPin02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.796 17c.766.49 1.204 1.106 1.204 1.713C21 20.553 16.97 22 12 22s-9-1.446-9-3.287c0-.586.408-1.183 1.125-1.661M19 9.158c0 4.321-3.865 7.655-5.85 9.082-.337.242-.505.363-.78.433a1.8 1.8 0 0 1-.74 0c-.275-.07-.443-.191-.78-.433C8.866 16.813 5 13.48 5 9.158 5 5.205 8.134 2 12 2s7 3.205 7 7.158M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgMarkerPin02;
