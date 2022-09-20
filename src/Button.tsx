/** @jsxImportSource preact */
import clsx from 'clsx';
import { css } from '@linaria/core';
import type { ComponentProps } from 'preact';

export default (props: ComponentProps<'button'>) => {
	return <button {...props} class={clsx(button, props.class)} />;
};

const button = css`
	font: inherit;
	cursor: pointer;
	border: 0.5px solid transparent;
	background-color: var(--accent-2);
	padding: var(--size-xs);
	border-radius: var(--size-xs);
	color: var(--text);

	&:hover {
		background-color: var(--accent-1);
	}
`;
