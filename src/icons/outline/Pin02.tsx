import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPin02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.633 16.233 3.35 20.765m3.208-6.263 3.028 2.862c.893.844 1.34 1.266 1.758 1.468a3 3 0 0 0 3.582-.75c.303-.353.542-.92 1.022-2.05.09-.213.134-.319.187-.42.148-.287.343-.55.575-.775.082-.08.17-.153.347-.3l1.142-.953c1.435-1.197 2.153-1.795 2.433-2.52a3 3 0 0 0 .062-1.988c-.235-.74-.914-1.383-2.273-2.667l-.915-.864c-1.358-1.284-2.037-1.926-2.79-2.119a3 3 0 0 0-1.981.174c-.708.32-1.265 1.071-2.38 2.572L9.56 7.244c-.108.145-.162.218-.22.286a3 3 0 0 1-1.151.845 6 6 0 0 1-.339.122c-.806.28-1.21.42-1.472.575a3 3 0 0 0-.926 4.301c.175.25.486.543 1.106 1.13"
    />
  </svg>
);
export default SvgPin02;
