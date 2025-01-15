import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenWizardHat = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m16.5 10 3.478-3.162a1.5 1.5 0 0 0-.614-2.557l-6.366-1.736a3 3 0 0 0-3.216 1.13L7.395 6.957a3 3 0 0 0-.52 1.203L5 18H4a2 2 0 0 0 0 4h16a2 2 0 1 0 0-4h-1.16zm0 0-1.08-2.808m-1.507 8.895a1.913 1.913 0 1 1-3.826 0m3.826 0a1.913 1.913 0 0 0-3.826 0m3.826 0h4.244m-8.07 0H5.412"
    />
  </svg>
);
export default SvgHalloweenWizardHat;
