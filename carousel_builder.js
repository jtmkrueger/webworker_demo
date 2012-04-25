var worker, first, new_item;

worker = new Worker("worker.js");

worker.onmessage = function(event) {
  first = true;
  console.log(event.data.items);
  $.each(event.data.items, function(i,item){
    if (first == true) {
      new_item = $("<div>").addClass("item").addClass("active");
      first = false;
    } else {
      new_item = $("<div>").addClass("item");
    }

    $("<img/>").attr("src", item.media.m).appendTo(new_item);
    $(new_item).appendTo(".carousel-inner")
    if ( i == 50 ) return false;
  });
  $('.carousel').carousel();
};

worker.postMessage('railsconf');
