import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBellPlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m18.719 11.174.055.36a6.08 6.08 0 0 0 1.71 3.373c.956.957.278 2.593-1.075 2.593H4.744c-1.353 0-2.031-1.636-1.074-2.593a6.08 6.08 0 0 0 1.709-3.373l.443-2.88c.17-1.1.463-2.175.876-3.207A5.48 5.48 0 0 1 11.788 2h.576c.593 0 1.17.095 1.712.274m.486 18.944c-.32.192-1.147.782-2.562.782s-2.254-.588-2.562-.782M19.076 2v3m0 0v3m0-3h-3m3 0h3"
    />
  </svg>
);
export default SvgBellPlus;
