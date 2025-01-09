var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.JointSpring' )
  var i1549 = data
  i1548.spring = i1549[0]
  i1548.damper = i1549[1]
  i1548.targetPosition = i1549[2]
  return i1548
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.JointMotor' )
  var i1551 = data
  i1550.m_TargetVelocity = i1551[0]
  i1550.m_Force = i1551[1]
  i1550.m_FreeSpin = i1551[2]
  return i1550
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.JointLimits' )
  var i1553 = data
  i1552.m_Min = i1553[0]
  i1552.m_Max = i1553[1]
  i1552.m_Bounciness = i1553[2]
  i1552.m_BounceMinVelocity = i1553[3]
  i1552.m_ContactDistance = i1553[4]
  i1552.minBounce = i1553[5]
  i1552.maxBounce = i1553[6]
  return i1552
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointDrive' )
  var i1555 = data
  i1554.m_PositionSpring = i1555[0]
  i1554.m_PositionDamper = i1555[1]
  i1554.m_MaximumForce = i1555[2]
  i1554.m_UseAcceleration = i1555[3]
  return i1554
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1557 = data
  i1556.m_Spring = i1557[0]
  i1556.m_Damper = i1557[1]
  return i1556
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1559 = data
  i1558.m_Limit = i1559[0]
  i1558.m_Bounciness = i1559[1]
  i1558.m_ContactDistance = i1559[2]
  return i1558
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1561 = data
  i1560.m_ExtremumSlip = i1561[0]
  i1560.m_ExtremumValue = i1561[1]
  i1560.m_AsymptoteSlip = i1561[2]
  i1560.m_AsymptoteValue = i1561[3]
  i1560.m_Stiffness = i1561[4]
  return i1560
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1563 = data
  i1562.m_LowerAngle = i1563[0]
  i1562.m_UpperAngle = i1563[1]
  return i1562
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1565 = data
  i1564.m_MotorSpeed = i1565[0]
  i1564.m_MaximumMotorTorque = i1565[1]
  return i1564
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1567 = data
  i1566.m_DampingRatio = i1567[0]
  i1566.m_Frequency = i1567[1]
  i1566.m_Angle = i1567[2]
  return i1566
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1569 = data
  i1568.m_LowerTranslation = i1569[0]
  i1568.m_UpperTranslation = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1570 = root || new pc.UnityMaterial()
  var i1571 = data
  i1570.name = i1571[0]
  request.r(i1571[1], i1571[2], 0, i1570, 'shader')
  i1570.renderQueue = i1571[3]
  i1570.enableInstancing = !!i1571[4]
  var i1573 = i1571[5]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1573[i + 0]) );
  }
  i1570.floatParameters = i1572
  var i1575 = i1571[6]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1575[i + 0]) );
  }
  i1570.colorParameters = i1574
  var i1577 = i1571[7]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1577[i + 0]) );
  }
  i1570.vectorParameters = i1576
  var i1579 = i1571[8]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1579[i + 0]) );
  }
  i1570.textureParameters = i1578
  var i1581 = i1571[9]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1581[i + 0]) );
  }
  i1570.materialFlags = i1580
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.value = i1585[1]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1589 = data
  i1588.name = i1589[0]
  i1588.value = new pc.Color(i1589[1], i1589[2], i1589[3], i1589[4])
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.value = new pc.Vec4( i1593[1], i1593[2], i1593[3], i1593[4] )
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1597 = data
  i1596.name = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'value')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.enabled = !!i1601[1]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.width = i1603[1]
  i1602.height = i1603[2]
  i1602.mipmapCount = i1603[3]
  i1602.anisoLevel = i1603[4]
  i1602.filterMode = i1603[5]
  i1602.hdr = !!i1603[6]
  i1602.format = i1603[7]
  i1602.wrapMode = i1603[8]
  i1602.alphaIsTransparency = !!i1603[9]
  i1602.alphaSource = i1603[10]
  i1602.graphicsFormat = i1603[11]
  i1602.sRGBTexture = !!i1603[12]
  i1602.desiredColorSpace = i1603[13]
  i1602.wrapU = i1603[14]
  i1602.wrapV = i1603[15]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1605 = data
  i1604.position = new pc.Vec3( i1605[0], i1605[1], i1605[2] )
  i1604.scale = new pc.Vec3( i1605[3], i1605[4], i1605[5] )
  i1604.rotation = new pc.Quat(i1605[6], i1605[7], i1605[8], i1605[9])
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1607 = data
  i1606.enabled = !!i1607[0]
  request.r(i1607[1], i1607[2], 0, i1606, 'sharedMaterial')
  var i1609 = i1607[3]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 2, i1608, '')
  }
  i1606.sharedMaterials = i1608
  i1606.receiveShadows = !!i1607[4]
  i1606.shadowCastingMode = i1607[5]
  i1606.sortingLayerID = i1607[6]
  i1606.sortingOrder = i1607[7]
  i1606.lightmapIndex = i1607[8]
  i1606.lightmapSceneIndex = i1607[9]
  i1606.lightmapScaleOffset = new pc.Vec4( i1607[10], i1607[11], i1607[12], i1607[13] )
  i1606.lightProbeUsage = i1607[14]
  i1606.reflectionProbeUsage = i1607[15]
  i1606.color = new pc.Color(i1607[16], i1607[17], i1607[18], i1607[19])
  request.r(i1607[20], i1607[21], 0, i1606, 'sprite')
  i1606.flipX = !!i1607[22]
  i1606.flipY = !!i1607[23]
  i1606.drawMode = i1607[24]
  i1606.size = new pc.Vec2( i1607[25], i1607[26] )
  i1606.tileMode = i1607[27]
  i1606.adaptiveModeThreshold = i1607[28]
  i1606.maskInteraction = i1607[29]
  i1606.spriteSortPoint = i1607[30]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1613 = data
  i1612.usedByComposite = !!i1613[0]
  i1612.autoTiling = !!i1613[1]
  i1612.size = new pc.Vec2( i1613[2], i1613[3] )
  i1612.edgeRadius = i1613[4]
  i1612.enabled = !!i1613[5]
  i1612.isTrigger = !!i1613[6]
  i1612.usedByEffector = !!i1613[7]
  i1612.density = i1613[8]
  i1612.offset = new pc.Vec2( i1613[9], i1613[10] )
  request.r(i1613[11], i1613[12], 0, i1612, 'material')
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1615 = data
  i1614.bodyType = i1615[0]
  request.r(i1615[1], i1615[2], 0, i1614, 'material')
  i1614.simulated = !!i1615[3]
  i1614.useAutoMass = !!i1615[4]
  i1614.mass = i1615[5]
  i1614.drag = i1615[6]
  i1614.angularDrag = i1615[7]
  i1614.gravityScale = i1615[8]
  i1614.collisionDetectionMode = i1615[9]
  i1614.sleepMode = i1615[10]
  i1614.constraints = i1615[11]
  return i1614
}

