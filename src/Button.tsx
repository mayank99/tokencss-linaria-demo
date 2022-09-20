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
	background-color: var(--color-grape-8);
	padding: var(--size-xs);
	border-radius: var(--size-xs);
`;
