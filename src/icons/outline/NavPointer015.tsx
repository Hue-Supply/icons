import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer015 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.94 12.944 19 19m-6.06-6.056a.5.5 0 0 1 .075-.062c.061-.041.135-.064.283-.11l2.328-.719c1.906-.588 2.859-.883 3.154-1.373a1.5 1.5 0 0 0 .08-1.399c-.239-.52-1.153-.92-2.98-1.72L8.578 4.368c-2.332-1.02-3.498-1.53-4.214-1.304A2 2 0 0 0 3.06 4.368c-.227.716.283 1.882 1.304 4.214l3.194 7.3c.8 1.828 1.2 2.742 1.72 2.98a1.5 1.5 0 0 0 1.398-.079c.49-.295.785-1.248 1.373-3.155l.72-2.327c.045-.148.068-.222.109-.283a.5.5 0 0 1 .06-.074"
    />
  </svg>
);
export default SvgNavPointer015;
