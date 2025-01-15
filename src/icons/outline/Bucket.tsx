import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBucket = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m19.972 6.338-2.336 12.918c-.04.216-.06.324-.142.523a3 3 0 0 1-.294.492c-.136.168-.171.196-.242.252-.743.593-2.297 1.477-4.957 1.477s-4.214-.884-4.957-1.477c-.07-.056-.106-.084-.243-.252a3 3 0 0 1-.293-.492c-.083-.2-.103-.308-.142-.524L4.016 6.251m15.956.087Q19.999 6.171 20 6c0-2.21-3.582-4-8-4S4 3.79 4 6q0 .127.015.25m15.957.088C19.628 8.39 16.19 10 12 10c-4.25 0-7.726-1.657-7.985-3.75"
    />
  </svg>
);
export default SvgBucket;
