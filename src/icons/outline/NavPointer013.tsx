import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer013 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 2v2M2 9h2m.05-4.95 1.415 1.415M4.051 13.95l1.414-1.414m7.07-7.072L13.95 4.05m2.856 12.225.828-.256c1.906-.589 2.86-.883 3.155-1.373a1.5 1.5 0 0 0 .079-1.4c-.238-.52-1.152-.92-2.98-1.719l-3.81-1.667c-2.333-1.02-3.498-1.53-4.215-1.304A2 2 0 0 0 8.558 9.86c-.226.716.284 1.883 1.304 4.214l1.667 3.81c.8 1.829 1.2 2.743 1.72 2.981a1.5 1.5 0 0 0 1.399-.08c.49-.294.784-1.248 1.373-3.154l.256-.828c.045-.148.068-.221.109-.282a.5.5 0 0 1 .137-.137c.06-.04.134-.064.282-.11"
    />
  </svg>
);
export default SvgNavPointer013;
