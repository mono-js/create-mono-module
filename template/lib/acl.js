/*
** This file is optional
** See CONTRIBUTING.md for more informations
*/

const { imperium } = require('@terrajs/mono')

/*
** Example:

See https://github.com/terrajs/imperium for documentation

imperium.role('admin', (req) => !!req.session.admin)
imperium.role('user', async (req) => {
	return { user: req.session.userId }
})

*/
