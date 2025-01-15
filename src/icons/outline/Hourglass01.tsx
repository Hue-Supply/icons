import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHourglass01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 12.04 3.863-2.575c.781-.521 1.172-.782 1.455-1.126.25-.305.438-.656.552-1.033.13-.427.13-.896.13-1.835V5.24c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.559 6 4.119 6 5.24v.23c0 .94 0 1.41.13 1.836a3 3 0 0 0 .552 1.033c.283.344.674.605 1.455 1.126zm0 0-3.863 2.575c-.781.52-1.172.781-1.455 1.125a3 3 0 0 0-.553 1.033C6 17.2 6 17.67 6 18.608v.232c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 20.52 18 19.96 18 18.84v-.232c0-.939 0-1.408-.13-1.835a3 3 0 0 0-.552-1.033c-.283-.344-.674-.604-1.455-1.125zm-8-10h16m-16 20h16"
    />
  </svg>
);
export default SvgHourglass01;
