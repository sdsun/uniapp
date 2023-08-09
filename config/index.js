/**
 * APP CONFIG
 */

const CONFIG = {
	// DEV CONFIG
	development: {
		BASE_API_URL: 'https://cep-test.haier.net/api' // REQUER BASE API URL
	},
	// PRO CONFIG
	production: {
		BASE_API_URL: '' // REQUER BASE API URL
	}
 
}

export default CONFIG[process.env.NODE_ENV]