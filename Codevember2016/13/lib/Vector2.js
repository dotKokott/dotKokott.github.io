function Vector2(x, y) {
  this.X = x;
  this.Y = y;

  this.Dist = function(other) {
    var x = other.X - this.X;
    var y = other.Y - this.Y;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  this.DistanceSquared = function(other) {
    var x = other.X - this.X;
    var y = other.Y - this.Y;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  this.Add = function(other) {
    this.X += other.X;
    this.Y += other.Y;
  }

  this.Added = function(other) {
    return new Vector2(this.X + other.X, this.Y + other.Y);
  }

  this.Sub = function(other) {
    this.X -= other.X;
    this.Y -= other.Y;
  }

  this.Subbed = function(other) {
    return new Vector2(this.X - other.X, this.Y - other.Y);
  }

  this.Mul = function(value) {
    this.X *= value;
    this.Y *= value;
  }

  this.Muled = function(value) {
    return new Vector2(this.X * value, this.Y * value);
  }

  this.Mag = function() {
    if(this.X == 0 && this.Y == 0) {
      return 0;
    }
    return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
  }

  this.MagSquared = function() {
    if(this.X == 0 && this.Y == 0) {
      return 0;
    }
    return Math.pow(this.X, 2) + Math.pow(this.Y, 2);
  }
}
