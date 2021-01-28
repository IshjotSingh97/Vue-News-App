let API = 'https://saurav.tech/NewsAPI/top-headlines/category/option/in.json'
const appComponent = {
	data(){
		return {
		usercategory : 'business',
		darkmode : false,
		categories : ["business","entertainment","general","health","science","sports","technology"],
		dataloaded : false,
		articles : {}
		}
	},
	methods : {
		async fetchNews(){
			let query = API.replace("option",this.usercategory)
			await axios
			.get(query)
			.then((response)=>{
				this.articles = response.data.articles.slice(0,10)
				this.dataloaded = true
			})
			.catch((error)=>{
				console.log(error)
			})
		}
	}
}
const myapp = Vue.createApp(appComponent).mount('#myapp')