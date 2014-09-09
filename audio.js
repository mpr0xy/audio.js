var audioJs = function(){
  this.preElement = null;
  this.runing = false;
  this.target = null;
  this.bodyColor = null;
}

audioJs.prototype.run = function(){
  var self = this;
  self.runing = true;

  if (!self.bodyColor){
    self.bodyColor = $("body").css('background-color');
  }
  $("body").css('background-color', 'rgb(240,222,222)');
  
  $( "body" ).mousemove(function( event ) {
    if (self.preElement !== null){
      self.preElement.css('outline', '')
    }
    self.target = $(event.target)
    self.target.css('outline', '#00ff00 solid')
    self.preElement = self.target;
  })

  $("body").click(function(event){
    if (self.preElement === null){
      return 0;
    }
    context = self.preElement.text()
    context = context.replace(/\n[^a-zA-Z_0-9]*/g, '\n')
    context = context.replace(/\s*\n/g, '\n')
    contextArray = context.split(/\n/)
    contextArray.forEach(function(item, index){
      if (item == ''){
        contextArray.splice(index,1)
      }
    }) 
    contextArray = contextArray.join(' ')
    console.log(contextArray)
    contextArray = contextArray.match(/(\w+[\s]*){1,6}/g)
    console.log(contextArray)
    playAudio(contextArray, 0)
  })


  function playAudio(contextArray, index){
    var audioUrl = makeAudioUrl(contextArray.length, contextArray[index], index)
    var audio = new Audio(audioUrl)  
    audio.addEventListener('ended', function(){
      if (index < contextArray.length - 1){
        playAudio(contextArray, index + 1)
      }
    })
    audio.play();
  }


  function makeAudioUrl(total, context, index){
    context = context.replace(/\s*$/g, '')
    context = context.replace(/[^a-zA-Z_0-9]/g, ' ')
    context = context.toLowerCase()
    var es_context = encodeURIComponent(context)
    var url="//dict.youdao.com/speech?audio=" + es_context
    //var url = "http://translate.google.cn/translate_tts?ie=UTF-8&q="+ es_context +"&tl=en&total="+ total +"&idx="+ index +"&textlen=" + es_context.length + "&client=t&prev=input"
    return url
  }
}
var audiojs = new audioJs();
audiojs.run();
window.audioJs = audiojs;

