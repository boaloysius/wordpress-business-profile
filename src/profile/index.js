import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';

registerBlockType('business-profile/profile', {
	title: __('Profile', 'business-profiles'),
	description: __('Profile', 'business-profiles'),
	icon: 'admin-users',
	parent: ['business-profile/profiles'],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			default: 'Business Name',
		},
		facebook: {
			type: 'string',
			default: 'https://facebook.com',
		},
		instagram: {
			type: 'string',
			default: 'https://instagram.com',
		},
		twitter: {
			type: 'string',
			default: 'https://twitter.com',
		},
		linkedin: {
			type: 'string',
			default: 'https://linkedin.com',
		},
		youtube: {
			type: 'string',
			default: 'https://youtube.com',
		},
		website: {
			type: 'string',
			default: 'https://website.com',
		},
		image1: {
			type: 'string',
			default: '',
		},
		image2: {
			type: 'string',
			default: '',
		},
		image3: {
			type: 'string',
			default: null,
		},
		image4: {
			type: 'string',
			default: null,
		},
		image5: {
			type: 'string',
			default: null,
		},
		description: {
			type: 'string',
			default:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
		},
		card_background: {
			type: 'string',
			default: 'blue',
		},
	},
	edit,
	save,
});
