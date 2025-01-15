import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPackageOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.496 3.669 1.45-.806c.567-.315.85-.472 1.151-.534a2 2 0 0 1 .806 0c.3.062.584.22 1.151.534l5.8 3.223c.6.332.899.499 1.117.735.193.21.339.458.428.728.101.306.101.649.101 1.334v6.234c0 .22 0 .405-.003.565M6.08 5.567l-.934.519c-.6.332-.899.499-1.117.735a2 2 0 0 0-.428.728c-.101.306-.101.649-.101 1.334v6.234c0 .685 0 1.028.101 1.334.09.27.235.518.428.727.218.237.518.404 1.117.736l5.8 3.223c.567.315.85.472 1.151.534.266.055.54.055.806 0 .3-.062.584-.22 1.151-.534l4.937-2.743M12.5 21v-9L4 7.5m17 0-4.781 2.531M17 9.5 12.5 7M2.75 2l20 20"
    />
  </svg>
);
export default SvgPackageOff;
