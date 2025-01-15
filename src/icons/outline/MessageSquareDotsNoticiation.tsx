import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareDotsNoticiation = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.5 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.246.125.521.203.861.25.386.054.58.081.686.118.45.152.706.446.794.913.021.11.021.256.021.548 0 .477 0 .716.045.876.178.63.828 1 1.46.834.161-.042.367-.163.778-.406l3.634-2.141c.42-.248.63-.372.854-.459a3 3 0 0 1 .615-.168c.237-.038.48-.038.968-.038h.846c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2v-1.7M9 11h.01M12 11h.01M15 11h.01M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgMessageSquareDotsNoticiation;
