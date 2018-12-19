import returnInputText from "./input"

var points = [];

function reCastToObj(squareData) {
    var squareObj = [];
    for (var i = 0; i < squareData.length; i++) {
        var data = squareData[i];
        var id = data.substring(data.indexOf('#')+1, data.indexOf(' '));
        var posX = data.substring(data.indexOf('@')+2, data.indexOf(','));
        var posY = data.substring(data.indexOf(',')+1, data.indexOf(':'));
        var sWidth = data.substring(data.indexOf(':')+2, data.indexOf('x'));
        var sHeight = data.substring(data.indexOf('x')+1);
        var xMax = parseInt(posX)+parseInt(sWidth);
        var yMax = parseInt(posY)+parseInt(sHeight);
        var squareObjToAdd = {
            id: id,
            x: parseInt(posX),
            y: parseInt(posY),
            xMax: xMax,
            yMax: yMax
        }
        squareObj.push(squareObjToAdd);
    }
    return squareObj;
};

function addPoints(squareObj) {
    squareObj.forEach(point => {
        for (var x = point.x; x < point.xMax; x++) {
            for (var y = point.y; y < point.yMax; y++) {
                var pointToAdd = {
                        x: x,
                        y: y
                }
                points.push(pointToAdd);
            }
        }
    });
};

function hasOverlay(fabric, squareObj) {
    for (let i = squareObj.x; i < squareObj.xMax; i++) {
        for (let j = squareObj.y; j < squareObj.yMax; j++) {
            if (fabric[i][j] > 1){
                return true;
            }
        }
    }
    return false;
}

export default function Solution03Part02() {
    let input = returnInputText();
    const squareData = input.split(/\n/g);
    var squareObj = reCastToObj(squareData);
    addPoints(squareObj);

    const fabric = Array.from(new Array(1000)).map(() => Array.from(new Array(1000)).fill(0));
    
    for (let k = 0; k < squareObj.length; k++) {
        for (let i = squareObj[k].x; i < squareObj[k].xMax; i++) {
            for (let j = squareObj[k].y; j < squareObj[k].yMax; j++) {
                fabric[i][j] += 1;
            }
        }        
    };

    for (let k = 0; k < squareObj.length; k++) {
        if (!hasOverlay(fabric, squareObj[k])){
            return squareObj[k].id;
        }
    };

    return undefined;
};
