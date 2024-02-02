//function resize(w, h) { 
//  if (window.name != "plainWindow"){
//    window.close();
//    var url = window.location.href;
//    var width = w;
//    var height = h;
//    if (width > screen.availWidth) width=screen.availWidth;
//    if (height > screen.availHeight) height=screen.availHeight;
//    openPlainWin(url, "plainWindow", width, height)
//  window.resizeTo(width, height);
//  window.moveTo((screen.availWidth-width)/2, (screen.availHeight-height)/2);
//  }
//}

function openPlainWin(url, wname, w, h){
  var width = w;
  var height = h;
  var isScroll = 0;
  if (width > screen.availWidth) {width=screen.availWidth;isScroll=1};
  if (height > screen.availHeight) {height=screen.availHeight;isScroll=1};
  var x = (screen.availWidth-width)/2;
  var y = (screen.availHeight-height)/2;
  window.open(url, wname, "width="+width+",height="+height+",left="+x+",top="+y+",directories=no,resizable=no,menubar=no,status=no,toolbar=no,location=no,scrollbars="+isScroll+"");
  return false;
}

function openPlainW(url, w, h){
  return openPlainWin(url, "", w, h);
}
