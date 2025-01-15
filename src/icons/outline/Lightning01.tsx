import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLightning01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m5.313 13.533 5.56-9.937c.573-1.023.859-1.534 1.072-1.585a.5.5 0 0 1 .498.163c.141.168.068.75-.078 1.912l-.539 4.29c-.04.311-.059.467-.01.587a.5.5 0 0 0 .22.25c.114.063.27.063.584.063h5.417c.435 0 .653 0 .783.092a.5.5 0 0 1 .206.34c.022.158-.078.35-.279.737l-4.973 9.572c-.583 1.124-.875 1.685-1.09 1.741a.5.5 0 0 1-.505-.157c-.145-.168-.066-.796.091-2.052l.494-3.925c.039-.311.058-.467.01-.587a.5.5 0 0 0-.22-.25c-.114-.063-.27-.063-.584-.063H6.01c-.448 0-.672 0-.803-.094a.5.5 0 0 1-.205-.35c-.018-.16.092-.355.31-.747"
    />
  </svg>
);
export default SvgLightning01;
