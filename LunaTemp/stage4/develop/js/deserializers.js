var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  i478.m_UseAcceleration = i479[3]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i527 = data
  i526.name = i527[0]
  i526.width = i527[1]
  i526.height = i527[2]
  i526.mipmapCount = i527[3]
  i526.anisoLevel = i527[4]
  i526.filterMode = i527[5]
  i526.hdr = !!i527[6]
  i526.format = i527[7]
  i526.wrapMode = i527[8]
  i526.alphaIsTransparency = !!i527[9]
  i526.alphaSource = i527[10]
  i526.graphicsFormat = i527[11]
  i526.sRGBTexture = !!i527[12]
  i526.desiredColorSpace = i527[13]
  i526.wrapU = i527[14]
  i526.wrapV = i527[15]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i531 = data
  i530.enabled = !!i531[0]
  request.r(i531[1], i531[2], 0, i530, 'sharedMaterial')
  var i533 = i531[3]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sharedMaterials = i532
  i530.receiveShadows = !!i531[4]
  i530.shadowCastingMode = i531[5]
  i530.sortingLayerID = i531[6]
  i530.sortingOrder = i531[7]
  i530.lightmapIndex = i531[8]
  i530.lightmapSceneIndex = i531[9]
  i530.lightmapScaleOffset = new pc.Vec4( i531[10], i531[11], i531[12], i531[13] )
  i530.lightProbeUsage = i531[14]
  i530.reflectionProbeUsage = i531[15]
  i530.color = new pc.Color(i531[16], i531[17], i531[18], i531[19])
  request.r(i531[20], i531[21], 0, i530, 'sprite')
  i530.flipX = !!i531[22]
  i530.flipY = !!i531[23]
  i530.drawMode = i531[24]
  i530.size = new pc.Vec2( i531[25], i531[26] )
  i530.tileMode = i531[27]
  i530.adaptiveModeThreshold = i531[28]
  i530.maskInteraction = i531[29]
  i530.spriteSortPoint = i531[30]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i537 = data
  i536.usedByComposite = !!i537[0]
  i536.autoTiling = !!i537[1]
  i536.size = new pc.Vec2( i537[2], i537[3] )
  i536.edgeRadius = i537[4]
  i536.enabled = !!i537[5]
  i536.isTrigger = !!i537[6]
  i536.usedByEffector = !!i537[7]
  i536.density = i537[8]
  i536.offset = new pc.Vec2( i537[9], i537[10] )
  request.r(i537[11], i537[12], 0, i536, 'material')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i539 = data
  i538.bodyType = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'material')
  i538.simulated = !!i539[3]
  i538.useAutoMass = !!i539[4]
  i538.mass = i539[5]
  i538.drag = i539[6]
  i538.angularDrag = i539[7]
  i538.gravityScale = i539[8]
  i538.collisionDetectionMode = i539[9]
  i538.sleepMode = i539[10]
  i538.constraints = i539[11]
  return i538
}

