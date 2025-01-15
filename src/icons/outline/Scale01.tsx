import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScale01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 16v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3H8m3.621 13.683H7.254m0 0v-4.366m0 4.366L7.5 16.5l4.594-4.73.284-.275m0 0c.123.14.273.256.441.341.32.164.74.164 1.581.164h4.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3h-1.8c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656C12 4.139 12 4.559 12 5.4v4.2c0 .84 0 1.26.164 1.581q.088.172.214.314"
    />
  </svg>
);
export default SvgScale01;
