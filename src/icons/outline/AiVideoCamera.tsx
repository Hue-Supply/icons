import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiVideoCamera = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2 9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C16 7.28 16 8.12 16 9.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C13.72 19 12.88 19 11.2 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2zM16.812 12.611a1.5 1.5 0 0 1 .054-1.954l2.523-2.78C20.311 6.86 22 7.513 22 8.885v5.888c0 1.413-1.774 2.042-2.664.946z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.612 9.416c.037-.127.056-.19.07-.219a.356.356 0 0 1 .636 0c.014.029.033.092.07.219.058.199.087.298.121.39a2.85 2.85 0 0 0 1.685 1.685c.092.034.191.063.39.121.127.037.19.056.219.07a.356.356 0 0 1 0 .636 2 2 0 0 1-.219.07 6 6 0 0 0-.39.121 2.85 2.85 0 0 0-1.685 1.685 6 6 0 0 0-.121.39c-.037.127-.056.19-.07.219a.356.356 0 0 1-.636 0 2 2 0 0 1-.07-.219c-.058-.199-.087-.298-.121-.39a2.85 2.85 0 0 0-1.685-1.685c-.092-.034-.191-.063-.39-.121a2 2 0 0 1-.219-.07.356.356 0 0 1 0-.636c.029-.014.092-.033.219-.07.199-.058.298-.087.39-.121A2.85 2.85 0 0 0 8.49 9.806c.034-.092.063-.191.121-.39"
    />
  </svg>
);
export default SvgAiVideoCamera;
