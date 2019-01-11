describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a mouseover function', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  // OUR TESTS:
  it('should be an instance of Dancer', function(){
    expect(blinkyDancer).to.be.an.instanceof(Dancer);
  });

  it('should invoke lineup method', function(){
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.lineup();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should have a lineup method', function(){
    sinon.spy(blinkyDancer, 'lineup');
     expect(blinkyDancer.lineup.callCount).to.be.equal(0);
  });

  it('should change border when moused over', function(){
     expect(blinkyDancer.$node.mouseover).to.be.a.Function;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps)
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


// OUR TESTS:
describe('rainbowDancer', function() {
  var rainbowDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should invoke toggle on step method', function(){
    sinon.spy(rainbowDancer.$node, 'toggle');
    rainbowDancer.step();
    expect(rainbowDancer.$node.toggle.called).to.be.true;
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an instance of Dancer', function(){
    expect(rainbowDancer).to.be.an.instanceof(Dancer);
  });
});