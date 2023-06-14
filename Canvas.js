let input, partes, r

function setup() {
    createCanvas(windowWidth, windowHeight);

    let span = createElement("h1", "cant para partir pizza")
    span.position((width / 2) - (100 / 2) - 300 , 100)
    input = createInput()
    input.position((width / 2) - (100 / 2) - input.width / 2, 180)
    input.changed(num)

}

function draw() {

    background(255)
    r = 100

    let p1 = new Ellipse(((width / 2) - (100 / 2)) - r*2 - 20, (height / 2) - (100 / 2), r)
    let p2 = new Ellipse((width / 2) - (100 / 2), (height / 2) - (100 / 2), 100)
    let p3 = new Ellipse(((width / 2) - (100 / 2)) + r*2 + 20, (height / 2) - (100 / 2), r)

    p1.pmEllipse()
    p2.pmEllipse()
    p3.pmEllipse()

    p1.splitPP(num())
    p2.splitDDA(num())
    p3.splitBresenham(num())
    
}

function num() {

    partes = input.value()

    if (partes <= 1) {
        return
    }
    
    return partes 

}