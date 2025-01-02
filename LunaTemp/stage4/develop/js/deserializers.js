var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointSpring' )
  var i499 = data
  i498.spring = i499[0]
  i498.damper = i499[1]
  i498.targetPosition = i499[2]
  return i498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor' )
  var i501 = data
  i500.m_TargetVelocity = i501[0]
  i500.m_Force = i501[1]
  i500.m_FreeSpin = i501[2]
  return i500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointLimits' )
  var i503 = data
  i502.m_Min = i503[0]
  i502.m_Max = i503[1]
  i502.m_Bounciness = i503[2]
  i502.m_BounceMinVelocity = i503[3]
  i502.m_ContactDistance = i503[4]
  i502.minBounce = i503[5]
  i502.maxBounce = i503[6]
  return i502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointDrive' )
  var i505 = data
  i504.m_PositionSpring = i505[0]
  i504.m_PositionDamper = i505[1]
  i504.m_MaximumForce = i505[2]
  i504.m_UseAcceleration = i505[3]
  return i504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i507 = data
  i506.m_Spring = i507[0]
  i506.m_Damper = i507[1]
  return i506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i509 = data
  i508.m_Limit = i509[0]
  i508.m_Bounciness = i509[1]
  i508.m_ContactDistance = i509[2]
  return i508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i511 = data
  i510.m_ExtremumSlip = i511[0]
  i510.m_ExtremumValue = i511[1]
  i510.m_AsymptoteSlip = i511[2]
  i510.m_AsymptoteValue = i511[3]
  i510.m_Stiffness = i511[4]
  return i510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i513 = data
  i512.m_LowerAngle = i513[0]
  i512.m_UpperAngle = i513[1]
  return i512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i515 = data
  i514.m_MotorSpeed = i515[0]
  i514.m_MaximumMotorTorque = i515[1]
  return i514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i517 = data
  i516.m_DampingRatio = i517[0]
  i516.m_Frequency = i517[1]
  i516.m_Angle = i517[2]
  return i516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i519 = data
  i518.m_LowerTranslation = i519[0]
  i518.m_UpperTranslation = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i520 = root || new pc.UnityMaterial()
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'shader')
  i520.renderQueue = i521[3]
  i520.enableInstancing = !!i521[4]
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i523[i + 0]) );
  }
  i520.floatParameters = i522
  var i525 = i521[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i525[i + 0]) );
  }
  i520.colorParameters = i524
  var i527 = i521[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i527[i + 0]) );
  }
  i520.vectorParameters = i526
  var i529 = i521[8]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i529[i + 0]) );
  }
  i520.textureParameters = i528
  var i531 = i521[9]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i531[i + 0]) );
  }
  i520.materialFlags = i530
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Color(i539[1], i539[2], i539[3], i539[4])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Vec4( i543[1], i543[2], i543[3], i543[4] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'value')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i551 = data
  i550.name = i551[0]
  i550.enabled = !!i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i553 = data
  i552.name = i553[0]
  i552.width = i553[1]
  i552.height = i553[2]
  i552.mipmapCount = i553[3]
  i552.anisoLevel = i553[4]
  i552.filterMode = i553[5]
  i552.hdr = !!i553[6]
  i552.format = i553[7]
  i552.wrapMode = i553[8]
  i552.alphaIsTransparency = !!i553[9]
  i552.alphaSource = i553[10]
  i552.graphicsFormat = i553[11]
  i552.sRGBTexture = !!i553[12]
  i552.desiredColorSpace = i553[13]
  i552.wrapU = i553[14]
  i552.wrapV = i553[15]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i555 = data
  i554.position = new pc.Vec3( i555[0], i555[1], i555[2] )
  i554.scale = new pc.Vec3( i555[3], i555[4], i555[5] )
  i554.rotation = new pc.Quat(i555[6], i555[7], i555[8], i555[9])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i557 = data
  i556.enabled = !!i557[0]
  request.r(i557[1], i557[2], 0, i556, 'sharedMaterial')
  var i559 = i557[3]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sharedMaterials = i558
  i556.receiveShadows = !!i557[4]
  i556.shadowCastingMode = i557[5]
  i556.sortingLayerID = i557[6]
  i556.sortingOrder = i557[7]
  i556.lightmapIndex = i557[8]
  i556.lightmapSceneIndex = i557[9]
  i556.lightmapScaleOffset = new pc.Vec4( i557[10], i557[11], i557[12], i557[13] )
  i556.lightProbeUsage = i557[14]
  i556.reflectionProbeUsage = i557[15]
  i556.color = new pc.Color(i557[16], i557[17], i557[18], i557[19])
  request.r(i557[20], i557[21], 0, i556, 'sprite')
  i556.flipX = !!i557[22]
  i556.flipY = !!i557[23]
  i556.drawMode = i557[24]
  i556.size = new pc.Vec2( i557[25], i557[26] )
  i556.tileMode = i557[27]
  i556.adaptiveModeThreshold = i557[28]
  i556.maskInteraction = i557[29]
  i556.spriteSortPoint = i557[30]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i563 = data
  i562.usedByComposite = !!i563[0]
  i562.autoTiling = !!i563[1]
  i562.size = new pc.Vec2( i563[2], i563[3] )
  i562.edgeRadius = i563[4]
  i562.enabled = !!i563[5]
  i562.isTrigger = !!i563[6]
  i562.usedByEffector = !!i563[7]
  i562.density = i563[8]
  i562.offset = new pc.Vec2( i563[9], i563[10] )
  request.r(i563[11], i563[12], 0, i562, 'material')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i565 = data
  i564.bodyType = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'material')
  i564.simulated = !!i565[3]
  i564.useAutoMass = !!i565[4]
  i564.mass = i565[5]
  i564.drag = i565[6]
  i564.angularDrag = i565[7]
  i564.gravityScale = i565[8]
  i564.collisionDetectionMode = i565[9]
  i564.sleepMode = i565[10]
  i564.constraints = i565[11]
  return i564
}

