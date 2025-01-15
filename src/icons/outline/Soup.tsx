import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSoup = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.623 6.743a2.6 2.6 0 0 1-.754-1.857c0-.737.291-1.4.754-1.856m3.754 3.713a2.6 2.6 0 0 1-.754-1.857c0-.737.291-1.4.754-1.856m3.754 3.713a2.6 2.6 0 0 1-.754-1.857c0-.737.291-1.4.754-1.856M12 21a8 8 0 0 1-8-8v-1.263c0-.22 0-.33.012-.422a1.5 1.5 0 0 1 1.302-1.303C5.407 10 5.517 10 5.737 10h12.526c.22 0 .33 0 .422.011a1.5 1.5 0 0 1 1.303 1.304c.012.092.012.202.012.422V13a8 8 0 0 1-8 8"
    />
  </svg>
);
export default SvgSoup;
