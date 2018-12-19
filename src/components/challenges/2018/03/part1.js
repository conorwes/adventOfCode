import returnInputText from "./input"

var points = [];

function reCastToObj(squareData) {
    var squareObj = [];
    for (var i = 0; i < squareData.length; i++) {
        var data = squareData[i];
        var posX = data.substring(data.indexOf('@')+2, data.indexOf(','));
        var posY = data.substring(data.indexOf(',')+1, data.indexOf(':'));
        var sWidth = data.substring(data.indexOf(':')+2, data.indexOf('x'));
        var sHeight = data.substring(data.indexOf('x')+1);
        var xMax = parseInt(posX)+parseInt(sWidth);
        var yMax = parseInt(posY)+parseInt(sHeight);
        var squareObjToAdd = {
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


function getNumOfDuplicates() {
    const claims = new Map();
    const overlaps = new Set();
    for (var i = 0; i < points.length; i++) {  
        var key = points[i].x + ":" + points[i].y;
        if (!(claims.has(key))) {
            claims.set(key, []);
        } else {
            overlaps.add(key);  
        }
    }
    return overlaps.size;
};

export default function Solution03Part01() {
    let input = returnInputText();
    const squareData = input.split(/\n/g);
    var squareObj = reCastToObj(squareData);
    addPoints(squareObj);
    var res2 = getNumOfDuplicates();
    return res2;
};