Deserializers["Pin"] = function (request, data, root) {
  var i1616 = root || request.c( 'Pin' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'head')
  request.r(i1617[2], i1617[3], 0, i1616, 'end')
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.tagId = i1619[1]
  i1618.enabled = !!i1619[2]
  i1618.isStatic = !!i1619[3]
  i1618.layer = i1619[4]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1621 = data
  i1620.radius = i1621[0]
  i1620.enabled = !!i1621[1]
  i1620.isTrigger = !!i1621[2]
  i1620.usedByEffector = !!i1621[3]
  i1620.density = i1621[4]
  i1620.offset = new pc.Vec2( i1621[5], i1621[6] )
  request.r(i1621[7], i1621[8], 0, i1620, 'material')
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'animatorController')
  request.r(i1623[2], i1623[3], 0, i1622, 'avatar')
  i1622.updateMode = i1623[4]
  i1622.hasTransformHierarchy = !!i1623[5]
  i1622.applyRootMotion = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 2, i1624, '')
  }
  i1622.humanBones = i1624
  i1622.enabled = !!i1623[8]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1629 = data
  i1628.name = i1629[0]
  i1628.halfPrecision = !!i1629[1]
  i1628.useUInt32IndexFormat = !!i1629[2]
  i1628.vertexCount = i1629[3]
  i1628.aabb = i1629[4]
  var i1631 = i1629[5]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( !!i1631[i + 0] );
  }
  i1628.streams = i1630
  i1628.vertices = i1629[6]
  var i1633 = i1629[7]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1633[i + 0]) );
  }
  i1628.subMeshes = i1632
  var i1635 = i1629[8]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 16) {
    i1634.push( new pc.Mat4().setData(i1635[i + 0], i1635[i + 1], i1635[i + 2], i1635[i + 3],  i1635[i + 4], i1635[i + 5], i1635[i + 6], i1635[i + 7],  i1635[i + 8], i1635[i + 9], i1635[i + 10], i1635[i + 11],  i1635[i + 12], i1635[i + 13], i1635[i + 14], i1635[i + 15]) );
  }
  i1628.bindposes = i1634
  var i1637 = i1629[9]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1637[i + 0]) );
  }
  i1628.blendShapes = i1636
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1643 = data
  i1642.triangles = i1643[0]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1649 = data
  i1648.name = i1649[0]
  var i1651 = i1649[1]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1651[i + 0]) );
  }
  i1648.frames = i1650
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1653 = data
  i1652.name = i1653[0]
  i1652.index = i1653[1]
  i1652.startup = !!i1653[2]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1655 = data
  i1654.enabled = !!i1655[0]
  i1654.aspect = i1655[1]
  i1654.orthographic = !!i1655[2]
  i1654.orthographicSize = i1655[3]
  i1654.backgroundColor = new pc.Color(i1655[4], i1655[5], i1655[6], i1655[7])
  i1654.nearClipPlane = i1655[8]
  i1654.farClipPlane = i1655[9]
  i1654.fieldOfView = i1655[10]
  i1654.depth = i1655[11]
  i1654.clearFlags = i1655[12]
  i1654.cullingMask = i1655[13]
  i1654.rect = i1655[14]
  request.r(i1655[15], i1655[16], 0, i1654, 'targetTexture')
  i1654.usePhysicalProperties = !!i1655[17]
  i1654.focalLength = i1655[18]
  i1654.sensorSize = new pc.Vec2( i1655[19], i1655[20] )
  i1654.lensShift = new pc.Vec2( i1655[21], i1655[22] )
  i1654.gateFit = i1655[23]
  i1654.commandBufferCount = i1655[24]
  i1654.cameraType = i1655[25]
  return i1654
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i1656 = root || request.c( 'ViewportHandler' )
  var i1657 = data
  i1656.wireColor = new pc.Color(i1657[0], i1657[1], i1657[2], i1657[3])
  i1656.UnitsSize = i1657[4]
  i1656.constraint = i1657[5]
  request.r(i1657[6], i1657[7], 0, i1656, 'camera')
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'clip')
  request.r(i1659[2], i1659[3], 0, i1658, 'outputAudioMixerGroup')
  i1658.playOnAwake = !!i1659[4]
  i1658.loop = !!i1659[5]
  i1658.time = i1659[6]
  i1658.volume = i1659[7]
  i1658.pitch = i1659[8]
  i1658.enabled = !!i1659[9]
  return i1658
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i1660 = root || request.c( 'InputReceiver' )
  var i1661 = data
  return i1660
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i1662 = root || request.c( 'CameraAnchor' )
  var i1663 = data
  i1662.anchorType = i1663[0]
  i1662.anchorOffset = new pc.Vec3( i1663[1], i1663[2], i1663[3] )
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1665 = data
  i1664.enabled = !!i1665[0]
  i1664.isTrigger = !!i1665[1]
  i1664.usedByEffector = !!i1665[2]
  i1664.density = i1665[3]
  i1664.offset = new pc.Vec2( i1665[4], i1665[5] )
  request.r(i1665[6], i1665[7], 0, i1664, 'material')
  i1664.edgeRadius = i1665[8]
  var i1667 = i1665[9]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 2) {
    i1666.push( new pc.Vec2( i1667[i + 0], i1667[i + 1] ) );
  }
  i1664.points = i1666
  i1664.useAdjacentStartPoint = !!i1665[10]
  i1664.adjacentStartPoint = new pc.Vec2( i1665[11], i1665[12] )
  i1664.useAdjacentEndPoint = !!i1665[13]
  i1664.adjacentEndPoint = new pc.Vec2( i1665[14], i1665[15] )
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1671 = data
  i1670.enabled = !!i1671[0]
  i1670.isTrigger = !!i1671[1]
  i1670.usedByEffector = !!i1671[2]
  i1670.density = i1671[3]
  i1670.offset = new pc.Vec2( i1671[4], i1671[5] )
  request.r(i1671[6], i1671[7], 0, i1670, 'material')
  i1670.usedByComposite = !!i1671[8]
  i1670.autoTiling = !!i1671[9]
  var i1673 = i1671[10]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
  var i1675 = i1673[i + 0]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 2) {
    i1674.push( new pc.Vec2( i1675[i + 0], i1675[i + 1] ) );
  }
    i1672.push( i1674 );
  }
  i1670.points = i1672
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1681 = data
  i1680.pivot = new pc.Vec2( i1681[0], i1681[1] )
  i1680.anchorMin = new pc.Vec2( i1681[2], i1681[3] )
  i1680.anchorMax = new pc.Vec2( i1681[4], i1681[5] )
  i1680.sizeDelta = new pc.Vec2( i1681[6], i1681[7] )
  i1680.anchoredPosition3D = new pc.Vec3( i1681[8], i1681[9], i1681[10] )
  i1680.rotation = new pc.Quat(i1681[11], i1681[12], i1681[13], i1681[14])
  i1680.scale = new pc.Vec3( i1681[15], i1681[16], i1681[17] )
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.planeDistance = i1683[1]
  i1682.referencePixelsPerUnit = i1683[2]
  i1682.isFallbackOverlay = !!i1683[3]
  i1682.renderMode = i1683[4]
  i1682.renderOrder = i1683[5]
  i1682.sortingLayerName = i1683[6]
  i1682.sortingOrder = i1683[7]
  i1682.scaleFactor = i1683[8]
  request.r(i1683[9], i1683[10], 0, i1682, 'worldCamera')
  i1682.overrideSorting = !!i1683[11]
  i1682.pixelPerfect = !!i1683[12]
  i1682.targetDisplay = i1683[13]
  i1682.overridePixelPerfect = !!i1683[14]
  return i1682
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1685 = data
  i1684.m_UiScaleMode = i1685[0]
  i1684.m_ReferencePixelsPerUnit = i1685[1]
  i1684.m_ScaleFactor = i1685[2]
  i1684.m_ReferenceResolution = new pc.Vec2( i1685[3], i1685[4] )
  i1684.m_ScreenMatchMode = i1685[5]
  i1684.m_MatchWidthOrHeight = i1685[6]
  i1684.m_PhysicalUnit = i1685[7]
  i1684.m_FallbackScreenDPI = i1685[8]
  i1684.m_DefaultSpriteDPI = i1685[9]
  i1684.m_DynamicPixelsPerUnit = i1685[10]
  i1684.m_PresetInfoIsWorld = !!i1685[11]
  return i1684
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1687 = data
  i1686.m_IgnoreReversedGraphics = !!i1687[0]
  i1686.m_BlockingObjects = i1687[1]
  i1686.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1687[2] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1689 = data
  i1688.cullTransparentMesh = !!i1689[0]
  return i1688
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.Image' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'm_Sprite')
  i1690.m_Type = i1691[2]
  i1690.m_PreserveAspect = !!i1691[3]
  i1690.m_FillCenter = !!i1691[4]
  i1690.m_FillMethod = i1691[5]
  i1690.m_FillAmount = i1691[6]
  i1690.m_FillClockwise = !!i1691[7]
  i1690.m_FillOrigin = i1691[8]
  i1690.m_UseSpriteMesh = !!i1691[9]
  i1690.m_PixelsPerUnitMultiplier = i1691[10]
  request.r(i1691[11], i1691[12], 0, i1690, 'm_Material')
  i1690.m_Maskable = !!i1691[13]
  i1690.m_Color = new pc.Color(i1691[14], i1691[15], i1691[16], i1691[17])
  i1690.m_RaycastTarget = !!i1691[18]
  i1690.m_RaycastPadding = new pc.Vec4( i1691[19], i1691[20], i1691[21], i1691[22] )
  return i1690
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.Text' )
  var i1693 = data
  i1692.m_FontData = request.d('UnityEngine.UI.FontData', i1693[0], i1692.m_FontData)
  i1692.m_Text = i1693[1]
  request.r(i1693[2], i1693[3], 0, i1692, 'm_Material')
  i1692.m_Maskable = !!i1693[4]
  i1692.m_Color = new pc.Color(i1693[5], i1693[6], i1693[7], i1693[8])
  i1692.m_RaycastTarget = !!i1693[9]
  i1692.m_RaycastPadding = new pc.Vec4( i1693[10], i1693[11], i1693[12], i1693[13] )
  return i1692
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Font')
  i1694.m_FontSize = i1695[2]
  i1694.m_FontStyle = i1695[3]
  i1694.m_BestFit = !!i1695[4]
  i1694.m_MinSize = i1695[5]
  i1694.m_MaxSize = i1695[6]
  i1694.m_Alignment = i1695[7]
  i1694.m_AlignByGeometry = !!i1695[8]
  i1694.m_RichText = !!i1695[9]
  i1694.m_HorizontalOverflow = i1695[10]
  i1694.m_VerticalOverflow = i1695[11]
  i1694.m_LineSpacing = i1695[12]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'additionalVertexStreams')
  i1696.enabled = !!i1697[2]
  request.r(i1697[3], i1697[4], 0, i1696, 'sharedMaterial')
  var i1699 = i1697[5]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 2, i1698, '')
  }
  i1696.sharedMaterials = i1698
  i1696.receiveShadows = !!i1697[6]
  i1696.shadowCastingMode = i1697[7]
  i1696.sortingLayerID = i1697[8]
  i1696.sortingOrder = i1697[9]
  i1696.lightmapIndex = i1697[10]
  i1696.lightmapSceneIndex = i1697[11]
  i1696.lightmapScaleOffset = new pc.Vec4( i1697[12], i1697[13], i1697[14], i1697[15] )
  i1696.lightProbeUsage = i1697[16]
  i1696.reflectionProbeUsage = i1697[17]
  return i1696
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1700 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1701 = data
  i1700.loop = !!i1701[0]
  i1700.timeScale = i1701[1]
  request.r(i1701[2], i1701[3], 0, i1700, 'skeletonDataAsset')
  i1700.initialSkinName = i1701[4]
  i1700.fixPrefabOverrideViaMeshFilter = i1701[5]
  i1700.initialFlipX = !!i1701[6]
  i1700.initialFlipY = !!i1701[7]
  i1700.updateWhenInvisible = i1701[8]
  i1700.zSpacing = i1701[9]
  i1700.useClipping = !!i1701[10]
  i1700.immutableTriangles = !!i1701[11]
  i1700.pmaVertexColors = !!i1701[12]
  i1700.clearStateOnDisable = !!i1701[13]
  i1700.tintBlack = !!i1701[14]
  i1700.singleSubmesh = !!i1701[15]
  i1700.fixDrawOrder = !!i1701[16]
  i1700.addNormals = !!i1701[17]
  i1700.calculateTangents = !!i1701[18]
  i1700.maskInteraction = i1701[19]
  i1700.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1701[20], i1700.maskMaterials)
  i1700.disableRenderingOnOverride = !!i1701[21]
  i1700.updateTiming = i1701[22]
  i1700.unscaledTime = !!i1701[23]
  i1700._animationName = i1701[24]
  var i1703 = i1701[25]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1700.separatorSlotNames = i1702
  return i1700
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1704 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 2, i1706, '')
  }
  i1704.materialsMaskDisabled = i1706
  var i1709 = i1705[1]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1704.materialsInsideMask = i1708
  var i1711 = i1705[2]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1704.materialsOutsideMask = i1710
  return i1704
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i1714 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'boneRoot')
  i1714.flipBy180DegreeRotation = !!i1715[2]
  request.r(i1715[3], i1715[4], 0, i1714, 'skeletonRenderer')
  request.r(i1715[5], i1715[6], 0, i1714, 'skeletonGraphic')
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'sharedMesh')
  return i1716
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i1718 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i1719 = data
  i1718.copyPropertyBlock = !!i1719[0]
  i1718.copyMeshRendererFlags = !!i1719[1]
  var i1721 = i1719[2]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1718.partsRenderers = i1720
  request.r(i1719[3], i1719[4], 0, i1718, 'skeletonRenderer')
  return i1718
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i1724 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i1725 = data
  i1724.boneName = i1725[0]
  request.r(i1725[1], i1725[2], 0, i1724, 'parentReference')
  i1724.mode = i1725[3]
  i1724.position = !!i1725[4]
  i1724.rotation = !!i1725[5]
  i1724.scale = !!i1725[6]
  i1724.zPosition = !!i1725[7]
  i1724.overrideAlpha = i1725[8]
  request.r(i1725[9], i1725[10], 0, i1724, 'hierarchy')
  return i1724
}

