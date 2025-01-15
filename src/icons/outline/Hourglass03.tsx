import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHourglass03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m12 12 3.863-2.575c.781-.521 1.172-.782 1.455-1.126.25-.304.438-.655.552-1.033.13-.426.13-.896.13-1.835V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 2 15.92 2 14.8 2H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.52 6 4.08 6 5.2v.231c0 .94 0 1.409.13 1.835A3 3 0 0 0 6.681 8.3c.283.344.674.605 1.455 1.126zm0 0-3.863 2.575c-.781.521-1.172.782-1.455 1.126a3 3 0 0 0-.553 1.033C6 17.16 6 17.63 6 18.569v.231c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 22 8.08 22 9.2 22h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 20.48 18 19.92 18 18.8v-.231c0-.94 0-1.409-.13-1.835a3 3 0 0 0-.552-1.033c-.283-.344-.674-.605-1.455-1.126zM4 2h16M4 22h16M9 19h6M12 8.5l-1.5-1h3z"
    />
  </svg>
);
export default SvgHourglass03;
