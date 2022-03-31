import * as React from "react";

const SvgComponent = (props:any) => (
	<svg
		width={20}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx={10} cy={10} r={10} fill="#BBB" />
		<path
		d="M15.969 8.534a.643.643 0 0 0-.549-.457l-3.464-.328-1.369-3.345A.638.638 0 0 0 10 4a.636.636 0 0 0-.586.404L8.044 7.75l-3.464.328a.645.645 0 0 0-.549.457.685.685 0 0 0 .186.708l2.619 2.396-.772 3.548a.68.68 0 0 0 .248.687.617.617 0 0 0 .701.033L10 14.042l2.986 1.864c.22.136.495.124.702-.033a.68.68 0 0 0 .248-.687l-.772-3.548 2.619-2.396a.685.685 0 0 0 .186-.708Z"
		fill="#fff"
		/>
	</svg>
);

export default SvgComponent;
