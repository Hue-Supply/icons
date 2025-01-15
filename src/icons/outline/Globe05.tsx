import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobe05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.5 3.5.39 2.725c.04.285.06.427.116.552a1 1 0 0 0 .203.3c.096.098.221.169.47.311l2.486 1.42c.123.07.184.106.25.123a.5.5 0 0 0 .179.012c.067-.007.133-.034.265-.086l1.039-.416c.395-.158.593-.237.787-.237a1 1 0 0 1 .488.129c.17.095.302.261.569.594l.7.875c.193.242.29.362.409.412a.5.5 0 0 0 .33.018c.123-.036.232-.145.451-.364L19.5 7m-3.383 13.677c.066-.297-.292-1.292-.49-1.988l-.524-1.828c-.278-.974-.418-1.461-.708-1.7a1.2 1.2 0 0 0-.907-.266c-.374.043-.755.378-1.516 1.047l-1.901 1.67c-.26.23-.39.344-.481.483-.08.123-.137.26-.168.403-.035.162-.025.335-.004.681l.039.644c.046.767.069 1.15.24 1.416M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </svg>
);
export default SvgGlobe05;
