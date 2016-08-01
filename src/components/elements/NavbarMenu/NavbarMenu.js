import React from 'react';
import cx from 'classnames';
import Link from '../Link';

// TODO: move this to database or config file to keep consistent w routes
const navMenu = [
	{
		'title' : 'Home',
		'link'	: '/'
	},
	{
		'title' : 'Projects',
		'link' 	: '/projects'
	}
];

const navMenuExtended = [
	{
		'title' : 'Contact',
		'link'	: '/contact'
	}
];

const NavbarMenu = ({currentPage}) => {

	return (
		<div className={cx('navbar-collapse', 'collapse')}>
			<ul className={cx('nav', 'navbar-nav' ,'pull-right')}>

				{navMenu.map((nav, i) => (
					<li key={i} className={nav.title === currentPage ? "active" : ""}><Link to={nav.link}>{nav.title}</Link>
					</li>
				))}

				<li className="dropdown">
					<a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">More Pages<b className="caret"></b></a>
					<ul className="dropdown-menu">
						{navMenuExtended.map((nav, i) => (
							<li key={i} className={nav.title === currentPage ? "active" : ""}><Link to={nav.link}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default NavbarMenu;