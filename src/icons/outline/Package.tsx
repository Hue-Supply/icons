import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPackage = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 25 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.5 12v9m0-9L4 7.5m8.5 4.5L21 7.5m-4 2-9-5m6.054 16.637 5.8-3.223c.6-.332.899-.499 1.117-.736.193-.209.339-.457.428-.727.101-.306.101-.649.101-1.334V8.883c0-.685 0-1.028-.101-1.334a2 2 0 0 0-.428-.728c-.218-.236-.518-.403-1.117-.735l-5.8-3.223c-.567-.315-.85-.472-1.151-.534a2 2 0 0 0-.806 0c-.3.062-.584.22-1.151.534l-5.8 3.223c-.6.332-.899.499-1.117.735a2 2 0 0 0-.428.728c-.101.306-.101.649-.101 1.334v6.234c0 .685 0 1.028.101 1.334a2 2 0 0 0 .428.727c.218.237.518.404 1.117.736l5.8 3.223c.567.315.85.472 1.151.534.266.055.54.055.806 0 .3-.062.584-.22 1.151-.534Z"
    />
  </svg>
);
export default SvgPackage;
