import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPin01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 16v6m-1.959-6.5h4.142c1.024 0 1.537 0 1.91-.098a3 3 0 0 0 2.224-3.21c-.04-.385-.22-.865-.58-1.824-.068-.181-.102-.271-.13-.363a3 3 0 0 1-.126-1.042c.006-.096.017-.192.04-.384l.145-1.206c.224-1.858.335-2.787.042-3.507a3 3 0 0 0-1.32-1.488C15.707 2 14.771 2 12.9 2H12c-1.871 0-2.807 0-3.486.378a3 3 0 0 0-1.32 1.488c-.295.72-.183 1.65.04 3.507l.128 1.061c.016.137.025.205.03.272a3 3 0 0 1-.277 1.5c-.029.061-.06.122-.125.244-.3.571-.45.857-.525 1.074a3 3 0 0 0 2.38 3.941c.227.035.55.035 1.195.035"
    />
  </svg>
);
export default SvgPin01;
