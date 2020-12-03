module.exports = {
	apps: [
		{
			name: 'aws-codedeploy',
			script: 'npx',
			args: 'http-server -p 8080',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development'
			}
		}
	]
};
