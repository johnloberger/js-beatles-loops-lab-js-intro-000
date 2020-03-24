function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}
function johnLennonFacts(){
  var facts = ["Harmonica was the first instrument Lennon learned to play", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
  var array = []
  var i = 0
  while (array.length < facts.length){
    array.push(facts[i] + "!!!")
  }
  return array
}
