import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
	const socialLinks = [
		{ site: 'facebook', icon: 'facebook', link: facebook },
		{ site: 'instagram', icon: 'instagram', link: instagram },
		{ site: 'twitter', icon: 'twitter', link: twitter },
		{ site: 'linkedin', icon: 'linkedin', link: linkedin },
		{ site: 'youtube', icon: 'youtube', link: youtube },
		{ site: 'website', icon: 'admin-site', link: website },
	];

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

	const images = [image1, image2, image3, image4, image5];

	return (
		<div
			{...useBlockProps.save({
				className: `is-${card_background}-background wp-block-business-profiles-profile`,
			})}
		>
			<>
				<RichText.Content
					className="wp-block-business-profile-profile-name"
					tagName="h4"
					value={name}
				/>
				<div className="wp-block-business-profile-profile-social">
					<div className="wp-block-business-profile-profile-social-icons">
						{socialLinks.map((item) => (
							<a
								href={item.link}
								className={
									!isActiveLink(item.site)
										? 'is-inactive'
										: ''
								}
							>
								<Icon icon={item.icon} />
							</a>
						))}
					</div>
				</div>

				<div className="wp-block-business-profile-profile-images">
					{images.map((url, i) => {
						const imageKey = `image${i + 1}`;
						return (
							url && (
								<div
									key={imageKey}
									className="wp-block-business-profile-profile-image"
								>
									<img src={url} />
								</div>
							)
						);
					})}
				</div>

				<div className="wp-block-business-profile-profile-description">
					<RichText.Content value={description} />
				</div>
			</>
		</div>
	);
}
