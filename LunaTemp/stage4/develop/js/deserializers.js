var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointSpring' )
  var i1495 = data
  i1494.spring = i1495[0]
  i1494.damper = i1495[1]
  i1494.targetPosition = i1495[2]
  return i1494
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointMotor' )
  var i1497 = data
  i1496.m_TargetVelocity = i1497[0]
  i1496.m_Force = i1497[1]
  i1496.m_FreeSpin = i1497[2]
  return i1496
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.JointLimits' )
  var i1499 = data
  i1498.m_Min = i1499[0]
  i1498.m_Max = i1499[1]
  i1498.m_Bounciness = i1499[2]
  i1498.m_BounceMinVelocity = i1499[3]
  i1498.m_ContactDistance = i1499[4]
  i1498.minBounce = i1499[5]
  i1498.maxBounce = i1499[6]
  return i1498
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.JointDrive' )
  var i1501 = data
  i1500.m_PositionSpring = i1501[0]
  i1500.m_PositionDamper = i1501[1]
  i1500.m_MaximumForce = i1501[2]
  i1500.m_UseAcceleration = i1501[3]
  return i1500
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1503 = data
  i1502.m_Spring = i1503[0]
  i1502.m_Damper = i1503[1]
  return i1502
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1505 = data
  i1504.m_Limit = i1505[0]
  i1504.m_Bounciness = i1505[1]
  i1504.m_ContactDistance = i1505[2]
  return i1504
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1507 = data
  i1506.m_ExtremumSlip = i1507[0]
  i1506.m_ExtremumValue = i1507[1]
  i1506.m_AsymptoteSlip = i1507[2]
  i1506.m_AsymptoteValue = i1507[3]
  i1506.m_Stiffness = i1507[4]
  return i1506
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1509 = data
  i1508.m_LowerAngle = i1509[0]
  i1508.m_UpperAngle = i1509[1]
  return i1508
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1511 = data
  i1510.m_MotorSpeed = i1511[0]
  i1510.m_MaximumMotorTorque = i1511[1]
  return i1510
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1513 = data
  i1512.m_DampingRatio = i1513[0]
  i1512.m_Frequency = i1513[1]
  i1512.m_Angle = i1513[2]
  return i1512
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1515 = data
  i1514.m_LowerTranslation = i1515[0]
  i1514.m_UpperTranslation = i1515[1]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1516 = root || new pc.UnityMaterial()
  var i1517 = data
  i1516.name = i1517[0]
  request.r(i1517[1], i1517[2], 0, i1516, 'shader')
  i1516.renderQueue = i1517[3]
  i1516.enableInstancing = !!i1517[4]
  var i1519 = i1517[5]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1519[i + 0]) );
  }
  i1516.floatParameters = i1518
  var i1521 = i1517[6]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1521[i + 0]) );
  }
  i1516.colorParameters = i1520
  var i1523 = i1517[7]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1523[i + 0]) );
  }
  i1516.vectorParameters = i1522
  var i1525 = i1517[8]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1525[i + 0]) );
  }
  i1516.textureParameters = i1524
  var i1527 = i1517[9]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1527[i + 0]) );
  }
  i1516.materialFlags = i1526
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1531 = data
  i1530.name = i1531[0]
  i1530.value = i1531[1]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.value = new pc.Color(i1535[1], i1535[2], i1535[3], i1535[4])
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.value = new pc.Vec4( i1539[1], i1539[2], i1539[3], i1539[4] )
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1543 = data
  i1542.name = i1543[0]
  request.r(i1543[1], i1543[2], 0, i1542, 'value')
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.enabled = !!i1547[1]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1549 = data
  i1548.name = i1549[0]
  i1548.width = i1549[1]
  i1548.height = i1549[2]
  i1548.mipmapCount = i1549[3]
  i1548.anisoLevel = i1549[4]
  i1548.filterMode = i1549[5]
  i1548.hdr = !!i1549[6]
  i1548.format = i1549[7]
  i1548.wrapMode = i1549[8]
  i1548.alphaIsTransparency = !!i1549[9]
  i1548.alphaSource = i1549[10]
  i1548.graphicsFormat = i1549[11]
  i1548.sRGBTexture = !!i1549[12]
  i1548.desiredColorSpace = i1549[13]
  i1548.wrapU = i1549[14]
  i1548.wrapV = i1549[15]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1551 = data
  i1550.position = new pc.Vec3( i1551[0], i1551[1], i1551[2] )
  i1550.scale = new pc.Vec3( i1551[3], i1551[4], i1551[5] )
  i1550.rotation = new pc.Quat(i1551[6], i1551[7], i1551[8], i1551[9])
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1553 = data
  i1552.enabled = !!i1553[0]
  request.r(i1553[1], i1553[2], 0, i1552, 'sharedMaterial')
  var i1555 = i1553[3]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1552.sharedMaterials = i1554
  i1552.receiveShadows = !!i1553[4]
  i1552.shadowCastingMode = i1553[5]
  i1552.sortingLayerID = i1553[6]
  i1552.sortingOrder = i1553[7]
  i1552.lightmapIndex = i1553[8]
  i1552.lightmapSceneIndex = i1553[9]
  i1552.lightmapScaleOffset = new pc.Vec4( i1553[10], i1553[11], i1553[12], i1553[13] )
  i1552.lightProbeUsage = i1553[14]
  i1552.reflectionProbeUsage = i1553[15]
  i1552.color = new pc.Color(i1553[16], i1553[17], i1553[18], i1553[19])
  request.r(i1553[20], i1553[21], 0, i1552, 'sprite')
  i1552.flipX = !!i1553[22]
  i1552.flipY = !!i1553[23]
  i1552.drawMode = i1553[24]
  i1552.size = new pc.Vec2( i1553[25], i1553[26] )
  i1552.tileMode = i1553[27]
  i1552.adaptiveModeThreshold = i1553[28]
  i1552.maskInteraction = i1553[29]
  i1552.spriteSortPoint = i1553[30]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1559 = data
  i1558.usedByComposite = !!i1559[0]
  i1558.autoTiling = !!i1559[1]
  i1558.size = new pc.Vec2( i1559[2], i1559[3] )
  i1558.edgeRadius = i1559[4]
  i1558.enabled = !!i1559[5]
  i1558.isTrigger = !!i1559[6]
  i1558.usedByEffector = !!i1559[7]
  i1558.density = i1559[8]
  i1558.offset = new pc.Vec2( i1559[9], i1559[10] )
  request.r(i1559[11], i1559[12], 0, i1558, 'material')
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1561 = data
  i1560.bodyType = i1561[0]
  request.r(i1561[1], i1561[2], 0, i1560, 'material')
  i1560.simulated = !!i1561[3]
  i1560.useAutoMass = !!i1561[4]
  i1560.mass = i1561[5]
  i1560.drag = i1561[6]
  i1560.angularDrag = i1561[7]
  i1560.gravityScale = i1561[8]
  i1560.collisionDetectionMode = i1561[9]
  i1560.sleepMode = i1561[10]
  i1560.constraints = i1561[11]
  return i1560
}

