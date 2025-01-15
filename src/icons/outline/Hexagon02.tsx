import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHexagon02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.882 21c-.685 0-1.028 0-1.333-.101a2 2 0 0 1-.728-.428c-.237-.218-.403-.518-.736-1.117l-3.222-5.8c-.316-.567-.473-.85-.535-1.151a2 2 0 0 1 0-.806c.062-.3.22-.584.535-1.151l3.222-5.8c.333-.6.499-.899.736-1.117a2 2 0 0 1 .728-.428C7.854 3 8.197 3 8.882 3h6.234c.686 0 1.028 0 1.334.101a2 2 0 0 1 .728.428c.236.218.403.518.736 1.117l3.222 5.8c.315.567.473.85.534 1.151.055.266.055.54 0 .806-.062.3-.22.584-.534 1.151l-3.222 5.8c-.333.6-.5.899-.736 1.117-.21.193-.458.339-.728.428-.306.101-.648.101-1.334.101z"
    />
  </svg>
);
export default SvgHexagon02;
