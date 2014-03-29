var fs = require('fs');
var data = "";
var images = ["IMG_4960.jpg", "IMG_4962.jpg", "IMG_4966.jpg", "IMG_4967.jpg", "IMG_4968.jpg", "IMG_4969.jpg", "IMG_4971.jpg", "IMG_4973.jpg", "IMG_4974.jpg", "IMG_4979.jpg"];
for (var i in images){
    data+= "- src: "+images[i]+"\n"+
    "  title: Image 1 \n"+
    "  width: 40\n"+
    "  height: 40\n"+
    "  materials: Oil, Canvas\n"+
    "  year: 2014\n\n";
}
fs.writeFile("_data/gallery.yml", data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); 