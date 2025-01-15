import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 1 0-8.732-6.812h0c.276 1.104.414 1.656.433 1.91.024.313.022.362-.025.673-.037.251-.138.555-.338 1.164l-.023.07c-.43 1.309-.646 1.963-.495 2.43a1.5 1.5 0 0 0 .821.91c.448.197 1.121.05 2.468-.246l1.504-.33c.44-.096.66-.144.843-.161.223-.021.262-.022.486-.007.182.013.571.088 1.35.237A9 9 0 0 0 12 21"
    />
  </svg>
);
export default SvgMessageCircle;
