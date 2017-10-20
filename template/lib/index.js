/*
** This file is required
** See CONTRIBUTING.md for more informations
*/

module.exports = function ({ conf }) {
	// Set options default
	const options = conf.mono.<%= moduleKey %> = conf.mono.<%= moduleKey %> || {}
	options.username = options.username || '<%= username %>'

	// Expose foo property
	module.exports.hello = () => `Hello ${options.username}`
}
