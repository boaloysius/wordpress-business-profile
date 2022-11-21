import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={['business-profile/profile']}
				orientation="vertical"
				template={[['business-profile/profile']]}
			/>
		</div>
	);
}
