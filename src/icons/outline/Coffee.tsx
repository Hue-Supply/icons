import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoffee = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16.943 11h2.013c.1 0 .151 0 .194.002a2 2 0 0 1 1.913 1.913l.001.194c0 .201 0 .302-.003.387a4 4 0 0 1-3.826 3.826c-.085.004-.186.004-.388.004h-.171M8.5 6.743a2.6 2.6 0 0 1-.754-1.857c0-.737.291-1.4.754-1.856m3.754 3.713a2.6 2.6 0 0 1-.754-1.857c0-.737.291-1.4.754-1.856m4.422 11.797s-2.225-1.515-6.676 0c-4.45 1.515-6.676 0-6.676 0M10 21c-.929 0-1.393 0-1.783-.051a6 6 0 0 1-5.166-5.166C3 15.393 3 14.93 3 14v-1.8c0-.652 0-.978.1-1.238a1.5 1.5 0 0 1 .862-.862c.26-.1.586-.1 1.238-.1h9.6c.652 0 .978 0 1.238.1a1.5 1.5 0 0 1 .862.862c.1.26.1.586.1 1.238V14c0 .929 0 1.393-.051 1.783a6 6 0 0 1-5.166 5.166C11.393 21 10.93 21 10 21"
    />
  </svg>
);
export default SvgCoffee;
