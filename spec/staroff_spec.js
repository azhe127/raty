describe('#numberMax', function() {
  beforeEach(function() {
    $.fn.raty.defaults.path = '../lib/images';

    this.el = Helper.create('#el');
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('sets the stars off', function() {
    // given
    var self = this.el;

    // when
    self.raty({ starOff: 'star-half.png' });

    // then
    expect(self.children('img')).toHaveAttr('src', '../lib/images/star-half.png');
  });

  context('with :starType', function() {
    it ('uses the given element', function() {
      // given
      var self = this.el;

      // when
      self.raty({ starType: 'i' });

      // then
      var stars = self.children('i');

      expect(stars[0].tagName).toEqual('I');
      expect(stars[1].tagName).toEqual('I');
      expect(stars[2].tagName).toEqual('I');
      expect(stars[3].tagName).toEqual('I');
      expect(stars[4].tagName).toEqual('I');
    });

    it ('normalizes the class name', function() {
      // given
      var self = this.el;

      // when
      self.raty({ starType: 'i' });

      // then
      expect(self.children('i')).toHaveClass('star-off-png');
    });

    it ('does not create the "src" attribute', function() {
      // given
      var self = this.el;

      // when
      self.raty({ starType: 'i' });

      // then
      var stars = self.children('i');

      expect(stars[0].src).toBeUndefined();
      expect(stars[1].src).toBeUndefined();
      expect(stars[2].src).toBeUndefined();
      expect(stars[3].src).toBeUndefined();
      expect(stars[4].src).toBeUndefined();
    });

    it ('creates the "data-alt" attribute', function() {
      // given
      var self = this.el;

      // when
      self.raty({ starType: 'i' });

      // then
      var stars = self.children('i');

      expect(stars[0].getAttribute('data-alt')).toEqual('1');
      expect(stars[1].getAttribute('data-alt')).toEqual('2');
      expect(stars[2].getAttribute('data-alt')).toEqual('3');
      expect(stars[3].getAttribute('data-alt')).toEqual('4');
      expect(stars[4].getAttribute('data-alt')).toEqual('5');
    });

    it ('does not create the "alt" attribute', function() {
      // given
      var self = this.el;

      // when
      self.raty({ starType: 'i' });

      // then
      expect(self.children('i')).not.toHaveAttr('alt');
    });
  });
});
