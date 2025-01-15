import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWhistle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M11.5 16.563a1 1 0 1 0-1-1.731zm-.167-9.79a1 1 0 1 0 1.334-1.49zm1.41-1.414a1 1 0 0 0-1.447 1.381zm6.806 8.575-.723.69zm-3.655 4.629.504-.864zm-4.27-3.65a1 1 0 0 0-1.009 1.727zm7.423 3.555-.555-.831zm-.998.577.31.95zm-1.124.033-.253.968zm3.871-3.579-.944.33zm-.19 1.714-.85-.527zM8 15.5a5 5 0 0 1-5-5H1a7 7 0 0 0 7 7zm-5-5a5 5 0 0 1 5-5v-2a7 7 0 0 0-7 7zm7.5 4.332A5 5 0 0 1 8 15.5v2c1.273 0 2.47-.34 3.5-.937zM8 5.5c1.281 0 2.448.48 3.333 1.273l1.334-1.49A6.98 6.98 0 0 0 8 3.5zm1 5a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm3.296-2.76 7.53 7.884 1.446-1.381-7.53-7.884zm5.102 10.96-4.775-2.787-1.008 1.727 4.775 2.787zm2.094-.063c-.54.36-.653.425-.753.457l.62 1.902c.423-.138.8-.4 1.243-.695zm-3.102 1.79c.459.267.852.507 1.282.62l.505-1.936c-.101-.027-.218-.085-.779-.412zm2.35-1.333a1 1 0 0 1-.563.017l-.505 1.935a3 3 0 0 0 1.687-.05zm1.086-3.47c.378.396.625.656.799.866.17.205.212.297.227.338l1.888-.658c-.128-.367-.34-.673-.575-.956-.23-.277-.535-.596-.893-.971zm.776 4.677c.431-.288.799-.532 1.084-.753.29-.225.564-.476.77-.807l-1.7-1.055c-.023.037-.084.117-.295.28-.215.168-.513.367-.969.67zm.25-3.472a1 1 0 0 1-.095.857l1.699 1.055a3 3 0 0 0 .284-2.571z"
    />
  </svg>
);
export default SvgWhistle;
