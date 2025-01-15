import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightbulb02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 13.901v-2.537m0 0h2.857m-2.857 0H9.143M4.38 9.619a7.619 7.619 0 1 1 12.728 5.652c-.943.853-1.414 1.28-1.544 1.434-.526.623-.572.725-.68 1.533-.028.2-.028.506-.028 1.119 0 .598 0 .897-.063 1.143a2 2 0 0 1-1.437 1.436c-.246.064-.545.064-1.143.064h-.428c-.598 0-.897 0-1.143-.064A2 2 0 0 1 9.206 20.5c-.063-.246-.063-.545-.063-1.143 0-.613 0-.919-.027-1.119-.11-.808-.155-.91-.68-1.533-.131-.154-.603-.581-1.546-1.434a7.6 7.6 0 0 1-2.51-5.652"
    />
  </svg>
);
export default SvgLightbulb02;
