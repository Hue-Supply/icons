import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenCandy = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m5.636 10.586 7.778 7.778M10.586 5.636l7.778 7.778M8.11 8.111l7.778 7.778m-1.556 1.556 3.111-3.111c1.189-1.188 1.783-1.782 2.005-2.467a3 3 0 0 0 0-1.855c-.223-.685-.817-1.279-2.005-2.467l-.99-.99c-1.188-1.188-1.782-1.782-2.467-2.004a3 3 0 0 0-1.854 0c-.685.222-1.279.816-2.467 2.004L6.555 9.667c-1.188 1.188-1.782 1.782-2.005 2.467a3 3 0 0 0 0 1.854c.223.685.817 1.279 2.005 2.467l.99.99c1.188 1.188 1.782 1.782 2.467 2.005a3 3 0 0 0 1.854 0c.685-.223 1.28-.817 2.467-2.005m2.378-10.98-.848-2.082c-.618-1.515 1.293-2.783 2.45-1.626l2.93 2.93c1.157 1.157-.111 3.067-1.627 2.45l-2.082-.848a1.5 1.5 0 0 1-.823-.824M6.465 16.712l-2.082-.849c-1.516-.617-2.784 1.293-1.627 2.45l2.93 2.93c1.158 1.158 3.068-.11 2.45-1.626l-.848-2.082a1.5 1.5 0 0 0-.823-.823"
    />
  </svg>
);
export default SvgHalloweenCandy;
