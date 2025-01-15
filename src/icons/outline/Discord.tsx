import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiscord = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.54 17.058c0 1.012 1.518 3.035 2.023 3.035 1.518 0 2.866-1.687 3.541-3.035.675-1.686.506-5.9-1.517-11.633a8 8 0 0 0-2.41-1.128c-.566-.16-.848-.24-1.25-.19-.339.04-.79.239-1.05.46-.309.262-.481.603-.826 1.285a12 12 0 0 0-4.1 0c-.347-.685-.521-1.027-.83-1.29a2.3 2.3 0 0 0-1.045-.456c-.402-.05-.686.03-1.254.192a8 8 0 0 0-2.41 1.127C2.39 11.157 2.22 15.372 2.896 17.058c.675 1.348 2.023 3.035 3.54 3.035.507 0 2.024-2.023 2.024-3.035m-1.518-.506c3.54 1.012 6.576 1.012 10.116 0M9.235 11.49h.01m5.518 0h.009m-5.081 0a.455.455 0 1 0-.911 0 .455.455 0 0 0 .91 0m5.527 0a.455.455 0 1 0-.91 0 .455.455 0 0 0 .91 0"
    />
  </svg>
);
export default SvgDiscord;
