import React from 'react';
import cx from "classnames";
import Image from '../Image';

const SectionFeatures = ({bigText='', littleText='', features, numPerRow=4}) =>{
	let medClass = "col-md-" + Math.round(12/numPerRow);

	return (
		<section className={cx('section', 'jumbotron')}>
			<div className="container">
				<h3 className={cx('title', 'text-center')}>{bigText}<br />
					<small>{littleText}</small>
				</h3>

				<div className={cx('row', 'topspace-2x')}>
					{features.map((feature, i) => {
						return(
							<figure key={i} className={cx(medClass, 'col-sm-6', 'bottomspace-xs', 'text-center')}>
								<i className={cx('fa', 'fa-4x', 'color-accent')}>
									<Image {...feature.image} />
								</i>
								<h4>{feature.title}</h4>
								<p className="text-center">{feature.description}</p>
							</figure>
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default SectionFeatures;