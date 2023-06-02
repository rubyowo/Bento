// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Rei!',
	openInNewTab: false,
	twelveHourFormat: true,

	// Theme

    theme: 'latte-mocha',
	imageBackground: false,
	
	// Greetings
	greetingMorning: 'Good morning, ',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good Night, ',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.proton.me',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://libreddit.kavin.rocks',
		},

		{
			id: '4',
			name: 'Music',
			icon: 'headphones',
			link: 'https://listen.whatever.social',
            
		},
		{
			id: '5',
            name: 'Youtube',
            icon: 'youtube',
            link: 'https://piped.video'
		},
		{
			id: '6',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
	],
};
