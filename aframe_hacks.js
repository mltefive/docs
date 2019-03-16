var materials = [new THREE.MeshBasicMaterial({map: texture, side: THREE.FrontSide}),
                 new THREE.MeshBasicMaterial({map: textureBack, side: THREE.BackSide})];

var geometry = new THREE.PlaneGeometry(width, height);

for (var i = 0, len = geometry.faces.length; i < len; i++) {
    var face = geometry.faces[i].clone();
    face.materialIndex = 1;
    geometry.faces.push(face);
    geometry.faceVertexUvs[0].push(geometry.faceVertexUvs[0][i].slice(0));
}

scene.add(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));
