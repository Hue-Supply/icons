import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPenTool01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.663 17.663h-3.27c-.622 0-.933 0-1.197-.104a1.5 1.5 0 0 1-.602-.434c-.183-.218-.28-.513-.478-1.103L4.181 7.217c-.488-1.466-.733-2.199-.559-2.686a1.5 1.5 0 0 1 .352-.557m8.69 13.689 5.043-5.043m-5.044 5.043 2.829 2.828 5.043-5.043-2.828-2.828m0 0-.044-3.227c0-.622 0-.933-.104-1.198a1.5 1.5 0 0 0-.433-.602c-.219-.182-.514-.28-1.104-.477L7.217 4.181c-1.466-.489-2.198-.733-2.686-.56a1.5 1.5 0 0 0-.557.353m0 0L9.59 9.582m0 0a2 2 0 1 0 2.822 2.835 2 2 0 0 0-2.822-2.835"
    />
  </svg>
);
export default SvgPenTool01;
