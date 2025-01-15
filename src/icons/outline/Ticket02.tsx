import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTicket02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 11.46v1.114m0 3.345v1.115M10 7v1.115M22 16.3v.5c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 20 19.92 20 18.8 20H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 18.48 2 17.92 2 16.8v-.5c0-.274 0-.411.04-.505a.43.43 0 0 1 .165-.208c.083-.06.251-.1.588-.177a3.501 3.501 0 0 0 0-6.82c-.337-.078-.505-.117-.588-.177a.43.43 0 0 1-.165-.208C2 8.111 2 7.975 2 7.7v-.5c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v.5c0 .274 0 .411-.04.505a.43.43 0 0 1-.165.208c-.083.06-.251.1-.588.177a3.501 3.501 0 0 0 0 6.82c.337.078.505.117.588.177a.43.43 0 0 1 .165.208c.04.094.04.23.04.505"
    />
  </svg>
);
export default SvgTicket02;
