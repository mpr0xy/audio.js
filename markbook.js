javascript:(function(){
  if(!$ && !jQuery) {
    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js";
    document.body.appendChlid(scr);
  }  
  try{
    var x=document.createElement('SCRIPT');
    x.type='text/javascript';
    x.src=CLIP_HOST+'/YNoteClipper.js';
    x.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(x);
  }
  catch(e){
    alert(e);
  }
})();