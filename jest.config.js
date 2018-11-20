module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'^.+\\.(css|scss)$': '<rootDir>/client/test/mockStyle.js'
	},
	collectCoverageFrom: [
		'src/js/**/*.test.js',
		],
	setupTestFrameworkScriptFile: '<rootDir>/src/test/enzyme.js',
	moduleNameMapper: {
		'^scss(.*)$': '<rootDir>/client/scss$1'
	}
};