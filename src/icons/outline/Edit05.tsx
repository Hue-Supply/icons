import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 16v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4H8m.677 13.695.139-.04c.45-.126.675-.19.884-.285q.281-.128.529-.31c.186-.136.351-.3.682-.631L21.252 6.088a2.359 2.359 0 0 0-3.336-3.336L7.574 13.094c-.33.33-.495.495-.631.68a3 3 0 0 0-.31.529c-.095.21-.158.434-.285.884l-.04.139c-.302 1.077-.454 1.616-.315 1.985a1.2 1.2 0 0 0 .698.698c.37.14.908-.012 1.986-.314"
    />
  </svg>
);
export default SvgEdit05;