Deserializers["Pin"] = function (request, data, root) {
  var i1562 = root || request.c( 'Pin' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'head')
  request.r(i1563[2], i1563[3], 0, i1562, 'end')
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.tagId = i1565[1]
  i1564.enabled = !!i1565[2]
  i1564.isStatic = !!i1565[3]
  i1564.layer = i1565[4]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1567 = data
  i1566.radius = i1567[0]
  i1566.enabled = !!i1567[1]
  i1566.isTrigger = !!i1567[2]
  i1566.usedByEffector = !!i1567[3]
  i1566.density = i1567[4]
  i1566.offset = new pc.Vec2( i1567[5], i1567[6] )
  request.r(i1567[7], i1567[8], 0, i1566, 'material')
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'animatorController')
  request.r(i1569[2], i1569[3], 0, i1568, 'avatar')
  i1568.updateMode = i1569[4]
  i1568.hasTransformHierarchy = !!i1569[5]
  i1568.applyRootMotion = !!i1569[6]
  var i1571 = i1569[7]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 2, i1570, '')
  }
  i1568.humanBones = i1570
  i1568.enabled = !!i1569[8]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1575 = data
  i1574.name = i1575[0]
  i1574.halfPrecision = !!i1575[1]
  i1574.useUInt32IndexFormat = !!i1575[2]
  i1574.vertexCount = i1575[3]
  i1574.aabb = i1575[4]
  var i1577 = i1575[5]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( !!i1577[i + 0] );
  }
  i1574.streams = i1576
  i1574.vertices = i1575[6]
  var i1579 = i1575[7]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1579[i + 0]) );
  }
  i1574.subMeshes = i1578
  var i1581 = i1575[8]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 16) {
    i1580.push( new pc.Mat4().setData(i1581[i + 0], i1581[i + 1], i1581[i + 2], i1581[i + 3],  i1581[i + 4], i1581[i + 5], i1581[i + 6], i1581[i + 7],  i1581[i + 8], i1581[i + 9], i1581[i + 10], i1581[i + 11],  i1581[i + 12], i1581[i + 13], i1581[i + 14], i1581[i + 15]) );
  }
  i1574.bindposes = i1580
  var i1583 = i1575[9]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1583[i + 0]) );
  }
  i1574.blendShapes = i1582
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1589 = data
  i1588.triangles = i1589[0]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1595 = data
  i1594.name = i1595[0]
  var i1597 = i1595[1]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1597[i + 0]) );
  }
  i1594.frames = i1596
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1599 = data
  i1598.name = i1599[0]
  i1598.index = i1599[1]
  i1598.startup = !!i1599[2]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.aspect = i1601[1]
  i1600.orthographic = !!i1601[2]
  i1600.orthographicSize = i1601[3]
  i1600.backgroundColor = new pc.Color(i1601[4], i1601[5], i1601[6], i1601[7])
  i1600.nearClipPlane = i1601[8]
  i1600.farClipPlane = i1601[9]
  i1600.fieldOfView = i1601[10]
  i1600.depth = i1601[11]
  i1600.clearFlags = i1601[12]
  i1600.cullingMask = i1601[13]
  i1600.rect = i1601[14]
  request.r(i1601[15], i1601[16], 0, i1600, 'targetTexture')
  i1600.usePhysicalProperties = !!i1601[17]
  i1600.focalLength = i1601[18]
  i1600.sensorSize = new pc.Vec2( i1601[19], i1601[20] )
  i1600.lensShift = new pc.Vec2( i1601[21], i1601[22] )
  i1600.gateFit = i1601[23]
  i1600.commandBufferCount = i1601[24]
  i1600.cameraType = i1601[25]
  return i1600
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i1602 = root || request.c( 'ViewportHandler' )
  var i1603 = data
  i1602.wireColor = new pc.Color(i1603[0], i1603[1], i1603[2], i1603[3])
  i1602.UnitsSize = i1603[4]
  i1602.constraint = i1603[5]
  request.r(i1603[6], i1603[7], 0, i1602, 'camera')
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'clip')
  request.r(i1605[2], i1605[3], 0, i1604, 'outputAudioMixerGroup')
  i1604.playOnAwake = !!i1605[4]
  i1604.loop = !!i1605[5]
  i1604.time = i1605[6]
  i1604.volume = i1605[7]
  i1604.pitch = i1605[8]
  i1604.enabled = !!i1605[9]
  return i1604
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i1606 = root || request.c( 'InputReceiver' )
  var i1607 = data
  return i1606
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i1608 = root || request.c( 'CameraAnchor' )
  var i1609 = data
  i1608.anchorType = i1609[0]
  i1608.anchorOffset = new pc.Vec3( i1609[1], i1609[2], i1609[3] )
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1611 = data
  i1610.enabled = !!i1611[0]
  i1610.isTrigger = !!i1611[1]
  i1610.usedByEffector = !!i1611[2]
  i1610.density = i1611[3]
  i1610.offset = new pc.Vec2( i1611[4], i1611[5] )
  request.r(i1611[6], i1611[7], 0, i1610, 'material')
  i1610.edgeRadius = i1611[8]
  var i1613 = i1611[9]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 2) {
    i1612.push( new pc.Vec2( i1613[i + 0], i1613[i + 1] ) );
  }
  i1610.points = i1612
  i1610.useAdjacentStartPoint = !!i1611[10]
  i1610.adjacentStartPoint = new pc.Vec2( i1611[11], i1611[12] )
  i1610.useAdjacentEndPoint = !!i1611[13]
  i1610.adjacentEndPoint = new pc.Vec2( i1611[14], i1611[15] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1617 = data
  i1616.enabled = !!i1617[0]
  i1616.isTrigger = !!i1617[1]
  i1616.usedByEffector = !!i1617[2]
  i1616.density = i1617[3]
  i1616.offset = new pc.Vec2( i1617[4], i1617[5] )
  request.r(i1617[6], i1617[7], 0, i1616, 'material')
  i1616.usedByComposite = !!i1617[8]
  i1616.autoTiling = !!i1617[9]
  var i1619 = i1617[10]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
  var i1621 = i1619[i + 0]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 2) {
    i1620.push( new pc.Vec2( i1621[i + 0], i1621[i + 1] ) );
  }
    i1618.push( i1620 );
  }
  i1616.points = i1618
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1627 = data
  i1626.pivot = new pc.Vec2( i1627[0], i1627[1] )
  i1626.anchorMin = new pc.Vec2( i1627[2], i1627[3] )
  i1626.anchorMax = new pc.Vec2( i1627[4], i1627[5] )
  i1626.sizeDelta = new pc.Vec2( i1627[6], i1627[7] )
  i1626.anchoredPosition3D = new pc.Vec3( i1627[8], i1627[9], i1627[10] )
  i1626.rotation = new pc.Quat(i1627[11], i1627[12], i1627[13], i1627[14])
  i1626.scale = new pc.Vec3( i1627[15], i1627[16], i1627[17] )
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.planeDistance = i1629[1]
  i1628.referencePixelsPerUnit = i1629[2]
  i1628.isFallbackOverlay = !!i1629[3]
  i1628.renderMode = i1629[4]
  i1628.renderOrder = i1629[5]
  i1628.sortingLayerName = i1629[6]
  i1628.sortingOrder = i1629[7]
  i1628.scaleFactor = i1629[8]
  request.r(i1629[9], i1629[10], 0, i1628, 'worldCamera')
  i1628.overrideSorting = !!i1629[11]
  i1628.pixelPerfect = !!i1629[12]
  i1628.targetDisplay = i1629[13]
  i1628.overridePixelPerfect = !!i1629[14]
  return i1628
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1631 = data
  i1630.m_UiScaleMode = i1631[0]
  i1630.m_ReferencePixelsPerUnit = i1631[1]
  i1630.m_ScaleFactor = i1631[2]
  i1630.m_ReferenceResolution = new pc.Vec2( i1631[3], i1631[4] )
  i1630.m_ScreenMatchMode = i1631[5]
  i1630.m_MatchWidthOrHeight = i1631[6]
  i1630.m_PhysicalUnit = i1631[7]
  i1630.m_FallbackScreenDPI = i1631[8]
  i1630.m_DefaultSpriteDPI = i1631[9]
  i1630.m_DynamicPixelsPerUnit = i1631[10]
  i1630.m_PresetInfoIsWorld = !!i1631[11]
  return i1630
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1633 = data
  i1632.m_IgnoreReversedGraphics = !!i1633[0]
  i1632.m_BlockingObjects = i1633[1]
  i1632.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1633[2] )
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1635 = data
  i1634.cullTransparentMesh = !!i1635[0]
  return i1634
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.Image' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'm_Sprite')
  i1636.m_Type = i1637[2]
  i1636.m_PreserveAspect = !!i1637[3]
  i1636.m_FillCenter = !!i1637[4]
  i1636.m_FillMethod = i1637[5]
  i1636.m_FillAmount = i1637[6]
  i1636.m_FillClockwise = !!i1637[7]
  i1636.m_FillOrigin = i1637[8]
  i1636.m_UseSpriteMesh = !!i1637[9]
  i1636.m_PixelsPerUnitMultiplier = i1637[10]
  request.r(i1637[11], i1637[12], 0, i1636, 'm_Material')
  i1636.m_Maskable = !!i1637[13]
  i1636.m_Color = new pc.Color(i1637[14], i1637[15], i1637[16], i1637[17])
  i1636.m_RaycastTarget = !!i1637[18]
  i1636.m_RaycastPadding = new pc.Vec4( i1637[19], i1637[20], i1637[21], i1637[22] )
  return i1636
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.Text' )
  var i1639 = data
  i1638.m_FontData = request.d('UnityEngine.UI.FontData', i1639[0], i1638.m_FontData)
  i1638.m_Text = i1639[1]
  request.r(i1639[2], i1639[3], 0, i1638, 'm_Material')
  i1638.m_Maskable = !!i1639[4]
  i1638.m_Color = new pc.Color(i1639[5], i1639[6], i1639[7], i1639[8])
  i1638.m_RaycastTarget = !!i1639[9]
  i1638.m_RaycastPadding = new pc.Vec4( i1639[10], i1639[11], i1639[12], i1639[13] )
  return i1638
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'm_Font')
  i1640.m_FontSize = i1641[2]
  i1640.m_FontStyle = i1641[3]
  i1640.m_BestFit = !!i1641[4]
  i1640.m_MinSize = i1641[5]
  i1640.m_MaxSize = i1641[6]
  i1640.m_Alignment = i1641[7]
  i1640.m_AlignByGeometry = !!i1641[8]
  i1640.m_RichText = !!i1641[9]
  i1640.m_HorizontalOverflow = i1641[10]
  i1640.m_VerticalOverflow = i1641[11]
  i1640.m_LineSpacing = i1641[12]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'additionalVertexStreams')
  i1642.enabled = !!i1643[2]
  request.r(i1643[3], i1643[4], 0, i1642, 'sharedMaterial')
  var i1645 = i1643[5]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 2, i1644, '')
  }
  i1642.sharedMaterials = i1644
  i1642.receiveShadows = !!i1643[6]
  i1642.shadowCastingMode = i1643[7]
  i1642.sortingLayerID = i1643[8]
  i1642.sortingOrder = i1643[9]
  i1642.lightmapIndex = i1643[10]
  i1642.lightmapSceneIndex = i1643[11]
  i1642.lightmapScaleOffset = new pc.Vec4( i1643[12], i1643[13], i1643[14], i1643[15] )
  i1642.lightProbeUsage = i1643[16]
  i1642.reflectionProbeUsage = i1643[17]
  return i1642
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1646 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1647 = data
  i1646.loop = !!i1647[0]
  i1646.timeScale = i1647[1]
  request.r(i1647[2], i1647[3], 0, i1646, 'skeletonDataAsset')
  i1646.initialSkinName = i1647[4]
  i1646.fixPrefabOverrideViaMeshFilter = i1647[5]
  i1646.initialFlipX = !!i1647[6]
  i1646.initialFlipY = !!i1647[7]
  i1646.updateWhenInvisible = i1647[8]
  i1646.zSpacing = i1647[9]
  i1646.useClipping = !!i1647[10]
  i1646.immutableTriangles = !!i1647[11]
  i1646.pmaVertexColors = !!i1647[12]
  i1646.clearStateOnDisable = !!i1647[13]
  i1646.tintBlack = !!i1647[14]
  i1646.singleSubmesh = !!i1647[15]
  i1646.fixDrawOrder = !!i1647[16]
  i1646.addNormals = !!i1647[17]
  i1646.calculateTangents = !!i1647[18]
  i1646.maskInteraction = i1647[19]
  i1646.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1647[20], i1646.maskMaterials)
  i1646.disableRenderingOnOverride = !!i1647[21]
  i1646.updateTiming = i1647[22]
  i1646.unscaledTime = !!i1647[23]
  i1646._animationName = i1647[24]
  var i1649 = i1647[25]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( i1649[i + 0] );
  }
  i1646.separatorSlotNames = i1648
  return i1646
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1650 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 2, i1652, '')
  }
  i1650.materialsMaskDisabled = i1652
  var i1655 = i1651[1]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 2, i1654, '')
  }
  i1650.materialsInsideMask = i1654
  var i1657 = i1651[2]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1650.materialsOutsideMask = i1656
  return i1650
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i1660 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'boneRoot')
  i1660.flipBy180DegreeRotation = !!i1661[2]
  request.r(i1661[3], i1661[4], 0, i1660, 'skeletonRenderer')
  request.r(i1661[5], i1661[6], 0, i1660, 'skeletonGraphic')
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'sharedMesh')
  return i1662
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i1664 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i1665 = data
  i1664.copyPropertyBlock = !!i1665[0]
  i1664.copyMeshRendererFlags = !!i1665[1]
  var i1667 = i1665[2]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i1667.length; i += 2) {
  request.r(i1667[i + 0], i1667[i + 1], 1, i1666, '')
  }
  i1664.partsRenderers = i1666
  request.r(i1665[3], i1665[4], 0, i1664, 'skeletonRenderer')
  return i1664
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i1670 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i1671 = data
  i1670.boneName = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'parentReference')
  i1670.mode = i1671[3]
  i1670.position = !!i1671[4]
  i1670.rotation = !!i1671[5]
  i1670.scale = !!i1671[6]
  i1670.zPosition = !!i1671[7]
  i1670.overrideAlpha = i1671[8]
  request.r(i1671[9], i1671[10], 0, i1670, 'hierarchy')
  return i1670
}

