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

        // parse id
        let id = data.substring(data.indexOf('#')+1, data.indexOf(' '));

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
            id: id,
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

// Go through points and determine if the space is already accounted for
function hasOverlap(fabric, outputObj) {
    // iterate through all points included in the shape and determine if any have already been visited
    for (let i = outputObj.x; i < outputObj.xMax; i++) {
        for (let j = outputObj.y; j < outputObj.yMax; j++) {
            if (fabric[i][j] > 1){
                return true;
            }
        }
    }
    return false;
}

// All together now
export default function Solution03Part02() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use
    const inputData = input.split(/\n/g);

    // create our object
    let outputObj = inputToObject(inputData);

    // populate points
    addPoints(outputObj);

    // create the fabric. we'll map points onto this to determine visit count
    const fabric = Array.from(new Array(1000)).map(() => Array.from(new Array(1000)).fill(0));
    
    // go through each point and indicate that it has been visited
    for (let k = 0; k < outputObj.length; k++) {
        for (let i = outputObj[k].x; i < outputObj[k].xMax; i++) {
            for (let j = outputObj[k].y; j < outputObj[k].yMax; j++) {
                fabric[i][j] += 1;
            }
        }        
    };

    // go through fabric and find the shape without overlap
    for (let k = 0; k < outputObj.length; k++) {
        if (!hasOverlap(fabric, outputObj[k])){
            let result = outputObj[k].id;
            return result;
        }
    };

    // something has gone wrong
    return undefined;
};
