import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPackageIn = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M21.216 7.15a2 2 0 0 0-.245-.329c-.218-.236-.518-.403-1.117-.735l-5.8-3.223c-.567-.315-.85-.472-1.151-.534a2 2 0 0 0-.806 0c-.3.062-.584.22-1.151.534l-5.8 3.223c-.6.332-.899.499-1.117.735a2 2 0 0 0-.26.354m17.447-.026q.113.19.183.4c.101.306.101.649.101 1.334v3.67m-.284-5.404L12.5 12M3.769 7.175a2 2 0 0 0-.168.374c-.101.306-.101.649-.101 1.334v6.234c0 .685 0 1.028.101 1.334a2 2 0 0 0 .428.727c.218.237.518.404 1.117.736l5.8 3.223c.567.315.85.472 1.151.534.22.045.403-.14.403-.365V12M3.769 7.175 12.5 12M17 9.5l-9-5m14.5 14.217h-6.674m0 0h-.037m.037 0q0 .037.026.066L18.921 22m-3.095-3.283q0-.037.026-.067l3.069-3.217"
    />
  </svg>
);
export default SvgPackageIn;
