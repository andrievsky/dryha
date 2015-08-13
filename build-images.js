var fs = require("fs")
var folders = ["thai"]//["abstract-art", "figures", "poplars", "irish-dance", "fine-art", "insectiada", "landscape", "plein-air", "portrait", "still-life"]
var res = []
for (var folder in folders){
	res = res.concat(fs.readdirSync("gallery/"+ folders[folder]+"/images/").map(function(value) {
			return "=image(\"http://dryha.com/gallery/"+ folders[folder]+"/images/"+value+"\")"
			//return "=HYPERLINK(\"http://dryha.com/gallery/"+ folders[folder]+"/images/"+value+"\")"
  		})
	)}
res.forEach(function(value) {console.log(value)})
