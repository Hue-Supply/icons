import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileLock01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 10.5v-.888c0-.778 0-1.167-.092-1.53L19.886 8M12 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.333c.69 0 1.035 0 1.362.074a3 3 0 0 1 .505.162m0 0q.165.07.322.16c.291.166.546.4 1.054.866l3.068 2.811c.573.526.86.789 1.065 1.102a3 3 0 0 1 .377.825M14 2.236V2.5m0-.264V6.5A1.5 1.5 0 0 0 15.5 8h4.386m0 0H19.5m.9 9.2v-1.6a1.6 1.6 0 1 0-3.2 0v1.6m-.064 4.8h3.328c.538 0 .806 0 1.012-.105a.96.96 0 0 0 .42-.42c.104-.205.104-.473.104-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.205-.104-.473-.104-1.011-.104h-3.328c-.538 0-.806 0-1.012.105a.96.96 0 0 0-.42.42c-.104.204-.104.473-.104 1.011v1.728c0 .538 0 .806.105 1.012a.96.96 0 0 0 .42.42c.204.104.473.104 1.011.104Z"
    />
  </svg>
);
export default SvgFileLock01;
