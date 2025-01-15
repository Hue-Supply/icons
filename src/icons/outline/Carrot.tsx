import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarrot = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.733 9.231 2.115 2.115m-3.076 5.808 1.367 1.366m.52-.091 5.018-4.696c1.714-1.604 1.853-4.219.306-5.765-1.573-1.573-4.242-1.399-5.833.38l-4.742 5.303a14.2 14.2 0 0 0-3.27 6.277l-.025.113c-.25 1.094.64 2.033 1.742 1.834 2.518-.453 4.892-1.656 6.805-3.446M21.876 7.912l-.726-.726a7 7 0 0 0-.326-.317 2.9 2.9 0 0 0-3.807 0 7 7 0 0 0-.326.317l-.153.152a.836.836 0 0 0 0 1.182 3.344 3.344 0 0 0 4.73 0zM15.962 2l.726.726c.168.167.251.25.317.326a2.9 2.9 0 0 1 0 3.808c-.066.075-.15.159-.317.326l-.152.152a.836.836 0 0 1-1.182 0 3.344 3.344 0 0 1 0-4.73z"
    />
  </svg>
);
export default SvgCarrot;
