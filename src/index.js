import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import edit from './edit';
import save from './save';
import './profile';

registerBlockType('business-profile/profiles', {
	edit,
	save,
});