Deserializers["Pin"] = function (request, data, root) {
  var i540 = root || request.c( 'Pin' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'head')
  request.r(i541[2], i541[3], 0, i540, 'end')
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i543 = data
  i542.name = i543[0]
  i542.tagId = i543[1]
  i542.enabled = !!i543[2]
  i542.isStatic = !!i543[3]
  i542.layer = i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i545 = data
  i544.radius = i545[0]
  i544.enabled = !!i545[1]
  i544.isTrigger = !!i545[2]
  i544.usedByEffector = !!i545[3]
  i544.density = i545[4]
  i544.offset = new pc.Vec2( i545[5], i545[6] )
  request.r(i545[7], i545[8], 0, i544, 'material')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'animatorController')
  request.r(i547[2], i547[3], 0, i546, 'avatar')
  i546.updateMode = i547[4]
  i546.hasTransformHierarchy = !!i547[5]
  i546.applyRootMotion = !!i547[6]
  var i549 = i547[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.humanBones = i548
  i546.enabled = !!i547[8]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i553 = data
  i552.name = i553[0]
  i552.index = i553[1]
  i552.startup = !!i553[2]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i555 = data
  i554.enabled = !!i555[0]
  i554.aspect = i555[1]
  i554.orthographic = !!i555[2]
  i554.orthographicSize = i555[3]
  i554.backgroundColor = new pc.Color(i555[4], i555[5], i555[6], i555[7])
  i554.nearClipPlane = i555[8]
  i554.farClipPlane = i555[9]
  i554.fieldOfView = i555[10]
  i554.depth = i555[11]
  i554.clearFlags = i555[12]
  i554.cullingMask = i555[13]
  i554.rect = i555[14]
  request.r(i555[15], i555[16], 0, i554, 'targetTexture')
  i554.usePhysicalProperties = !!i555[17]
  i554.focalLength = i555[18]
  i554.sensorSize = new pc.Vec2( i555[19], i555[20] )
  i554.lensShift = new pc.Vec2( i555[21], i555[22] )
  i554.gateFit = i555[23]
  i554.commandBufferCount = i555[24]
  i554.cameraType = i555[25]
  return i554
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i556 = root || request.c( 'ViewportHandler' )
  var i557 = data
  i556.wireColor = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  i556.UnitsSize = i557[4]
  i556.constraint = i557[5]
  request.r(i557[6], i557[7], 0, i556, 'camera')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'clip')
  request.r(i559[2], i559[3], 0, i558, 'outputAudioMixerGroup')
  i558.playOnAwake = !!i559[4]
  i558.loop = !!i559[5]
  i558.time = i559[6]
  i558.volume = i559[7]
  i558.pitch = i559[8]
  i558.enabled = !!i559[9]
  return i558
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i560 = root || request.c( 'InputReceiver' )
  var i561 = data
  return i560
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i562 = root || request.c( 'CameraAnchor' )
  var i563 = data
  i562.anchorType = i563[0]
  i562.anchorOffset = new pc.Vec3( i563[1], i563[2], i563[3] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i565 = data
  i564.enabled = !!i565[0]
  i564.isTrigger = !!i565[1]
  i564.usedByEffector = !!i565[2]
  i564.density = i565[3]
  i564.offset = new pc.Vec2( i565[4], i565[5] )
  request.r(i565[6], i565[7], 0, i564, 'material')
  i564.edgeRadius = i565[8]
  var i567 = i565[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
    i566.push( new pc.Vec2( i567[i + 0], i567[i + 1] ) );
  }
  i564.points = i566
  i564.useAdjacentStartPoint = !!i565[10]
  i564.adjacentStartPoint = new pc.Vec2( i565[11], i565[12] )
  i564.useAdjacentEndPoint = !!i565[13]
  i564.adjacentEndPoint = new pc.Vec2( i565[14], i565[15] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i571 = data
  i570.enabled = !!i571[0]
  i570.isTrigger = !!i571[1]
  i570.usedByEffector = !!i571[2]
  i570.density = i571[3]
  i570.offset = new pc.Vec2( i571[4], i571[5] )
  request.r(i571[6], i571[7], 0, i570, 'material')
  i570.usedByComposite = !!i571[8]
  i570.autoTiling = !!i571[9]
  var i573 = i571[10]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
  var i575 = i573[i + 0]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
    i574.push( new pc.Vec2( i575[i + 0], i575[i + 1] ) );
  }
    i572.push( i574 );
  }
  i570.points = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i581 = data
  i580.pivot = new pc.Vec2( i581[0], i581[1] )
  i580.anchorMin = new pc.Vec2( i581[2], i581[3] )
  i580.anchorMax = new pc.Vec2( i581[4], i581[5] )
  i580.sizeDelta = new pc.Vec2( i581[6], i581[7] )
  i580.anchoredPosition3D = new pc.Vec3( i581[8], i581[9], i581[10] )
  i580.rotation = new pc.Quat(i581[11], i581[12], i581[13], i581[14])
  i580.scale = new pc.Vec3( i581[15], i581[16], i581[17] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i583 = data
  i582.enabled = !!i583[0]
  i582.planeDistance = i583[1]
  i582.referencePixelsPerUnit = i583[2]
  i582.isFallbackOverlay = !!i583[3]
  i582.renderMode = i583[4]
  i582.renderOrder = i583[5]
  i582.sortingLayerName = i583[6]
  i582.sortingOrder = i583[7]
  i582.scaleFactor = i583[8]
  request.r(i583[9], i583[10], 0, i582, 'worldCamera')
  i582.overrideSorting = !!i583[11]
  i582.pixelPerfect = !!i583[12]
  i582.targetDisplay = i583[13]
  i582.overridePixelPerfect = !!i583[14]
  return i582
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i585 = data
  i584.m_UiScaleMode = i585[0]
  i584.m_ReferencePixelsPerUnit = i585[1]
  i584.m_ScaleFactor = i585[2]
  i584.m_ReferenceResolution = new pc.Vec2( i585[3], i585[4] )
  i584.m_ScreenMatchMode = i585[5]
  i584.m_MatchWidthOrHeight = i585[6]
  i584.m_PhysicalUnit = i585[7]
  i584.m_FallbackScreenDPI = i585[8]
  i584.m_DefaultSpriteDPI = i585[9]
  i584.m_DynamicPixelsPerUnit = i585[10]
  i584.m_PresetInfoIsWorld = !!i585[11]
  return i584
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i587 = data
  i586.m_IgnoreReversedGraphics = !!i587[0]
  i586.m_BlockingObjects = i587[1]
  i586.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i587[2] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i589 = data
  i588.cullTransparentMesh = !!i589[0]
  return i588
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Image' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Sprite')
  i590.m_Type = i591[2]
  i590.m_PreserveAspect = !!i591[3]
  i590.m_FillCenter = !!i591[4]
  i590.m_FillMethod = i591[5]
  i590.m_FillAmount = i591[6]
  i590.m_FillClockwise = !!i591[7]
  i590.m_FillOrigin = i591[8]
  i590.m_UseSpriteMesh = !!i591[9]
  i590.m_PixelsPerUnitMultiplier = i591[10]
  request.r(i591[11], i591[12], 0, i590, 'm_Material')
  i590.m_Maskable = !!i591[13]
  i590.m_Color = new pc.Color(i591[14], i591[15], i591[16], i591[17])
  i590.m_RaycastTarget = !!i591[18]
  i590.m_RaycastPadding = new pc.Vec4( i591[19], i591[20], i591[21], i591[22] )
  return i590
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Text' )
  var i593 = data
  i592.m_FontData = request.d('UnityEngine.UI.FontData', i593[0], i592.m_FontData)
  i592.m_Text = i593[1]
  request.r(i593[2], i593[3], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[4]
  i592.m_Color = new pc.Color(i593[5], i593[6], i593[7], i593[8])
  i592.m_RaycastTarget = !!i593[9]
  i592.m_RaycastPadding = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  return i592
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.FontData' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Font')
  i594.m_FontSize = i595[2]
  i594.m_FontStyle = i595[3]
  i594.m_BestFit = !!i595[4]
  i594.m_MinSize = i595[5]
  i594.m_MaxSize = i595[6]
  i594.m_Alignment = i595[7]
  i594.m_AlignByGeometry = !!i595[8]
  i594.m_RichText = !!i595[9]
  i594.m_HorizontalOverflow = i595[10]
  i594.m_VerticalOverflow = i595[11]
  i594.m_LineSpacing = i595[12]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'additionalVertexStreams')
  i596.enabled = !!i597[2]
  request.r(i597[3], i597[4], 0, i596, 'sharedMaterial')
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sharedMaterials = i598
  i596.receiveShadows = !!i597[6]
  i596.shadowCastingMode = i597[7]
  i596.sortingLayerID = i597[8]
  i596.sortingOrder = i597[9]
  i596.lightmapIndex = i597[10]
  i596.lightmapSceneIndex = i597[11]
  i596.lightmapScaleOffset = new pc.Vec4( i597[12], i597[13], i597[14], i597[15] )
  i596.lightProbeUsage = i597[16]
  i596.reflectionProbeUsage = i597[17]
  return i596
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i600 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i601 = data
  i600.loop = !!i601[0]
  i600.timeScale = i601[1]
  request.r(i601[2], i601[3], 0, i600, 'skeletonDataAsset')
  i600.initialSkinName = i601[4]
  i600.fixPrefabOverrideViaMeshFilter = i601[5]
  i600.initialFlipX = !!i601[6]
  i600.initialFlipY = !!i601[7]
  i600.updateWhenInvisible = i601[8]
  i600.zSpacing = i601[9]
  i600.useClipping = !!i601[10]
  i600.immutableTriangles = !!i601[11]
  i600.pmaVertexColors = !!i601[12]
  i600.clearStateOnDisable = !!i601[13]
  i600.tintBlack = !!i601[14]
  i600.singleSubmesh = !!i601[15]
  i600.fixDrawOrder = !!i601[16]
  i600.addNormals = !!i601[17]
  i600.calculateTangents = !!i601[18]
  i600.maskInteraction = i601[19]
  i600.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i601[20], i600.maskMaterials)
  i600.disableRenderingOnOverride = !!i601[21]
  i600.updateTiming = i601[22]
  i600.unscaledTime = !!i601[23]
  i600._animationName = i601[24]
  var i603 = i601[25]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( i603[i + 0] );
  }
  i600.separatorSlotNames = i602
  return i600
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i604 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.materialsMaskDisabled = i606
  var i609 = i605[1]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i604.materialsInsideMask = i608
  var i611 = i605[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i604.materialsOutsideMask = i610
  return i604
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i614 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'boneRoot')
  i614.flipBy180DegreeRotation = !!i615[2]
  request.r(i615[3], i615[4], 0, i614, 'skeletonRenderer')
  request.r(i615[5], i615[6], 0, i614, 'skeletonGraphic')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'sharedMesh')
  return i616
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i618 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i619 = data
  i618.copyPropertyBlock = !!i619[0]
  i618.copyMeshRendererFlags = !!i619[1]
  var i621 = i619[2]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 1, i620, '')
  }
  i618.partsRenderers = i620
  request.r(i619[3], i619[4], 0, i618, 'skeletonRenderer')
  return i618
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i624 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i625 = data
  i624.boneName = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'parentReference')
  i624.mode = i625[3]
  i624.position = !!i625[4]
  i624.rotation = !!i625[5]
  i624.scale = !!i625[6]
  i624.zPosition = !!i625[7]
  i624.overrideAlpha = i625[8]
  request.r(i625[9], i625[10], 0, i624, 'hierarchy')
  return i624
}

