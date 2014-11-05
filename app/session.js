
function Session() {
  this.words
  this.questions = []
  this.roundAnswers = []
  this.learning
  this.mTongue
  this.user
  this.score = []
  this.roundPoints
}

Session.prototype._generateRandNumber =  function() {
  var totalWords = this.words.length - 1
  return Math.floor(Math.random() * totalWords)
}

Session.prototype.generateNewQuestion = function() {
  var randNumber = this._generateRandNumber() 
  while ( this._isQuestionRepeated(randNumber) ) { randNumber = this._generateRandNumber() }
  this.questions.push(randNumber) 
  // this._isQuestionRepeated(randNumber) ? this.questions.push(randNumber) : this.generateNewQuestion()
}

Session.prototype._isQuestionRepeated = function(num) {
  return this.questions.indexOf(num) !== -1
}

Session.prototype.currentQuestion = function() {
  var last = this.questions.length - 1
  return words[last]
}

Session.prototype.correctResponse = function() {
  return this.currentQuestion()[this.learning]
}

Session.prototype.isResponseRepeated = function(num) {
  return this.roundAnswers.indexOf(this.words[num][this.learning]) !== -1
}

Session.prototype.generateFakeAnswer = function() {
  var randNumber = this._generateRandNumber()
  while ( this.isResponseRepeated(randNumber) ) { randNumber = this._generateRandNumber() }
  return this.words[randNumber][this.learning]
}

Session.prototype.generateAnswers = function(num) {
   this.roundAnswers.push(this.correctResponse())
  for(var i = 0; i < num; i++){ this.roundAnswers.push(this.generateFakeAnswer()) }
}

Session.prototype.shuffleAnswers = function(){
    return shuffle(this.roundAnswers)
}

Session.prototype.currentRound = function() {
  return this.questions.length
}

Session.prototype.isUserResponseCorrect = function(userAnswer){
  return userAnswer == this.correctResponse()
}

Session.prototype.updateScore = function(userAnswer) {
  if (this.isUserResponseCorrect(userAnswer)) this.score.push(this.roundPoints)
}

Session.prototype.getKeyphrase = function(){
  return this.currentQuestion().def
}

//Array.prototype ??
function shuffle(arr) {
  var array = arr
    for (var i = array.length - 1; i > 0; i--) { 
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}



