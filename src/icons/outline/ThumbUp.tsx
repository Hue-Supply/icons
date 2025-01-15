import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThumbUp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.184 22V11h-.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.327.642-.327 1.482-.327 3.162v1.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C4.464 22 5.304 22 6.985 22zm0 0h5.375c2.279 0 3.418 0 4.383-.34a6 6 0 0 0 3.052-2.405c.555-.86.82-1.967 1.352-4.182.408-1.701.612-2.551.46-3.232a3 3 0 0 0-1.604-2.033C19.576 9.5 18.7 9.5 16.948 9.5c-.712 0-1.068 0-1.347-.118a1.5 1.5 0 0 1-.8-.8c-.117-.279-.117-.634-.117-1.344v-3.61c0-.119 0-.178-.004-.228a1.5 1.5 0 0 0-1.397-1.397C13.233 2 13.175 2 13.057 2c-.104 0-.156 0-.203.002a2 2 0 0 0-1.67 1.056 5 5 0 0 0-.088.183L7.184 11.5z"
    />
  </svg>
);
export default SvgThumbUp;
