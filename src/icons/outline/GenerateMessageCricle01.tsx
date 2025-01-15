import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGenerateMessageCricle01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 1 0-8.732-6.812c.276 1.104.413 1.656.433 1.91.024.313.022.362-.025.673-.038.251-.138.555-.338 1.164l-.023.07c-.431 1.309-.646 1.963-.495 2.43a1.5 1.5 0 0 0 .82.91c.45.197 1.122.05 2.468-.246l1.505-.33c.44-.096.66-.144.843-.161.223-.021.262-.022.486-.007.182.013.571.088 1.35.237A9 9 0 0 0 12 21"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.454 8.366c.052-.178.078-.267.098-.307a.5.5 0 0 1 .896 0c.02.04.045.129.098.307.081.28.122.42.17.548a4 4 0 0 0 2.37 2.37c.128.048.268.088.548.17.178.053.267.079.307.098a.5.5 0 0 1 0 .896c-.04.02-.129.045-.307.098-.28.082-.42.122-.549.17a4 4 0 0 0-2.37 2.37 9 9 0 0 0-.17.548 3 3 0 0 1-.097.307.5.5 0 0 1-.896 0c-.02-.04-.046-.129-.098-.307-.082-.28-.123-.42-.17-.548a4 4 0 0 0-2.37-2.37c-.129-.048-.269-.088-.548-.17-.179-.053-.268-.079-.307-.098a.5.5 0 0 1 0-.896c.04-.02.128-.045.307-.098.28-.082.42-.122.548-.17a4 4 0 0 0 2.37-2.37c.047-.129.088-.268.17-.548"
    />
  </svg>
);
export default SvgGenerateMessageCricle01;
