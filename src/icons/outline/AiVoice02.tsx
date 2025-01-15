import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiVoice02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 10.335V11a3 3 0 1 1-6 0V5a3 3 0 0 1 3-3m0 16a7 7 0 0 1-7-7m7 7a7 7 0 0 0 6.713-5.01M12 18v3m-4 1s1.5-1 4-1m0 0c2.5 0 4 1 4 1m-.114-17.14c.218-.064.327-.096.427-.133a3.11 3.11 0 0 0 1.845-1.845c.037-.1.069-.21.133-.427.04-.139.06-.208.076-.239a.39.39 0 0 1 .697 0c.015.031.036.1.076.239.064.218.096.327.133.427.315.856.99 1.53 1.845 1.845.1.037.21.069.427.133.139.04.208.06.239.076a.39.39 0 0 1 0 .697c-.031.016-.1.036-.239.076a7 7 0 0 0-.427.133c-.856.315-1.53.99-1.845 1.845-.037.1-.069.21-.133.427a2 2 0 0 1-.076.239.39.39 0 0 1-.697 0 2 2 0 0 1-.076-.239c-.064-.218-.096-.327-.133-.427a3.11 3.11 0 0 0-1.845-1.845c-.1-.037-.21-.069-.427-.133-.139-.04-.208-.06-.239-.076a.39.39 0 0 1 0-.697c.03-.015.1-.036.239-.076"
    />
  </svg>
);
export default SvgAiVoice02;
