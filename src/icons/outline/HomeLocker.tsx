import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHomeLocker = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M11.54 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2v-3.9c0-1.031 0-1.547.122-2.03a4 4 0 0 1 .527-1.203c.271-.417.65-.767 1.408-1.467l3.686-3.405c1.148-1.062 1.723-1.592 2.375-1.793a3 3 0 0 1 1.764 0c.652.2 1.227.731 2.375 1.793L18.943 7.6c.758.7 1.137 1.05 1.408 1.467a4 4 0 0 1 .302.553m-.459 7.113v-1.755a1.756 1.756 0 0 0-3.51 0v1.755M16.613 22h3.65c.59 0 .886 0 1.11-.115.199-.1.36-.262.461-.46.115-.225.115-.52.115-1.11v-1.896c0-.59 0-.885-.115-1.11a1.05 1.05 0 0 0-.46-.46c-.226-.116-.52-.116-1.11-.116h-3.652c-.59 0-.885 0-1.11.115-.198.101-.36.262-.46.46-.115.226-.115.52-.115 1.11v1.897c0 .59 0 .885.115 1.11.1.198.262.36.46.46.225.115.52.115 1.11.115Z"
    />
  </svg>
);
export default SvgHomeLocker;
