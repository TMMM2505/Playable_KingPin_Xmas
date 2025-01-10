var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSpring' )
  var i505 = data
  i504.spring = i505[0]
  i504.damper = i505[1]
  i504.targetPosition = i505[2]
  return i504
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointMotor' )
  var i507 = data
  i506.m_TargetVelocity = i507[0]
  i506.m_Force = i507[1]
  i506.m_FreeSpin = i507[2]
  return i506
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointLimits' )
  var i509 = data
  i508.m_Min = i509[0]
  i508.m_Max = i509[1]
  i508.m_Bounciness = i509[2]
  i508.m_BounceMinVelocity = i509[3]
  i508.m_ContactDistance = i509[4]
  i508.minBounce = i509[5]
  i508.maxBounce = i509[6]
  return i508
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointDrive' )
  var i511 = data
  i510.m_PositionSpring = i511[0]
  i510.m_PositionDamper = i511[1]
  i510.m_MaximumForce = i511[2]
  i510.m_UseAcceleration = i511[3]
  return i510
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i513 = data
  i512.m_Spring = i513[0]
  i512.m_Damper = i513[1]
  return i512
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i515 = data
  i514.m_Limit = i515[0]
  i514.m_Bounciness = i515[1]
  i514.m_ContactDistance = i515[2]
  return i514
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i517 = data
  i516.m_ExtremumSlip = i517[0]
  i516.m_ExtremumValue = i517[1]
  i516.m_AsymptoteSlip = i517[2]
  i516.m_AsymptoteValue = i517[3]
  i516.m_Stiffness = i517[4]
  return i516
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i519 = data
  i518.m_LowerAngle = i519[0]
  i518.m_UpperAngle = i519[1]
  return i518
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i521 = data
  i520.m_MotorSpeed = i521[0]
  i520.m_MaximumMotorTorque = i521[1]
  return i520
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i523 = data
  i522.m_DampingRatio = i523[0]
  i522.m_Frequency = i523[1]
  i522.m_Angle = i523[2]
  return i522
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i525 = data
  i524.m_LowerTranslation = i525[0]
  i524.m_UpperTranslation = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i526 = root || new pc.UnityMaterial()
  var i527 = data
  i526.name = i527[0]
  request.r(i527[1], i527[2], 0, i526, 'shader')
  i526.renderQueue = i527[3]
  i526.enableInstancing = !!i527[4]
  var i529 = i527[5]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i529[i + 0]) );
  }
  i526.floatParameters = i528
  var i531 = i527[6]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i531[i + 0]) );
  }
  i526.colorParameters = i530
  var i533 = i527[7]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i533[i + 0]) );
  }
  i526.vectorParameters = i532
  var i535 = i527[8]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i535[i + 0]) );
  }
  i526.textureParameters = i534
  var i537 = i527[9]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i537[i + 0]) );
  }
  i526.materialFlags = i536
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i545 = data
  i544.name = i545[0]
  i544.value = new pc.Color(i545[1], i545[2], i545[3], i545[4])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = new pc.Vec4( i549[1], i549[2], i549[3], i549[4] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'value')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i557 = data
  i556.name = i557[0]
  i556.enabled = !!i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i559 = data
  i558.name = i559[0]
  i558.width = i559[1]
  i558.height = i559[2]
  i558.mipmapCount = i559[3]
  i558.anisoLevel = i559[4]
  i558.filterMode = i559[5]
  i558.hdr = !!i559[6]
  i558.format = i559[7]
  i558.wrapMode = i559[8]
  i558.alphaIsTransparency = !!i559[9]
  i558.alphaSource = i559[10]
  i558.graphicsFormat = i559[11]
  i558.sRGBTexture = !!i559[12]
  i558.desiredColorSpace = i559[13]
  i558.wrapU = i559[14]
  i558.wrapV = i559[15]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i561 = data
  i560.position = new pc.Vec3( i561[0], i561[1], i561[2] )
  i560.scale = new pc.Vec3( i561[3], i561[4], i561[5] )
  i560.rotation = new pc.Quat(i561[6], i561[7], i561[8], i561[9])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i563 = data
  i562.enabled = !!i563[0]
  request.r(i563[1], i563[2], 0, i562, 'sharedMaterial')
  var i565 = i563[3]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.sharedMaterials = i564
  i562.receiveShadows = !!i563[4]
  i562.shadowCastingMode = i563[5]
  i562.sortingLayerID = i563[6]
  i562.sortingOrder = i563[7]
  i562.lightmapIndex = i563[8]
  i562.lightmapSceneIndex = i563[9]
  i562.lightmapScaleOffset = new pc.Vec4( i563[10], i563[11], i563[12], i563[13] )
  i562.lightProbeUsage = i563[14]
  i562.reflectionProbeUsage = i563[15]
  i562.color = new pc.Color(i563[16], i563[17], i563[18], i563[19])
  request.r(i563[20], i563[21], 0, i562, 'sprite')
  i562.flipX = !!i563[22]
  i562.flipY = !!i563[23]
  i562.drawMode = i563[24]
  i562.size = new pc.Vec2( i563[25], i563[26] )
  i562.tileMode = i563[27]
  i562.adaptiveModeThreshold = i563[28]
  i562.maskInteraction = i563[29]
  i562.spriteSortPoint = i563[30]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i569 = data
  i568.usedByComposite = !!i569[0]
  i568.autoTiling = !!i569[1]
  i568.size = new pc.Vec2( i569[2], i569[3] )
  i568.edgeRadius = i569[4]
  i568.enabled = !!i569[5]
  i568.isTrigger = !!i569[6]
  i568.usedByEffector = !!i569[7]
  i568.density = i569[8]
  i568.offset = new pc.Vec2( i569[9], i569[10] )
  request.r(i569[11], i569[12], 0, i568, 'material')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i571 = data
  i570.bodyType = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'material')
  i570.simulated = !!i571[3]
  i570.useAutoMass = !!i571[4]
  i570.mass = i571[5]
  i570.drag = i571[6]
  i570.angularDrag = i571[7]
  i570.gravityScale = i571[8]
  i570.collisionDetectionMode = i571[9]
  i570.sleepMode = i571[10]
  i570.constraints = i571[11]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i573 = data
  i572.name = i573[0]
  i572.tagId = i573[1]
  i572.enabled = !!i573[2]
  i572.isStatic = !!i573[3]
  i572.layer = i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i575 = data
  i574.radius = i575[0]
  i574.enabled = !!i575[1]
  i574.isTrigger = !!i575[2]
  i574.usedByEffector = !!i575[3]
  i574.density = i575[4]
  i574.offset = new pc.Vec2( i575[5], i575[6] )
  request.r(i575[7], i575[8], 0, i574, 'material')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'animatorController')
  request.r(i577[2], i577[3], 0, i576, 'avatar')
  i576.updateMode = i577[4]
  i576.hasTransformHierarchy = !!i577[5]
  i576.applyRootMotion = !!i577[6]
  var i579 = i577[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.humanBones = i578
  i576.enabled = !!i577[8]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i583 = data
  i582.name = i583[0]
  i582.halfPrecision = !!i583[1]
  i582.useUInt32IndexFormat = !!i583[2]
  i582.vertexCount = i583[3]
  i582.aabb = i583[4]
  var i585 = i583[5]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( !!i585[i + 0] );
  }
  i582.streams = i584
  i582.vertices = i583[6]
  var i587 = i583[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i587[i + 0]) );
  }
  i582.subMeshes = i586
  var i589 = i583[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 16) {
    i588.push( new pc.Mat4().setData(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3],  i589[i + 4], i589[i + 5], i589[i + 6], i589[i + 7],  i589[i + 8], i589[i + 9], i589[i + 10], i589[i + 11],  i589[i + 12], i589[i + 13], i589[i + 14], i589[i + 15]) );
  }
  i582.bindposes = i588
  var i591 = i583[9]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i591[i + 0]) );
  }
  i582.blendShapes = i590
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i597 = data
  i596.triangles = i597[0]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i603 = data
  i602.name = i603[0]
  var i605 = i603[1]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i605[i + 0]) );
  }
  i602.frames = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i607 = data
  i606.name = i607[0]
  i606.index = i607[1]
  i606.startup = !!i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i609 = data
  i608.enabled = !!i609[0]
  i608.aspect = i609[1]
  i608.orthographic = !!i609[2]
  i608.orthographicSize = i609[3]
  i608.backgroundColor = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.nearClipPlane = i609[8]
  i608.farClipPlane = i609[9]
  i608.fieldOfView = i609[10]
  i608.depth = i609[11]
  i608.clearFlags = i609[12]
  i608.cullingMask = i609[13]
  i608.rect = i609[14]
  request.r(i609[15], i609[16], 0, i608, 'targetTexture')
  i608.usePhysicalProperties = !!i609[17]
  i608.focalLength = i609[18]
  i608.sensorSize = new pc.Vec2( i609[19], i609[20] )
  i608.lensShift = new pc.Vec2( i609[21], i609[22] )
  i608.gateFit = i609[23]
  i608.commandBufferCount = i609[24]
  i608.cameraType = i609[25]
  return i608
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i610 = root || request.c( 'ViewportHandler' )
  var i611 = data
  i610.wireColor = new pc.Color(i611[0], i611[1], i611[2], i611[3])
  i610.UnitsSize = i611[4]
  i610.constraint = i611[5]
  request.r(i611[6], i611[7], 0, i610, 'camera')
  return i610
}

