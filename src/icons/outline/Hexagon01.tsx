import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHexagon01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 8.883c0-.685 0-1.028.101-1.334a2 2 0 0 1 .428-.728c.218-.236.518-.403 1.117-.735l5.8-3.223c.567-.315.85-.472 1.151-.534a2 2 0 0 1 .806 0c.3.062.584.22 1.151.534l5.8 3.223c.6.332.899.499 1.117.735.193.21.339.458.428.728.101.306.101.649.101 1.334v6.234c0 .685 0 1.028-.101 1.334-.09.27-.235.518-.428.727-.218.237-.518.404-1.117.736l-5.8 3.223c-.567.315-.85.472-1.151.534-.266.055-.54.055-.806 0-.3-.062-.584-.22-1.151-.534l-5.8-3.223c-.6-.332-.899-.499-1.117-.736a2 2 0 0 1-.428-.727C3 16.145 3 15.802 3 15.117z"
    />
  </svg>
);
export default SvgHexagon01;
