import { sveltekit } from "@sveltejs/kit/vite";
import type { PageServerLoad } from './$types';

// import { fail, type Actions } from '@sveltejs/kit';
// import { zfd } from 'zod-form-data';
// import { z } from 'zod';
// import { mailer } from '$lib/server/mail';

export const load: PageServerLoad = async () => {
	const heroClassicSmall = {
		title: 'Contact us',
		subtitle:
			'Do you need help creating your new digital product or would you like us to support you in the development of your current product? Just send us an email.',

		image: {
			src: '/images/hero-contact.webp',
			alt: 'Hero'
		}
	};
	const contact = {
		title: 'Send a message'
	};
	return {
		seo: {
			title: 'Contact',
			description: 'Meta description for contact page'
		},
		heroClassicSmall,
		contact
	};
};