Deserializers["DeviceOrientationDetection"] = function (request, data, root) {
  var i612 = root || request.c( 'DeviceOrientationDetection' )
  var i613 = data
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'clip')
  request.r(i615[2], i615[3], 0, i614, 'outputAudioMixerGroup')
  i614.playOnAwake = !!i615[4]
  i614.loop = !!i615[5]
  i614.time = i615[6]
  i614.volume = i615[7]
  i614.pitch = i615[8]
  i614.enabled = !!i615[9]
  return i614
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i616 = root || request.c( 'InputReceiver' )
  var i617 = data
  return i616
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i618 = root || request.c( 'CameraAnchor' )
  var i619 = data
  i618.anchorType = i619[0]
  i618.anchorOffset = new pc.Vec3( i619[1], i619[2], i619[3] )
  return i618
}

Deserializers["LevelMap"] = function (request, data, root) {
  var i620 = root || request.c( 'LevelMap' )
  var i621 = data
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.isTrigger = !!i623[1]
  i622.usedByEffector = !!i623[2]
  i622.density = i623[3]
  i622.offset = new pc.Vec2( i623[4], i623[5] )
  request.r(i623[6], i623[7], 0, i622, 'material')
  i622.edgeRadius = i623[8]
  var i625 = i623[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
    i624.push( new pc.Vec2( i625[i + 0], i625[i + 1] ) );
  }
  i622.points = i624
  i622.useAdjacentStartPoint = !!i623[10]
  i622.adjacentStartPoint = new pc.Vec2( i623[11], i623[12] )
  i622.useAdjacentEndPoint = !!i623[13]
  i622.adjacentEndPoint = new pc.Vec2( i623[14], i623[15] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i629 = data
  i628.enabled = !!i629[0]
  i628.isTrigger = !!i629[1]
  i628.usedByEffector = !!i629[2]
  i628.density = i629[3]
  i628.offset = new pc.Vec2( i629[4], i629[5] )
  request.r(i629[6], i629[7], 0, i628, 'material')
  i628.usedByComposite = !!i629[8]
  i628.autoTiling = !!i629[9]
  var i631 = i629[10]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
  var i633 = i631[i + 0]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
    i632.push( new pc.Vec2( i633[i + 0], i633[i + 1] ) );
  }
    i630.push( i632 );
  }
  i628.points = i630
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i639 = data
  i638.pivot = new pc.Vec2( i639[0], i639[1] )
  i638.anchorMin = new pc.Vec2( i639[2], i639[3] )
  i638.anchorMax = new pc.Vec2( i639[4], i639[5] )
  i638.sizeDelta = new pc.Vec2( i639[6], i639[7] )
  i638.anchoredPosition3D = new pc.Vec3( i639[8], i639[9], i639[10] )
  i638.rotation = new pc.Quat(i639[11], i639[12], i639[13], i639[14])
  i638.scale = new pc.Vec3( i639[15], i639[16], i639[17] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.planeDistance = i641[1]
  i640.referencePixelsPerUnit = i641[2]
  i640.isFallbackOverlay = !!i641[3]
  i640.renderMode = i641[4]
  i640.renderOrder = i641[5]
  i640.sortingLayerName = i641[6]
  i640.sortingOrder = i641[7]
  i640.scaleFactor = i641[8]
  request.r(i641[9], i641[10], 0, i640, 'worldCamera')
  i640.overrideSorting = !!i641[11]
  i640.pixelPerfect = !!i641[12]
  i640.targetDisplay = i641[13]
  i640.overridePixelPerfect = !!i641[14]
  return i640
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i643 = data
  i642.m_UiScaleMode = i643[0]
  i642.m_ReferencePixelsPerUnit = i643[1]
  i642.m_ScaleFactor = i643[2]
  i642.m_ReferenceResolution = new pc.Vec2( i643[3], i643[4] )
  i642.m_ScreenMatchMode = i643[5]
  i642.m_MatchWidthOrHeight = i643[6]
  i642.m_PhysicalUnit = i643[7]
  i642.m_FallbackScreenDPI = i643[8]
  i642.m_DefaultSpriteDPI = i643[9]
  i642.m_DynamicPixelsPerUnit = i643[10]
  i642.m_PresetInfoIsWorld = !!i643[11]
  return i642
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i645 = data
  i644.m_IgnoreReversedGraphics = !!i645[0]
  i644.m_BlockingObjects = i645[1]
  i644.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i645[2] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i647 = data
  i646.cullTransparentMesh = !!i647[0]
  return i646
}

