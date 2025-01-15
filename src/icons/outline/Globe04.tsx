import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobe04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.5 3.5.39 2.725c.04.285.06.427.116.552a1 1 0 0 0 .203.3c.096.098.221.169.47.311l2.486 1.42c.123.07.184.106.25.123a.5.5 0 0 0 .179.012c.067-.007.133-.034.265-.086l1.039-.416c.395-.158.593-.237.787-.237a1 1 0 0 1 .488.129c.17.095.302.261.569.594l.7.875c.193.242.29.362.409.412a.5.5 0 0 0 .33.018c.123-.036.232-.145.451-.364L19.5 7m2.5 5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-14.742.248-.508.169c-.604.2-.905.302-1.082.496a1 1 0 0 0-.257.62c-.013.263.13.548.414 1.117l.902 1.805c.269.536.403.805.61.95a1 1 0 0 0 .62.18c.253-.01.51-.165 1.025-.474l1.35-.81c.72-.432 1.08-.648 1.209-.932a1 1 0 0 0 .019-.783c-.116-.29-.465-.523-1.164-.989l-1.745-1.163c-.239-.16-.358-.239-.489-.281a1 1 0 0 0-.359-.049c-.137.007-.273.053-.545.144"
    />
  </svg>
);
export default SvgGlobe04;
