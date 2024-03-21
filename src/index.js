/* eslint-disable no-restricted-syntax */
const board = [
  "0,0",
  "0,1",
  "0,2",
  "0,3",
  "0,4",
  "0,5",
  "0,6",
  "0,7",
  "1,0",
  "1,1",
  "1,2",
  "1,3",
  "1,4",
  "1,5",
  "1,6",
  "1,7",
  "2,0",
  "2,1",
  "2,2",
  "2,3",
  "2,4",
  "2,5",
  "2,6",
  "2,7",
  "3,0",
  "3,1",
  "3,2",
  "3,3",
  "3,4",
  "3,5",
  "3,6",
  "3,7",
  "4,0",
  "4,1",
  "4,2",
  "4,3",
  "4,4",
  "4,5",
  "4,6",
  "4,7",
  "5,0",
  "5,1",
  "5,2",
  "5,3",
  "5,4",
  "5,5",
  "5,6",
  "5,7",
  "6,0",
  "6,1",
  "6,2",
  "6,3",
  "6,4",
  "6,5",
  "6,6",
  "6,7",
  "7,0",
  "7,1",
  "7,2",
  "7,3",
  "7,4",
  "7,5",
  "7,6",
  "7,7",
];

function getAllMoves(space) {
  const startingSpace = space.split(",");
  startingSpace[0] = parseInt(startingSpace[0]);
  startingSpace[1] = parseInt(startingSpace[1]);
  let moveArray = [];
  moveArray.push([startingSpace[0] + 2, startingSpace[1] + 1]);
  moveArray.push([startingSpace[0] + 2, startingSpace[1] - 1]);
  moveArray.push([startingSpace[0] + 1, startingSpace[1] + 2]);
  moveArray.push([startingSpace[0] + 1, startingSpace[1] - 2]);
  moveArray.push([startingSpace[0] - 2, startingSpace[1] + 1]);
  moveArray.push([startingSpace[0] - 2, startingSpace[1] - 1]);
  moveArray.push([startingSpace[0] - 1, startingSpace[1] + 2]);
  moveArray.push([startingSpace[0] - 1, startingSpace[1] - 2]);

  // Remove illegal moves
  moveArray = moveArray.filter(
    (possibleMove) =>
      possibleMove[0] <= 7 &&
      possibleMove[0] >= 0 &&
      possibleMove[1] <= 7 &&
      possibleMove[1] >= 0,
  );

  // Format moves as strings
  return moveArray.map((move) => move.toString());
}

// Create adjacencyList
const adjacencyList = new Map();

function addNode(startingSpace) {
  adjacencyList.set(startingSpace, []);
}

function addEdge(startingSpace, possibleMove) {
  adjacencyList.get(startingSpace).push(possibleMove);
}

board.forEach((space) => {
  addNode(space);
});
board.forEach((space) => {
  getAllMoves(space).forEach((possibleMove) => {
    addEdge(space, possibleMove);
  });
});

function bfs(startingSpace, endingSpace) {
  if (startingSpace === endingSpace) {
    return [startingSpace];
  }
  const visited = new Set();
  const queue = [[startingSpace, [startingSpace]]]; // Store vertices and routes

  while (queue.length > 0) {
    const currVertex = queue.shift(); // Get the next vertex in the list
    const currSpace = currVertex[0];
    const currRoute = currVertex[1];
    const possibleMoves = adjacencyList.get(currSpace); // Visit the vertex and get all possible moves from there
    for (const possibleMove of possibleMoves) {
      // If end is found from vertex return the current route
      if (possibleMove === endingSpace) {
        return [...currRoute, endingSpace];
      }

      // Push unvisited space to the queue and update its route
      if (!visited.has(possibleMove)) {
        visited.add(possibleMove);
        queue.push([possibleMove, [...currRoute, possibleMove]]);
      }
    }
  }
}

console.log(adjacencyList);
console.log(bfs("0,0", "7,7"));
