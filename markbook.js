javascript:(function(){
  function loadAudioJs(){
   try{
      var x=document.createElement('SCRIPT');
      x.type='text/javascript';
      x.src='//mpr0xy.github.io/audio.js/audio.js';
      x.charset='utf-8';
      document.getElementsByTagName('body')[0].appendChild(x);
    }
    catch(e){
      alert(e);
    } 
  }
  if (window.audioJs && window.audioJs.runing){
    window.audioJs.runing = false;
    $('body').unbind('mousemove');
    $('body').unbind('click');
    $('body').css('background-color', window.audioJs.bodyColor);
    if (window.audioJs.preElement){
      window.audioJs.preElement.css('outline', '');  
    } 
  }
  else if (window.audioJs && !window.audioJs.runing){
    window.audioJs.run();
  }
  else{
    if (!window.jQuery) {
      try {
        var scr = document.createElement('script');
        scr.type = 'text/javascript';
        scr.src = '//lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js';
        scr.onload = scr.onreadystatechange = function(){
          if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'){
            loadAudioJs();
          }
        };
        document.getElementsByTagName('head')[0].appendChild(scr);
      }
      catch (e){
        alert(e);
      }
    }
    else {
      loadAudioJs();
    }   
  }


  function loadAudioJs(){
   try {
      var x = document.createElement('SCRIPT');
      x.type = 'text/javascript';
      x.src = '//raw.githubusercontent.com/mpr0xy/audio.js/master/audio.js';
      x.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(x);
    }
    catch (e){
      alert(e);
    } 
  }
})();