Deserializers["Bag"] = function (request, data, root) {
  var i626 = root || request.c( 'Bag' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'model')
  request.r(i627[2], i627[3], 0, i626, 'idlePosition')
  request.r(i627[4], i627[5], 0, i626, 'winPosition')
  request.r(i627[6], i627[7], 0, i626, 'losePosition')
  return i626
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i629 = data
  return i628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_FirstSelected')
  i630.m_sendNavigationEvents = !!i631[2]
  i630.m_DragThreshold = i631[3]
  return i630
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i633 = data
  i632.m_HorizontalAxis = i633[0]
  i632.m_VerticalAxis = i633[1]
  i632.m_SubmitButton = i633[2]
  i632.m_CancelButton = i633[3]
  i632.m_InputActionsPerSecond = i633[4]
  i632.m_RepeatDelay = i633[5]
  i632.m_ForceModuleActive = !!i633[6]
  i632.m_SendPointerHoverToParent = !!i633[7]
  return i632
}

Deserializers["Pulse"] = function (request, data, root) {
  var i634 = root || request.c( 'Pulse' )
  var i635 = data
  i634.scale = i635[0]
  i634.duration = i635[1]
  i634.ease = i635[2]
  i634.loopCount = i635[3]
  i634.from = !!i635[4]
  return i634
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i636 = root || request.c( 'SoundClick' )
  var i637 = data
  i636.loopTime = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'sound')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i639 = data
  i638.ambientIntensity = i639[0]
  i638.reflectionIntensity = i639[1]
  i638.ambientMode = i639[2]
  i638.ambientLight = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.ambientSkyColor = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  i638.ambientGroundColor = new pc.Color(i639[11], i639[12], i639[13], i639[14])
  i638.ambientEquatorColor = new pc.Color(i639[15], i639[16], i639[17], i639[18])
  i638.fogColor = new pc.Color(i639[19], i639[20], i639[21], i639[22])
  i638.fogEndDistance = i639[23]
  i638.fogStartDistance = i639[24]
  i638.fogDensity = i639[25]
  i638.fog = !!i639[26]
  request.r(i639[27], i639[28], 0, i638, 'skybox')
  i638.fogMode = i639[29]
  var i641 = i639[30]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i641[i + 0]) );
  }
  i638.lightmaps = i640
  i638.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i639[31], i638.lightProbes)
  i638.lightmapsMode = i639[32]
  i638.mixedBakeMode = i639[33]
  i638.environmentLightingMode = i639[34]
  i638.ambientProbe = new pc.SphericalHarmonicsL2(i639[35])
  i638.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i639[36])
  i638.useReferenceAmbientProbe = !!i639[37]
  request.r(i639[38], i639[39], 0, i638, 'customReflection')
  request.r(i639[40], i639[41], 0, i638, 'defaultReflection')
  i638.defaultReflectionMode = i639[42]
  i638.defaultReflectionResolution = i639[43]
  i638.sunLightObjectId = i639[44]
  i638.pixelLightCount = i639[45]
  i638.defaultReflectionHDR = !!i639[46]
  i638.hasLightDataAsset = !!i639[47]
  i638.hasManualGenerate = !!i639[48]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'lightmapColor')
  request.r(i645[2], i645[3], 0, i644, 'lightmapDirection')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i646 = root || new UnityEngine.LightProbes()
  var i647 = data
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i655 = data
  var i657 = i655[0]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i657[i + 0]));
  }
  i654.ShaderCompilationErrors = i656
  i654.name = i655[1]
  i654.guid = i655[2]
  var i659 = i655[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.shaderDefinedKeywords = i658
  var i661 = i655[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i661[i + 0]) );
  }
  i654.passes = i660
  var i663 = i655[5]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i663[i + 0]) );
  }
  i654.usePasses = i662
  var i665 = i655[6]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i665[i + 0]) );
  }
  i654.defaultParameterValues = i664
  request.r(i655[7], i655[8], 0, i654, 'unityFallbackShader')
  i654.readDepth = !!i655[9]
  i654.isCreatedByShaderGraph = !!i655[10]
  i654.compiled = !!i655[11]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i669 = data
  i668.shaderName = i669[0]
  i668.errorMessage = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i672 = root || new pc.UnityShaderPass()
  var i673 = data
  i672.id = i673[0]
  i672.subShaderIndex = i673[1]
  i672.name = i673[2]
  i672.passType = i673[3]
  i672.grabPassTextureName = i673[4]
  i672.usePass = !!i673[5]
  i672.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[6], i672.zTest)
  i672.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[7], i672.zWrite)
  i672.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[8], i672.culling)
  i672.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[9], i672.blending)
  i672.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[10], i672.alphaBlending)
  i672.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[11], i672.colorWriteMask)
  i672.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[12], i672.offsetUnits)
  i672.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[13], i672.offsetFactor)
  i672.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[14], i672.stencilRef)
  i672.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[15], i672.stencilReadMask)
  i672.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[16], i672.stencilWriteMask)
  i672.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[17], i672.stencilOp)
  i672.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[18], i672.stencilOpFront)
  i672.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[19], i672.stencilOpBack)
  var i675 = i673[20]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i675[i + 0]) );
  }
  i672.tags = i674
  var i677 = i673[21]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i672.passDefinedKeywords = i676
  var i679 = i673[22]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i679[i + 0]) );
  }
  i672.passDefinedKeywordGroups = i678
  var i681 = i673[23]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i681[i + 0]) );
  }
  i672.variants = i680
  var i683 = i673[24]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i683[i + 0]) );
  }
  i672.excludedVariants = i682
  i672.hasDepthReader = !!i673[25]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i685 = data
  i684.val = i685[0]
  i684.name = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i687 = data
  i686.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[0], i686.src)
  i686.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[1], i686.dst)
  i686.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[2], i686.op)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i689 = data
  i688.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[0], i688.pass)
  i688.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[1], i688.fail)
  i688.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[2], i688.zFail)
  i688.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[3], i688.comp)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i693 = data
  i692.name = i693[0]
  i692.value = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.hasDiscard = !!i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i703 = data
  i702.passId = i703[0]
  i702.subShaderIndex = i703[1]
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.keywords = i704
  i702.vertexProgram = i703[3]
  i702.fragmentProgram = i703[4]
  i702.exportedForWebGl2 = !!i703[5]
  i702.readDepth = !!i703[6]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'shader')
  i708.pass = i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i713 = data
  i712.name = i713[0]
  i712.type = i713[1]
  i712.value = new pc.Vec4( i713[2], i713[3], i713[4], i713[5] )
  i712.textureValue = i713[6]
  i712.shaderPropertyFlag = i713[7]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'texture')
  i714.aabb = i715[3]
  i714.vertices = i715[4]
  i714.triangles = i715[5]
  i714.textureRect = UnityEngine.Rect.MinMaxRect(i715[6], i715[7], i715[8], i715[9])
  i714.packedRect = UnityEngine.Rect.MinMaxRect(i715[10], i715[11], i715[12], i715[13])
  i714.border = new pc.Vec4( i715[14], i715[15], i715[16], i715[17] )
  i714.transparency = i715[18]
  i714.bounds = i715[19]
  i714.pixelsPerUnit = i715[20]
  i714.textureWidth = i715[21]
  i714.textureHeight = i715[22]
  i714.nativeSize = new pc.Vec2( i715[23], i715[24] )
  i714.pivot = new pc.Vec2( i715[25], i715[26] )
  i714.textureRectOffset = new pc.Vec2( i715[27], i715[28] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i717 = data
  i716.name = i717[0]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i719 = data
  i718.name = i719[0]
  i718.wrapMode = i719[1]
  i718.isLooping = !!i719[2]
  i718.length = i719[3]
  var i721 = i719[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i721[i + 0]) );
  }
  i718.curves = i720
  var i723 = i719[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i723[i + 0]) );
  }
  i718.events = i722
  i718.halfPrecision = !!i719[6]
  i718._frameRate = i719[7]
  i718.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i719[8], i718.localBounds)
  i718.hasMuscleCurves = !!i719[9]
  var i725 = i719[10]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i718.clipMuscleConstant = i724
  i718.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i719[11], i718.clipBindingConstant)
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i729 = data
  i728.path = i729[0]
  i728.hash = i729[1]
  i728.componentType = i729[2]
  i728.property = i729[3]
  i728.keys = i729[4]
  var i731 = i729[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i731[i + 0]) );
  }
  i728.objectReferenceKeys = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i735 = data
  i734.time = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'value')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i739 = data
  i738.functionName = i739[0]
  i738.floatParameter = i739[1]
  i738.intParameter = i739[2]
  i738.stringParameter = i739[3]
  request.r(i739[4], i739[5], 0, i738, 'objectReferenceParameter')
  i738.time = i739[6]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i741 = data
  i740.center = new pc.Vec3( i741[0], i741[1], i741[2] )
  i740.extends = new pc.Vec3( i741[3], i741[4], i741[5] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.genericBindings = i746
  var i749 = i745[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.pptrCurveMapping = i748
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i751 = data
  i750.name = i751[0]
  i750.ascent = i751[1]
  i750.originalLineHeight = i751[2]
  i750.fontSize = i751[3]
  var i753 = i751[4]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i753[i + 0]) );
  }
  i750.characterInfo = i752
  request.r(i751[5], i751[6], 0, i750, 'texture')
  i750.originalFontSize = i751[7]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i757 = data
  i756.index = i757[0]
  i756.advance = i757[1]
  i756.bearing = i757[2]
  i756.glyphWidth = i757[3]
  i756.glyphHeight = i757[4]
  i756.minX = i757[5]
  i756.maxX = i757[6]
  i756.minY = i757[7]
  i756.maxY = i757[8]
  i756.uvBottomLeftX = i757[9]
  i756.uvBottomLeftY = i757[10]
  i756.uvBottomRightX = i757[11]
  i756.uvBottomRightY = i757[12]
  i756.uvTopLeftX = i757[13]
  i756.uvTopLeftY = i757[14]
  i756.uvTopRightX = i757[15]
  i756.uvTopRightY = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i759 = data
  i758.name = i759[0]
  var i761 = i759[1]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i761[i + 0]) );
  }
  i758.layers = i760
  var i763 = i759[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i763[i + 0]) );
  }
  i758.parameters = i762
  i758.animationClips = i759[3]
  i758.avatarUnsupported = i759[4]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i767 = data
  i766.name = i767[0]
  i766.defaultWeight = i767[1]
  i766.blendingMode = i767[2]
  i766.avatarMask = i767[3]
  i766.syncedLayerIndex = i767[4]
  i766.syncedLayerAffectsTiming = !!i767[5]
  i766.syncedLayers = i767[6]
  i766.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i767[7], i766.stateMachine)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i769 = data
  i768.id = i769[0]
  i768.name = i769[1]
  i768.path = i769[2]
  var i771 = i769[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i771[i + 0]) );
  }
  i768.states = i770
  var i773 = i769[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i773[i + 0]) );
  }
  i768.machines = i772
  var i775 = i769[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i775[i + 0]) );
  }
  i768.entryStateTransitions = i774
  var i777 = i769[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i777[i + 0]) );
  }
  i768.exitStateTransitions = i776
  var i779 = i769[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i779[i + 0]) );
  }
  i768.anyStateTransitions = i778
  i768.defaultStateId = i769[8]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i783 = data
  i782.id = i783[0]
  i782.name = i783[1]
  i782.cycleOffset = i783[2]
  i782.cycleOffsetParameter = i783[3]
  i782.cycleOffsetParameterActive = !!i783[4]
  i782.mirror = !!i783[5]
  i782.mirrorParameter = i783[6]
  i782.mirrorParameterActive = !!i783[7]
  i782.motionId = i783[8]
  i782.nameHash = i783[9]
  i782.fullPathHash = i783[10]
  i782.speed = i783[11]
  i782.speedParameter = i783[12]
  i782.speedParameterActive = !!i783[13]
  i782.tag = i783[14]
  i782.tagHash = i783[15]
  i782.writeDefaultValues = !!i783[16]
  var i785 = i783[17]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.behaviours = i784
  var i787 = i783[18]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i787[i + 0]) );
  }
  i782.transitions = i786
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i793 = data
  i792.fullPath = i793[0]
  i792.canTransitionToSelf = !!i793[1]
  i792.duration = i793[2]
  i792.exitTime = i793[3]
  i792.hasExitTime = !!i793[4]
  i792.hasFixedDuration = !!i793[5]
  i792.interruptionSource = i793[6]
  i792.offset = i793[7]
  i792.orderedInterruption = !!i793[8]
  i792.destinationStateId = i793[9]
  i792.isExit = !!i793[10]
  i792.mute = !!i793[11]
  i792.solo = !!i793[12]
  var i795 = i793[13]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i795[i + 0]) );
  }
  i792.conditions = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i801 = data
  i800.destinationStateId = i801[0]
  i800.isExit = !!i801[1]
  i800.mute = !!i801[2]
  i800.solo = !!i801[3]
  var i803 = i801[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i803[i + 0]) );
  }
  i800.conditions = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i807 = data
  i806.mode = i807[0]
  i806.parameter = i807[1]
  i806.threshold = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i811 = data
  i810.defaultBool = !!i811[0]
  i810.defaultFloat = i811[1]
  i810.defaultInt = i811[2]
  i810.name = i811[3]
  i810.nameHash = i811[4]
  i810.type = i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i813 = data
  i812.name = i813[0]
  i812.bytes64 = i813[1]
  i812.data = i813[2]
  return i812
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i814 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.atlasAssets = i816
  i814.scale = i815[1]
  request.r(i815[2], i815[3], 0, i814, 'skeletonJSON')
  i814.isUpgradingBlendModeMaterials = !!i815[4]
  i814.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i815[5], i814.blendModeMaterials)
  var i819 = i815[6]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i814.skeletonDataModifiers = i818
  var i821 = i815[7]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i814.fromAnimation = i820
  var i823 = i815[8]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i814.toAnimation = i822
  i814.duration = i815[9]
  i814.defaultMix = i815[10]
  request.r(i815[11], i815[12], 0, i814, 'controller')
  return i814
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i826 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i827 = data
  i826.applyAdditiveMaterial = !!i827[0]
  var i829 = i827[1]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i829[i + 0]));
  }
  i826.additiveMaterials = i828
  var i831 = i827[2]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i831[i + 0]));
  }
  i826.multiplyMaterials = i830
  var i833 = i827[3]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i833[i + 0]));
  }
  i826.screenMaterials = i832
  i826.requiresBlendModeMaterials = !!i827[4]
  return i826
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i836 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i837 = data
  i836.pageName = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'material')
  return i836
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i840 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'atlasFile')
  var i843 = i841[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.materials = i842
  i840.textureLoadingMode = i841[3]
  request.r(i841[4], i841[5], 0, i840, 'onDemandTextureLoader')
  return i840
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_Settings' )
  var i845 = data
  i844.m_enableWordWrapping = !!i845[0]
  i844.m_enableKerning = !!i845[1]
  i844.m_enableExtraPadding = !!i845[2]
  i844.m_enableTintAllSprites = !!i845[3]
  i844.m_enableParseEscapeCharacters = !!i845[4]
  i844.m_EnableRaycastTarget = !!i845[5]
  i844.m_GetFontFeaturesAtRuntime = !!i845[6]
  i844.m_missingGlyphCharacter = i845[7]
  i844.m_warningsDisabled = !!i845[8]
  request.r(i845[9], i845[10], 0, i844, 'm_defaultFontAsset')
  i844.m_defaultFontAssetPath = i845[11]
  i844.m_defaultFontSize = i845[12]
  i844.m_defaultAutoSizeMinRatio = i845[13]
  i844.m_defaultAutoSizeMaxRatio = i845[14]
  i844.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i845[15], i845[16] )
  i844.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i845[17], i845[18] )
  i844.m_autoSizeTextContainer = !!i845[19]
  i844.m_IsTextObjectScaleStatic = !!i845[20]
  var i847 = i845[21]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 1, i846, '')
  }
  i844.m_fallbackFontAssets = i846
  i844.m_matchMaterialPreset = !!i845[22]
  request.r(i845[23], i845[24], 0, i844, 'm_defaultSpriteAsset')
  i844.m_defaultSpriteAssetPath = i845[25]
  i844.m_enableEmojiSupport = !!i845[26]
  i844.m_MissingCharacterSpriteUnicode = i845[27]
  i844.m_defaultColorGradientPresetsPath = i845[28]
  request.r(i845[29], i845[30], 0, i844, 'm_defaultStyleSheet')
  i844.m_StyleSheetsResourcePath = i845[31]
  request.r(i845[32], i845[33], 0, i844, 'm_leadingCharacters')
  request.r(i845[34], i845[35], 0, i844, 'm_followingCharacters')
  i844.m_UseModernHangulLineBreakingRules = !!i845[36]
  return i844
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i851 = data
  i850.hashCode = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'material')
  i850.materialHashCode = i851[3]
  request.r(i851[4], i851[5], 0, i850, 'spriteSheet')
  var i853 = i851[6]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Sprite', i853[i + 0]));
  }
  i850.spriteInfoList = i852
  var i855 = i851[7]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.fallbackSpriteAssets = i854
  i850.m_Version = i851[8]
  i850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i851[9], i850.m_FaceInfo)
  var i857 = i851[10]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_SpriteCharacter', i857[i + 0]));
  }
  i850.m_SpriteCharacterTable = i856
  var i859 = i851[11]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_SpriteGlyph', i859[i + 0]));
  }
  i850.m_SpriteGlyphTable = i858
  return i850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i863 = data
  i862.name = i863[0]
  i862.hashCode = i863[1]
  i862.unicode = i863[2]
  i862.pivot = new pc.Vec2( i863[3], i863[4] )
  request.r(i863[5], i863[6], 0, i862, 'sprite')
  i862.id = i863[7]
  i862.x = i863[8]
  i862.y = i863[9]
  i862.width = i863[10]
  i862.height = i863[11]
  i862.xOffset = i863[12]
  i862.yOffset = i863[13]
  i862.xAdvance = i863[14]
  i862.scale = i863[15]
  return i862
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i867 = data
  i866.m_FaceIndex = i867[0]
  i866.m_FamilyName = i867[1]
  i866.m_StyleName = i867[2]
  i866.m_PointSize = i867[3]
  i866.m_Scale = i867[4]
  i866.m_UnitsPerEM = i867[5]
  i866.m_LineHeight = i867[6]
  i866.m_AscentLine = i867[7]
  i866.m_CapLine = i867[8]
  i866.m_MeanLine = i867[9]
  i866.m_Baseline = i867[10]
  i866.m_DescentLine = i867[11]
  i866.m_SuperscriptOffset = i867[12]
  i866.m_SuperscriptSize = i867[13]
  i866.m_SubscriptOffset = i867[14]
  i866.m_SubscriptSize = i867[15]
  i866.m_UnderlineOffset = i867[16]
  i866.m_UnderlineThickness = i867[17]
  i866.m_StrikethroughOffset = i867[18]
  i866.m_StrikethroughThickness = i867[19]
  i866.m_TabWidth = i867[20]
  return i866
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i871 = data
  i870.m_Name = i871[0]
  i870.m_HashCode = i871[1]
  i870.m_ElementType = i871[2]
  i870.m_Unicode = i871[3]
  i870.m_GlyphIndex = i871[4]
  i870.m_Scale = i871[5]
  return i870
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'sprite')
  i874.m_Index = i875[2]
  i874.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i875[3], i874.m_Metrics)
  i874.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i875[4], i874.m_GlyphRect)
  i874.m_Scale = i875[5]
  i874.m_AtlasIndex = i875[6]
  i874.m_ClassDefinitionType = i875[7]
  return i874
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i877 = data
  i876.m_Width = i877[0]
  i876.m_Height = i877[1]
  i876.m_HorizontalBearingX = i877[2]
  i876.m_HorizontalBearingY = i877[3]
  i876.m_HorizontalAdvance = i877[4]
  return i876
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i879 = data
  i878.m_X = i879[0]
  i878.m_Y = i879[1]
  i878.m_Width = i879[2]
  i878.m_Height = i879[3]
  return i878
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Style', i883[i + 0]));
  }
  i880.m_StyleList = i882
  return i880
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_Style' )
  var i887 = data
  i886.m_Name = i887[0]
  i886.m_HashCode = i887[1]
  i886.m_OpeningDefinition = i887[2]
  i886.m_ClosingDefinition = i887[3]
  i886.m_OpeningTagArray = i887[4]
  i886.m_ClosingTagArray = i887[5]
  i886.m_OpeningTagUnicodeArray = i887[6]
  i886.m_ClosingTagUnicodeArray = i887[7]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i891[i + 0]) );
  }
  i888.files = i890
  i888.componentToPrefabIds = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i895 = data
  i894.path = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'unityObject')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i899[i + 0]) );
  }
  i896.scriptsExecutionOrder = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i901[i + 0]) );
  }
  i896.sortingLayers = i900
  var i903 = i897[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i903[i + 0]) );
  }
  i896.cullingLayers = i902
  i896.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i897[3], i896.timeSettings)
  i896.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i897[4], i896.physicsSettings)
  i896.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i897[5], i896.physics2DSettings)
  i896.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i897[6], i896.qualitySettings)
  i896.enableRealtimeShadows = !!i897[7]
  i896.enableAutoInstancing = !!i897[8]
  i896.enableDynamicBatching = !!i897[9]
  i896.lightmapEncodingQuality = i897[10]
  i896.desiredColorSpace = i897[11]
  var i905 = i897[12]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i896.allTags = i904
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i909 = data
  i908.name = i909[0]
  i908.value = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i913 = data
  i912.id = i913[0]
  i912.name = i913[1]
  i912.value = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i917 = data
  i916.id = i917[0]
  i916.name = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i919 = data
  i918.fixedDeltaTime = i919[0]
  i918.maximumDeltaTime = i919[1]
  i918.timeScale = i919[2]
  i918.maximumParticleTimestep = i919[3]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i921 = data
  i920.gravity = new pc.Vec3( i921[0], i921[1], i921[2] )
  i920.defaultSolverIterations = i921[3]
  i920.bounceThreshold = i921[4]
  i920.autoSyncTransforms = !!i921[5]
  i920.autoSimulation = !!i921[6]
  var i923 = i921[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i923[i + 0]) );
  }
  i920.collisionMatrix = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i927 = data
  i926.enabled = !!i927[0]
  i926.layerId = i927[1]
  i926.otherLayerId = i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'material')
  i928.gravity = new pc.Vec2( i929[2], i929[3] )
  i928.positionIterations = i929[4]
  i928.velocityIterations = i929[5]
  i928.velocityThreshold = i929[6]
  i928.maxLinearCorrection = i929[7]
  i928.maxAngularCorrection = i929[8]
  i928.maxTranslationSpeed = i929[9]
  i928.maxRotationSpeed = i929[10]
  i928.baumgarteScale = i929[11]
  i928.baumgarteTOIScale = i929[12]
  i928.timeToSleep = i929[13]
  i928.linearSleepTolerance = i929[14]
  i928.angularSleepTolerance = i929[15]
  i928.defaultContactOffset = i929[16]
  i928.autoSimulation = !!i929[17]
  i928.queriesHitTriggers = !!i929[18]
  i928.queriesStartInColliders = !!i929[19]
  i928.callbacksOnDisable = !!i929[20]
  i928.reuseCollisionCallbacks = !!i929[21]
  i928.autoSyncTransforms = !!i929[22]
  var i931 = i929[23]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i931[i + 0]) );
  }
  i928.collisionMatrix = i930
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.layerId = i935[1]
  i934.otherLayerId = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i939[i + 0]) );
  }
  i936.qualityLevels = i938
  var i941 = i937[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.names = i940
  i936.shadows = i937[2]
  i936.anisotropicFiltering = i937[3]
  i936.antiAliasing = i937[4]
  i936.lodBias = i937[5]
  i936.shadowCascades = i937[6]
  i936.shadowDistance = i937[7]
  i936.shadowmaskMode = i937[8]
  i936.shadowProjection = i937[9]
  i936.shadowResolution = i937[10]
  i936.softParticles = !!i937[11]
  i936.softVegetation = !!i937[12]
  i936.activeColorSpace = i937[13]
  i936.desiredColorSpace = i937[14]
  i936.masterTextureLimit = i937[15]
  i936.maxQueuedFrames = i937[16]
  i936.particleRaycastBudget = i937[17]
  i936.pixelLightCount = i937[18]
  i936.realtimeReflectionProbes = !!i937[19]
  i936.shadowCascade2Split = i937[20]
  i936.shadowCascade4Split = new pc.Vec3( i937[21], i937[22], i937[23] )
  i936.streamingMipmapsActive = !!i937[24]
  i936.vSyncCount = i937[25]
  i936.asyncUploadBufferSize = i937[26]
  i936.asyncUploadTimeSlice = i937[27]
  i936.billboardsFaceCameraPosition = !!i937[28]
  i936.shadowNearPlaneOffset = i937[29]
  i936.streamingMipmapsMemoryBudget = i937[30]
  i936.maximumLODLevel = i937[31]
  i936.streamingMipmapsAddAllCameras = !!i937[32]
  i936.streamingMipmapsMaxLevelReduction = i937[33]
  i936.streamingMipmapsRenderersPerFrame = i937[34]
  i936.resolutionScalingFixedDPIFactor = i937[35]
  i936.streamingMipmapsMaxFileIORequests = i937[36]
  i936.currentQualityLevel = i937[37]
  return i936
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[31],"82":[83],"84":[83],"23":[22],"15":[13],"85":[86],"87":[88],"89":[31,35],"90":[91],"92":[88],"93":[94],"95":[88],"96":[88],"97":[38],"98":[38],"99":[88],"100":[101],"102":[2],"103":[101],"104":[22],"105":[22],"26":[23],"28":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"29":[27,22],"121":[22],"122":[40],"123":[40],"41":[40],"124":[40],"125":[13],"126":[13],"127":[128],"129":[13],"130":[131],"132":[22],"133":[27,22],"32":[31],"91":[27,22],"134":[10,31],"88":[31],"37":[31,35],"135":[60],"136":[6],"34":[131],"137":[38],"138":[22],"139":[31,22],"140":[22,27],"141":[22],"142":[27,22],"143":[31],"144":[27,22],"145":[22],"146":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Pulse","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "34c2bee5-f179-4427-af27-68c490628536";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

