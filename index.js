const API = 'https://saurav.tech/NewsAPI/top-headlines/category/option/in.json'
const appComponent = {
	data(){
		return {
		usercategory : '',
		darkmode : false,
		categories : ["business","entertainment","general","health","science","sports","technology"]
		}
	},
	methods : {

	}
}
const myapp = Vue.createApp(appComponent).mount('#myapp')