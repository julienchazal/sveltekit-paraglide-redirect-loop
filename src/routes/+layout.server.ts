import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = () => {
		redirect(307, '/login');
};