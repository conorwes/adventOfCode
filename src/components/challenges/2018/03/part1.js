import returnInputText from "./input"

let points = [];

// We'll need some helper functions for this one

// Take our input and turn it into an object
function inputToObject(inputData) {
    let outputObj = [];
    
    // go through input and compile data to put into our object
    for (let i = 0; i < inputData.length; i++) {
        // more legible
        let data = inputData[i];

        // parse offsets
        let posX = data.substring(data.indexOf('@')+2, data.indexOf(','));
        let posY = data.substring(data.indexOf(',')+1, data.indexOf(':'));

        // parse dimensions
        let sWidth = data.substring(data.indexOf(':')+2, data.indexOf('x'));
        let sHeight = data.substring(data.indexOf('x')+1);

        // compute the maximum offset
        let xMax = parseInt(posX)+parseInt(sWidth);
        let yMax = parseInt(posY)+parseInt(sHeight);

        // put it all together
        let outputObjToAdd = {
            x: parseInt(posX),
            y: parseInt(posY),
            xMax: xMax,
            yMax: yMax
        }
        // tada
        outputObj.push(outputObjToAdd);
    }
    // spit out our object
    return outputObj;
};

// Go through the object and use the offsets to define points
function addPoints(outputObj) {
    // go through each point and create a point to add to the points array
    outputObj.forEach(point => {
        for (let x = point.x; x < point.xMax; x++) {
            for (let y = point.y; y < point.yMax; y++) {
                let pointToAdd = {
                        x: x,
                        y: y
                }
                points.push(pointToAdd);
            }
        }
    });
};

// Go through points and determine where we have overlaps
function getNumOfDuplicates() {
    const claims = new Map();
    const overlaps = new Set();

    // for each point, we'll determine if it has already been claimed
    for (let i = 0; i < points.length; i++) {  
        let key = points[i].x + ":" + points[i].y;

        // if we have an overlap, add it to the overlaps set
        if (!(claims.has(key))) {
            claims.set(key, []);
        } else {
            overlaps.add(key);  
        }
    }
    // return the number of overlaps
    return overlaps.size;
};

// All together now
export default function Solution03Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use
    const inputData = input.split(/\n/g);

    // create our object
    let outputObj = inputToObject(inputData);

    // populate points
    addPoints(outputObj);

    // get the number of dupes
    let duplicates = getNumOfDuplicates();
    
    // return the final result
    let result = duplicates;
    return result;
};
