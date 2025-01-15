import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCartificate06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.5 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v9.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.328.167-.733.206-1.408.215M12.6 20h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C17 19.24 17 18.96 17 18.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 16 15.96 16 15.4 16h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C11 16.76 11 17.04 11 17.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C11.76 20 12.04 20 12.6 20"
    />
  </svg>
);
export default SvgCartificate06;
