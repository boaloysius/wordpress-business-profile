import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import {
	TextControl,
	Button,
	Icon,
	PanelBody,
	SelectControl,
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import '../editor.scss';

import { useEffect, useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, isSelected }) {
	const {
		name,
		facebook,
		instagram,
		twitter,
		linkedin,
		youtube,
		website,
		image1,
		image2,
		image3,
		image4,
		image5,
		description,
	} = attributes;

	const { card_background } = attributes;

	const [socialLinks, setSocialLinks] = useState([]);
	const [selectedLink, setSelectedlLink] = useState();
	const [backgroundOptions, setBackgroundOptionss] = useState([]);

	useEffect(() => {
		setSocialLinks([
			{ site: 'facebook', icon: 'facebook' },
			{ site: 'instagram', icon: 'instagram' },
			{ site: 'twitter', icon: 'twitter' },
			{ site: 'linkedin', icon: 'linkedin' },
			{ site: 'youtube', icon: 'youtube' },
			{ site: 'website', icon: 'admin-site' },
		]);
		setBackgroundOptionss([
			{
				label: 'blue',
				value: 'blue',
			},
			{
				label: 'lightblue',
				value: 'lightblue',
			},
			{
				label: 'pink',
				value: 'pink',
			},
			{
				label: 'lightpink',
				value: 'lightpink',
			},
			{
				label: 'yellow',
				value: 'yellow',
			},
			{
				label: 'lightyellow',
				value: 'lightyellow',
			},
			{
				label: 'green',
				value: 'green',
			},
			{
				label: 'lightgreen',
				value: 'lightgreen',
			},
			{
				label: 'gray',
				value: 'gray',
			},
		]);
	}, []);

	const onChangeSocial = (type, value) => {
		const newSocial = { ...attributes };
		newSocial[type] = value;
		setAttributes(newSocial);
	};

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onSelectImage = (imageId, imageObject) => {
		const newAttributes = { ...attributes };
		newAttributes[imageId] = imageObject.url;
		setAttributes(newAttributes);
	};

	const onRemoveImage = (imageId) => {
		const newAttributes = { ...attributes };
		newAttributes[imageId] = null;
		setAttributes(newAttributes);
	};

	const onChangeBackground = (value) => {
		setAttributes({ card_background: value });
	};

	const images = [image1, image2, image3, image4, image5];

	const isActiveLink = (site) => {
		return (
			(site == 'facebook' && facebook) ||
			(site == 'instagram' && instagram) ||
			(site == 'twitter' && twitter) ||
			(site == 'linkedin' && linkedin) ||
			(site == 'youtube' && youtube) ||
			(site == 'website' && website)
		);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Card Settings', 'business-profile')}>
					<SelectControl
						label={__('Card Background', 'team-members')}
						options={backgroundOptions}
						value={card_background}
						onChange={onChangeBackground}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: `is-${card_background}-background wp-block-business-profiles-profile`,
				})}
			>
				<RichText
					className="wp-block-business-profile-profile-name"
					placeholder={__('Business Name', 'business-profile')}
					tagName="h4"
					onChange={onChangeName}
					value={name}
					allowedFormats={[]}
				/>
				<div className="wp-block-business-profile-profile-social">
					<div className="wp-block-business-profile-profile-social-icons">
						{socialLinks.map((item) => (
							<Button
								variant="tertiary"
								onClick={() => {
									setSelectedlLink(item);
								}}
								className={
									!isActiveLink(item.site)
										? 'is-inactive'
										: ''
								}
							>
								<Icon icon={item.icon} />
							</Button>
						))}
					</div>
				</div>
				{isSelected && selectedLink && (
					<div className="wp-block-business-profile-profile-social">
						{selectedLink.site == 'facebook' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={facebook}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
						{selectedLink.site == 'instagram' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={instagram}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
						{selectedLink.site == 'twitter' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={twitter}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
						{selectedLink.site == 'linkedin' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={linkedin}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
						{selectedLink.site == 'youtube' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={youtube}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
						{selectedLink.site == 'website' && (
							<TextControl
								label={selectedLink.site}
								placeholder={__('Add URL', 'business-profile')}
								value={website}
								onChange={(value) => {
									onChangeSocial(selectedLink.site, value);
								}}
							/>
						)}
					</div>
				)}

				<div className="wp-block-business-profile-profile-images">
					{images.map((url, i) => {
						const imageKey = `image${i + 1}`;
						return (
							<div
								key={imageKey}
								className={`wp-block-business-profile-profile-image ${
									!url && 'no-image'
								}`}
							>
								{url ? (
									<>
										<img src={url} />
										<Icon
											icon="no-alt"
											onClick={() => {
												onRemoveImage(imageKey);
											}}
										/>
									</>
								) : (
									<MediaUpload
										onSelect={(imageObject) =>
											onSelectImage(imageKey, imageObject)
										}
										accept="image/*"
										allowedTypes={['image']}
										render={({ open }) => (
											<Button onClick={open}>
												<Icon icon="insert" />
											</Button>
										)}
									/>
								)}
							</div>
						);
					})}
				</div>
				<div className="wp-block-business-profile-profile-description">
					<RichText
						placeholder={__(
							'Please add a business description',
							'business-profile'
						)}
						onChange={onChangeDescription}
						value={description}
						allowedFormats={['core/bold', 'core/italic']}
					/>
				</div>
			</div>
		</>
	);
}
