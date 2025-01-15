import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.818 6.254c.694-1.52 1.04-2.28 1.521-2.516a1.5 1.5 0 0 1 1.324 0c.48.236.827.996 1.52 2.516l.04.086c.256.56.384.84.586 1.035.178.174.397.3.636.368.271.077.577.047 1.19-.011l.094-.009c1.663-.159 2.495-.238 2.94.06a1.5 1.5 0 0 1 .66 1.146c.037.534-.448 1.214-1.417 2.575l-.055.078c-.357.5-.535.751-.604 1.024a1.5 1.5 0 0 0 0 .735c.069.273.247.524.604 1.025l.055.077c.97 1.36 1.454 2.041 1.418 2.575a1.5 1.5 0 0 1-.662 1.146c-.444.298-1.276.219-2.939.06l-.095-.009c-.612-.058-.918-.087-1.189-.01a1.5 1.5 0 0 0-.636.367c-.202.196-.33.476-.586 1.035l-.04.087c-.693 1.52-1.04 2.279-1.52 2.515a1.5 1.5 0 0 1-1.324 0c-.48-.236-.827-.996-1.521-2.515l-.04-.087c-.255-.56-.383-.839-.585-1.035a1.5 1.5 0 0 0-.636-.368c-.271-.076-.578-.047-1.19.011l-.094.01c-1.663.158-2.495.237-2.94-.06a1.5 1.5 0 0 1-.661-1.147c-.036-.534.449-1.214 1.418-2.575l.055-.077c.356-.501.535-.752.604-1.025a1.5 1.5 0 0 0 0-.735c-.07-.273-.248-.524-.604-1.024l-.055-.078c-.97-1.36-1.454-2.041-1.418-2.575a1.5 1.5 0 0 1 .662-1.146c.444-.298 1.276-.219 2.939-.06l.094.009c.612.058.919.088 1.19.01a1.5 1.5 0 0 0 .636-.367c.202-.196.33-.476.585-1.035z"
    />
  </svg>
);
export default SvgStar02;
