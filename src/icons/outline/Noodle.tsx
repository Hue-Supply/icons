import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNoodle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 4.5h16m-8 3.358 7.727 2.07M6.037 4.5l-.29.467c-.648 1.043-.684 2.588-.085 3.688.568 1.043.568 2.498 0 3.541l-.033.062c-.589 1.08-.589 2.584 0 3.663.588 1.08.588 2.585 0 3.664l-.25.458M9.268 4.5l-.29.467c-.649 1.043-.685 2.588-.086 3.688.569 1.043.569 2.498 0 3.541l-.033.062c-.588 1.08-.588 2.584 0 3.663.588 1.08.588 2.585 0 3.664l-.25.458M12.5 4.5l-.291.467c-.649 1.043-.684 2.588-.085 3.688.568 1.043.568 2.498 0 3.541l-.034.062c-.588 1.08-.588 2.584 0 3.663.588 1.08.588 2.585 0 3.664l-.249.458"
    />
  </svg>
);
export default SvgNoodle;
