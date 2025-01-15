import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileShield021 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.5 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8V11M8 7h8m-8 4h8m-8 4h4m5.776.098-1.123.35c-.424.133-.636.2-.793.327-.139.113-.246.26-.313.426-.075.188-.075.41-.075.854v.308c0 .823 0 1.235.089 1.622.09.394.248.77.467 1.11.215.335.509.622 1.097 1.198.39.38.585.571.806.648.225.079.469.079.693 0 .222-.077.417-.267.806-.648.588-.576.883-.863 1.097-1.198.219-.34.377-.716.467-1.11.09-.387.09-.799.09-1.622v-.308c0-.444 0-.666-.076-.854a1.05 1.05 0 0 0-.312-.426c-.158-.127-.37-.194-.794-.326l-1.122-.351c-.187-.058-.28-.088-.375-.1a1 1 0 0 0-.254 0c-.096.013-.189.042-.375.1Z"
    />
  </svg>
);
export default SvgFileShield021;
