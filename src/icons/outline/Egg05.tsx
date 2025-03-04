import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEgg05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.801 13.486q.062-.573.062-1.191C18.863 7.32 15.791 2 12 2 8.21 2 5.137 7.32 5.137 12.295q0 .619.062 1.19m15.35.328C19.946 19.105 16.348 22 12 22s-7.946-2.895-8.548-8.187c-.054-.47-.08-.706.02-.858a.52.52 0 0 1 .391-.223c.182-.01.382.142.783.445l.394.298c.173.13.26.196.355.221a.5.5 0 0 0 .256 0c.095-.025.181-.09.354-.221l1.194-.903c.173-.13.26-.196.355-.221a.5.5 0 0 1 .256 0c.095.025.181.09.354.221l1.195.903c.172.13.259.196.354.221a.5.5 0 0 0 .256 0c.095-.025.181-.09.354-.221l1.195-.903c.173-.13.26-.196.354-.221a.5.5 0 0 1 .256 0c.095.025.182.09.355.221l1.194.903c.173.13.26.196.354.221a.5.5 0 0 0 .256 0c.095-.025.182-.09.355-.221l1.194-.903c.173-.13.26-.196.354-.221a.5.5 0 0 1 .256 0c.096.025.182.09.355.221l1.194.903c.173.13.26.196.355.221a.5.5 0 0 0 .256 0c.095-.025.181-.09.354-.221l.395-.298c.4-.303.6-.454.782-.445.15.008.308.098.39.223.102.152.075.387.021.858"
    />
  </svg>
);
export default SvgEgg05;
