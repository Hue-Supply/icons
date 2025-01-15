import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRegenerate02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.125 12.012A8.467 8.467 0 0 0 5.048 6.721m12.766 4.95 2.362 2.122 2.122-2.362m-18.48.6a8.423 8.423 0 0 0 14.38 5.956M6.12 12.975 3.662 10.99 1.68 13.45m7.415-1.885a7 7 0 0 0 .439-.136 3.2 3.2 0 0 0 1.895-1.896 7 7 0 0 0 .136-.438c.041-.143.062-.214.078-.245a.4.4 0 0 1 .716 0c.016.031.037.102.078.245.066.224.098.335.136.439a3.2 3.2 0 0 0 1.896 1.895c.103.037.214.07.438.136.143.041.214.062.245.078a.4.4 0 0 1 0 .716c-.031.016-.102.037-.245.078a7 7 0 0 0-.439.136 3.2 3.2 0 0 0-1.895 1.896c-.037.103-.07.214-.136.438-.041.143-.062.214-.078.245a.4.4 0 0 1-.716 0 2 2 0 0 1-.078-.245 7 7 0 0 0-.136-.439 3.2 3.2 0 0 0-1.896-1.895c-.103-.037-.214-.07-.438-.136-.143-.041-.214-.062-.245-.078a.4.4 0 0 1 0-.716c.031-.016.102-.037.245-.078"
    />
  </svg>
);
export default SvgRegenerate02;
