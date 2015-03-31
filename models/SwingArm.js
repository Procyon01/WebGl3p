/**
 * Created by dulimarh on 3/7/15.
 */
SwingArm = function(len) {
    //var ARM_LENGTH = 20;
    var armGeo = new THREE.CylinderGeometry (0.9, 0.6, len);
    var armMat = new THREE.MeshPhongMaterial({color:0x578231});
    var arm = new THREE.Mesh (armGeo, armMat);

    var armGroup = new THREE.Group();
    arm.translateY (-len/2);
    armGroup.add(arm);
    return armGroup;
}

/* Inherit from THREE.Object3D */
SwingArm.prototype = Object.create (THREE.Object3D.prototype);
SwingArm.prototype.constructor = SwingArm;
