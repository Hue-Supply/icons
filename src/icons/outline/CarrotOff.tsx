import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarrotOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.216 9.39-3.81 4.261a14.2 14.2 0 0 0-3.27 6.277l-.025.113c-.251 1.094.64 2.033 1.742 1.834 2.518-.453 4.891-1.656 6.805-3.446l3.838-3.593m2.315-2.824c.502-1.401.237-2.977-.83-4.044s-2.639-1.33-4.036-.834m-3.174 10.02 1.367 1.366M2 2l20 20m-.125-14.088-.726-.726a7 7 0 0 0-.327-.317 2.9 2.9 0 0 0-3.807 0c-.075.066-.16.15-.326.317l-.152.152a.836.836 0 0 0 0 1.182 3.344 3.344 0 0 0 4.73 0zM15.962 2l.726.726c.167.167.25.251.316.326a2.9 2.9 0 0 1 0 3.808c-.066.075-.15.159-.316.326l-.152.152a.836.836 0 0 1-1.183 0 3.344 3.344 0 0 1 0-4.73z"
    />
  </svg>
);
export default SvgCarrotOff;
