const scene = document.querySelector('a-scene');
const treeModel = document.querySelector('#tree');


function randomPosition() {
  return {
    x: (Math.random() - 0.5) * 20,
    y: 1.5,
    z: (Math.random() - 0.5) * 20
  };
}

let tree = 0;
function createTree() {
  if (tree++ > 5) return;
  const clone = treeModel.cloneNode();
  clone.setAttribute('position', randomPosition());
  scene.appendChild(clone);
}

for (i = 0; i < 15; i++) {
  createTree();
}
