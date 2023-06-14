class Ellipse {
  constructor(x1, y1, radius) {
    this.x1 = x1;
    this.y1 = y1;
    this.radius = radius;
  }

  pmEllipse() {
    let x = r;
    let y = 0;
    let err = 0;

    while (x >= y) {
      point(this.x1 + x, this.y1 + y);
      point(this.x1 + y, this.y1 + x);
      point(this.x1 - y, this.y1 + x);
      point(this.x1 - x, this.y1 + y);
      point(this.x1 - x, this.y1 - y);
      point(this.x1 - y, this.y1 - x);
      point(this.x1 + y, this.y1 - x);
      point(this.x1 + x, this.y1 - y);

      if (err <= 0) {
        y += 1;
        err += 2 * y + 1;
      }

      if (err > 0) {
        x -= 1;
        err -= 2 * x + 1;
      }
    }
  }

  splitPP(num) {
    const angle = (2 * Math.PI) / num;
    let x2, y2;

    for (let i = 0; i < num; i++) {
      x2 = this.x1 + this.radius * Math.cos(angle * i);
      y2 = this.y1 + this.radius * Math.sin(angle * i);
      this.pp(this.x1, this.y1, x2, y2);
    }
  }

  splitDDA(num) {
    const angle = (2 * Math.PI) / num;
    let x2, y2;

    for (let i = 0; i < num; i++) {
      x2 = this.x1 + this.radius * Math.cos(angle * i);
      y2 = this.y1 + this.radius * Math.sin(angle * i);
      this.DDA(this.x1, this.y1, x2, y2);
    }
  }

  splitBresenham(num) {
    const angle = (2 * Math.PI) / num;
    let x2, y2;

    for (let i = 0; i < num; i++) {
      x2 = this.x1 + this.radius * Math.cos(angle * i);
      y2 = this.y1 + this.radius * Math.sin(angle * i);
      this.Bresenham(this.x1, this.y1, x2, y2);
    }
  }

  DDA(x1, y1, x2, y2) {
    let steps;
    let xStep;
    let yStep;

    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      steps = Math.abs(deltaX);
    } else {
      steps = Math.abs(deltaY);
    }

    xStep = deltaX / steps;
    yStep = deltaY / steps;

    for (let i = 0; i <= steps; i++) {
      point(Math.round(x1), Math.round(y1));

      x1 += xStep;
      y1 += yStep;
    }
  }

  Bresenham(x1, y1, x2, y2) {
    let err;
    let deltaX;
    let deltaY;
    let temp;
    let signX;
    let signY;
    let change;
    let step;
    let posX;
    let posY;

    posX = x1;
    posY = y1;
    deltaX = Math.abs(x2 - x1);
    deltaY = Math.abs(y2 - y1);
    signX = Math.sign(x2 - x1);
    signY = Math.sign(y2 - y1);

    if (deltaY > deltaX) {
      temp = deltaX;
      deltaX = deltaY;
      deltaY = temp;
      change = 1;
    } else {
      change = 0;
    }

    err = 12 * deltaY - deltaX;

    for (step = 1; step <= deltaX; step++) {
      point(posX, posY);

      if (err >= 0) {
        if (change === 1) {
          posX += signX;
        } else {
          posY += signY;
        }
        err -= 2 * deltaX;
      }

      if (change === 1) {
        posY += signY;
      } else {
        posX += signX;
      }
      err += 2 * deltaY;
    }
  }

  pp(x1, y1, x2, y2) {
    if (x1 === x2) {
      let startY = y1 < y2 ? y1 : y2;
      let endY = y1 > y2 ? y1 : y2;

      for (let y = startY; y <= endY; y++) {
        point(x1, y);
      }
    } else {
      let slope = (y2 - y1) / (x2 - x1);
      let intercept = y1 - slope * x1;
      let startX = x1 < x2 ? x1 : x2;
      let endX = x1 > x2 ? x1 : x2;

      for (let x = startX; x <= endX; x++) {
        let y = slope * x + intercept;
        point(x, y);
      }
    }
  }
}
