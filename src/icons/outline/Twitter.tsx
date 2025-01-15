import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTwitter = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21.74 5.417c.2-.425.302-.638.257-.812a.5.5 0 0 0-.289-.337c-.165-.07-.425.007-.943.161-.53.158-1.062.29-1.605.45-1.199-1.35-2.976-1.424-4.684-.786s-2.826 2.199-2.802 3.989v1.067c-3.04.078-5.79-1.125-7.766-3.295-.287-.314-.43-.472-.585-.506a.5.5 0 0 0-.391.076c-.131.09-.194.26-.318.598-.862 2.335-1.925 7.68 4.783 10.599-1.003.666-2.005 1.224-3.058 1.603-1.113.4-1.67.6-1.76.775a.47.47 0 0 0 .009.477c.097.17.575.322 1.532.627 2.592.823 5.222.958 7.59.271 3.83-1.11 6.975-3.973 8.183-8.263.36-1.305.539-2.653.531-4.006 0-.18.736-1.464 1.316-2.688"
    />
  </svg>
);
export default SvgTwitter;
