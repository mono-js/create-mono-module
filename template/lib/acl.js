/*
** This file is optional
** See CONTRIBUTING.md for more informations
*/

const { imperium } = require('@terrajs/mono')

/*
** Example:

imperium.role('admin', (req) => !!req.session.admin)
imperium.role('user', (req) => !!req.session.userId)

*/
