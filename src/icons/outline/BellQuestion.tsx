import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBellQuestion = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.974 12.402c.29.941.806 1.802 1.51 2.505.956.957.278 2.593-1.075 2.593H4.744c-1.353 0-2.031-1.636-1.074-2.593a6.08 6.08 0 0 0 1.709-3.373l.443-2.88c.17-1.1.463-2.175.876-3.207A5.48 5.48 0 0 1 11.788 2h.576c.824 0 1.617.184 2.332.52m-.134 18.698c-.32.192-1.147.782-2.562.782s-2.254-.588-2.562-.782m8.27-17.716a2.248 2.248 0 0 1 4.369.75C22.077 6 19.828 6.5 19.828 6.5m.03 3h.01"
    />
  </svg>
);
export default SvgBellQuestion;
