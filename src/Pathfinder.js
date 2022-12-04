let graph = {};
let edges = [];

export function add(node, neighbor) {
  edges.push(neighbor);
  console.log("edges:", edges);

  graph[node] = [...edges];

  console.log(graph);
}
export function dfs(graph, source, destination, visited) {
  let path = [];

  if (source === destination) {
    return true;
  }
  if (visited.has(source)) {
    return false;
  } else {
    visited.add(source);
    path.push(...visited);
  }

  for (let neighbor of graph[source]) {
    if (dfs(graph, neighbor, destination, visited) === true) {
      return console.log("path:", path);
    }
  }
  return console.log("no match found");
}

//   console.log(dfs(graph, "sameer", "bhaskar", new Set()));
