# youtube-search
a lightweight library to search youtube's Data v3 API.

# Usage
```js
const yt_search = require('youtube-search')
const YTSearch = new yt_search()

YTSearch.init("your-api-key")

YTSearch.search('despacito').then(results => {
  results.parse().then(results => {
    console.log(results.id)
    // despacito's video id: kJQP7kiw5Fk
  })
  
})
```
