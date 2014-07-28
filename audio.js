if (window.audiojs === true){
  window.audiojs = false
  $("body").off('mousemove')
  $("body").off('click')
}
window.audiojs = true;
$preElement = null
$( "body" ).on('mousemove', function( event ) {
  if ($preElement !== null){
    $preElement.css('outline', '')
  }
  $target = $(event.target)
  $target.css('outline', '#00ff00 solid')
  $preElement = $target
})

$("body").on('click', function(event){
  if ($preElement === null){
    return 0;
  }
  context = $preElement.text()
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
