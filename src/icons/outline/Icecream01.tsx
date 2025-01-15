import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcecream01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22v-4m3-15-7 7m8-2-7.5 7.5m1.9 1.5h3.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V6c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C13.395 2 12.93 2 12 2s-1.395 0-1.777.102a3 3 0 0 0-2.12 2.122C8 4.605 8 5.07 8 6v8.6c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163"
    />
  </svg>
);
export default SvgIcecream01;
