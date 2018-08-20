/*
** This file is optional
** See CONTRIBUTING.md for more informations
*/

/*
** Example:

See https://github.com/terrajs/imperium for documentation

const { imperium } = require('mono-core')

imperium.role('admin', (req) => !!req.session.admin)
imperium.role('user', async (req) => {
	return { user: req.session.userId }
})

*/