Deserializers["Pin"] = function (request, data, root) {
  var i566 = root || request.c( 'Pin' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'head')
  request.r(i567[2], i567[3], 0, i566, 'end')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i569 = data
  i568.name = i569[0]
  i568.tagId = i569[1]
  i568.enabled = !!i569[2]
  i568.isStatic = !!i569[3]
  i568.layer = i569[4]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i571 = data
  i570.radius = i571[0]
  i570.enabled = !!i571[1]
  i570.isTrigger = !!i571[2]
  i570.usedByEffector = !!i571[3]
  i570.density = i571[4]
  i570.offset = new pc.Vec2( i571[5], i571[6] )
  request.r(i571[7], i571[8], 0, i570, 'material')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'animatorController')
  request.r(i573[2], i573[3], 0, i572, 'avatar')
  i572.updateMode = i573[4]
  i572.hasTransformHierarchy = !!i573[5]
  i572.applyRootMotion = !!i573[6]
  var i575 = i573[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.humanBones = i574
  i572.enabled = !!i573[8]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i579 = data
  i578.name = i579[0]
  i578.halfPrecision = !!i579[1]
  i578.useUInt32IndexFormat = !!i579[2]
  i578.vertexCount = i579[3]
  i578.aabb = i579[4]
  var i581 = i579[5]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( !!i581[i + 0] );
  }
  i578.streams = i580
  i578.vertices = i579[6]
  var i583 = i579[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i583[i + 0]) );
  }
  i578.subMeshes = i582
  var i585 = i579[8]
  var i584 = []
  for(var i = 0; i < i585.length; i += 16) {
    i584.push( new pc.Mat4().setData(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3],  i585[i + 4], i585[i + 5], i585[i + 6], i585[i + 7],  i585[i + 8], i585[i + 9], i585[i + 10], i585[i + 11],  i585[i + 12], i585[i + 13], i585[i + 14], i585[i + 15]) );
  }
  i578.bindposes = i584
  var i587 = i579[9]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i587[i + 0]) );
  }
  i578.blendShapes = i586
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i593 = data
  i592.triangles = i593[0]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i599 = data
  i598.name = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i601[i + 0]) );
  }
  i598.frames = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  i604.usePhysicalProperties = !!i605[17]
  i604.focalLength = i605[18]
  i604.sensorSize = new pc.Vec2( i605[19], i605[20] )
  i604.lensShift = new pc.Vec2( i605[21], i605[22] )
  i604.gateFit = i605[23]
  i604.commandBufferCount = i605[24]
  i604.cameraType = i605[25]
  return i604
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i606 = root || request.c( 'ViewportHandler' )
  var i607 = data
  i606.wireColor = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.UnitsSize = i607[4]
  i606.constraint = i607[5]
  request.r(i607[6], i607[7], 0, i606, 'camera')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'clip')
  request.r(i609[2], i609[3], 0, i608, 'outputAudioMixerGroup')
  i608.playOnAwake = !!i609[4]
  i608.loop = !!i609[5]
  i608.time = i609[6]
  i608.volume = i609[7]
  i608.pitch = i609[8]
  i608.enabled = !!i609[9]
  return i608
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i610 = root || request.c( 'InputReceiver' )
  var i611 = data
  return i610
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i612 = root || request.c( 'CameraAnchor' )
  var i613 = data
  i612.anchorType = i613[0]
  i612.anchorOffset = new pc.Vec3( i613[1], i613[2], i613[3] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i615 = data
  i614.enabled = !!i615[0]
  i614.isTrigger = !!i615[1]
  i614.usedByEffector = !!i615[2]
  i614.density = i615[3]
  i614.offset = new pc.Vec2( i615[4], i615[5] )
  request.r(i615[6], i615[7], 0, i614, 'material')
  i614.edgeRadius = i615[8]
  var i617 = i615[9]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
    i616.push( new pc.Vec2( i617[i + 0], i617[i + 1] ) );
  }
  i614.points = i616
  i614.useAdjacentStartPoint = !!i615[10]
  i614.adjacentStartPoint = new pc.Vec2( i615[11], i615[12] )
  i614.useAdjacentEndPoint = !!i615[13]
  i614.adjacentEndPoint = new pc.Vec2( i615[14], i615[15] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i621 = data
  i620.enabled = !!i621[0]
  i620.isTrigger = !!i621[1]
  i620.usedByEffector = !!i621[2]
  i620.density = i621[3]
  i620.offset = new pc.Vec2( i621[4], i621[5] )
  request.r(i621[6], i621[7], 0, i620, 'material')
  i620.usedByComposite = !!i621[8]
  i620.autoTiling = !!i621[9]
  var i623 = i621[10]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
  var i625 = i623[i + 0]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
    i624.push( new pc.Vec2( i625[i + 0], i625[i + 1] ) );
  }
    i622.push( i624 );
  }
  i620.points = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i631 = data
  i630.pivot = new pc.Vec2( i631[0], i631[1] )
  i630.anchorMin = new pc.Vec2( i631[2], i631[3] )
  i630.anchorMax = new pc.Vec2( i631[4], i631[5] )
  i630.sizeDelta = new pc.Vec2( i631[6], i631[7] )
  i630.anchoredPosition3D = new pc.Vec3( i631[8], i631[9], i631[10] )
  i630.rotation = new pc.Quat(i631[11], i631[12], i631[13], i631[14])
  i630.scale = new pc.Vec3( i631[15], i631[16], i631[17] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.planeDistance = i633[1]
  i632.referencePixelsPerUnit = i633[2]
  i632.isFallbackOverlay = !!i633[3]
  i632.renderMode = i633[4]
  i632.renderOrder = i633[5]
  i632.sortingLayerName = i633[6]
  i632.sortingOrder = i633[7]
  i632.scaleFactor = i633[8]
  request.r(i633[9], i633[10], 0, i632, 'worldCamera')
  i632.overrideSorting = !!i633[11]
  i632.pixelPerfect = !!i633[12]
  i632.targetDisplay = i633[13]
  i632.overridePixelPerfect = !!i633[14]
  return i632
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i635 = data
  i634.m_UiScaleMode = i635[0]
  i634.m_ReferencePixelsPerUnit = i635[1]
  i634.m_ScaleFactor = i635[2]
  i634.m_ReferenceResolution = new pc.Vec2( i635[3], i635[4] )
  i634.m_ScreenMatchMode = i635[5]
  i634.m_MatchWidthOrHeight = i635[6]
  i634.m_PhysicalUnit = i635[7]
  i634.m_FallbackScreenDPI = i635[8]
  i634.m_DefaultSpriteDPI = i635[9]
  i634.m_DynamicPixelsPerUnit = i635[10]
  i634.m_PresetInfoIsWorld = !!i635[11]
  return i634
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i637 = data
  i636.m_IgnoreReversedGraphics = !!i637[0]
  i636.m_BlockingObjects = i637[1]
  i636.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i637[2] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i639 = data
  i638.cullTransparentMesh = !!i639[0]
  return i638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Image' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Sprite')
  i640.m_Type = i641[2]
  i640.m_PreserveAspect = !!i641[3]
  i640.m_FillCenter = !!i641[4]
  i640.m_FillMethod = i641[5]
  i640.m_FillAmount = i641[6]
  i640.m_FillClockwise = !!i641[7]
  i640.m_FillOrigin = i641[8]
  i640.m_UseSpriteMesh = !!i641[9]
  i640.m_PixelsPerUnitMultiplier = i641[10]
  request.r(i641[11], i641[12], 0, i640, 'm_Material')
  i640.m_Maskable = !!i641[13]
  i640.m_Color = new pc.Color(i641[14], i641[15], i641[16], i641[17])
  i640.m_RaycastTarget = !!i641[18]
  i640.m_RaycastPadding = new pc.Vec4( i641[19], i641[20], i641[21], i641[22] )
  return i640
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Text' )
  var i643 = data
  i642.m_FontData = request.d('UnityEngine.UI.FontData', i643[0], i642.m_FontData)
  i642.m_Text = i643[1]
  request.r(i643[2], i643[3], 0, i642, 'm_Material')
  i642.m_Maskable = !!i643[4]
  i642.m_Color = new pc.Color(i643[5], i643[6], i643[7], i643[8])
  i642.m_RaycastTarget = !!i643[9]
  i642.m_RaycastPadding = new pc.Vec4( i643[10], i643[11], i643[12], i643[13] )
  return i642
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.FontData' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Font')
  i644.m_FontSize = i645[2]
  i644.m_FontStyle = i645[3]
  i644.m_BestFit = !!i645[4]
  i644.m_MinSize = i645[5]
  i644.m_MaxSize = i645[6]
  i644.m_Alignment = i645[7]
  i644.m_AlignByGeometry = !!i645[8]
  i644.m_RichText = !!i645[9]
  i644.m_HorizontalOverflow = i645[10]
  i644.m_VerticalOverflow = i645[11]
  i644.m_LineSpacing = i645[12]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'additionalVertexStreams')
  i646.enabled = !!i647[2]
  request.r(i647[3], i647[4], 0, i646, 'sharedMaterial')
  var i649 = i647[5]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.sharedMaterials = i648
  i646.receiveShadows = !!i647[6]
  i646.shadowCastingMode = i647[7]
  i646.sortingLayerID = i647[8]
  i646.sortingOrder = i647[9]
  i646.lightmapIndex = i647[10]
  i646.lightmapSceneIndex = i647[11]
  i646.lightmapScaleOffset = new pc.Vec4( i647[12], i647[13], i647[14], i647[15] )
  i646.lightProbeUsage = i647[16]
  i646.reflectionProbeUsage = i647[17]
  return i646
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i650 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i651 = data
  i650.loop = !!i651[0]
  i650.timeScale = i651[1]
  request.r(i651[2], i651[3], 0, i650, 'skeletonDataAsset')
  i650.initialSkinName = i651[4]
  i650.fixPrefabOverrideViaMeshFilter = i651[5]
  i650.initialFlipX = !!i651[6]
  i650.initialFlipY = !!i651[7]
  i650.updateWhenInvisible = i651[8]
  i650.zSpacing = i651[9]
  i650.useClipping = !!i651[10]
  i650.immutableTriangles = !!i651[11]
  i650.pmaVertexColors = !!i651[12]
  i650.clearStateOnDisable = !!i651[13]
  i650.tintBlack = !!i651[14]
  i650.singleSubmesh = !!i651[15]
  i650.fixDrawOrder = !!i651[16]
  i650.addNormals = !!i651[17]
  i650.calculateTangents = !!i651[18]
  i650.maskInteraction = i651[19]
  i650.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i651[20], i650.maskMaterials)
  i650.disableRenderingOnOverride = !!i651[21]
  i650.updateTiming = i651[22]
  i650.unscaledTime = !!i651[23]
  i650._animationName = i651[24]
  var i653 = i651[25]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i650.separatorSlotNames = i652
  return i650
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i654 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i655 = data
  var i657 = i655[0]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.materialsMaskDisabled = i656
  var i659 = i655[1]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i654.materialsInsideMask = i658
  var i661 = i655[2]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i654.materialsOutsideMask = i660
  return i654
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i664 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'boneRoot')
  i664.flipBy180DegreeRotation = !!i665[2]
  request.r(i665[3], i665[4], 0, i664, 'skeletonRenderer')
  request.r(i665[5], i665[6], 0, i664, 'skeletonGraphic')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'sharedMesh')
  return i666
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i668 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i669 = data
  i668.copyPropertyBlock = !!i669[0]
  i668.copyMeshRendererFlags = !!i669[1]
  var i671 = i669[2]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 1, i670, '')
  }
  i668.partsRenderers = i670
  request.r(i669[3], i669[4], 0, i668, 'skeletonRenderer')
  return i668
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i674 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i675 = data
  i674.boneName = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'parentReference')
  i674.mode = i675[3]
  i674.position = !!i675[4]
  i674.rotation = !!i675[5]
  i674.scale = !!i675[6]
  i674.zPosition = !!i675[7]
  i674.overrideAlpha = i675[8]
  request.r(i675[9], i675[10], 0, i674, 'hierarchy')
  return i674
}

