import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClockEdit = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M18.636 2c.852.567 1.628 1.24 2.309 2M5.309 2A12 12 0 0 0 3 4m14 15.5 2.5 2.5M6.998 19.5l-2.5 2.5m7.805-12.879.707-.707c.33-.329.494-.493.665-.592a1.5 1.5 0 0 1 1.5 0c.17.099.335.263.664.592s.493.493.592.664a1.5 1.5 0 0 1 0 1.5c-.099.171-.263.336-.592.665l-.707.707M12.303 9.12 9.635 11.79c-.19.19-.286.286-.362.395q-.102.145-.166.31c-.049.124-.075.256-.128.52l-.33 1.647c-.078.394-.117.59-.06.73a.5.5 0 0 0 .271.272c.14.058.337.018.73-.06l1.647-.33c.265-.053.397-.08.521-.128q.166-.064.31-.166c.11-.076.205-.171.396-.362l2.668-2.668M12.303 9.12l2.829 2.829M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgAlarmClockEdit;
