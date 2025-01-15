import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPiggyBank = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14 6.5a3.5 3.5 0 1 0-6.778 1.23M5 14h-.88a2.12 2.12 0 0 1-1.726-3.351L2.5 10.5m8.722-3.933h3.707c.272 0 .54-.063.78-.182l.452-.226c.95-.474 2.096.17 2.096 1.175 0 .43.24.808.638 1.027.565.312 1.263.82 1.436 1.854a.6.6 0 0 0 .583.505c.6 0 1.086.454 1.086 1.015v2.464c0 .602-.522 1.09-1.166 1.09a.65.65 0 0 0-.597.413c-.244.606-.271 1.238-.684 1.713-.586.677-.879 1.015-.93 1.109-.085.154-.063.095-.1.267-.023.105-.023.219-.023.446V21H15v-2.803h-3V21H8.5v-1.203c0-.462 0-.692-.05-.846-.067-.2-.073-.21-.217-.365-.11-.118-.497-.332-1.273-.758-1.38-.76-1.96-2.61-1.96-4.771v-.675c0-3.212 2.786-5.815 6.222-5.815"
    />
  </svg>
);
export default SvgPiggyBank;
