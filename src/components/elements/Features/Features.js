import React from 'react';
import cx from "classnames";
import Image from '../Image';
import Section from '../Section';

const Features = ({bigText='', littleText='', features, numPerRow=4, classNames=['section', 'jumbotron']}) =>{
	let medClass = "col-md-" + Math.round(12/numPerRow);


	return (
		<Section classNames={classNames}>
			<h3 className={cx('title', 'text-center', 'topspace-1x')}>{bigText}<br />
				<small>{littleText}</small>
			</h3>

			<div className={cx('row', 'topspace-2x')}>
				{features.map((feature, i) => {
					return(
						<figure key={i} className={cx(medClass, 'col-sm-6', 'bottomspace-xs', 'text-center')}>
							<i className={cx('fa', 'fa-4x', 'color-accent')}>
								{feature.link ? 
									<a href={feature.link}><Image {...feature.image} /></a> :
									<Image {...feature.image} />
								}
							</i>
							<h4>{feature.title}</h4>
							<p className="text-center">{feature.description}</p>
						</figure>
					)
				})}
			</div>
		</Section>
	);
};

export default Features;