import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodePackageUpload = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.716 7.15a2 2 0 0 0-.245-.329c-.218-.236-.518-.403-1.117-.735l-5.8-3.223c-.567-.315-.85-.472-1.151-.534a2 2 0 0 0-.806 0c-.3.062-.584.22-1.151.534l-5.8 3.223c-.6.332-.899.499-1.117.735a2 2 0 0 0-.26.354m17.447-.026q.113.19.183.4c.101.306.101.649.101 1.334v1.867m-.284-3.6L12 12M3.269 7.175a2 2 0 0 0-.168.374C3 7.855 3 8.198 3 8.883v6.234c0 .685 0 1.028.101 1.334a2 2 0 0 0 .428.727c.218.237.518.404 1.117.736l5.8 3.223c.567.315.85.472 1.151.534.22.045.403-.14.403-.365V12M3.269 7.175 12 12m4.5-2.5-9-5m11.61 17.212v-5.967m0 0v-.033m0 .033q.031 0 .056.024l2.695 2.743m-2.75-2.767q-.032 0-.056.024l-2.696 2.743"
    />
  </svg>
);
export default SvgCodePackageUpload;
