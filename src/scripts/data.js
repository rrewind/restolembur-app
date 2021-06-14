const list = require('../DATA.json');

let resto = list.restaurants;
$.each(resto, function(idx, val) {
let card = '<div class="list-item"><div class="img-container"><img class="img-res list-item_thumbnail" src="'+val.pictureId+'" alt="'+val.name+'"><em title="ratings" class="list-item_rating fa fa-star "><span> '+val.rating+'</span></em><span class="list-item_title">'+val.name+' - <span class="list-item_city">'+val.city+'</span></span></div><div class="list-item_content"><p class="truncate list-item_description">'+val.description+'</p></div></div>'
    $(".lists").append(card);
});