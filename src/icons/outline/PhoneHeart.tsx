import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.732 19.275c-.366.366-.55.549-.975.848-1.12.787-3.618 1.242-4.944.901-.504-.13-.548-.15-.636-.19a20.1 20.1 0 0 1-5.93-4.08 20.1 20.1 0 0 1-4.082-5.931c-.04-.088-.06-.133-.19-.636-.34-1.326.115-3.824.902-4.944.3-.426.482-.609.848-.975.376-.375.564-.563.755-.683a2 2 0 0 1 2.128 0c.19.12.378.308.754.683l.381.382c.411.41.617.617.729.857a1.5 1.5 0 0 1 .128.82c-.033.263-.166.522-.432 1.039L8.54 8.588c-.114.222-.172.333-.205.493a1.5 1.5 0 0 0-.01.43c.025.16.063.246.14.417.336.74 1.049 2.005 2.45 3.407 1.373 1.372 2.612 2.084 3.359 2.428.184.085.276.127.447.152.124.018.334.009.455-.02.168-.041.284-.108.517-.242l1.1-.635c.452-.26.678-.39.908-.44a1.5 1.5 0 0 1 1 .132c.21.107.394.292.763.66l.268.268c.375.376.563.563.683.754a2 2 0 0 1 0 2.128c-.12.191-.308.379-.683.755"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.899 2.83c-.8-.908-2.134-1.153-3.136-.32-1.002.832-1.143 2.223-.356 3.208C15.194 6.702 17.9 9 17.9 9s2.704-2.298 3.491-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.335-.587-3.135.322"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhoneHeart;
