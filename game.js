require('aframe');
require('aframe-href-component');


const scene = document.querySelector('a-scene');
const treeModel = document.querySelector('#tree');


function randomPosition() {
  return {
    x: (Math.random() - 0.5) * 20,
    y: 0.421,
    z: (Math.random() - 0.5) * 20
  };
}



function createTree(){
  const tree = treeModel.cloneNode()
  tree.setAttribution('position', "-4.01292 0.421 -3.67596")
  scene.appendChild(tree);
}

createTree()