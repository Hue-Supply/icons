import * as React from 'react';
import type { SVGProps } from 'react';
const SvgApple = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.572 7.272c-3.43 0-4.572 3.4-4.572 6.231C4 16.903 6.286 22 8.572 22c1.242-.053 1.919-.566 3.428-.566 1.5 0 1.714.566 3.428.566 1.333 0 3.358-2.055 4.192-4.035.085-.202.128-.303.127-.609 0-.246-.085-.553-.211-.764-.156-.262-.46-.484-1.066-.928-.671-.492-1.312-1.327-1.328-2.728a2.95 2.95 0 0 1 .664-1.905c.635-.8.953-1.199 1.008-1.609a1.6 1.6 0 0 0-.236-1.027c-.228-.345-.363-.41-.633-.54-.832-.4-1.611-.561-1.945-.583-1.637-.127-3.234 1.133-4 1.133-.778 0-2.172-1.133-3.428-1.133M12.533 4.105c.566 0 1.109-.222 1.509-.616.4-.395.625-.93.625-1.489-.566 0-1.109.222-1.509.617-.4.394-.625.93-.625 1.488"
    />
  </svg>
);
export default SvgApple;