Deserializers["Bag"] = function (request, data, root) {
  var i1672 = root || request.c( 'Bag' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'model')
  request.r(i1673[2], i1673[3], 0, i1672, 'idlePosition')
  request.r(i1673[4], i1673[5], 0, i1672, 'winPosition')
  request.r(i1673[6], i1673[7], 0, i1672, 'losePosition')
  return i1672
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i1674 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i1675 = data
  return i1674
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_FirstSelected')
  i1676.m_sendNavigationEvents = !!i1677[2]
  i1676.m_DragThreshold = i1677[3]
  return i1676
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1679 = data
  i1678.m_HorizontalAxis = i1679[0]
  i1678.m_VerticalAxis = i1679[1]
  i1678.m_SubmitButton = i1679[2]
  i1678.m_CancelButton = i1679[3]
  i1678.m_InputActionsPerSecond = i1679[4]
  i1678.m_RepeatDelay = i1679[5]
  i1678.m_ForceModuleActive = !!i1679[6]
  i1678.m_SendPointerHoverToParent = !!i1679[7]
  return i1678
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i1680 = root || request.c( 'SoundClick' )
  var i1681 = data
  i1680.loopTime = i1681[0]
  request.r(i1681[1], i1681[2], 0, i1680, 'sound')
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1683 = data
  i1682.ambientIntensity = i1683[0]
  i1682.reflectionIntensity = i1683[1]
  i1682.ambientMode = i1683[2]
  i1682.ambientLight = new pc.Color(i1683[3], i1683[4], i1683[5], i1683[6])
  i1682.ambientSkyColor = new pc.Color(i1683[7], i1683[8], i1683[9], i1683[10])
  i1682.ambientGroundColor = new pc.Color(i1683[11], i1683[12], i1683[13], i1683[14])
  i1682.ambientEquatorColor = new pc.Color(i1683[15], i1683[16], i1683[17], i1683[18])
  i1682.fogColor = new pc.Color(i1683[19], i1683[20], i1683[21], i1683[22])
  i1682.fogEndDistance = i1683[23]
  i1682.fogStartDistance = i1683[24]
  i1682.fogDensity = i1683[25]
  i1682.fog = !!i1683[26]
  request.r(i1683[27], i1683[28], 0, i1682, 'skybox')
  i1682.fogMode = i1683[29]
  var i1685 = i1683[30]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1685[i + 0]) );
  }
  i1682.lightmaps = i1684
  i1682.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1683[31], i1682.lightProbes)
  i1682.lightmapsMode = i1683[32]
  i1682.mixedBakeMode = i1683[33]
  i1682.environmentLightingMode = i1683[34]
  i1682.ambientProbe = new pc.SphericalHarmonicsL2(i1683[35])
  i1682.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1683[36])
  i1682.useReferenceAmbientProbe = !!i1683[37]
  request.r(i1683[38], i1683[39], 0, i1682, 'customReflection')
  request.r(i1683[40], i1683[41], 0, i1682, 'defaultReflection')
  i1682.defaultReflectionMode = i1683[42]
  i1682.defaultReflectionResolution = i1683[43]
  i1682.sunLightObjectId = i1683[44]
  i1682.pixelLightCount = i1683[45]
  i1682.defaultReflectionHDR = !!i1683[46]
  i1682.hasLightDataAsset = !!i1683[47]
  i1682.hasManualGenerate = !!i1683[48]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'lightmapColor')
  request.r(i1689[2], i1689[3], 0, i1688, 'lightmapDirection')
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1690 = root || new UnityEngine.LightProbes()
  var i1691 = data
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1699 = data
  var i1701 = i1699[0]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1701[i + 0]));
  }
  i1698.ShaderCompilationErrors = i1700
  i1698.name = i1699[1]
  i1698.guid = i1699[2]
  var i1703 = i1699[3]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1698.shaderDefinedKeywords = i1702
  var i1705 = i1699[4]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1705[i + 0]) );
  }
  i1698.passes = i1704
  var i1707 = i1699[5]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1707[i + 0]) );
  }
  i1698.usePasses = i1706
  var i1709 = i1699[6]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1709[i + 0]) );
  }
  i1698.defaultParameterValues = i1708
  request.r(i1699[7], i1699[8], 0, i1698, 'unityFallbackShader')
  i1698.readDepth = !!i1699[9]
  i1698.isCreatedByShaderGraph = !!i1699[10]
  i1698.compiled = !!i1699[11]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1713 = data
  i1712.shaderName = i1713[0]
  i1712.errorMessage = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1716 = root || new pc.UnityShaderPass()
  var i1717 = data
  i1716.id = i1717[0]
  i1716.subShaderIndex = i1717[1]
  i1716.name = i1717[2]
  i1716.passType = i1717[3]
  i1716.grabPassTextureName = i1717[4]
  i1716.usePass = !!i1717[5]
  i1716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[6], i1716.zTest)
  i1716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[7], i1716.zWrite)
  i1716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[8], i1716.culling)
  i1716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[9], i1716.blending)
  i1716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[10], i1716.alphaBlending)
  i1716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[11], i1716.colorWriteMask)
  i1716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[12], i1716.offsetUnits)
  i1716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[13], i1716.offsetFactor)
  i1716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[14], i1716.stencilRef)
  i1716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[15], i1716.stencilReadMask)
  i1716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[16], i1716.stencilWriteMask)
  i1716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[17], i1716.stencilOp)
  i1716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[18], i1716.stencilOpFront)
  i1716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[19], i1716.stencilOpBack)
  var i1719 = i1717[20]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1719[i + 0]) );
  }
  i1716.tags = i1718
  var i1721 = i1717[21]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( i1721[i + 0] );
  }
  i1716.passDefinedKeywords = i1720
  var i1723 = i1717[22]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1723[i + 0]) );
  }
  i1716.passDefinedKeywordGroups = i1722
  var i1725 = i1717[23]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1725[i + 0]) );
  }
  i1716.variants = i1724
  var i1727 = i1717[24]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1727[i + 0]) );
  }
  i1716.excludedVariants = i1726
  i1716.hasDepthReader = !!i1717[25]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1729 = data
  i1728.val = i1729[0]
  i1728.name = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1731 = data
  i1730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[0], i1730.src)
  i1730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[1], i1730.dst)
  i1730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[2], i1730.op)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1733 = data
  i1732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[0], i1732.pass)
  i1732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[1], i1732.fail)
  i1732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[2], i1732.zFail)
  i1732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[3], i1732.comp)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( i1743[i + 0] );
  }
  i1740.keywords = i1742
  i1740.hasDiscard = !!i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1747 = data
  i1746.passId = i1747[0]
  i1746.subShaderIndex = i1747[1]
  var i1749 = i1747[2]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1746.keywords = i1748
  i1746.vertexProgram = i1747[3]
  i1746.fragmentProgram = i1747[4]
  i1746.exportedForWebGl2 = !!i1747[5]
  i1746.readDepth = !!i1747[6]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'shader')
  i1752.pass = i1753[2]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1757 = data
  i1756.name = i1757[0]
  i1756.type = i1757[1]
  i1756.value = new pc.Vec4( i1757[2], i1757[3], i1757[4], i1757[5] )
  i1756.textureValue = i1757[6]
  i1756.shaderPropertyFlag = i1757[7]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1759 = data
  i1758.name = i1759[0]
  request.r(i1759[1], i1759[2], 0, i1758, 'texture')
  i1758.aabb = i1759[3]
  i1758.vertices = i1759[4]
  i1758.triangles = i1759[5]
  i1758.textureRect = UnityEngine.Rect.MinMaxRect(i1759[6], i1759[7], i1759[8], i1759[9])
  i1758.packedRect = UnityEngine.Rect.MinMaxRect(i1759[10], i1759[11], i1759[12], i1759[13])
  i1758.border = new pc.Vec4( i1759[14], i1759[15], i1759[16], i1759[17] )
  i1758.transparency = i1759[18]
  i1758.bounds = i1759[19]
  i1758.pixelsPerUnit = i1759[20]
  i1758.textureWidth = i1759[21]
  i1758.textureHeight = i1759[22]
  i1758.nativeSize = new pc.Vec2( i1759[23], i1759[24] )
  i1758.pivot = new pc.Vec2( i1759[25], i1759[26] )
  i1758.textureRectOffset = new pc.Vec2( i1759[27], i1759[28] )
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1761 = data
  i1760.name = i1761[0]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.wrapMode = i1763[1]
  i1762.isLooping = !!i1763[2]
  i1762.length = i1763[3]
  var i1765 = i1763[4]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1765[i + 0]) );
  }
  i1762.curves = i1764
  var i1767 = i1763[5]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1767[i + 0]) );
  }
  i1762.events = i1766
  i1762.halfPrecision = !!i1763[6]
  i1762._frameRate = i1763[7]
  i1762.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1763[8], i1762.localBounds)
  i1762.hasMuscleCurves = !!i1763[9]
  var i1769 = i1763[10]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( i1769[i + 0] );
  }
  i1762.clipMuscleConstant = i1768
  i1762.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1763[11], i1762.clipBindingConstant)
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1773 = data
  i1772.path = i1773[0]
  i1772.hash = i1773[1]
  i1772.componentType = i1773[2]
  i1772.property = i1773[3]
  i1772.keys = i1773[4]
  var i1775 = i1773[5]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1775[i + 0]) );
  }
  i1772.objectReferenceKeys = i1774
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1779 = data
  i1778.time = i1779[0]
  request.r(i1779[1], i1779[2], 0, i1778, 'value')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1783 = data
  i1782.functionName = i1783[0]
  i1782.floatParameter = i1783[1]
  i1782.intParameter = i1783[2]
  i1782.stringParameter = i1783[3]
  request.r(i1783[4], i1783[5], 0, i1782, 'objectReferenceParameter')
  i1782.time = i1783[6]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1785 = data
  i1784.center = new pc.Vec3( i1785[0], i1785[1], i1785[2] )
  i1784.extends = new pc.Vec3( i1785[3], i1785[4], i1785[5] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1788.genericBindings = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.pptrCurveMapping = i1792
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.ascent = i1795[1]
  i1794.originalLineHeight = i1795[2]
  i1794.fontSize = i1795[3]
  var i1797 = i1795[4]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1797[i + 0]) );
  }
  i1794.characterInfo = i1796
  request.r(i1795[5], i1795[6], 0, i1794, 'texture')
  i1794.originalFontSize = i1795[7]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1801 = data
  i1800.index = i1801[0]
  i1800.advance = i1801[1]
  i1800.bearing = i1801[2]
  i1800.glyphWidth = i1801[3]
  i1800.glyphHeight = i1801[4]
  i1800.minX = i1801[5]
  i1800.maxX = i1801[6]
  i1800.minY = i1801[7]
  i1800.maxY = i1801[8]
  i1800.uvBottomLeftX = i1801[9]
  i1800.uvBottomLeftY = i1801[10]
  i1800.uvBottomRightX = i1801[11]
  i1800.uvBottomRightY = i1801[12]
  i1800.uvTopLeftX = i1801[13]
  i1800.uvTopLeftY = i1801[14]
  i1800.uvTopRightX = i1801[15]
  i1800.uvTopRightY = i1801[16]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1803 = data
  i1802.name = i1803[0]
  var i1805 = i1803[1]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1805[i + 0]) );
  }
  i1802.layers = i1804
  var i1807 = i1803[2]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1807[i + 0]) );
  }
  i1802.parameters = i1806
  i1802.animationClips = i1803[3]
  i1802.avatarUnsupported = i1803[4]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.defaultWeight = i1811[1]
  i1810.blendingMode = i1811[2]
  i1810.avatarMask = i1811[3]
  i1810.syncedLayerIndex = i1811[4]
  i1810.syncedLayerAffectsTiming = !!i1811[5]
  i1810.syncedLayers = i1811[6]
  i1810.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1811[7], i1810.stateMachine)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1813 = data
  i1812.id = i1813[0]
  i1812.name = i1813[1]
  i1812.path = i1813[2]
  var i1815 = i1813[3]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1815[i + 0]) );
  }
  i1812.states = i1814
  var i1817 = i1813[4]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1817[i + 0]) );
  }
  i1812.machines = i1816
  var i1819 = i1813[5]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1819[i + 0]) );
  }
  i1812.entryStateTransitions = i1818
  var i1821 = i1813[6]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1821[i + 0]) );
  }
  i1812.exitStateTransitions = i1820
  var i1823 = i1813[7]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1823[i + 0]) );
  }
  i1812.anyStateTransitions = i1822
  i1812.defaultStateId = i1813[8]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1827 = data
  i1826.id = i1827[0]
  i1826.name = i1827[1]
  i1826.cycleOffset = i1827[2]
  i1826.cycleOffsetParameter = i1827[3]
  i1826.cycleOffsetParameterActive = !!i1827[4]
  i1826.mirror = !!i1827[5]
  i1826.mirrorParameter = i1827[6]
  i1826.mirrorParameterActive = !!i1827[7]
  i1826.motionId = i1827[8]
  i1826.nameHash = i1827[9]
  i1826.fullPathHash = i1827[10]
  i1826.speed = i1827[11]
  i1826.speedParameter = i1827[12]
  i1826.speedParameterActive = !!i1827[13]
  i1826.tag = i1827[14]
  i1826.tagHash = i1827[15]
  i1826.writeDefaultValues = !!i1827[16]
  var i1829 = i1827[17]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1826.behaviours = i1828
  var i1831 = i1827[18]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1831[i + 0]) );
  }
  i1826.transitions = i1830
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1837 = data
  i1836.fullPath = i1837[0]
  i1836.canTransitionToSelf = !!i1837[1]
  i1836.duration = i1837[2]
  i1836.exitTime = i1837[3]
  i1836.hasExitTime = !!i1837[4]
  i1836.hasFixedDuration = !!i1837[5]
  i1836.interruptionSource = i1837[6]
  i1836.offset = i1837[7]
  i1836.orderedInterruption = !!i1837[8]
  i1836.destinationStateId = i1837[9]
  i1836.isExit = !!i1837[10]
  i1836.mute = !!i1837[11]
  i1836.solo = !!i1837[12]
  var i1839 = i1837[13]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1839[i + 0]) );
  }
  i1836.conditions = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1845 = data
  i1844.destinationStateId = i1845[0]
  i1844.isExit = !!i1845[1]
  i1844.mute = !!i1845[2]
  i1844.solo = !!i1845[3]
  var i1847 = i1845[4]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1847[i + 0]) );
  }
  i1844.conditions = i1846
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1851 = data
  i1850.mode = i1851[0]
  i1850.parameter = i1851[1]
  i1850.threshold = i1851[2]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1855 = data
  i1854.defaultBool = !!i1855[0]
  i1854.defaultFloat = i1855[1]
  i1854.defaultInt = i1855[2]
  i1854.name = i1855[3]
  i1854.nameHash = i1855[4]
  i1854.type = i1855[5]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.bytes64 = i1857[1]
  i1856.data = i1857[2]
  return i1856
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1858 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.atlasAssets = i1860
  i1858.scale = i1859[1]
  request.r(i1859[2], i1859[3], 0, i1858, 'skeletonJSON')
  i1858.isUpgradingBlendModeMaterials = !!i1859[4]
  i1858.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1859[5], i1858.blendModeMaterials)
  var i1863 = i1859[6]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 1, i1862, '')
  }
  i1858.skeletonDataModifiers = i1862
  var i1865 = i1859[7]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( i1865[i + 0] );
  }
  i1858.fromAnimation = i1864
  var i1867 = i1859[8]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( i1867[i + 0] );
  }
  i1858.toAnimation = i1866
  i1858.duration = i1859[9]
  i1858.defaultMix = i1859[10]
  request.r(i1859[11], i1859[12], 0, i1858, 'controller')
  return i1858
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1870 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1871 = data
  i1870.applyAdditiveMaterial = !!i1871[0]
  var i1873 = i1871[1]
  var i1872 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1873[i + 0]));
  }
  i1870.additiveMaterials = i1872
  var i1875 = i1871[2]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1875[i + 0]));
  }
  i1870.multiplyMaterials = i1874
  var i1877 = i1871[3]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1877[i + 0]));
  }
  i1870.screenMaterials = i1876
  i1870.requiresBlendModeMaterials = !!i1871[4]
  return i1870
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1880 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1881 = data
  i1880.pageName = i1881[0]
  request.r(i1881[1], i1881[2], 0, i1880, 'material')
  return i1880
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1884 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'atlasFile')
  var i1887 = i1885[2]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.materials = i1886
  i1884.textureLoadingMode = i1885[3]
  request.r(i1885[4], i1885[5], 0, i1884, 'onDemandTextureLoader')
  return i1884
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1888 = root || request.c( 'TMPro.TMP_Settings' )
  var i1889 = data
  i1888.m_enableWordWrapping = !!i1889[0]
  i1888.m_enableKerning = !!i1889[1]
  i1888.m_enableExtraPadding = !!i1889[2]
  i1888.m_enableTintAllSprites = !!i1889[3]
  i1888.m_enableParseEscapeCharacters = !!i1889[4]
  i1888.m_EnableRaycastTarget = !!i1889[5]
  i1888.m_GetFontFeaturesAtRuntime = !!i1889[6]
  i1888.m_missingGlyphCharacter = i1889[7]
  i1888.m_warningsDisabled = !!i1889[8]
  request.r(i1889[9], i1889[10], 0, i1888, 'm_defaultFontAsset')
  i1888.m_defaultFontAssetPath = i1889[11]
  i1888.m_defaultFontSize = i1889[12]
  i1888.m_defaultAutoSizeMinRatio = i1889[13]
  i1888.m_defaultAutoSizeMaxRatio = i1889[14]
  i1888.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1889[15], i1889[16] )
  i1888.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1889[17], i1889[18] )
  i1888.m_autoSizeTextContainer = !!i1889[19]
  i1888.m_IsTextObjectScaleStatic = !!i1889[20]
  var i1891 = i1889[21]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 1, i1890, '')
  }
  i1888.m_fallbackFontAssets = i1890
  i1888.m_matchMaterialPreset = !!i1889[22]
  request.r(i1889[23], i1889[24], 0, i1888, 'm_defaultSpriteAsset')
  i1888.m_defaultSpriteAssetPath = i1889[25]
  i1888.m_enableEmojiSupport = !!i1889[26]
  i1888.m_MissingCharacterSpriteUnicode = i1889[27]
  i1888.m_defaultColorGradientPresetsPath = i1889[28]
  request.r(i1889[29], i1889[30], 0, i1888, 'm_defaultStyleSheet')
  i1888.m_StyleSheetsResourcePath = i1889[31]
  request.r(i1889[32], i1889[33], 0, i1888, 'm_leadingCharacters')
  request.r(i1889[34], i1889[35], 0, i1888, 'm_followingCharacters')
  i1888.m_UseModernHangulLineBreakingRules = !!i1889[36]
  return i1888
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1894 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1895 = data
  i1894.hashCode = i1895[0]
  request.r(i1895[1], i1895[2], 0, i1894, 'material')
  i1894.materialHashCode = i1895[3]
  request.r(i1895[4], i1895[5], 0, i1894, 'spriteSheet')
  var i1897 = i1895[6]
  var i1896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.add(request.d('TMPro.TMP_Sprite', i1897[i + 0]));
  }
  i1894.spriteInfoList = i1896
  var i1899 = i1895[7]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1894.fallbackSpriteAssets = i1898
  i1894.m_Version = i1895[8]
  i1894.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1895[9], i1894.m_FaceInfo)
  var i1901 = i1895[10]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.add(request.d('TMPro.TMP_SpriteCharacter', i1901[i + 0]));
  }
  i1894.m_SpriteCharacterTable = i1900
  var i1903 = i1895[11]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('TMPro.TMP_SpriteGlyph', i1903[i + 0]));
  }
  i1894.m_SpriteGlyphTable = i1902
  return i1894
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1906 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.hashCode = i1907[1]
  i1906.unicode = i1907[2]
  i1906.pivot = new pc.Vec2( i1907[3], i1907[4] )
  request.r(i1907[5], i1907[6], 0, i1906, 'sprite')
  i1906.id = i1907[7]
  i1906.x = i1907[8]
  i1906.y = i1907[9]
  i1906.width = i1907[10]
  i1906.height = i1907[11]
  i1906.xOffset = i1907[12]
  i1906.yOffset = i1907[13]
  i1906.xAdvance = i1907[14]
  i1906.scale = i1907[15]
  return i1906
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1911 = data
  i1910.m_FaceIndex = i1911[0]
  i1910.m_FamilyName = i1911[1]
  i1910.m_StyleName = i1911[2]
  i1910.m_PointSize = i1911[3]
  i1910.m_Scale = i1911[4]
  i1910.m_UnitsPerEM = i1911[5]
  i1910.m_LineHeight = i1911[6]
  i1910.m_AscentLine = i1911[7]
  i1910.m_CapLine = i1911[8]
  i1910.m_MeanLine = i1911[9]
  i1910.m_Baseline = i1911[10]
  i1910.m_DescentLine = i1911[11]
  i1910.m_SuperscriptOffset = i1911[12]
  i1910.m_SuperscriptSize = i1911[13]
  i1910.m_SubscriptOffset = i1911[14]
  i1910.m_SubscriptSize = i1911[15]
  i1910.m_UnderlineOffset = i1911[16]
  i1910.m_UnderlineThickness = i1911[17]
  i1910.m_StrikethroughOffset = i1911[18]
  i1910.m_StrikethroughThickness = i1911[19]
  i1910.m_TabWidth = i1911[20]
  return i1910
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1914 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1915 = data
  i1914.m_Name = i1915[0]
  i1914.m_HashCode = i1915[1]
  i1914.m_ElementType = i1915[2]
  i1914.m_Unicode = i1915[3]
  i1914.m_GlyphIndex = i1915[4]
  i1914.m_Scale = i1915[5]
  return i1914
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1918 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'sprite')
  i1918.m_Index = i1919[2]
  i1918.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1919[3], i1918.m_Metrics)
  i1918.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1919[4], i1918.m_GlyphRect)
  i1918.m_Scale = i1919[5]
  i1918.m_AtlasIndex = i1919[6]
  i1918.m_ClassDefinitionType = i1919[7]
  return i1918
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1921 = data
  i1920.m_Width = i1921[0]
  i1920.m_Height = i1921[1]
  i1920.m_HorizontalBearingX = i1921[2]
  i1920.m_HorizontalBearingY = i1921[3]
  i1920.m_HorizontalAdvance = i1921[4]
  return i1920
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1923 = data
  i1922.m_X = i1923[0]
  i1922.m_Y = i1923[1]
  i1922.m_Width = i1923[2]
  i1922.m_Height = i1923[3]
  return i1922
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1924 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.TMP_Style', i1927[i + 0]));
  }
  i1924.m_StyleList = i1926
  return i1924
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.TMP_Style' )
  var i1931 = data
  i1930.m_Name = i1931[0]
  i1930.m_HashCode = i1931[1]
  i1930.m_OpeningDefinition = i1931[2]
  i1930.m_ClosingDefinition = i1931[3]
  i1930.m_OpeningTagArray = i1931[4]
  i1930.m_ClosingTagArray = i1931[5]
  i1930.m_OpeningTagUnicodeArray = i1931[6]
  i1930.m_ClosingTagUnicodeArray = i1931[7]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1935[i + 0]) );
  }
  i1932.files = i1934
  i1932.componentToPrefabIds = i1933[1]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1939 = data
  i1938.path = i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'unityObject')
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1943[i + 0]) );
  }
  i1940.scriptsExecutionOrder = i1942
  var i1945 = i1941[1]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1945[i + 0]) );
  }
  i1940.sortingLayers = i1944
  var i1947 = i1941[2]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1947[i + 0]) );
  }
  i1940.cullingLayers = i1946
  i1940.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1941[3], i1940.timeSettings)
  i1940.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1941[4], i1940.physicsSettings)
  i1940.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1941[5], i1940.physics2DSettings)
  i1940.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1941[6], i1940.qualitySettings)
  i1940.enableRealtimeShadows = !!i1941[7]
  i1940.enableAutoInstancing = !!i1941[8]
  i1940.enableDynamicBatching = !!i1941[9]
  i1940.lightmapEncodingQuality = i1941[10]
  i1940.desiredColorSpace = i1941[11]
  var i1949 = i1941[12]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1940.allTags = i1948
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.value = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1957 = data
  i1956.id = i1957[0]
  i1956.name = i1957[1]
  i1956.value = i1957[2]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1961 = data
  i1960.id = i1961[0]
  i1960.name = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1963 = data
  i1962.fixedDeltaTime = i1963[0]
  i1962.maximumDeltaTime = i1963[1]
  i1962.timeScale = i1963[2]
  i1962.maximumParticleTimestep = i1963[3]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1965 = data
  i1964.gravity = new pc.Vec3( i1965[0], i1965[1], i1965[2] )
  i1964.defaultSolverIterations = i1965[3]
  i1964.bounceThreshold = i1965[4]
  i1964.autoSyncTransforms = !!i1965[5]
  i1964.autoSimulation = !!i1965[6]
  var i1967 = i1965[7]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1967[i + 0]) );
  }
  i1964.collisionMatrix = i1966
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.layerId = i1971[1]
  i1970.otherLayerId = i1971[2]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'material')
  i1972.gravity = new pc.Vec2( i1973[2], i1973[3] )
  i1972.positionIterations = i1973[4]
  i1972.velocityIterations = i1973[5]
  i1972.velocityThreshold = i1973[6]
  i1972.maxLinearCorrection = i1973[7]
  i1972.maxAngularCorrection = i1973[8]
  i1972.maxTranslationSpeed = i1973[9]
  i1972.maxRotationSpeed = i1973[10]
  i1972.baumgarteScale = i1973[11]
  i1972.baumgarteTOIScale = i1973[12]
  i1972.timeToSleep = i1973[13]
  i1972.linearSleepTolerance = i1973[14]
  i1972.angularSleepTolerance = i1973[15]
  i1972.defaultContactOffset = i1973[16]
  i1972.autoSimulation = !!i1973[17]
  i1972.queriesHitTriggers = !!i1973[18]
  i1972.queriesStartInColliders = !!i1973[19]
  i1972.callbacksOnDisable = !!i1973[20]
  i1972.reuseCollisionCallbacks = !!i1973[21]
  i1972.autoSyncTransforms = !!i1973[22]
  var i1975 = i1973[23]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1975[i + 0]) );
  }
  i1972.collisionMatrix = i1974
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1979 = data
  i1978.enabled = !!i1979[0]
  i1978.layerId = i1979[1]
  i1978.otherLayerId = i1979[2]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1983[i + 0]) );
  }
  i1980.qualityLevels = i1982
  var i1985 = i1981[1]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( i1985[i + 0] );
  }
  i1980.names = i1984
  i1980.shadows = i1981[2]
  i1980.anisotropicFiltering = i1981[3]
  i1980.antiAliasing = i1981[4]
  i1980.lodBias = i1981[5]
  i1980.shadowCascades = i1981[6]
  i1980.shadowDistance = i1981[7]
  i1980.shadowmaskMode = i1981[8]
  i1980.shadowProjection = i1981[9]
  i1980.shadowResolution = i1981[10]
  i1980.softParticles = !!i1981[11]
  i1980.softVegetation = !!i1981[12]
  i1980.activeColorSpace = i1981[13]
  i1980.desiredColorSpace = i1981[14]
  i1980.masterTextureLimit = i1981[15]
  i1980.maxQueuedFrames = i1981[16]
  i1980.particleRaycastBudget = i1981[17]
  i1980.pixelLightCount = i1981[18]
  i1980.realtimeReflectionProbes = !!i1981[19]
  i1980.shadowCascade2Split = i1981[20]
  i1980.shadowCascade4Split = new pc.Vec3( i1981[21], i1981[22], i1981[23] )
  i1980.streamingMipmapsActive = !!i1981[24]
  i1980.vSyncCount = i1981[25]
  i1980.asyncUploadBufferSize = i1981[26]
  i1980.asyncUploadTimeSlice = i1981[27]
  i1980.billboardsFaceCameraPosition = !!i1981[28]
  i1980.shadowNearPlaneOffset = i1981[29]
  i1980.streamingMipmapsMemoryBudget = i1981[30]
  i1980.maximumLODLevel = i1981[31]
  i1980.streamingMipmapsAddAllCameras = !!i1981[32]
  i1980.streamingMipmapsMaxLevelReduction = i1981[33]
  i1980.streamingMipmapsRenderersPerFrame = i1981[34]
  i1980.resolutionScalingFixedDPIFactor = i1981[35]
  i1980.streamingMipmapsMaxFileIORequests = i1981[36]
  i1980.currentQualityLevel = i1981[37]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1991 = data
  i1990.weight = i1991[0]
  i1990.vertices = i1991[1]
  i1990.normals = i1991[2]
  i1990.tangents = i1991[3]
  return i1990
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[31],"82":[83],"84":[83],"23":[22],"15":[13],"85":[86],"87":[88],"89":[31,35],"90":[91],"92":[88],"93":[94],"95":[88],"96":[88],"97":[38],"98":[38],"99":[88],"100":[101],"102":[2],"103":[101],"104":[22],"105":[22],"26":[23],"28":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"29":[27,22],"121":[22],"122":[40],"123":[40],"41":[40],"124":[40],"125":[13],"126":[13],"127":[128],"129":[13],"130":[131],"132":[22],"133":[27,22],"32":[31],"91":[27,22],"134":[10,31],"88":[31],"37":[31,35],"135":[60],"136":[6],"34":[131],"137":[38],"138":[22],"139":[31,22],"140":[22,27],"141":[22],"142":[27,22],"143":[31],"144":[27,22],"145":[22],"146":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Mesh","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "5.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1982";

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

Deserializers.buildID = "29ba60b7-57ce-4f0a-be8a-0a67cdd1cb6b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

