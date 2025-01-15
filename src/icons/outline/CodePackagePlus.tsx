import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodePackagePlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M20.716 7.15a2 2 0 0 0-.245-.329c-.218-.236-.518-.403-1.117-.735l-5.8-3.223c-.567-.315-.85-.472-1.151-.534a2 2 0 0 0-.806 0c-.3.062-.584.22-1.151.534l-5.8 3.223c-.6.332-.899.499-1.117.735a2 2 0 0 0-.26.354m17.447-.026q.113.19.183.4c.101.306.101.649.101 1.334v1.867m-.284-3.6L12 12M3.269 7.175a2 2 0 0 0-.168.374C3 7.855 3 8.198 3 8.883v6.234c0 .685 0 1.028.101 1.334a2 2 0 0 0 .428.727c.218.237.518.404 1.117.736l5.8 3.223c.567.315.85.472 1.151.534.22.045.403-.14.403-.365V12M3.269 7.175 12 12m4.5-2.5-9-5m8.66 14.292h2.92m0 0H22m-2.92 0v-2.92m0 2.92v2.92"
    />
  </svg>
);
export default SvgCodePackagePlus;
