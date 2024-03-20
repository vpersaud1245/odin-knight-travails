
function getAllMoves(coordinates) {
    const moveArray = []
    moveArray.push([coordinates[0]+ 2, coordinates[1] + 1])
    moveArray.push([coordinates[0]+ 2, coordinates[1] - 1])
    moveArray.push([coordinates[0]+ 1, coordinates[1] + 2])
    moveArray.push([coordinates[0]+ 1, coordinates[1] - 2])
    moveArray.push([coordinates[0] - 2, coordinates[1] + 1])
    moveArray.push([coordinates[0] - 2, coordinates[1] - 1])
    moveArray.push([coordinates[0] - 1, coordinates[1] + 2])
    moveArray.push([coordinates[0] - 1, coordinates[1] - 2])
    return moveArray.filter(coordinate => coordinate[0] <= 7 && coordinate[0] >= 0 && (coordinate[1] <= 7 && coordinate[1] >= 0));
}

console.log(getAllMoves([1,1]))