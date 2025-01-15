import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBucketOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m19.972 6.342-1.37 7.588m1.37-7.588Q20 6.172 20 6c0-2.21-3.582-4-8-4-1.678 0-3.235.258-4.52.7m12.49 3.642c-.274 1.623-2.488 2.97-5.478 3.46m3.353 8.294-.21 1.16c-.04.216-.06.324-.142.523a3 3 0 0 1-.294.492c-.136.168-.171.196-.242.252-.743.593-2.297 1.477-4.957 1.477s-4.214-.884-4.957-1.477c-.07-.056-.106-.084-.243-.252a3 3 0 0 1-.293-.492c-.083-.2-.103-.308-.142-.524L4.002 6.192m13.844 11.904L1.75 2m16.096 16.096L21.75 22"
    />
  </svg>
);
export default SvgBucketOff;
