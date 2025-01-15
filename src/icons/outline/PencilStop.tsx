import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencilStop = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="m4.201 19.721.384.923zm-.729.274-.18-.983zM2.35 17.87l-.923-.384zm-.274.73.984.18zm3.927.372-.384-.923zm10.024-16.29-.707-.707zM3.099 16.069l-.923-.384zm13.774-.497a1 1 0 0 0-1.414 1.414zm3.252 6.08a1 1 0 0 0 1.415-1.413zM5.618 18.049l-1.801.75.768 1.846 1.802-.75zm-2.346.206.75-1.802-1.846-.768-.75 1.8zm1.465-2.87L16.733 3.389l-1.415-1.415L3.324 13.97zM18.682 5.338 6.686 17.333 8.1 18.747 20.096 6.752zM3.323 15.384l3.363 3.363L8.1 17.333 4.737 13.97zm.494 3.414c-.207.086-.342.142-.443.181-.11.043-.118.04-.083.033l.362 1.967c.161-.03.318-.087.44-.133q.198-.078.492-.202zm-2.391-1.313q-.123.294-.201.493a2.5 2.5 0 0 0-.134.44l1.968.36c-.007.036-.01.03.032-.082.039-.1.095-.236.181-.443zm1.865 1.527a.2.2 0 0 1-.232-.233l-1.968-.361a2.2 2.2 0 0 0 2.562 2.56zm3.096.883A5.3 5.3 0 0 0 8.1 18.747l-1.414-1.414a3.3 3.3 0 0 1-1.068.715zM18.682 3.389c.538.538.538 1.41 0 1.949l1.414 1.414a3.38 3.38 0 0 0 0-4.778zm1.414-1.415a3.38 3.38 0 0 0-4.777 0l1.414 1.415a1.38 1.38 0 0 1 1.949 0zM4.022 16.452c.166-.4.41-.762.715-1.068L3.323 13.97a5.3 5.3 0 0 0-1.147 1.714zM21 18.612a2.5 2.5 0 0 1-2.5 2.5v2a4.5 4.5 0 0 0 4.5-4.5zm-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-2a4.5 4.5 0 0 0 4.5 4.5zm-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5v-2a4.5 4.5 0 0 0-4.5 4.5zm2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h2a4.5 4.5 0 0 0-4.5-4.5zm-3.04.873 4.666 4.667 1.415-1.414-4.667-4.667z"
    />
  </svg>
);
export default SvgPencilStop;
