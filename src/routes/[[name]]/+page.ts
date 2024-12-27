import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const name: string | undefined = params.name ? atob(params.name) : undefined;
	return { name };
};
