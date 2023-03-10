// Configuración inicial
let canvasWidth = 800;
let canvasHeight = 600;

let backgroundColor = 50;
let currentColor = 255;
let currentSize = 20;

let shapes = [];

// Función para crear el canvas
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(backgroundColor);
}

// Función para dibujar en el canvas
function draw() {
  background(backgroundColor);

  // Dibujar todas las figuras almacenadas
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    stroke(shape.color);
    strokeWeight(shape.size);
    noFill();
    if (shape.type == "circle") {
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.type == "rectangle") {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type == "triangle") {
      triangle(
        shape.x,
        shape.y - shape.size / 2,
        shape.x - shape.size / 2,
        shape.y + shape.size / 2,
        shape.x + shape.size / 2,
        shape.y + shape.size / 2
      );
    }
  }

  // Dibujar figura actual
  stroke(currentColor);
  strokeWeight(currentSize);
  noFill();
  if (mouseIsPressed) {
    if (keyIsDown(67)) {
      // 'C' para dibujar un círculo
      ellipse(mouseX, mouseY, currentSize);
      shapes.push({
        type: "circle",
        x: mouseX,
        y: mouseY,
        size: currentSize,
        color: currentColor,
      });
    } else if (keyIsDown(82)) {
      // 'R' para dibujar un rectángulo
      rect(mouseX, mouseY, currentSize, currentSize);
      shapes.push({
        type: "rectangle",
        x: mouseX,
        y: mouseY,
        size: currentSize,
        color: currentColor,
      });
    } else if (keyIsDown(84)) {
      // 'T' para dibujar un triángulo
      triangle(
        mouseX,
        mouseY - currentSize / 2,
        mouseX - currentSize / 2,
        mouseY + currentSize / 2,
        mouseX + currentSize / 2,
        mouseY + currentSize / 2
      );
      shapes.push({
        type: "triangle",
        x: mouseX,
        y: mouseY,
        size: currentSize,
        color: currentColor,
      });
    }
  }
}

// Función para cambiar el tamaño de la figura actual
function keyPressed() {
  if (keyCode == UP_ARROW) {
    currentSize += 5;
  } else if (keyCode == DOWN_ARROW) {
    currentSize -= 5;
  }
  currentSize = constrain(currentSize, 5, 100);
}

// Función para cambiar el color de la figura actual
function mouseClicked() {
  currentColor = color(random(255), random(255), random(255));
}
