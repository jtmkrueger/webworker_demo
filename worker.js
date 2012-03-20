// hit the flicker server.
function makeServerRequest(search) {
  importScripts( "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=handleRequest&tags=" + search + "&tagmode=any&format=json" );
}

// Callback for the JSONP result.
function handleRequest(objJSON) {
  self.postMessage(objJSON);
 // self.close()
}

// message reciever
self.onmessage = function(e) {
  makeServerRequest(e.data); 
};
