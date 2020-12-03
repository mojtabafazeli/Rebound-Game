module.exports = {
	apps: [
		{
			name: 'aws-codedeploy',
			script: 'npx',
			args: 'http-server -p 3000',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development'
			}
		}
	]
};
