var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
   var alreadyHaveOne = false;
    this.$node.on('mouseover', function(e){
    if(!alreadyHaveOne){
      $('<img src="./images/sparkler.gif" />')
        .css({'height': '100px',
              'width' : '100px',
        })
        .appendTo(this);
        $(this).css('border', '0')
        alreadyHaveOne = true;
    }
    })
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.lineup = function() {

}
