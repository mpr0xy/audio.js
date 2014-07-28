javascript:(function(){
  if(!$ && !jQuery) {
    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.src="//lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(scr);
  }  
  try{
    var x=document.createElement('SCRIPT');
    x.type='text/javascript';
    x.src='//raw.githubusercontent.com/mpr0xy/audio.js/master/audio.js';
    x.charset='utf-8';
    document.getElementsByTagName('body')[0].appendChild(x);
  }
  catch(e){
    alert(e);
  }
})();