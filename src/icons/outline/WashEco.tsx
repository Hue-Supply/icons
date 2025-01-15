import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashEco = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m2 3.027 1.659 9.987c.237 1.425.355 2.138.71 2.673a3 3 0 0 0 1.271 1.077c.586.263 1.309.263 2.754.263h2.635M22 3.027l-1.19 5.97m.497-2.682-.56-.265c-1.248-.59-3.099-.622-4.416-.077-1.25.517-2.99.517-4.24 0l-.074-.03c-1.293-.535-3.095-.535-4.388 0s-3.094.535-4.387 0l-.549-.227m15.092 11.153c-1.11.958-1.983 2.047-3.25 4.146m5.658-2.206c-1.183 1.183-3.208 1.29-4.391.107s-1.076-3.208.107-4.391c2.172-2.172 6.069-1.785 6.069-1.785s.387 3.897-1.785 6.069"
    />
  </svg>
);
export default SvgWashEco;
