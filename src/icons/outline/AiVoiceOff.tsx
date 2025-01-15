import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiVoiceOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2a3 3 0 0 0-3 3v4m4.5 4.599A3 3 0 0 0 15 11V9.607M5 11a7 7 0 0 0 3.214 5.889C10.07 18.085 12 19.79 12 22v0m6.738-9.097a7 7 0 0 1-2.238 3.46M12 22h4m-4 0H8M1.75 2l20 20M15.886 4.86c.218-.064.327-.096.427-.133a3.11 3.11 0 0 0 1.845-1.845c.037-.1.069-.21.133-.427.04-.139.06-.208.076-.239a.39.39 0 0 1 .697 0c.015.031.036.1.076.239.064.218.096.327.133.427.315.856.99 1.53 1.845 1.845.1.037.21.069.427.133.139.04.208.06.239.076a.39.39 0 0 1 0 .697c-.031.016-.1.036-.239.076a7 7 0 0 0-.427.133c-.856.315-1.53.99-1.845 1.845-.037.1-.069.21-.133.427a2 2 0 0 1-.076.239.39.39 0 0 1-.697 0 2 2 0 0 1-.076-.239c-.064-.218-.096-.327-.133-.427a3.11 3.11 0 0 0-1.845-1.845c-.1-.037-.21-.069-.427-.133-.139-.04-.208-.06-.239-.076a.39.39 0 0 1 0-.697c.03-.015.1-.036.239-.076"
    />
  </svg>
);
export default SvgAiVoiceOff;
