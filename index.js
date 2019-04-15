const snekfetch = require('snekfetch')
const Events = require('events')
const yt_info = require('youtube-info')

module.exports = class YTSearch extends Events {
  constructor() {
    super()
    
    this.key = null
    
    if ("yt_api_key" in process.env) {
      this.key = process.env.yt_api_key
    }
  }
  
  search(q) {
    if (this.key == null) throw new Error("You must run YTSearch#init first.")
    snekfetch.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(q)}&key=${this.key}`)
    .then(r => {
      const body = JSON.parse(r.body)
      
      Promise.resolve(new YTSearchResults(body))
    })
    .catch(Promise.reject)
  }
  
  init(key = this.key) {
    this.key = key
  }
}

class YTSearchResults {
  constructor(obj) {
    if (typeof(obj) !== "object") throw new Error("Something went wrong...");
    
    this.items = obj.items
    
    this.results = null;
    
    if (!obj.items) throw new Error("Video not found."); else { 
    
      this.first = obj.items[0].id
    
      this.results = first.videoId
    }
  }
  
  parse() {
    Promise.resolve(this.results)
  }
  
}
