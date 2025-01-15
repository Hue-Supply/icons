import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarehouse = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 21V10.643c0-.988 0-1.482-.141-1.926a3 3 0 0 0-.602-1.066c-.307-.35-.73-.606-1.576-1.117L13.654 3.5c-.601-.363-.902-.545-1.223-.616a2 2 0 0 0-.862 0c-.321.071-.622.253-1.223.616L5.319 6.534c-.846.51-1.269.766-1.576 1.117a3 3 0 0 0-.602 1.066C3 9.161 3 9.655 3 10.643V21m9.28 0h4.576v-4.423c0-.735 0-1.102-.126-1.39a1.5 1.5 0 0 0-.773-.772c-.288-.126-.655-.126-1.39-.126s-1.102 0-1.39.126a1.5 1.5 0 0 0-.772.772c-.126.288-.126.655-.126 1.39zm0 0v-4.116h-2.177c-.84 0-1.26 0-1.58.164a1.5 1.5 0 0 0-.656.656c-.164.32-.164.74-.164 1.58V21zm-3.237-4.116v-4.11c0-.84 0-1.261.163-1.582a1.5 1.5 0 0 1 .656-.655c.32-.164.74-.164 1.58-.164h.813c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.321.163.741.163 1.581v.856M5 7h14"
    />
  </svg>
);
export default SvgWarehouse;
