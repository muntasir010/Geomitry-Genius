function calculateRectangleArea(){
    // get rectangle length
    rectangleLengthInput = document.getElementById('rectangle-length');
    rectangleLengthText = rectangleLengthInput.value;
    length = parseFloat(rectangleLengthText);
    // console.log(typeof length);

    // get rectangle width
    rectangleWidthInput = document.getElementById('rectangle-width');
    rectangleWidthText =rectangleWidthInput.value;
    width = parseFloat(rectangleWidthText);
    // console.log(width);

    // Calculate rectngle area
    area = length * width;

    // Display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
} 