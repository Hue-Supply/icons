import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobePointer = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 21.95q-.493.05-1 .05C6.477 22 2 17.523 2 12S6.477 2 12 2c4.838 0 8.873 3.436 9.8 8M7.5 3.5l.39 2.725c.04.285.06.427.116.552a1 1 0 0 0 .203.3c.096.098.221.169.47.311l2.486 1.42c.123.07.184.106.25.123a.5.5 0 0 0 .179.012c.067-.007.133-.034.265-.086l1.039-.416c.395-.158.593-.237.787-.237a1 1 0 0 1 .488.129c.17.095.302.261.569.594l.7.875c.193.242.29.362.409.412a.5.5 0 0 0 .33.018c.123-.036.232-.145.451-.364L19.5 7M7.258 12.248l-.508.169c-.604.2-.905.302-1.082.496a1 1 0 0 0-.257.62c-.013.263.13.548.414 1.117l.902 1.805c.269.536.403.805.61.95a1 1 0 0 0 .62.18c.253-.01.51-.165 1.025-.474l1.35-.81c.72-.432 1.08-.648 1.209-.932a1 1 0 0 0 .019-.783c-.116-.29-.465-.523-1.164-.989l-1.745-1.163c-.239-.16-.358-.239-.489-.281a1 1 0 0 0-.359-.049c-.137.007-.273.053-.545.144m12.09 6.39-.73 1.46c-.289.577-.433.865-.615.943a.54.54 0 0 1-.486-.032c-.17-.101-.275-.406-.484-1.016l-1.551-4.512c-.184-.535-.276-.803-.214-.98a.54.54 0 0 1 .329-.328c.177-.062.444.03.98.214l4.511 1.55c.61.21.915.315 1.016.485.088.148.1.328.032.486-.077.182-.366.326-.943.614l-1.46.73a1 1 0 0 0-.184.104.5.5 0 0 0-.098.098 1 1 0 0 0-.103.184"
    />
  </svg>
);
export default SvgGlobePointer;
