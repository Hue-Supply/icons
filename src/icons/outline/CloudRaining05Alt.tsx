import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining05Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.274 15.501A4.28 4.28 0 0 1 6.28 7.44h.182c.02 0 .037-.016.037-.037C6.5 4.422 8.967 2 11.947 2 14.984 2 17.5 4.462 17.5 7.5v1.463c0 .02.017.037.037.037h.963a3.5 3.5 0 0 1 1.801 6.501M7.79 14.22v6.793M12 14.219v7.924m4.212-7.924v6.793"
    />
  </svg>
);
export default SvgCloudRaining05Alt;
