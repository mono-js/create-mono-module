/*
** This file is required
** See CONTRIBUTING.md for more informations
*/

module.exports = function ({ conf }) {
	// Set options default
	const options = conf.mono.<%= moduleKey %> || {}
	options.foo = options.foo || 'bar'

	// Expose foo property
	module.exports.foo = options.foo
}
