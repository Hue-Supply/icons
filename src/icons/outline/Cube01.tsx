import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCube01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 12v9m0-9L3.5 7.5M12 12l8.5-4.5m-6.946 13.637 5.8-3.222c.6-.333.899-.5 1.117-.736a2 2 0 0 0 .428-.728c.101-.306.101-.649.101-1.334V8.883c0-.685 0-1.028-.101-1.334a2 2 0 0 0-.428-.727c-.218-.237-.518-.404-1.117-.736l-5.8-3.223c-.567-.315-.85-.472-1.151-.534a2 2 0 0 0-.806 0c-.3.062-.584.22-1.151.534l-5.8 3.223c-.6.332-.899.499-1.117.736a2 2 0 0 0-.428.727C3 7.855 3 8.198 3 8.883v6.234c0 .685 0 1.028.101 1.334a2 2 0 0 0 .428.728c.218.236.518.403 1.117.736l5.8 3.222c.567.315.85.472 1.151.534.266.055.54.055.806 0 .3-.062.584-.22 1.151-.534Z"
    />
  </svg>
);
export default SvgCube01;