Deserializers["Bag"] = function (request, data, root) {
  var i1726 = root || request.c( 'Bag' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'model')
  request.r(i1727[2], i1727[3], 0, i1726, 'idlePosition')
  request.r(i1727[4], i1727[5], 0, i1726, 'winPosition')
  request.r(i1727[6], i1727[7], 0, i1726, 'losePosition')
  return i1726
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i1728 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i1729 = data
  return i1728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_FirstSelected')
  i1730.m_sendNavigationEvents = !!i1731[2]
  i1730.m_DragThreshold = i1731[3]
  return i1730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1733 = data
  i1732.m_HorizontalAxis = i1733[0]
  i1732.m_VerticalAxis = i1733[1]
  i1732.m_SubmitButton = i1733[2]
  i1732.m_CancelButton = i1733[3]
  i1732.m_InputActionsPerSecond = i1733[4]
  i1732.m_RepeatDelay = i1733[5]
  i1732.m_ForceModuleActive = !!i1733[6]
  i1732.m_SendPointerHoverToParent = !!i1733[7]
  return i1732
}

Deserializers["Pulse"] = function (request, data, root) {
  var i1734 = root || request.c( 'Pulse' )
  var i1735 = data
  i1734.scale = i1735[0]
  i1734.duration = i1735[1]
  i1734.ease = i1735[2]
  i1734.loopCount = i1735[3]
  i1734.from = !!i1735[4]
  return i1734
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i1736 = root || request.c( 'SoundClick' )
  var i1737 = data
  i1736.loopTime = i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'sound')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1739 = data
  i1738.ambientIntensity = i1739[0]
  i1738.reflectionIntensity = i1739[1]
  i1738.ambientMode = i1739[2]
  i1738.ambientLight = new pc.Color(i1739[3], i1739[4], i1739[5], i1739[6])
  i1738.ambientSkyColor = new pc.Color(i1739[7], i1739[8], i1739[9], i1739[10])
  i1738.ambientGroundColor = new pc.Color(i1739[11], i1739[12], i1739[13], i1739[14])
  i1738.ambientEquatorColor = new pc.Color(i1739[15], i1739[16], i1739[17], i1739[18])
  i1738.fogColor = new pc.Color(i1739[19], i1739[20], i1739[21], i1739[22])
  i1738.fogEndDistance = i1739[23]
  i1738.fogStartDistance = i1739[24]
  i1738.fogDensity = i1739[25]
  i1738.fog = !!i1739[26]
  request.r(i1739[27], i1739[28], 0, i1738, 'skybox')
  i1738.fogMode = i1739[29]
  var i1741 = i1739[30]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1741[i + 0]) );
  }
  i1738.lightmaps = i1740
  i1738.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1739[31], i1738.lightProbes)
  i1738.lightmapsMode = i1739[32]
  i1738.mixedBakeMode = i1739[33]
  i1738.environmentLightingMode = i1739[34]
  i1738.ambientProbe = new pc.SphericalHarmonicsL2(i1739[35])
  i1738.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1739[36])
  i1738.useReferenceAmbientProbe = !!i1739[37]
  request.r(i1739[38], i1739[39], 0, i1738, 'customReflection')
  request.r(i1739[40], i1739[41], 0, i1738, 'defaultReflection')
  i1738.defaultReflectionMode = i1739[42]
  i1738.defaultReflectionResolution = i1739[43]
  i1738.sunLightObjectId = i1739[44]
  i1738.pixelLightCount = i1739[45]
  i1738.defaultReflectionHDR = !!i1739[46]
  i1738.hasLightDataAsset = !!i1739[47]
  i1738.hasManualGenerate = !!i1739[48]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'lightmapColor')
  request.r(i1745[2], i1745[3], 0, i1744, 'lightmapDirection')
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1746 = root || new UnityEngine.LightProbes()
  var i1747 = data
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1755 = data
  var i1757 = i1755[0]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1757[i + 0]));
  }
  i1754.ShaderCompilationErrors = i1756
  i1754.name = i1755[1]
  i1754.guid = i1755[2]
  var i1759 = i1755[3]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1754.shaderDefinedKeywords = i1758
  var i1761 = i1755[4]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1761[i + 0]) );
  }
  i1754.passes = i1760
  var i1763 = i1755[5]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1763[i + 0]) );
  }
  i1754.usePasses = i1762
  var i1765 = i1755[6]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1765[i + 0]) );
  }
  i1754.defaultParameterValues = i1764
  request.r(i1755[7], i1755[8], 0, i1754, 'unityFallbackShader')
  i1754.readDepth = !!i1755[9]
  i1754.isCreatedByShaderGraph = !!i1755[10]
  i1754.compiled = !!i1755[11]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1769 = data
  i1768.shaderName = i1769[0]
  i1768.errorMessage = i1769[1]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1772 = root || new pc.UnityShaderPass()
  var i1773 = data
  i1772.id = i1773[0]
  i1772.subShaderIndex = i1773[1]
  i1772.name = i1773[2]
  i1772.passType = i1773[3]
  i1772.grabPassTextureName = i1773[4]
  i1772.usePass = !!i1773[5]
  i1772.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[6], i1772.zTest)
  i1772.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[7], i1772.zWrite)
  i1772.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[8], i1772.culling)
  i1772.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1773[9], i1772.blending)
  i1772.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1773[10], i1772.alphaBlending)
  i1772.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[11], i1772.colorWriteMask)
  i1772.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[12], i1772.offsetUnits)
  i1772.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[13], i1772.offsetFactor)
  i1772.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[14], i1772.stencilRef)
  i1772.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[15], i1772.stencilReadMask)
  i1772.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[16], i1772.stencilWriteMask)
  i1772.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[17], i1772.stencilOp)
  i1772.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[18], i1772.stencilOpFront)
  i1772.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[19], i1772.stencilOpBack)
  var i1775 = i1773[20]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1775[i + 0]) );
  }
  i1772.tags = i1774
  var i1777 = i1773[21]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( i1777[i + 0] );
  }
  i1772.passDefinedKeywords = i1776
  var i1779 = i1773[22]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1779[i + 0]) );
  }
  i1772.passDefinedKeywordGroups = i1778
  var i1781 = i1773[23]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1781[i + 0]) );
  }
  i1772.variants = i1780
  var i1783 = i1773[24]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1783[i + 0]) );
  }
  i1772.excludedVariants = i1782
  i1772.hasDepthReader = !!i1773[25]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1785 = data
  i1784.val = i1785[0]
  i1784.name = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1787 = data
  i1786.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[0], i1786.src)
  i1786.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[1], i1786.dst)
  i1786.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[2], i1786.op)
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1789 = data
  i1788.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[0], i1788.pass)
  i1788.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[1], i1788.fail)
  i1788.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[2], i1788.zFail)
  i1788.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[3], i1788.comp)
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1793 = data
  i1792.name = i1793[0]
  i1792.value = i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( i1799[i + 0] );
  }
  i1796.keywords = i1798
  i1796.hasDiscard = !!i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1803 = data
  i1802.passId = i1803[0]
  i1802.subShaderIndex = i1803[1]
  var i1805 = i1803[2]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( i1805[i + 0] );
  }
  i1802.keywords = i1804
  i1802.vertexProgram = i1803[3]
  i1802.fragmentProgram = i1803[4]
  i1802.exportedForWebGl2 = !!i1803[5]
  i1802.readDepth = !!i1803[6]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'shader')
  i1808.pass = i1809[2]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.type = i1813[1]
  i1812.value = new pc.Vec4( i1813[2], i1813[3], i1813[4], i1813[5] )
  i1812.textureValue = i1813[6]
  i1812.shaderPropertyFlag = i1813[7]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1815 = data
  i1814.name = i1815[0]
  request.r(i1815[1], i1815[2], 0, i1814, 'texture')
  i1814.aabb = i1815[3]
  i1814.vertices = i1815[4]
  i1814.triangles = i1815[5]
  i1814.textureRect = UnityEngine.Rect.MinMaxRect(i1815[6], i1815[7], i1815[8], i1815[9])
  i1814.packedRect = UnityEngine.Rect.MinMaxRect(i1815[10], i1815[11], i1815[12], i1815[13])
  i1814.border = new pc.Vec4( i1815[14], i1815[15], i1815[16], i1815[17] )
  i1814.transparency = i1815[18]
  i1814.bounds = i1815[19]
  i1814.pixelsPerUnit = i1815[20]
  i1814.textureWidth = i1815[21]
  i1814.textureHeight = i1815[22]
  i1814.nativeSize = new pc.Vec2( i1815[23], i1815[24] )
  i1814.pivot = new pc.Vec2( i1815[25], i1815[26] )
  i1814.textureRectOffset = new pc.Vec2( i1815[27], i1815[28] )
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1817 = data
  i1816.name = i1817[0]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.wrapMode = i1819[1]
  i1818.isLooping = !!i1819[2]
  i1818.length = i1819[3]
  var i1821 = i1819[4]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1821[i + 0]) );
  }
  i1818.curves = i1820
  var i1823 = i1819[5]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1823[i + 0]) );
  }
  i1818.events = i1822
  i1818.halfPrecision = !!i1819[6]
  i1818._frameRate = i1819[7]
  i1818.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1819[8], i1818.localBounds)
  i1818.hasMuscleCurves = !!i1819[9]
  var i1825 = i1819[10]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1818.clipMuscleConstant = i1824
  i1818.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1819[11], i1818.clipBindingConstant)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1829 = data
  i1828.path = i1829[0]
  i1828.hash = i1829[1]
  i1828.componentType = i1829[2]
  i1828.property = i1829[3]
  i1828.keys = i1829[4]
  var i1831 = i1829[5]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1831[i + 0]) );
  }
  i1828.objectReferenceKeys = i1830
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1835 = data
  i1834.time = i1835[0]
  request.r(i1835[1], i1835[2], 0, i1834, 'value')
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1839 = data
  i1838.functionName = i1839[0]
  i1838.floatParameter = i1839[1]
  i1838.intParameter = i1839[2]
  i1838.stringParameter = i1839[3]
  request.r(i1839[4], i1839[5], 0, i1838, 'objectReferenceParameter')
  i1838.time = i1839[6]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1841 = data
  i1840.center = new pc.Vec3( i1841[0], i1841[1], i1841[2] )
  i1840.extends = new pc.Vec3( i1841[3], i1841[4], i1841[5] )
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1845 = data
  var i1847 = i1845[0]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1844.genericBindings = i1846
  var i1849 = i1845[1]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( i1849[i + 0] );
  }
  i1844.pptrCurveMapping = i1848
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.ascent = i1851[1]
  i1850.originalLineHeight = i1851[2]
  i1850.fontSize = i1851[3]
  var i1853 = i1851[4]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1853[i + 0]) );
  }
  i1850.characterInfo = i1852
  request.r(i1851[5], i1851[6], 0, i1850, 'texture')
  i1850.originalFontSize = i1851[7]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1857 = data
  i1856.index = i1857[0]
  i1856.advance = i1857[1]
  i1856.bearing = i1857[2]
  i1856.glyphWidth = i1857[3]
  i1856.glyphHeight = i1857[4]
  i1856.minX = i1857[5]
  i1856.maxX = i1857[6]
  i1856.minY = i1857[7]
  i1856.maxY = i1857[8]
  i1856.uvBottomLeftX = i1857[9]
  i1856.uvBottomLeftY = i1857[10]
  i1856.uvBottomRightX = i1857[11]
  i1856.uvBottomRightY = i1857[12]
  i1856.uvTopLeftX = i1857[13]
  i1856.uvTopLeftY = i1857[14]
  i1856.uvTopRightX = i1857[15]
  i1856.uvTopRightY = i1857[16]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1859 = data
  i1858.name = i1859[0]
  var i1861 = i1859[1]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1861[i + 0]) );
  }
  i1858.layers = i1860
  var i1863 = i1859[2]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1863[i + 0]) );
  }
  i1858.parameters = i1862
  i1858.animationClips = i1859[3]
  i1858.avatarUnsupported = i1859[4]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.defaultWeight = i1867[1]
  i1866.blendingMode = i1867[2]
  i1866.avatarMask = i1867[3]
  i1866.syncedLayerIndex = i1867[4]
  i1866.syncedLayerAffectsTiming = !!i1867[5]
  i1866.syncedLayers = i1867[6]
  i1866.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1867[7], i1866.stateMachine)
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1869 = data
  i1868.id = i1869[0]
  i1868.name = i1869[1]
  i1868.path = i1869[2]
  var i1871 = i1869[3]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1871[i + 0]) );
  }
  i1868.states = i1870
  var i1873 = i1869[4]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1873[i + 0]) );
  }
  i1868.machines = i1872
  var i1875 = i1869[5]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1875[i + 0]) );
  }
  i1868.entryStateTransitions = i1874
  var i1877 = i1869[6]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1877[i + 0]) );
  }
  i1868.exitStateTransitions = i1876
  var i1879 = i1869[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1879[i + 0]) );
  }
  i1868.anyStateTransitions = i1878
  i1868.defaultStateId = i1869[8]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1883 = data
  i1882.id = i1883[0]
  i1882.name = i1883[1]
  i1882.cycleOffset = i1883[2]
  i1882.cycleOffsetParameter = i1883[3]
  i1882.cycleOffsetParameterActive = !!i1883[4]
  i1882.mirror = !!i1883[5]
  i1882.mirrorParameter = i1883[6]
  i1882.mirrorParameterActive = !!i1883[7]
  i1882.motionId = i1883[8]
  i1882.nameHash = i1883[9]
  i1882.fullPathHash = i1883[10]
  i1882.speed = i1883[11]
  i1882.speedParameter = i1883[12]
  i1882.speedParameterActive = !!i1883[13]
  i1882.tag = i1883[14]
  i1882.tagHash = i1883[15]
  i1882.writeDefaultValues = !!i1883[16]
  var i1885 = i1883[17]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.behaviours = i1884
  var i1887 = i1883[18]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1887[i + 0]) );
  }
  i1882.transitions = i1886
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1893 = data
  i1892.fullPath = i1893[0]
  i1892.canTransitionToSelf = !!i1893[1]
  i1892.duration = i1893[2]
  i1892.exitTime = i1893[3]
  i1892.hasExitTime = !!i1893[4]
  i1892.hasFixedDuration = !!i1893[5]
  i1892.interruptionSource = i1893[6]
  i1892.offset = i1893[7]
  i1892.orderedInterruption = !!i1893[8]
  i1892.destinationStateId = i1893[9]
  i1892.isExit = !!i1893[10]
  i1892.mute = !!i1893[11]
  i1892.solo = !!i1893[12]
  var i1895 = i1893[13]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1895[i + 0]) );
  }
  i1892.conditions = i1894
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1901 = data
  i1900.destinationStateId = i1901[0]
  i1900.isExit = !!i1901[1]
  i1900.mute = !!i1901[2]
  i1900.solo = !!i1901[3]
  var i1903 = i1901[4]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1903[i + 0]) );
  }
  i1900.conditions = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1907 = data
  i1906.mode = i1907[0]
  i1906.parameter = i1907[1]
  i1906.threshold = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1911 = data
  i1910.defaultBool = !!i1911[0]
  i1910.defaultFloat = i1911[1]
  i1910.defaultInt = i1911[2]
  i1910.name = i1911[3]
  i1910.nameHash = i1911[4]
  i1910.type = i1911[5]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1913 = data
  i1912.name = i1913[0]
  i1912.bytes64 = i1913[1]
  i1912.data = i1913[2]
  return i1912
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1914 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1915 = data
  var i1917 = i1915[0]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 2, i1916, '')
  }
  i1914.atlasAssets = i1916
  i1914.scale = i1915[1]
  request.r(i1915[2], i1915[3], 0, i1914, 'skeletonJSON')
  i1914.isUpgradingBlendModeMaterials = !!i1915[4]
  i1914.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1915[5], i1914.blendModeMaterials)
  var i1919 = i1915[6]
  var i1918 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 1, i1918, '')
  }
  i1914.skeletonDataModifiers = i1918
  var i1921 = i1915[7]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( i1921[i + 0] );
  }
  i1914.fromAnimation = i1920
  var i1923 = i1915[8]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( i1923[i + 0] );
  }
  i1914.toAnimation = i1922
  i1914.duration = i1915[9]
  i1914.defaultMix = i1915[10]
  request.r(i1915[11], i1915[12], 0, i1914, 'controller')
  return i1914
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1926 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1927 = data
  i1926.applyAdditiveMaterial = !!i1927[0]
  var i1929 = i1927[1]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1929[i + 0]));
  }
  i1926.additiveMaterials = i1928
  var i1931 = i1927[2]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1931[i + 0]));
  }
  i1926.multiplyMaterials = i1930
  var i1933 = i1927[3]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1933[i + 0]));
  }
  i1926.screenMaterials = i1932
  i1926.requiresBlendModeMaterials = !!i1927[4]
  return i1926
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1936 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1937 = data
  i1936.pageName = i1937[0]
  request.r(i1937[1], i1937[2], 0, i1936, 'material')
  return i1936
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1940 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'atlasFile')
  var i1943 = i1941[2]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 2) {
  request.r(i1943[i + 0], i1943[i + 1], 2, i1942, '')
  }
  i1940.materials = i1942
  i1940.textureLoadingMode = i1941[3]
  request.r(i1941[4], i1941[5], 0, i1940, 'onDemandTextureLoader')
  return i1940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TMP_Settings' )
  var i1945 = data
  i1944.m_enableWordWrapping = !!i1945[0]
  i1944.m_enableKerning = !!i1945[1]
  i1944.m_enableExtraPadding = !!i1945[2]
  i1944.m_enableTintAllSprites = !!i1945[3]
  i1944.m_enableParseEscapeCharacters = !!i1945[4]
  i1944.m_EnableRaycastTarget = !!i1945[5]
  i1944.m_GetFontFeaturesAtRuntime = !!i1945[6]
  i1944.m_missingGlyphCharacter = i1945[7]
  i1944.m_warningsDisabled = !!i1945[8]
  request.r(i1945[9], i1945[10], 0, i1944, 'm_defaultFontAsset')
  i1944.m_defaultFontAssetPath = i1945[11]
  i1944.m_defaultFontSize = i1945[12]
  i1944.m_defaultAutoSizeMinRatio = i1945[13]
  i1944.m_defaultAutoSizeMaxRatio = i1945[14]
  i1944.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1945[15], i1945[16] )
  i1944.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1945[17], i1945[18] )
  i1944.m_autoSizeTextContainer = !!i1945[19]
  i1944.m_IsTextObjectScaleStatic = !!i1945[20]
  var i1947 = i1945[21]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 1, i1946, '')
  }
  i1944.m_fallbackFontAssets = i1946
  i1944.m_matchMaterialPreset = !!i1945[22]
  request.r(i1945[23], i1945[24], 0, i1944, 'm_defaultSpriteAsset')
  i1944.m_defaultSpriteAssetPath = i1945[25]
  i1944.m_enableEmojiSupport = !!i1945[26]
  i1944.m_MissingCharacterSpriteUnicode = i1945[27]
  i1944.m_defaultColorGradientPresetsPath = i1945[28]
  request.r(i1945[29], i1945[30], 0, i1944, 'm_defaultStyleSheet')
  i1944.m_StyleSheetsResourcePath = i1945[31]
  request.r(i1945[32], i1945[33], 0, i1944, 'm_leadingCharacters')
  request.r(i1945[34], i1945[35], 0, i1944, 'm_followingCharacters')
  i1944.m_UseModernHangulLineBreakingRules = !!i1945[36]
  return i1944
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1951 = data
  i1950.hashCode = i1951[0]
  request.r(i1951[1], i1951[2], 0, i1950, 'material')
  i1950.materialHashCode = i1951[3]
  request.r(i1951[4], i1951[5], 0, i1950, 'spriteSheet')
  var i1953 = i1951[6]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('TMPro.TMP_Sprite', i1953[i + 0]));
  }
  i1950.spriteInfoList = i1952
  var i1955 = i1951[7]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1950.fallbackSpriteAssets = i1954
  i1950.m_Version = i1951[8]
  i1950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1951[9], i1950.m_FaceInfo)
  var i1957 = i1951[10]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('TMPro.TMP_SpriteCharacter', i1957[i + 0]));
  }
  i1950.m_SpriteCharacterTable = i1956
  var i1959 = i1951[11]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.add(request.d('TMPro.TMP_SpriteGlyph', i1959[i + 0]));
  }
  i1950.m_SpriteGlyphTable = i1958
  return i1950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.hashCode = i1963[1]
  i1962.unicode = i1963[2]
  i1962.pivot = new pc.Vec2( i1963[3], i1963[4] )
  request.r(i1963[5], i1963[6], 0, i1962, 'sprite')
  i1962.id = i1963[7]
  i1962.x = i1963[8]
  i1962.y = i1963[9]
  i1962.width = i1963[10]
  i1962.height = i1963[11]
  i1962.xOffset = i1963[12]
  i1962.yOffset = i1963[13]
  i1962.xAdvance = i1963[14]
  i1962.scale = i1963[15]
  return i1962
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1967 = data
  i1966.m_FaceIndex = i1967[0]
  i1966.m_FamilyName = i1967[1]
  i1966.m_StyleName = i1967[2]
  i1966.m_PointSize = i1967[3]
  i1966.m_Scale = i1967[4]
  i1966.m_UnitsPerEM = i1967[5]
  i1966.m_LineHeight = i1967[6]
  i1966.m_AscentLine = i1967[7]
  i1966.m_CapLine = i1967[8]
  i1966.m_MeanLine = i1967[9]
  i1966.m_Baseline = i1967[10]
  i1966.m_DescentLine = i1967[11]
  i1966.m_SuperscriptOffset = i1967[12]
  i1966.m_SuperscriptSize = i1967[13]
  i1966.m_SubscriptOffset = i1967[14]
  i1966.m_SubscriptSize = i1967[15]
  i1966.m_UnderlineOffset = i1967[16]
  i1966.m_UnderlineThickness = i1967[17]
  i1966.m_StrikethroughOffset = i1967[18]
  i1966.m_StrikethroughThickness = i1967[19]
  i1966.m_TabWidth = i1967[20]
  return i1966
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1971 = data
  i1970.m_Name = i1971[0]
  i1970.m_HashCode = i1971[1]
  i1970.m_ElementType = i1971[2]
  i1970.m_Unicode = i1971[3]
  i1970.m_GlyphIndex = i1971[4]
  i1970.m_Scale = i1971[5]
  return i1970
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, 'sprite')
  i1974.m_Index = i1975[2]
  i1974.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1975[3], i1974.m_Metrics)
  i1974.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1975[4], i1974.m_GlyphRect)
  i1974.m_Scale = i1975[5]
  i1974.m_AtlasIndex = i1975[6]
  i1974.m_ClassDefinitionType = i1975[7]
  return i1974
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1977 = data
  i1976.m_Width = i1977[0]
  i1976.m_Height = i1977[1]
  i1976.m_HorizontalBearingX = i1977[2]
  i1976.m_HorizontalBearingY = i1977[3]
  i1976.m_HorizontalAdvance = i1977[4]
  return i1976
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1979 = data
  i1978.m_X = i1979[0]
  i1978.m_Y = i1979[1]
  i1978.m_Width = i1979[2]
  i1978.m_Height = i1979[3]
  return i1978
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1980 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.add(request.d('TMPro.TMP_Style', i1983[i + 0]));
  }
  i1980.m_StyleList = i1982
  return i1980
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_Style' )
  var i1987 = data
  i1986.m_Name = i1987[0]
  i1986.m_HashCode = i1987[1]
  i1986.m_OpeningDefinition = i1987[2]
  i1986.m_ClosingDefinition = i1987[3]
  i1986.m_OpeningTagArray = i1987[4]
  i1986.m_ClosingTagArray = i1987[5]
  i1986.m_OpeningTagUnicodeArray = i1987[6]
  i1986.m_ClosingTagUnicodeArray = i1987[7]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1989 = data
  var i1991 = i1989[0]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1991[i + 0]) );
  }
  i1988.files = i1990
  i1988.componentToPrefabIds = i1989[1]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1995 = data
  i1994.path = i1995[0]
  request.r(i1995[1], i1995[2], 0, i1994, 'unityObject')
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1999[i + 0]) );
  }
  i1996.scriptsExecutionOrder = i1998
  var i2001 = i1997[1]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2001[i + 0]) );
  }
  i1996.sortingLayers = i2000
  var i2003 = i1997[2]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2003[i + 0]) );
  }
  i1996.cullingLayers = i2002
  i1996.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1997[3], i1996.timeSettings)
  i1996.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1997[4], i1996.physicsSettings)
  i1996.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1997[5], i1996.physics2DSettings)
  i1996.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1997[6], i1996.qualitySettings)
  i1996.enableRealtimeShadows = !!i1997[7]
  i1996.enableAutoInstancing = !!i1997[8]
  i1996.enableDynamicBatching = !!i1997[9]
  i1996.lightmapEncodingQuality = i1997[10]
  i1996.desiredColorSpace = i1997[11]
  var i2005 = i1997[12]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( i2005[i + 0] );
  }
  i1996.allTags = i2004
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2009 = data
  i2008.name = i2009[0]
  i2008.value = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2013 = data
  i2012.id = i2013[0]
  i2012.name = i2013[1]
  i2012.value = i2013[2]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2017 = data
  i2016.id = i2017[0]
  i2016.name = i2017[1]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2019 = data
  i2018.fixedDeltaTime = i2019[0]
  i2018.maximumDeltaTime = i2019[1]
  i2018.timeScale = i2019[2]
  i2018.maximumParticleTimestep = i2019[3]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2021 = data
  i2020.gravity = new pc.Vec3( i2021[0], i2021[1], i2021[2] )
  i2020.defaultSolverIterations = i2021[3]
  i2020.bounceThreshold = i2021[4]
  i2020.autoSyncTransforms = !!i2021[5]
  i2020.autoSimulation = !!i2021[6]
  var i2023 = i2021[7]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2023[i + 0]) );
  }
  i2020.collisionMatrix = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.layerId = i2027[1]
  i2026.otherLayerId = i2027[2]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'material')
  i2028.gravity = new pc.Vec2( i2029[2], i2029[3] )
  i2028.positionIterations = i2029[4]
  i2028.velocityIterations = i2029[5]
  i2028.velocityThreshold = i2029[6]
  i2028.maxLinearCorrection = i2029[7]
  i2028.maxAngularCorrection = i2029[8]
  i2028.maxTranslationSpeed = i2029[9]
  i2028.maxRotationSpeed = i2029[10]
  i2028.baumgarteScale = i2029[11]
  i2028.baumgarteTOIScale = i2029[12]
  i2028.timeToSleep = i2029[13]
  i2028.linearSleepTolerance = i2029[14]
  i2028.angularSleepTolerance = i2029[15]
  i2028.defaultContactOffset = i2029[16]
  i2028.autoSimulation = !!i2029[17]
  i2028.queriesHitTriggers = !!i2029[18]
  i2028.queriesStartInColliders = !!i2029[19]
  i2028.callbacksOnDisable = !!i2029[20]
  i2028.reuseCollisionCallbacks = !!i2029[21]
  i2028.autoSyncTransforms = !!i2029[22]
  var i2031 = i2029[23]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2031[i + 0]) );
  }
  i2028.collisionMatrix = i2030
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2035 = data
  i2034.enabled = !!i2035[0]
  i2034.layerId = i2035[1]
  i2034.otherLayerId = i2035[2]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2039[i + 0]) );
  }
  i2036.qualityLevels = i2038
  var i2041 = i2037[1]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( i2041[i + 0] );
  }
  i2036.names = i2040
  i2036.shadows = i2037[2]
  i2036.anisotropicFiltering = i2037[3]
  i2036.antiAliasing = i2037[4]
  i2036.lodBias = i2037[5]
  i2036.shadowCascades = i2037[6]
  i2036.shadowDistance = i2037[7]
  i2036.shadowmaskMode = i2037[8]
  i2036.shadowProjection = i2037[9]
  i2036.shadowResolution = i2037[10]
  i2036.softParticles = !!i2037[11]
  i2036.softVegetation = !!i2037[12]
  i2036.activeColorSpace = i2037[13]
  i2036.desiredColorSpace = i2037[14]
  i2036.masterTextureLimit = i2037[15]
  i2036.maxQueuedFrames = i2037[16]
  i2036.particleRaycastBudget = i2037[17]
  i2036.pixelLightCount = i2037[18]
  i2036.realtimeReflectionProbes = !!i2037[19]
  i2036.shadowCascade2Split = i2037[20]
  i2036.shadowCascade4Split = new pc.Vec3( i2037[21], i2037[22], i2037[23] )
  i2036.streamingMipmapsActive = !!i2037[24]
  i2036.vSyncCount = i2037[25]
  i2036.asyncUploadBufferSize = i2037[26]
  i2036.asyncUploadTimeSlice = i2037[27]
  i2036.billboardsFaceCameraPosition = !!i2037[28]
  i2036.shadowNearPlaneOffset = i2037[29]
  i2036.streamingMipmapsMemoryBudget = i2037[30]
  i2036.maximumLODLevel = i2037[31]
  i2036.streamingMipmapsAddAllCameras = !!i2037[32]
  i2036.streamingMipmapsMaxLevelReduction = i2037[33]
  i2036.streamingMipmapsRenderersPerFrame = i2037[34]
  i2036.resolutionScalingFixedDPIFactor = i2037[35]
  i2036.streamingMipmapsMaxFileIORequests = i2037[36]
  i2036.currentQualityLevel = i2037[37]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2047 = data
  i2046.weight = i2047[0]
  i2046.vertices = i2047[1]
  i2046.normals = i2047[2]
  i2046.tangents = i2047[3]
  return i2046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[13],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[13],"82":[31],"83":[84],"85":[84],"23":[22],"15":[13],"86":[87],"88":[89],"90":[31,35],"91":[92],"93":[89],"94":[95],"96":[89],"97":[89],"98":[38],"99":[38],"100":[89],"101":[102],"103":[2],"104":[102],"105":[22],"106":[22],"26":[23],"28":[27,22],"107":[22],"25":[23],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[22],"117":[27,22],"118":[22],"119":[22],"120":[22],"121":[22],"29":[27,22],"122":[22],"123":[41],"124":[41],"42":[41],"125":[41],"126":[13],"127":[13],"128":[129],"130":[13],"131":[132],"133":[22],"134":[27,22],"32":[31],"92":[27,22],"135":[10,31],"89":[31],"37":[31,35],"136":[61],"137":[6],"34":[132],"138":[38],"139":[22],"140":[31,22],"141":[22,27],"142":[22],"143":[27,22],"144":[31],"145":[27,22],"146":[22],"147":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.Mesh","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Pulse","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "8.8";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "KingPin_EndCard3";

Deserializers.lunaAppID = "24841";

Deserializers.projectId = "7b9b35910aba8f3438b578cf9f26cb49";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1980";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4464";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e42c0a9f-dae6-4da6-82e2-fec0883923ea";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

