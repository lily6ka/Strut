// Generated by CoffeeScript 1.2.1-pre

define(function() {
  var AbstractDrawer;
  return AbstractDrawer = (function() {

    AbstractDrawer.name = 'AbstractDrawer';

    function AbstractDrawer() {}

    AbstractDrawer.prototype.applyTransforms = function(component, bbox) {
      var rotation, scale, skewX, skewY, transform;
      rotation = component.get("rotate");
      this.g2d.translate(bbox.width / 2 + bbox.x, bbox.height / 2 + bbox.y);
      if (rotation != null) this.g2d.rotate(rotation);
      scale = component.get("scale");
      if (scale != null) this.g2d.scale(scale, scale);
      skewX = component.get("skewX");
      skewY = component.get("skewY");
      if (skewX || skewY) {
        transform = [1, 0, 0, 1, 0, 0];
        if (skewX) transform[2] = skewX;
        if (skewY) transform[1] = skewY;
        this.g2d.transform.apply(this.g2d, transform);
      }
      return this.g2d.translate(-1 * (bbox.width / 2 + bbox.x), -1 * (bbox.height / 2 + bbox.y));
    };

    return AbstractDrawer;

  })();
});
