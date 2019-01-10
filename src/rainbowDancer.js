var RainbowDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);

  // shape: star
  // grow/shrink the size
  // this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  this.getRandomColor();
};

RainbowDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

// RainbowDancer.prototype.step = function() {
//   var oldStep = Dancer.prototype.step;
//     // call the old version of step at the beginning of any call to this new version of step

//     oldStep.call(this);
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//      this.$node.toggle();
// };

RainbowDancer.prototype.getRandomColor = function () {
// get random index of this.colors with Math.random(this.colors)
  $('.rainbow').on('click', function(){
    $('.dancer').css('border', '10px solid blue');
  });
};

// function colorRandomizer() {
//     var r = Math.floor(Math.random() * 256)
//     var b = Math.floor(Math.random() * 256)
//     var g = Math.floor(Math.random() * 256)
//     return 'rgb(' + r + ',' + g + ',' + b + ')';
// }
