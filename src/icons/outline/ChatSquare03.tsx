import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatSquare03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 15.989c0 1.316 0 1.974.254 2.476.224.443.581.802 1.02 1.027.5.256 1.153.256 2.46.256h.358c.49 0 .736 0 .974.04q.32.05.619.169c.224.088.435.213.857.463l2.56 1.52c.789.468 1.787-.1 1.787-1.018 0-.65.529-1.143 1.173-1.234.262-.038.474-.098.664-.196a2.34 2.34 0 0 0 1.02-1.027c.254-.502.254-1.16.254-2.476v-4.23c0-1.315 0-1.973-.254-2.476a2.34 2.34 0 0 0-1.02-1.027C20.226 8 19.574 8 18.266 8H16M6.081 6.399h5.71M6.081 9.6h3.426M5.733 2h6.534c1.306 0 1.96 0 2.459.256.439.225.796.585 1.02 1.027C16 3.786 16 4.443 16 5.76v4.229c0 1.316 0 1.974-.254 2.476-.224.443-.581.802-1.02 1.027-.5.256-1.153.256-2.46.256h-.358c-.49 0-.736 0-.974.04a3 3 0 0 0-.619.169c-.224.088-.435.213-.857.463l-2.56 1.52a1.183 1.183 0 0 1-1.787-1.018c0-.65-.529-1.143-1.173-1.234a2 2 0 0 1-.664-.196 2.34 2.34 0 0 1-1.02-1.027C2 11.964 2 11.306 2 9.99v-4.23c0-1.315 0-1.973.254-2.476.224-.442.581-.802 1.02-1.027C3.774 2 4.427 2 5.734 2"
    />
  </svg>
);
export default SvgChatSquare03;