Deserializers["ZoneSize"] = function (request, data, root) {
  var i648 = root || request.c( 'ZoneSize' )
  var i649 = data
  i648.portraitPos = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.landscapePos = new pc.Vec3( i649[3], i649[4], i649[5] )
  return i648
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Image' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_Sprite')
  i650.m_Type = i651[2]
  i650.m_PreserveAspect = !!i651[3]
  i650.m_FillCenter = !!i651[4]
  i650.m_FillMethod = i651[5]
  i650.m_FillAmount = i651[6]
  i650.m_FillClockwise = !!i651[7]
  i650.m_FillOrigin = i651[8]
  i650.m_UseSpriteMesh = !!i651[9]
  i650.m_PixelsPerUnitMultiplier = i651[10]
  request.r(i651[11], i651[12], 0, i650, 'm_Material')
  i650.m_Maskable = !!i651[13]
  i650.m_Color = new pc.Color(i651[14], i651[15], i651[16], i651[17])
  i650.m_RaycastTarget = !!i651[18]
  i650.m_RaycastPadding = new pc.Vec4( i651[19], i651[20], i651[21], i651[22] )
  return i650
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Text' )
  var i653 = data
  i652.m_FontData = request.d('UnityEngine.UI.FontData', i653[0], i652.m_FontData)
  i652.m_Text = i653[1]
  request.r(i653[2], i653[3], 0, i652, 'm_Material')
  i652.m_Maskable = !!i653[4]
  i652.m_Color = new pc.Color(i653[5], i653[6], i653[7], i653[8])
  i652.m_RaycastTarget = !!i653[9]
  i652.m_RaycastPadding = new pc.Vec4( i653[10], i653[11], i653[12], i653[13] )
  return i652
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.FontData' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Font')
  i654.m_FontSize = i655[2]
  i654.m_FontStyle = i655[3]
  i654.m_BestFit = !!i655[4]
  i654.m_MinSize = i655[5]
  i654.m_MaxSize = i655[6]
  i654.m_Alignment = i655[7]
  i654.m_AlignByGeometry = !!i655[8]
  i654.m_RichText = !!i655[9]
  i654.m_HorizontalOverflow = i655[10]
  i654.m_VerticalOverflow = i655[11]
  i654.m_LineSpacing = i655[12]
  return i654
}

Deserializers["Pulse"] = function (request, data, root) {
  var i656 = root || request.c( 'Pulse' )
  var i657 = data
  i656.scale = i657[0]
  i656.duration = i657[1]
  i656.ease = i657[2]
  i656.loopCount = i657[3]
  i656.from = !!i657[4]
  return i656
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i658 = root || request.c( 'SoundClick' )
  var i659 = data
  i658.loopTime = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'sound')
  return i658
}

