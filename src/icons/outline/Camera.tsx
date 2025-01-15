import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCamera = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.053 9.5v.01M5.138 9.498h1.017M6.8 20.5h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.22 22 17.38 22 15.7v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 6.5 18.88 6.5 17.2 6.5H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 8.78 2 9.62 2 11.3v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327m9.2-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m2-7-2.297-2.297c-.26-.26-.39-.39-.54-.482a1.5 1.5 0 0 0-.434-.18c-.173-.041-.356-.041-.723-.041H9.994c-.367 0-.55 0-.723.041a1.5 1.5 0 0 0-.433.18c-.152.093-.282.223-.54.482L6 6.5z"
    />
  </svg>
);
export default SvgCamera;
