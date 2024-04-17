/**
 * Objective: get base, height of a triangle. Calculate the are by using the provided formula. and then display the area.
 * step-1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 */

function calculateTriangleArea (){
    // get triangle base value
    triangleBaseInput = document.getElementById('triangle-base');
    triangleBaseText = triangleBaseInput.value;
    base = parseFloat(triangleBaseText);
    // console.log(typeof base);

    // get triangle height value
    triangleHieghtInput = document.getElementById('triangle-height');
    triangleHeightText = triangleHieghtInput.value;
    height = parseFloat(triangleHeightText);
    // console.log(height);
    
    // Calculate triangle area
    area = 0.5 * base * height;
    console.log('Area of the triangle is: ', area);

    // Display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}