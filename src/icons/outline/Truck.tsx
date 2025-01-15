import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTruck = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 16V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 4 14.92 4 13.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 5.52 2 6.08 2 7.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 16 4.08 16 5.2 16zm0 0h3.6c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-1.8c0-.297 0-.445-.028-.588a1.5 1.5 0 0 0-.122-.365c-.063-.13-.152-.25-.33-.487l-1.8-2.4c-.264-.352-.396-.528-.563-.655a1.5 1.5 0 0 0-.495-.247C19.46 7 19.24 7 18.8 7H17zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4m11 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </svg>
);
export default SvgTruck;
