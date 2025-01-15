import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareHeart01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.246.125.521.203.861.25.386.054.58.081.686.118.45.152.706.446.794.913.021.11.021.256.021.548 0 .477 0 .716.045.876.178.63.828 1 1.46.834.161-.042.367-.163.778-.406l3.634-2.141c.42-.248.63-.372.854-.459a3 3 0 0 1 .615-.168c.237-.038.48-.038.968-.038h.846c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 8.327c-.8-.909-2.133-1.153-3.135-.321s-1.143 2.224-.356 3.208c.787.985 3.491 3.282 3.491 3.282s2.705-2.297 3.492-3.282a2.256 2.256 0 0 0-.356-3.208c-1.02-.824-2.336-.588-3.136.321"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageSquareHeart01;