Deserializers["Bag"] = function (request, data, root) {
  var i676 = root || request.c( 'Bag' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'model')
  request.r(i677[2], i677[3], 0, i676, 'idlePosition')
  request.r(i677[4], i677[5], 0, i676, 'winPosition')
  request.r(i677[6], i677[7], 0, i676, 'losePosition')
  return i676
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i678 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i679 = data
  return i678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_FirstSelected')
  i680.m_sendNavigationEvents = !!i681[2]
  i680.m_DragThreshold = i681[3]
  return i680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i683 = data
  i682.m_HorizontalAxis = i683[0]
  i682.m_VerticalAxis = i683[1]
  i682.m_SubmitButton = i683[2]
  i682.m_CancelButton = i683[3]
  i682.m_InputActionsPerSecond = i683[4]
  i682.m_RepeatDelay = i683[5]
  i682.m_ForceModuleActive = !!i683[6]
  i682.m_SendPointerHoverToParent = !!i683[7]
  return i682
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i684 = root || request.c( 'SoundClick' )
  var i685 = data
  i684.loopTime = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'sound')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i687 = data
  i686.ambientIntensity = i687[0]
  i686.reflectionIntensity = i687[1]
  i686.ambientMode = i687[2]
  i686.ambientLight = new pc.Color(i687[3], i687[4], i687[5], i687[6])
  i686.ambientSkyColor = new pc.Color(i687[7], i687[8], i687[9], i687[10])
  i686.ambientGroundColor = new pc.Color(i687[11], i687[12], i687[13], i687[14])
  i686.ambientEquatorColor = new pc.Color(i687[15], i687[16], i687[17], i687[18])
  i686.fogColor = new pc.Color(i687[19], i687[20], i687[21], i687[22])
  i686.fogEndDistance = i687[23]
  i686.fogStartDistance = i687[24]
  i686.fogDensity = i687[25]
  i686.fog = !!i687[26]
  request.r(i687[27], i687[28], 0, i686, 'skybox')
  i686.fogMode = i687[29]
  var i689 = i687[30]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i689[i + 0]) );
  }
  i686.lightmaps = i688
  i686.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i687[31], i686.lightProbes)
  i686.lightmapsMode = i687[32]
  i686.mixedBakeMode = i687[33]
  i686.environmentLightingMode = i687[34]
  i686.ambientProbe = new pc.SphericalHarmonicsL2(i687[35])
  i686.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i687[36])
  i686.useReferenceAmbientProbe = !!i687[37]
  request.r(i687[38], i687[39], 0, i686, 'customReflection')
  request.r(i687[40], i687[41], 0, i686, 'defaultReflection')
  i686.defaultReflectionMode = i687[42]
  i686.defaultReflectionResolution = i687[43]
  i686.sunLightObjectId = i687[44]
  i686.pixelLightCount = i687[45]
  i686.defaultReflectionHDR = !!i687[46]
  i686.hasLightDataAsset = !!i687[47]
  i686.hasManualGenerate = !!i687[48]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'lightmapColor')
  request.r(i693[2], i693[3], 0, i692, 'lightmapDirection')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i694 = root || new UnityEngine.LightProbes()
  var i695 = data
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i703 = data
  var i705 = i703[0]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i705.length; i += 1) {
    i704.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i705[i + 0]));
  }
  i702.ShaderCompilationErrors = i704
  i702.name = i703[1]
  i702.guid = i703[2]
  var i707 = i703[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i702.shaderDefinedKeywords = i706
  var i709 = i703[4]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i709[i + 0]) );
  }
  i702.passes = i708
  var i711 = i703[5]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i711[i + 0]) );
  }
  i702.usePasses = i710
  var i713 = i703[6]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i713[i + 0]) );
  }
  i702.defaultParameterValues = i712
  request.r(i703[7], i703[8], 0, i702, 'unityFallbackShader')
  i702.readDepth = !!i703[9]
  i702.isCreatedByShaderGraph = !!i703[10]
  i702.compiled = !!i703[11]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i717 = data
  i716.shaderName = i717[0]
  i716.errorMessage = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i720 = root || new pc.UnityShaderPass()
  var i721 = data
  i720.id = i721[0]
  i720.subShaderIndex = i721[1]
  i720.name = i721[2]
  i720.passType = i721[3]
  i720.grabPassTextureName = i721[4]
  i720.usePass = !!i721[5]
  i720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[6], i720.zTest)
  i720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[7], i720.zWrite)
  i720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[8], i720.culling)
  i720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[9], i720.blending)
  i720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[10], i720.alphaBlending)
  i720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[11], i720.colorWriteMask)
  i720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[12], i720.offsetUnits)
  i720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[13], i720.offsetFactor)
  i720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[14], i720.stencilRef)
  i720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[15], i720.stencilReadMask)
  i720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[16], i720.stencilWriteMask)
  i720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[17], i720.stencilOp)
  i720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[18], i720.stencilOpFront)
  i720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[19], i720.stencilOpBack)
  var i723 = i721[20]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i723[i + 0]) );
  }
  i720.tags = i722
  var i725 = i721[21]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.passDefinedKeywords = i724
  var i727 = i721[22]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i727[i + 0]) );
  }
  i720.passDefinedKeywordGroups = i726
  var i729 = i721[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i720.variants = i728
  var i731 = i721[24]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i731[i + 0]) );
  }
  i720.excludedVariants = i730
  i720.hasDepthReader = !!i721[25]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i733 = data
  i732.val = i733[0]
  i732.name = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i735 = data
  i734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.src)
  i734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.dst)
  i734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.op)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i737 = data
  i736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[0], i736.pass)
  i736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[1], i736.fail)
  i736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[2], i736.zFail)
  i736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[3], i736.comp)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.hasDiscard = !!i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i751 = data
  i750.passId = i751[0]
  i750.subShaderIndex = i751[1]
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.vertexProgram = i751[3]
  i750.fragmentProgram = i751[4]
  i750.exportedForWebGl2 = !!i751[5]
  i750.readDepth = !!i751[6]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'shader')
  i756.pass = i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i761 = data
  i760.name = i761[0]
  i760.type = i761[1]
  i760.value = new pc.Vec4( i761[2], i761[3], i761[4], i761[5] )
  i760.textureValue = i761[6]
  i760.shaderPropertyFlag = i761[7]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'texture')
  i762.aabb = i763[3]
  i762.vertices = i763[4]
  i762.triangles = i763[5]
  i762.textureRect = UnityEngine.Rect.MinMaxRect(i763[6], i763[7], i763[8], i763[9])
  i762.packedRect = UnityEngine.Rect.MinMaxRect(i763[10], i763[11], i763[12], i763[13])
  i762.border = new pc.Vec4( i763[14], i763[15], i763[16], i763[17] )
  i762.transparency = i763[18]
  i762.bounds = i763[19]
  i762.pixelsPerUnit = i763[20]
  i762.textureWidth = i763[21]
  i762.textureHeight = i763[22]
  i762.nativeSize = new pc.Vec2( i763[23], i763[24] )
  i762.pivot = new pc.Vec2( i763[25], i763[26] )
  i762.textureRectOffset = new pc.Vec2( i763[27], i763[28] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i765 = data
  i764.name = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i767 = data
  i766.name = i767[0]
  i766.wrapMode = i767[1]
  i766.isLooping = !!i767[2]
  i766.length = i767[3]
  var i769 = i767[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i769[i + 0]) );
  }
  i766.curves = i768
  var i771 = i767[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i771[i + 0]) );
  }
  i766.events = i770
  i766.halfPrecision = !!i767[6]
  i766._frameRate = i767[7]
  i766.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i767[8], i766.localBounds)
  i766.hasMuscleCurves = !!i767[9]
  var i773 = i767[10]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i766.clipMuscleConstant = i772
  i766.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i767[11], i766.clipBindingConstant)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i777 = data
  i776.path = i777[0]
  i776.hash = i777[1]
  i776.componentType = i777[2]
  i776.property = i777[3]
  i776.keys = i777[4]
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i779[i + 0]) );
  }
  i776.objectReferenceKeys = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i783 = data
  i782.time = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'value')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i787 = data
  i786.functionName = i787[0]
  i786.floatParameter = i787[1]
  i786.intParameter = i787[2]
  i786.stringParameter = i787[3]
  request.r(i787[4], i787[5], 0, i786, 'objectReferenceParameter')
  i786.time = i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i789 = data
  i788.center = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.extends = new pc.Vec3( i789[3], i789[4], i789[5] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.genericBindings = i794
  var i797 = i793[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.pptrCurveMapping = i796
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i799 = data
  i798.name = i799[0]
  i798.ascent = i799[1]
  i798.originalLineHeight = i799[2]
  i798.fontSize = i799[3]
  var i801 = i799[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i801[i + 0]) );
  }
  i798.characterInfo = i800
  request.r(i799[5], i799[6], 0, i798, 'texture')
  i798.originalFontSize = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i805 = data
  i804.index = i805[0]
  i804.advance = i805[1]
  i804.bearing = i805[2]
  i804.glyphWidth = i805[3]
  i804.glyphHeight = i805[4]
  i804.minX = i805[5]
  i804.maxX = i805[6]
  i804.minY = i805[7]
  i804.maxY = i805[8]
  i804.uvBottomLeftX = i805[9]
  i804.uvBottomLeftY = i805[10]
  i804.uvBottomRightX = i805[11]
  i804.uvBottomRightY = i805[12]
  i804.uvTopLeftX = i805[13]
  i804.uvTopLeftY = i805[14]
  i804.uvTopRightX = i805[15]
  i804.uvTopRightY = i805[16]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i807 = data
  i806.name = i807[0]
  var i809 = i807[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i809[i + 0]) );
  }
  i806.layers = i808
  var i811 = i807[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i811[i + 0]) );
  }
  i806.parameters = i810
  i806.animationClips = i807[3]
  i806.avatarUnsupported = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i815 = data
  i814.name = i815[0]
  i814.defaultWeight = i815[1]
  i814.blendingMode = i815[2]
  i814.avatarMask = i815[3]
  i814.syncedLayerIndex = i815[4]
  i814.syncedLayerAffectsTiming = !!i815[5]
  i814.syncedLayers = i815[6]
  i814.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i815[7], i814.stateMachine)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.path = i817[2]
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i819[i + 0]) );
  }
  i816.states = i818
  var i821 = i817[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i821[i + 0]) );
  }
  i816.machines = i820
  var i823 = i817[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i823[i + 0]) );
  }
  i816.entryStateTransitions = i822
  var i825 = i817[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i825[i + 0]) );
  }
  i816.exitStateTransitions = i824
  var i827 = i817[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i827[i + 0]) );
  }
  i816.anyStateTransitions = i826
  i816.defaultStateId = i817[8]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  i830.cycleOffset = i831[2]
  i830.cycleOffsetParameter = i831[3]
  i830.cycleOffsetParameterActive = !!i831[4]
  i830.mirror = !!i831[5]
  i830.mirrorParameter = i831[6]
  i830.mirrorParameterActive = !!i831[7]
  i830.motionId = i831[8]
  i830.nameHash = i831[9]
  i830.fullPathHash = i831[10]
  i830.speed = i831[11]
  i830.speedParameter = i831[12]
  i830.speedParameterActive = !!i831[13]
  i830.tag = i831[14]
  i830.tagHash = i831[15]
  i830.writeDefaultValues = !!i831[16]
  var i833 = i831[17]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.behaviours = i832
  var i835 = i831[18]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i830.transitions = i834
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateId = i841[9]
  i840.isExit = !!i841[10]
  i840.mute = !!i841[11]
  i840.solo = !!i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i849 = data
  i848.destinationStateId = i849[0]
  i848.isExit = !!i849[1]
  i848.mute = !!i849[2]
  i848.solo = !!i849[3]
  var i851 = i849[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i851[i + 0]) );
  }
  i848.conditions = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i855 = data
  i854.mode = i855[0]
  i854.parameter = i855[1]
  i854.threshold = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i859 = data
  i858.defaultBool = !!i859[0]
  i858.defaultFloat = i859[1]
  i858.defaultInt = i859[2]
  i858.name = i859[3]
  i858.nameHash = i859[4]
  i858.type = i859[5]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i861 = data
  i860.name = i861[0]
  i860.bytes64 = i861[1]
  i860.data = i861[2]
  return i860
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i862 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.atlasAssets = i864
  i862.scale = i863[1]
  request.r(i863[2], i863[3], 0, i862, 'skeletonJSON')
  i862.isUpgradingBlendModeMaterials = !!i863[4]
  i862.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i863[5], i862.blendModeMaterials)
  var i867 = i863[6]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i862.skeletonDataModifiers = i866
  var i869 = i863[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i862.fromAnimation = i868
  var i871 = i863[8]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i862.toAnimation = i870
  i862.duration = i863[9]
  i862.defaultMix = i863[10]
  request.r(i863[11], i863[12], 0, i862, 'controller')
  return i862
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i874 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i875 = data
  i874.applyAdditiveMaterial = !!i875[0]
  var i877 = i875[1]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i877[i + 0]));
  }
  i874.additiveMaterials = i876
  var i879 = i875[2]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i879[i + 0]));
  }
  i874.multiplyMaterials = i878
  var i881 = i875[3]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i881[i + 0]));
  }
  i874.screenMaterials = i880
  i874.requiresBlendModeMaterials = !!i875[4]
  return i874
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i884 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i885 = data
  i884.pageName = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'material')
  return i884
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i888 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'atlasFile')
  var i891 = i889[2]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.materials = i890
  i888.textureLoadingMode = i889[3]
  request.r(i889[4], i889[5], 0, i888, 'onDemandTextureLoader')
  return i888
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_Settings' )
  var i893 = data
  i892.m_enableWordWrapping = !!i893[0]
  i892.m_enableKerning = !!i893[1]
  i892.m_enableExtraPadding = !!i893[2]
  i892.m_enableTintAllSprites = !!i893[3]
  i892.m_enableParseEscapeCharacters = !!i893[4]
  i892.m_EnableRaycastTarget = !!i893[5]
  i892.m_GetFontFeaturesAtRuntime = !!i893[6]
  i892.m_missingGlyphCharacter = i893[7]
  i892.m_warningsDisabled = !!i893[8]
  request.r(i893[9], i893[10], 0, i892, 'm_defaultFontAsset')
  i892.m_defaultFontAssetPath = i893[11]
  i892.m_defaultFontSize = i893[12]
  i892.m_defaultAutoSizeMinRatio = i893[13]
  i892.m_defaultAutoSizeMaxRatio = i893[14]
  i892.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i893[15], i893[16] )
  i892.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i893[17], i893[18] )
  i892.m_autoSizeTextContainer = !!i893[19]
  i892.m_IsTextObjectScaleStatic = !!i893[20]
  var i895 = i893[21]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i892.m_fallbackFontAssets = i894
  i892.m_matchMaterialPreset = !!i893[22]
  request.r(i893[23], i893[24], 0, i892, 'm_defaultSpriteAsset')
  i892.m_defaultSpriteAssetPath = i893[25]
  i892.m_enableEmojiSupport = !!i893[26]
  i892.m_MissingCharacterSpriteUnicode = i893[27]
  i892.m_defaultColorGradientPresetsPath = i893[28]
  request.r(i893[29], i893[30], 0, i892, 'm_defaultStyleSheet')
  i892.m_StyleSheetsResourcePath = i893[31]
  request.r(i893[32], i893[33], 0, i892, 'm_leadingCharacters')
  request.r(i893[34], i893[35], 0, i892, 'm_followingCharacters')
  i892.m_UseModernHangulLineBreakingRules = !!i893[36]
  return i892
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i899 = data
  i898.hashCode = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'material')
  i898.materialHashCode = i899[3]
  request.r(i899[4], i899[5], 0, i898, 'spriteSheet')
  var i901 = i899[6]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Sprite', i901[i + 0]));
  }
  i898.spriteInfoList = i900
  var i903 = i899[7]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i898.fallbackSpriteAssets = i902
  i898.m_Version = i899[8]
  i898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i899[9], i898.m_FaceInfo)
  var i905 = i899[10]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_SpriteCharacter', i905[i + 0]));
  }
  i898.m_SpriteCharacterTable = i904
  var i907 = i899[11]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_SpriteGlyph', i907[i + 0]));
  }
  i898.m_SpriteGlyphTable = i906
  return i898
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_Sprite' )
  var i911 = data
  i910.name = i911[0]
  i910.hashCode = i911[1]
  i910.unicode = i911[2]
  i910.pivot = new pc.Vec2( i911[3], i911[4] )
  request.r(i911[5], i911[6], 0, i910, 'sprite')
  i910.id = i911[7]
  i910.x = i911[8]
  i910.y = i911[9]
  i910.width = i911[10]
  i910.height = i911[11]
  i910.xOffset = i911[12]
  i910.yOffset = i911[13]
  i910.xAdvance = i911[14]
  i910.scale = i911[15]
  return i910
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i915 = data
  i914.m_FaceIndex = i915[0]
  i914.m_FamilyName = i915[1]
  i914.m_StyleName = i915[2]
  i914.m_PointSize = i915[3]
  i914.m_Scale = i915[4]
  i914.m_UnitsPerEM = i915[5]
  i914.m_LineHeight = i915[6]
  i914.m_AscentLine = i915[7]
  i914.m_CapLine = i915[8]
  i914.m_MeanLine = i915[9]
  i914.m_Baseline = i915[10]
  i914.m_DescentLine = i915[11]
  i914.m_SuperscriptOffset = i915[12]
  i914.m_SuperscriptSize = i915[13]
  i914.m_SubscriptOffset = i915[14]
  i914.m_SubscriptSize = i915[15]
  i914.m_UnderlineOffset = i915[16]
  i914.m_UnderlineThickness = i915[17]
  i914.m_StrikethroughOffset = i915[18]
  i914.m_StrikethroughThickness = i915[19]
  i914.m_TabWidth = i915[20]
  return i914
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i919 = data
  i918.m_Name = i919[0]
  i918.m_HashCode = i919[1]
  i918.m_ElementType = i919[2]
  i918.m_Unicode = i919[3]
  i918.m_GlyphIndex = i919[4]
  i918.m_Scale = i919[5]
  return i918
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'sprite')
  i922.m_Index = i923[2]
  i922.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i923[3], i922.m_Metrics)
  i922.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i923[4], i922.m_GlyphRect)
  i922.m_Scale = i923[5]
  i922.m_AtlasIndex = i923[6]
  i922.m_ClassDefinitionType = i923[7]
  return i922
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i925 = data
  i924.m_Width = i925[0]
  i924.m_Height = i925[1]
  i924.m_HorizontalBearingX = i925[2]
  i924.m_HorizontalBearingY = i925[3]
  i924.m_HorizontalAdvance = i925[4]
  return i924
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i927 = data
  i926.m_X = i927[0]
  i926.m_Y = i927[1]
  i926.m_Width = i927[2]
  i926.m_Height = i927[3]
  return i926
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('TMPro.TMP_Style', i931[i + 0]));
  }
  i928.m_StyleList = i930
  return i928
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_Style' )
  var i935 = data
  i934.m_Name = i935[0]
  i934.m_HashCode = i935[1]
  i934.m_OpeningDefinition = i935[2]
  i934.m_ClosingDefinition = i935[3]
  i934.m_OpeningTagArray = i935[4]
  i934.m_ClosingTagArray = i935[5]
  i934.m_OpeningTagUnicodeArray = i935[6]
  i934.m_ClosingTagUnicodeArray = i935[7]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i939[i + 0]) );
  }
  i936.files = i938
  i936.componentToPrefabIds = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i943 = data
  i942.path = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'unityObject')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i947[i + 0]) );
  }
  i944.scriptsExecutionOrder = i946
  var i949 = i945[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i949[i + 0]) );
  }
  i944.sortingLayers = i948
  var i951 = i945[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i951[i + 0]) );
  }
  i944.cullingLayers = i950
  i944.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i945[3], i944.timeSettings)
  i944.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i945[4], i944.physicsSettings)
  i944.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i945[5], i944.physics2DSettings)
  i944.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i945[6], i944.qualitySettings)
  i944.enableRealtimeShadows = !!i945[7]
  i944.enableAutoInstancing = !!i945[8]
  i944.enableDynamicBatching = !!i945[9]
  i944.lightmapEncodingQuality = i945[10]
  i944.desiredColorSpace = i945[11]
  var i953 = i945[12]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i944.allTags = i952
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i957 = data
  i956.name = i957[0]
  i956.value = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i961 = data
  i960.id = i961[0]
  i960.name = i961[1]
  i960.value = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i965 = data
  i964.id = i965[0]
  i964.name = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i967 = data
  i966.fixedDeltaTime = i967[0]
  i966.maximumDeltaTime = i967[1]
  i966.timeScale = i967[2]
  i966.maximumParticleTimestep = i967[3]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i969 = data
  i968.gravity = new pc.Vec3( i969[0], i969[1], i969[2] )
  i968.defaultSolverIterations = i969[3]
  i968.bounceThreshold = i969[4]
  i968.autoSyncTransforms = !!i969[5]
  i968.autoSimulation = !!i969[6]
  var i971 = i969[7]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i971[i + 0]) );
  }
  i968.collisionMatrix = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i975 = data
  i974.enabled = !!i975[0]
  i974.layerId = i975[1]
  i974.otherLayerId = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'material')
  i976.gravity = new pc.Vec2( i977[2], i977[3] )
  i976.positionIterations = i977[4]
  i976.velocityIterations = i977[5]
  i976.velocityThreshold = i977[6]
  i976.maxLinearCorrection = i977[7]
  i976.maxAngularCorrection = i977[8]
  i976.maxTranslationSpeed = i977[9]
  i976.maxRotationSpeed = i977[10]
  i976.baumgarteScale = i977[11]
  i976.baumgarteTOIScale = i977[12]
  i976.timeToSleep = i977[13]
  i976.linearSleepTolerance = i977[14]
  i976.angularSleepTolerance = i977[15]
  i976.defaultContactOffset = i977[16]
  i976.autoSimulation = !!i977[17]
  i976.queriesHitTriggers = !!i977[18]
  i976.queriesStartInColliders = !!i977[19]
  i976.callbacksOnDisable = !!i977[20]
  i976.reuseCollisionCallbacks = !!i977[21]
  i976.autoSyncTransforms = !!i977[22]
  var i979 = i977[23]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i979[i + 0]) );
  }
  i976.collisionMatrix = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i983 = data
  i982.enabled = !!i983[0]
  i982.layerId = i983[1]
  i982.otherLayerId = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[i + 0]) );
  }
  i984.qualityLevels = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.names = i988
  i984.shadows = i985[2]
  i984.anisotropicFiltering = i985[3]
  i984.antiAliasing = i985[4]
  i984.lodBias = i985[5]
  i984.shadowCascades = i985[6]
  i984.shadowDistance = i985[7]
  i984.shadowmaskMode = i985[8]
  i984.shadowProjection = i985[9]
  i984.shadowResolution = i985[10]
  i984.softParticles = !!i985[11]
  i984.softVegetation = !!i985[12]
  i984.activeColorSpace = i985[13]
  i984.desiredColorSpace = i985[14]
  i984.masterTextureLimit = i985[15]
  i984.maxQueuedFrames = i985[16]
  i984.particleRaycastBudget = i985[17]
  i984.pixelLightCount = i985[18]
  i984.realtimeReflectionProbes = !!i985[19]
  i984.shadowCascade2Split = i985[20]
  i984.shadowCascade4Split = new pc.Vec3( i985[21], i985[22], i985[23] )
  i984.streamingMipmapsActive = !!i985[24]
  i984.vSyncCount = i985[25]
  i984.asyncUploadBufferSize = i985[26]
  i984.asyncUploadTimeSlice = i985[27]
  i984.billboardsFaceCameraPosition = !!i985[28]
  i984.shadowNearPlaneOffset = i985[29]
  i984.streamingMipmapsMemoryBudget = i985[30]
  i984.maximumLODLevel = i985[31]
  i984.streamingMipmapsAddAllCameras = !!i985[32]
  i984.streamingMipmapsMaxLevelReduction = i985[33]
  i984.streamingMipmapsRenderersPerFrame = i985[34]
  i984.resolutionScalingFixedDPIFactor = i985[35]
  i984.streamingMipmapsMaxFileIORequests = i985[36]
  i984.currentQualityLevel = i985[37]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i995 = data
  i994.weight = i995[0]
  i994.vertices = i995[1]
  i994.normals = i995[2]
  i994.tangents = i995[3]
  return i994
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[31],"82":[83],"84":[83],"23":[22],"15":[13],"85":[86],"87":[88],"89":[31,35],"90":[91],"92":[88],"93":[94],"95":[88],"96":[88],"97":[38],"98":[38],"99":[88],"100":[101],"102":[2],"103":[101],"104":[22],"105":[22],"26":[23],"28":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"29":[27,22],"121":[22],"122":[40],"123":[40],"41":[40],"124":[40],"125":[13],"126":[13],"127":[128],"129":[13],"130":[131],"132":[22],"133":[27,22],"32":[31],"91":[27,22],"134":[10,31],"88":[31],"37":[31,35],"135":[60],"136":[6],"34":[131],"137":[38],"138":[22],"139":[31,22],"140":[22,27],"141":[22],"142":[27,22],"143":[31],"144":[27,22],"145":[22],"146":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Mesh","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "1.8";

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

Deserializers.buildID = "fc70f1b3-fcb0-473a-8ce6-2a8dc332d261";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

