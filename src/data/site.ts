export const navLinks = [
	{ label: 'Home', href: '#top' },
	{ label: 'Our Story', href: '#story' },
	{ label: 'Menu', href: '#menu' },
	{ label: 'Outlets', href: '#outlets' },
	{ label: 'Franchise', href: '#franchise' },
	{ label: 'Contact', href: '#contact' },
];

export const heroPhotos = [
	{ label: 'Bakery counter', color: '#8a5a44' },
	{ label: 'Uncle serving a kid', color: '#b07a52' },
	{ label: 'Brownie display', color: '#6b3f2e' },
];

export const timeline = [
	{
		year: '1999',
		title: 'The First Oven',
		body: 'One home oven, a tray of walnut brownies and a school canteen that sold out by lunch.',
		color: '#a0684a',
	},
	{
		year: '2005',
		title: 'The First Bakery',
		body: 'Checkerboard floors, a milk shake on the wall and the Nutella brownie that made us famous.',
		color: '#7c4a36',
	},
	{
		year: 'Today',
		title: "Still Uncle's",
		body: '35+ outlets, same fudgy recipe, same grin. Every bite still tastes like the summer holidays.',
		color: '#c28a5c',
	},
];

export const marqueeItems = ['Kunafa Brownies', 'Ice Cream Sandwiches', 'Brownies', 'Cookies', 'Cheesecakes', 'Bottled Shakes'];

export type MenuCategory = {
	title: string;
	tagline: string;
	color: string;
	total: number;
	items: { name: string; price: number }[];
};

export const menu: MenuCategory[] = [
	{
		title: 'Brownie with Ice Cream',
		tagline: 'Warm fudge brownie, cold scoop, zero regrets.',
		color: '#8f7fd6',
		total: 10,
		items: [
			{ name: 'Classic Brownie w Ice Cream', price: 200 },
			{ name: 'Nutella Brownie w Ice Cream', price: 230 },
			{ name: 'Pistachio Kunafa Brownie w Ice Cream', price: 330 },
		],
	},
	{
		title: 'Brownies',
		tagline: 'Dense, fudgy and baked every single morning.',
		color: '#f0b82e',
		total: 10,
		items: [
			{ name: 'Classic Brownie', price: 140 },
			{ name: 'Walnut Caramel Brownie', price: 150 },
			{ name: 'Biscoff Brownie', price: 160 },
		],
	},
	{
		title: 'Cookies',
		tagline: 'Crackly edges, gooey middles, big chunks.',
		color: '#2a9d9a',
		total: 4,
		items: [
			{ name: 'Dark Chocolate & Sea Salt Cookie', price: 120 },
			{ name: 'White Chocolate & Corn Flakes Cookie', price: 120 },
			{ name: 'Nutella Filled Cookie', price: 150 },
		],
	},
	{
		title: 'Cheesecakes',
		tagline: 'Baked slow, served cold, gone fast.',
		color: '#3a8fd6',
		total: 4,
		items: [
			{ name: 'New York Classic Cheesecake', price: 280 },
			{ name: 'Blueberry Cheesecake', price: 290 },
			{ name: 'Biscoff Cheesecake', price: 300 },
		],
	},
	{
		title: 'Cookie Crumble Brownie with Ice Cream',
		tagline: 'Brownie, cookie crumble and a scoop on top.',
		color: '#d8322f',
		total: 3,
		items: [
			{ name: 'Classic Cookie Crumble Brownie w Ice Cream', price: 240 },
			{ name: 'Nutella Cookie Crumble Brownie w Ice Cream', price: 250 },
			{ name: 'Biscoff Cookie Crumble Brownie w Ice Cream', price: 250 },
		],
	},
	{
		title: 'Bottled Shakes',
		tagline: 'Thick, chilled and made to travel.',
		color: '#2f6fb5',
		total: 5,
		items: [
			{ name: 'Double Chocolate Shake', price: 240 },
			{ name: 'Nutella Shake', price: 240 },
			{ name: 'Oreo Shake', price: 240 },
		],
	},
	{
		title: 'Cookie Ice Cream Sandwich',
		tagline: 'Two cookies, one fat scoop in between.',
		color: '#6b3a24',
		total: 4,
		items: [
			{ name: 'Dark Chocolate & Sea Salt Cookie Sandwich', price: 270 },
			{ name: 'White Chocolate & Corn Flakes Sandwich', price: 270 },
			{ name: 'Nutella Filled Ice Cream Sandwich', price: 310 },
		],
	},
	{
		title: 'Cookie Crumble Brownie',
		tagline: 'The brownie, with a crunchy jacket on.',
		color: '#ee8fa8',
		total: 3,
		items: [
			{ name: 'Classic Brownie with Cookie Crumble', price: 160 },
			{ name: 'Nutella Brownie with Cookie Crumble', price: 170 },
			{ name: 'Biscoff Brownie with Cookie Crumble', price: 170 },
		],
	},
];

export const outletPhotos = [
	{ label: 'Outlet at night', color: '#3b2a4a', span: 'md:col-span-2 md:row-span-1' },
	{ label: 'Friends at a table', color: '#a0684a', span: '' },
	{ label: 'Brownie sundae', color: '#7c3a2a', span: '' },
	{ label: 'Evening crowd', color: '#4a4f7a', span: '' },
	{ label: 'Inside the bakery', color: '#b58a62', span: '' },
];

export const values = [
	{ title: '100% Eggless', body: 'Every brownie, every bake', icon: 'leaf' },
	{ title: 'Baked Fresh Daily', body: 'Small batches every morning', icon: 'oven' },
	{ title: 'Since 1999', body: '25+ years of fudge', icon: 'star' },
] as const;

export const footerLinks = ['Menu', 'Outlets', 'Franchise', 'Careers', 'Contact'];
