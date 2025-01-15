import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRegenerate01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.852 12.012a8.467 8.467 0 0 1 15.077-5.291M6.163 11.67 3.8 13.793 1.679 11.43m18.48.6a8.423 8.423 0 0 1-14.38 5.956m12.077-5.012 2.458-1.984 1.984 2.458M9.094 11.564c.224-.066.335-.098.439-.136a3.2 3.2 0 0 0 1.895-1.896 7 7 0 0 0 .136-.438c.041-.143.062-.214.078-.245a.4.4 0 0 1 .716 0c.016.031.037.102.078.245.066.224.098.335.136.439a3.2 3.2 0 0 0 1.896 1.895c.103.037.214.07.438.136.143.041.214.062.245.078a.4.4 0 0 1 0 .716c-.031.016-.102.037-.245.078a7 7 0 0 0-.439.136 3.2 3.2 0 0 0-1.895 1.896c-.037.103-.07.214-.136.438-.041.143-.062.214-.078.245a.4.4 0 0 1-.716 0 2 2 0 0 1-.078-.245 7 7 0 0 0-.136-.439 3.2 3.2 0 0 0-1.895-1.895 7 7 0 0 0-.44-.136c-.142-.041-.213-.062-.244-.078a.4.4 0 0 1 0-.716c.031-.016.102-.037.245-.078"
    />
  </svg>
);
export default SvgRegenerate01;
