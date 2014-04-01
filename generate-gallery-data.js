var fs = require('fs');
var data = "";
// fine art
var images = ["1.jpg", "2.jpg", "3.jpg", "IMG_4960.jpg", "IMG_4962.jpg", "IMG_4966.jpg", "IMG_4967.jpg", "IMG_4968.jpg", "IMG_4969.jpg", "IMG_4971.jpg", "IMG_4973.jpg", "IMG_4974.jpg", "IMG_4979.jpg"];
for (var i in images){
    data+= "- src: "+images[i]+"\n"+
    "  title: Image 1 \n"+
    "  width: 40\n"+
    "  height: 40\n"+
    "  materials: Oil, Canvas\n"+
    "  year: 2014\n";
}
data = "";
for (var j = 1; j <= 21; j++){
    data+= "- src: snail-"+j+".jpg\n"+
    "  title: Snail "+j+" \n"+
    "  width: "+Math.round(Math.random()*100)+"\n"+
    "  height: "+Math.round(Math.random()*100)+"\n"+
    "  materials: Graphic, Paper\n"+
    "  year: 20"+pad(Math.round(Math.random()*14))+"\n";
}
console.log(data);
return;
fs.writeFile("_data/gallery.yml", data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}