Deserializers["King"] = function (request, data, root) {
  var i660 = root || request.c( 'King' )
  var i661 = data
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'additionalVertexStreams')
  i662.enabled = !!i663[2]
  request.r(i663[3], i663[4], 0, i662, 'sharedMaterial')
  var i665 = i663[5]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.sharedMaterials = i664
  i662.receiveShadows = !!i663[6]
  i662.shadowCastingMode = i663[7]
  i662.sortingLayerID = i663[8]
  i662.sortingOrder = i663[9]
  i662.lightmapIndex = i663[10]
  i662.lightmapSceneIndex = i663[11]
  i662.lightmapScaleOffset = new pc.Vec4( i663[12], i663[13], i663[14], i663[15] )
  i662.lightProbeUsage = i663[16]
  i662.reflectionProbeUsage = i663[17]
  return i662
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i666 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i667 = data
  i666.loop = !!i667[0]
  i666.timeScale = i667[1]
  request.r(i667[2], i667[3], 0, i666, 'skeletonDataAsset')
  i666.initialSkinName = i667[4]
  i666.fixPrefabOverrideViaMeshFilter = i667[5]
  i666.initialFlipX = !!i667[6]
  i666.initialFlipY = !!i667[7]
  i666.updateWhenInvisible = i667[8]
  i666.zSpacing = i667[9]
  i666.useClipping = !!i667[10]
  i666.immutableTriangles = !!i667[11]
  i666.pmaVertexColors = !!i667[12]
  i666.clearStateOnDisable = !!i667[13]
  i666.tintBlack = !!i667[14]
  i666.singleSubmesh = !!i667[15]
  i666.fixDrawOrder = !!i667[16]
  i666.addNormals = !!i667[17]
  i666.calculateTangents = !!i667[18]
  i666.maskInteraction = i667[19]
  i666.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i667[20], i666.maskMaterials)
  i666.disableRenderingOnOverride = !!i667[21]
  i666.updateTiming = i667[22]
  i666.unscaledTime = !!i667[23]
  i666._animationName = i667[24]
  var i669 = i667[25]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i666.separatorSlotNames = i668
  return i666
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i670 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i671 = data
  var i673 = i671[0]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.materialsMaskDisabled = i672
  var i675 = i671[1]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i670.materialsInsideMask = i674
  var i677 = i671[2]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i670.materialsOutsideMask = i676
  return i670
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i680 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'boneRoot')
  i680.flipBy180DegreeRotation = !!i681[2]
  request.r(i681[3], i681[4], 0, i680, 'skeletonRenderer')
  request.r(i681[5], i681[6], 0, i680, 'skeletonGraphic')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'sharedMesh')
  return i682
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i684 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i685 = data
  i684.copyPropertyBlock = !!i685[0]
  i684.copyMeshRendererFlags = !!i685[1]
  var i687 = i685[2]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i684.partsRenderers = i686
  request.r(i685[3], i685[4], 0, i684, 'skeletonRenderer')
  return i684
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i690 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i691 = data
  i690.boneName = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'parentReference')
  i690.mode = i691[3]
  i690.position = !!i691[4]
  i690.rotation = !!i691[5]
  i690.scale = !!i691[6]
  i690.zPosition = !!i691[7]
  i690.overrideAlpha = i691[8]
  request.r(i691[9], i691[10], 0, i690, 'hierarchy')
  return i690
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i693 = data
  return i692
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_FirstSelected')
  i694.m_sendNavigationEvents = !!i695[2]
  i694.m_DragThreshold = i695[3]
  return i694
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i697 = data
  i696.m_HorizontalAxis = i697[0]
  i696.m_VerticalAxis = i697[1]
  i696.m_SubmitButton = i697[2]
  i696.m_CancelButton = i697[3]
  i696.m_InputActionsPerSecond = i697[4]
  i696.m_RepeatDelay = i697[5]
  i696.m_ForceModuleActive = !!i697[6]
  i696.m_SendPointerHoverToParent = !!i697[7]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i699 = data
  i698.ambientIntensity = i699[0]
  i698.reflectionIntensity = i699[1]
  i698.ambientMode = i699[2]
  i698.ambientLight = new pc.Color(i699[3], i699[4], i699[5], i699[6])
  i698.ambientSkyColor = new pc.Color(i699[7], i699[8], i699[9], i699[10])
  i698.ambientGroundColor = new pc.Color(i699[11], i699[12], i699[13], i699[14])
  i698.ambientEquatorColor = new pc.Color(i699[15], i699[16], i699[17], i699[18])
  i698.fogColor = new pc.Color(i699[19], i699[20], i699[21], i699[22])
  i698.fogEndDistance = i699[23]
  i698.fogStartDistance = i699[24]
  i698.fogDensity = i699[25]
  i698.fog = !!i699[26]
  request.r(i699[27], i699[28], 0, i698, 'skybox')
  i698.fogMode = i699[29]
  var i701 = i699[30]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i701[i + 0]) );
  }
  i698.lightmaps = i700
  i698.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i699[31], i698.lightProbes)
  i698.lightmapsMode = i699[32]
  i698.mixedBakeMode = i699[33]
  i698.environmentLightingMode = i699[34]
  i698.ambientProbe = new pc.SphericalHarmonicsL2(i699[35])
  i698.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i699[36])
  i698.useReferenceAmbientProbe = !!i699[37]
  request.r(i699[38], i699[39], 0, i698, 'customReflection')
  request.r(i699[40], i699[41], 0, i698, 'defaultReflection')
  i698.defaultReflectionMode = i699[42]
  i698.defaultReflectionResolution = i699[43]
  i698.sunLightObjectId = i699[44]
  i698.pixelLightCount = i699[45]
  i698.defaultReflectionHDR = !!i699[46]
  i698.hasLightDataAsset = !!i699[47]
  i698.hasManualGenerate = !!i699[48]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'lightmapColor')
  request.r(i705[2], i705[3], 0, i704, 'lightmapDirection')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i706 = root || new UnityEngine.LightProbes()
  var i707 = data
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i717[i + 0]));
  }
  i714.ShaderCompilationErrors = i716
  i714.name = i715[1]
  i714.guid = i715[2]
  var i719 = i715[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.shaderDefinedKeywords = i718
  var i721 = i715[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i721[i + 0]) );
  }
  i714.passes = i720
  var i723 = i715[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i723[i + 0]) );
  }
  i714.usePasses = i722
  var i725 = i715[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i725[i + 0]) );
  }
  i714.defaultParameterValues = i724
  request.r(i715[7], i715[8], 0, i714, 'unityFallbackShader')
  i714.readDepth = !!i715[9]
  i714.isCreatedByShaderGraph = !!i715[10]
  i714.compiled = !!i715[11]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i729 = data
  i728.shaderName = i729[0]
  i728.errorMessage = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i732 = root || new pc.UnityShaderPass()
  var i733 = data
  i732.id = i733[0]
  i732.subShaderIndex = i733[1]
  i732.name = i733[2]
  i732.passType = i733[3]
  i732.grabPassTextureName = i733[4]
  i732.usePass = !!i733[5]
  i732.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[6], i732.zTest)
  i732.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[7], i732.zWrite)
  i732.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[8], i732.culling)
  i732.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[9], i732.blending)
  i732.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[10], i732.alphaBlending)
  i732.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[11], i732.colorWriteMask)
  i732.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[12], i732.offsetUnits)
  i732.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[13], i732.offsetFactor)
  i732.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[14], i732.stencilRef)
  i732.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[15], i732.stencilReadMask)
  i732.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[16], i732.stencilWriteMask)
  i732.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[17], i732.stencilOp)
  i732.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[18], i732.stencilOpFront)
  i732.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[19], i732.stencilOpBack)
  var i735 = i733[20]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i735[i + 0]) );
  }
  i732.tags = i734
  var i737 = i733[21]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.passDefinedKeywords = i736
  var i739 = i733[22]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i739[i + 0]) );
  }
  i732.passDefinedKeywordGroups = i738
  var i741 = i733[23]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i741[i + 0]) );
  }
  i732.variants = i740
  var i743 = i733[24]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i732.excludedVariants = i742
  i732.hasDepthReader = !!i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i745 = data
  i744.val = i745[0]
  i744.name = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i747 = data
  i746.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[0], i746.src)
  i746.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[1], i746.dst)
  i746.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[2], i746.op)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i749 = data
  i748.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.pass)
  i748.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.fail)
  i748.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.zFail)
  i748.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[3], i748.comp)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.hasDiscard = !!i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i763 = data
  i762.passId = i763[0]
  i762.subShaderIndex = i763[1]
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.keywords = i764
  i762.vertexProgram = i763[3]
  i762.fragmentProgram = i763[4]
  i762.exportedForWebGl2 = !!i763[5]
  i762.readDepth = !!i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'shader')
  i768.pass = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i773 = data
  i772.name = i773[0]
  i772.type = i773[1]
  i772.value = new pc.Vec4( i773[2], i773[3], i773[4], i773[5] )
  i772.textureValue = i773[6]
  i772.shaderPropertyFlag = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'texture')
  i774.aabb = i775[3]
  i774.vertices = i775[4]
  i774.triangles = i775[5]
  i774.textureRect = UnityEngine.Rect.MinMaxRect(i775[6], i775[7], i775[8], i775[9])
  i774.packedRect = UnityEngine.Rect.MinMaxRect(i775[10], i775[11], i775[12], i775[13])
  i774.border = new pc.Vec4( i775[14], i775[15], i775[16], i775[17] )
  i774.transparency = i775[18]
  i774.bounds = i775[19]
  i774.pixelsPerUnit = i775[20]
  i774.textureWidth = i775[21]
  i774.textureHeight = i775[22]
  i774.nativeSize = new pc.Vec2( i775[23], i775[24] )
  i774.pivot = new pc.Vec2( i775[25], i775[26] )
  i774.textureRectOffset = new pc.Vec2( i775[27], i775[28] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i777 = data
  i776.name = i777[0]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i779 = data
  i778.name = i779[0]
  i778.wrapMode = i779[1]
  i778.isLooping = !!i779[2]
  i778.length = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i781[i + 0]) );
  }
  i778.curves = i780
  var i783 = i779[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i783[i + 0]) );
  }
  i778.events = i782
  i778.halfPrecision = !!i779[6]
  i778._frameRate = i779[7]
  i778.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i779[8], i778.localBounds)
  i778.hasMuscleCurves = !!i779[9]
  var i785 = i779[10]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i778.clipMuscleConstant = i784
  i778.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i779[11], i778.clipBindingConstant)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i789 = data
  i788.path = i789[0]
  i788.hash = i789[1]
  i788.componentType = i789[2]
  i788.property = i789[3]
  i788.keys = i789[4]
  var i791 = i789[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i791[i + 0]) );
  }
  i788.objectReferenceKeys = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i795 = data
  i794.time = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i799 = data
  i798.functionName = i799[0]
  i798.floatParameter = i799[1]
  i798.intParameter = i799[2]
  i798.stringParameter = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'objectReferenceParameter')
  i798.time = i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i801 = data
  i800.center = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.extends = new pc.Vec3( i801[3], i801[4], i801[5] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.genericBindings = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.pptrCurveMapping = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i811 = data
  i810.name = i811[0]
  i810.ascent = i811[1]
  i810.originalLineHeight = i811[2]
  i810.fontSize = i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i813[i + 0]) );
  }
  i810.characterInfo = i812
  request.r(i811[5], i811[6], 0, i810, 'texture')
  i810.originalFontSize = i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i817 = data
  i816.index = i817[0]
  i816.advance = i817[1]
  i816.bearing = i817[2]
  i816.glyphWidth = i817[3]
  i816.glyphHeight = i817[4]
  i816.minX = i817[5]
  i816.maxX = i817[6]
  i816.minY = i817[7]
  i816.maxY = i817[8]
  i816.uvBottomLeftX = i817[9]
  i816.uvBottomLeftY = i817[10]
  i816.uvBottomRightX = i817[11]
  i816.uvBottomRightY = i817[12]
  i816.uvTopLeftX = i817[13]
  i816.uvTopLeftY = i817[14]
  i816.uvTopRightX = i817[15]
  i816.uvTopRightY = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i819 = data
  i818.name = i819[0]
  var i821 = i819[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i821[i + 0]) );
  }
  i818.layers = i820
  var i823 = i819[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i823[i + 0]) );
  }
  i818.parameters = i822
  i818.animationClips = i819[3]
  i818.avatarUnsupported = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i827 = data
  i826.name = i827[0]
  i826.defaultWeight = i827[1]
  i826.blendingMode = i827[2]
  i826.avatarMask = i827[3]
  i826.syncedLayerIndex = i827[4]
  i826.syncedLayerAffectsTiming = !!i827[5]
  i826.syncedLayers = i827[6]
  i826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i827[7], i826.stateMachine)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  i828.path = i829[2]
  var i831 = i829[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i831[i + 0]) );
  }
  i828.states = i830
  var i833 = i829[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i833[i + 0]) );
  }
  i828.machines = i832
  var i835 = i829[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i835[i + 0]) );
  }
  i828.entryStateTransitions = i834
  var i837 = i829[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i837[i + 0]) );
  }
  i828.exitStateTransitions = i836
  var i839 = i829[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i828.anyStateTransitions = i838
  i828.defaultStateId = i829[8]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.cycleOffset = i843[2]
  i842.cycleOffsetParameter = i843[3]
  i842.cycleOffsetParameterActive = !!i843[4]
  i842.mirror = !!i843[5]
  i842.mirrorParameter = i843[6]
  i842.mirrorParameterActive = !!i843[7]
  i842.motionId = i843[8]
  i842.nameHash = i843[9]
  i842.fullPathHash = i843[10]
  i842.speed = i843[11]
  i842.speedParameter = i843[12]
  i842.speedParameterActive = !!i843[13]
  i842.tag = i843[14]
  i842.tagHash = i843[15]
  i842.writeDefaultValues = !!i843[16]
  var i845 = i843[17]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.behaviours = i844
  var i847 = i843[18]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i847[i + 0]) );
  }
  i842.transitions = i846
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i853 = data
  i852.fullPath = i853[0]
  i852.canTransitionToSelf = !!i853[1]
  i852.duration = i853[2]
  i852.exitTime = i853[3]
  i852.hasExitTime = !!i853[4]
  i852.hasFixedDuration = !!i853[5]
  i852.interruptionSource = i853[6]
  i852.offset = i853[7]
  i852.orderedInterruption = !!i853[8]
  i852.destinationStateId = i853[9]
  i852.isExit = !!i853[10]
  i852.mute = !!i853[11]
  i852.solo = !!i853[12]
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i861 = data
  i860.destinationStateId = i861[0]
  i860.isExit = !!i861[1]
  i860.mute = !!i861[2]
  i860.solo = !!i861[3]
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i863[i + 0]) );
  }
  i860.conditions = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i867 = data
  i866.mode = i867[0]
  i866.parameter = i867[1]
  i866.threshold = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i871 = data
  i870.defaultBool = !!i871[0]
  i870.defaultFloat = i871[1]
  i870.defaultInt = i871[2]
  i870.name = i871[3]
  i870.nameHash = i871[4]
  i870.type = i871[5]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i873 = data
  i872.name = i873[0]
  i872.bytes64 = i873[1]
  i872.data = i873[2]
  return i872
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.atlasAssets = i876
  i874.scale = i875[1]
  request.r(i875[2], i875[3], 0, i874, 'skeletonJSON')
  i874.isUpgradingBlendModeMaterials = !!i875[4]
  i874.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i875[5], i874.blendModeMaterials)
  var i879 = i875[6]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i874.skeletonDataModifiers = i878
  var i881 = i875[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i874.fromAnimation = i880
  var i883 = i875[8]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i874.toAnimation = i882
  i874.duration = i875[9]
  i874.defaultMix = i875[10]
  request.r(i875[11], i875[12], 0, i874, 'controller')
  return i874
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i886 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i887 = data
  i886.applyAdditiveMaterial = !!i887[0]
  var i889 = i887[1]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i889[i + 0]));
  }
  i886.additiveMaterials = i888
  var i891 = i887[2]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i891[i + 0]));
  }
  i886.multiplyMaterials = i890
  var i893 = i887[3]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i893[i + 0]));
  }
  i886.screenMaterials = i892
  i886.requiresBlendModeMaterials = !!i887[4]
  return i886
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i896 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i897 = data
  i896.pageName = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'material')
  return i896
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i900 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'atlasFile')
  var i903 = i901[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.materials = i902
  i900.textureLoadingMode = i901[3]
  request.r(i901[4], i901[5], 0, i900, 'onDemandTextureLoader')
  return i900
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_Settings' )
  var i905 = data
  i904.m_enableWordWrapping = !!i905[0]
  i904.m_enableKerning = !!i905[1]
  i904.m_enableExtraPadding = !!i905[2]
  i904.m_enableTintAllSprites = !!i905[3]
  i904.m_enableParseEscapeCharacters = !!i905[4]
  i904.m_EnableRaycastTarget = !!i905[5]
  i904.m_GetFontFeaturesAtRuntime = !!i905[6]
  i904.m_missingGlyphCharacter = i905[7]
  i904.m_warningsDisabled = !!i905[8]
  request.r(i905[9], i905[10], 0, i904, 'm_defaultFontAsset')
  i904.m_defaultFontAssetPath = i905[11]
  i904.m_defaultFontSize = i905[12]
  i904.m_defaultAutoSizeMinRatio = i905[13]
  i904.m_defaultAutoSizeMaxRatio = i905[14]
  i904.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i905[15], i905[16] )
  i904.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i905[17], i905[18] )
  i904.m_autoSizeTextContainer = !!i905[19]
  i904.m_IsTextObjectScaleStatic = !!i905[20]
  var i907 = i905[21]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i904.m_fallbackFontAssets = i906
  i904.m_matchMaterialPreset = !!i905[22]
  request.r(i905[23], i905[24], 0, i904, 'm_defaultSpriteAsset')
  i904.m_defaultSpriteAssetPath = i905[25]
  i904.m_enableEmojiSupport = !!i905[26]
  i904.m_MissingCharacterSpriteUnicode = i905[27]
  i904.m_defaultColorGradientPresetsPath = i905[28]
  request.r(i905[29], i905[30], 0, i904, 'm_defaultStyleSheet')
  i904.m_StyleSheetsResourcePath = i905[31]
  request.r(i905[32], i905[33], 0, i904, 'm_leadingCharacters')
  request.r(i905[34], i905[35], 0, i904, 'm_followingCharacters')
  i904.m_UseModernHangulLineBreakingRules = !!i905[36]
  return i904
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i911 = data
  i910.hashCode = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'material')
  i910.materialHashCode = i911[3]
  request.r(i911[4], i911[5], 0, i910, 'spriteSheet')
  var i913 = i911[6]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('TMPro.TMP_Sprite', i913[i + 0]));
  }
  i910.spriteInfoList = i912
  var i915 = i911[7]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i910.fallbackSpriteAssets = i914
  i910.m_Version = i911[8]
  i910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i911[9], i910.m_FaceInfo)
  var i917 = i911[10]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_SpriteCharacter', i917[i + 0]));
  }
  i910.m_SpriteCharacterTable = i916
  var i919 = i911[11]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.TMP_SpriteGlyph', i919[i + 0]));
  }
  i910.m_SpriteGlyphTable = i918
  return i910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i923 = data
  i922.name = i923[0]
  i922.hashCode = i923[1]
  i922.unicode = i923[2]
  i922.pivot = new pc.Vec2( i923[3], i923[4] )
  request.r(i923[5], i923[6], 0, i922, 'sprite')
  i922.id = i923[7]
  i922.x = i923[8]
  i922.y = i923[9]
  i922.width = i923[10]
  i922.height = i923[11]
  i922.xOffset = i923[12]
  i922.yOffset = i923[13]
  i922.xAdvance = i923[14]
  i922.scale = i923[15]
  return i922
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i927 = data
  i926.m_FaceIndex = i927[0]
  i926.m_FamilyName = i927[1]
  i926.m_StyleName = i927[2]
  i926.m_PointSize = i927[3]
  i926.m_Scale = i927[4]
  i926.m_UnitsPerEM = i927[5]
  i926.m_LineHeight = i927[6]
  i926.m_AscentLine = i927[7]
  i926.m_CapLine = i927[8]
  i926.m_MeanLine = i927[9]
  i926.m_Baseline = i927[10]
  i926.m_DescentLine = i927[11]
  i926.m_SuperscriptOffset = i927[12]
  i926.m_SuperscriptSize = i927[13]
  i926.m_SubscriptOffset = i927[14]
  i926.m_SubscriptSize = i927[15]
  i926.m_UnderlineOffset = i927[16]
  i926.m_UnderlineThickness = i927[17]
  i926.m_StrikethroughOffset = i927[18]
  i926.m_StrikethroughThickness = i927[19]
  i926.m_TabWidth = i927[20]
  return i926
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i931 = data
  i930.m_Name = i931[0]
  i930.m_HashCode = i931[1]
  i930.m_ElementType = i931[2]
  i930.m_Unicode = i931[3]
  i930.m_GlyphIndex = i931[4]
  i930.m_Scale = i931[5]
  return i930
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'sprite')
  i934.m_Index = i935[2]
  i934.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i935[3], i934.m_Metrics)
  i934.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i935[4], i934.m_GlyphRect)
  i934.m_Scale = i935[5]
  i934.m_AtlasIndex = i935[6]
  i934.m_ClassDefinitionType = i935[7]
  return i934
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i937 = data
  i936.m_Width = i937[0]
  i936.m_Height = i937[1]
  i936.m_HorizontalBearingX = i937[2]
  i936.m_HorizontalBearingY = i937[3]
  i936.m_HorizontalAdvance = i937[4]
  return i936
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i939 = data
  i938.m_X = i939[0]
  i938.m_Y = i939[1]
  i938.m_Width = i939[2]
  i938.m_Height = i939[3]
  return i938
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.TMP_Style', i943[i + 0]));
  }
  i940.m_StyleList = i942
  return i940
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Style' )
  var i947 = data
  i946.m_Name = i947[0]
  i946.m_HashCode = i947[1]
  i946.m_OpeningDefinition = i947[2]
  i946.m_ClosingDefinition = i947[3]
  i946.m_OpeningTagArray = i947[4]
  i946.m_ClosingTagArray = i947[5]
  i946.m_OpeningTagUnicodeArray = i947[6]
  i946.m_ClosingTagUnicodeArray = i947[7]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i951[i + 0]) );
  }
  i948.files = i950
  i948.componentToPrefabIds = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i955 = data
  i954.path = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'unityObject')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i959[i + 0]) );
  }
  i956.scriptsExecutionOrder = i958
  var i961 = i957[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i961[i + 0]) );
  }
  i956.sortingLayers = i960
  var i963 = i957[2]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i963[i + 0]) );
  }
  i956.cullingLayers = i962
  i956.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i957[3], i956.timeSettings)
  i956.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i957[4], i956.physicsSettings)
  i956.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i957[5], i956.physics2DSettings)
  i956.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i957[6], i956.qualitySettings)
  i956.enableRealtimeShadows = !!i957[7]
  i956.enableAutoInstancing = !!i957[8]
  i956.enableDynamicBatching = !!i957[9]
  i956.lightmapEncodingQuality = i957[10]
  i956.desiredColorSpace = i957[11]
  var i965 = i957[12]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i956.allTags = i964
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i969 = data
  i968.name = i969[0]
  i968.value = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i973 = data
  i972.id = i973[0]
  i972.name = i973[1]
  i972.value = i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i977 = data
  i976.id = i977[0]
  i976.name = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i979 = data
  i978.fixedDeltaTime = i979[0]
  i978.maximumDeltaTime = i979[1]
  i978.timeScale = i979[2]
  i978.maximumParticleTimestep = i979[3]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i981 = data
  i980.gravity = new pc.Vec3( i981[0], i981[1], i981[2] )
  i980.defaultSolverIterations = i981[3]
  i980.bounceThreshold = i981[4]
  i980.autoSyncTransforms = !!i981[5]
  i980.autoSimulation = !!i981[6]
  var i983 = i981[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i983[i + 0]) );
  }
  i980.collisionMatrix = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i987 = data
  i986.enabled = !!i987[0]
  i986.layerId = i987[1]
  i986.otherLayerId = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'material')
  i988.gravity = new pc.Vec2( i989[2], i989[3] )
  i988.positionIterations = i989[4]
  i988.velocityIterations = i989[5]
  i988.velocityThreshold = i989[6]
  i988.maxLinearCorrection = i989[7]
  i988.maxAngularCorrection = i989[8]
  i988.maxTranslationSpeed = i989[9]
  i988.maxRotationSpeed = i989[10]
  i988.baumgarteScale = i989[11]
  i988.baumgarteTOIScale = i989[12]
  i988.timeToSleep = i989[13]
  i988.linearSleepTolerance = i989[14]
  i988.angularSleepTolerance = i989[15]
  i988.defaultContactOffset = i989[16]
  i988.autoSimulation = !!i989[17]
  i988.queriesHitTriggers = !!i989[18]
  i988.queriesStartInColliders = !!i989[19]
  i988.callbacksOnDisable = !!i989[20]
  i988.reuseCollisionCallbacks = !!i989[21]
  i988.autoSyncTransforms = !!i989[22]
  var i991 = i989[23]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i991[i + 0]) );
  }
  i988.collisionMatrix = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i995 = data
  i994.enabled = !!i995[0]
  i994.layerId = i995[1]
  i994.otherLayerId = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i999[i + 0]) );
  }
  i996.qualityLevels = i998
  var i1001 = i997[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i996.names = i1000
  i996.shadows = i997[2]
  i996.anisotropicFiltering = i997[3]
  i996.antiAliasing = i997[4]
  i996.lodBias = i997[5]
  i996.shadowCascades = i997[6]
  i996.shadowDistance = i997[7]
  i996.shadowmaskMode = i997[8]
  i996.shadowProjection = i997[9]
  i996.shadowResolution = i997[10]
  i996.softParticles = !!i997[11]
  i996.softVegetation = !!i997[12]
  i996.activeColorSpace = i997[13]
  i996.desiredColorSpace = i997[14]
  i996.masterTextureLimit = i997[15]
  i996.maxQueuedFrames = i997[16]
  i996.particleRaycastBudget = i997[17]
  i996.pixelLightCount = i997[18]
  i996.realtimeReflectionProbes = !!i997[19]
  i996.shadowCascade2Split = i997[20]
  i996.shadowCascade4Split = new pc.Vec3( i997[21], i997[22], i997[23] )
  i996.streamingMipmapsActive = !!i997[24]
  i996.vSyncCount = i997[25]
  i996.asyncUploadBufferSize = i997[26]
  i996.asyncUploadTimeSlice = i997[27]
  i996.billboardsFaceCameraPosition = !!i997[28]
  i996.shadowNearPlaneOffset = i997[29]
  i996.streamingMipmapsMemoryBudget = i997[30]
  i996.maximumLODLevel = i997[31]
  i996.streamingMipmapsAddAllCameras = !!i997[32]
  i996.streamingMipmapsMaxLevelReduction = i997[33]
  i996.streamingMipmapsRenderersPerFrame = i997[34]
  i996.resolutionScalingFixedDPIFactor = i997[35]
  i996.streamingMipmapsMaxFileIORequests = i997[36]
  i996.currentQualityLevel = i997[37]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1007 = data
  i1006.weight = i1007[0]
  i1006.vertices = i1007[1]
  i1006.normals = i1007[2]
  i1006.tangents = i1007[3]
  return i1006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[11],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[6],"82":[6],"83":[11],"84":[36],"85":[86],"87":[86],"24":[23],"14":[11],"88":[89],"90":[91],"92":[36,40],"93":[94],"95":[91],"96":[97],"98":[91],"99":[91],"100":[43],"101":[43],"102":[91],"103":[104],"105":[2],"106":[104],"107":[23],"108":[23],"27":[24],"30":[28,23],"109":[23],"26":[24],"110":[23],"111":[23],"112":[23],"113":[23],"114":[23],"115":[23],"116":[23],"117":[23],"118":[23],"119":[28,23],"120":[23],"121":[23],"122":[23],"123":[23],"31":[28,23],"124":[23],"125":[45],"126":[45],"46":[45],"127":[45],"128":[11],"129":[11],"130":[131],"132":[11],"133":[134],"135":[23],"136":[28,23],"37":[36],"94":[28,23],"137":[8,36],"91":[36],"42":[36,40],"138":[63],"139":[6],"39":[134],"140":[43],"141":[23],"142":[36,23],"143":[23,28],"144":[23],"145":[28,23],"146":[36],"147":[28,23],"148":[23],"149":[104]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ViewportHandler","DeviceOrientationDetection","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","LevelMap","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","ZoneSize","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","Pulse","SoundClick","King","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","UnityEngine.Mesh","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "9.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1942";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4824";

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

Deserializers.buildID = "bad090a4-c408-4466-b290-1afcc15911ec";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

