var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSpring' )
  var i535 = data
  i534.spring = i535[0]
  i534.damper = i535[1]
  i534.targetPosition = i535[2]
  return i534
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor' )
  var i537 = data
  i536.m_TargetVelocity = i537[0]
  i536.m_Force = i537[1]
  i536.m_FreeSpin = i537[2]
  return i536
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointLimits' )
  var i539 = data
  i538.m_Min = i539[0]
  i538.m_Max = i539[1]
  i538.m_Bounciness = i539[2]
  i538.m_BounceMinVelocity = i539[3]
  i538.m_ContactDistance = i539[4]
  i538.minBounce = i539[5]
  i538.maxBounce = i539[6]
  return i538
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointDrive' )
  var i541 = data
  i540.m_PositionSpring = i541[0]
  i540.m_PositionDamper = i541[1]
  i540.m_MaximumForce = i541[2]
  i540.m_UseAcceleration = i541[3]
  return i540
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i543 = data
  i542.m_Spring = i543[0]
  i542.m_Damper = i543[1]
  return i542
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i545 = data
  i544.m_Limit = i545[0]
  i544.m_Bounciness = i545[1]
  i544.m_ContactDistance = i545[2]
  return i544
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i547 = data
  i546.m_ExtremumSlip = i547[0]
  i546.m_ExtremumValue = i547[1]
  i546.m_AsymptoteSlip = i547[2]
  i546.m_AsymptoteValue = i547[3]
  i546.m_Stiffness = i547[4]
  return i546
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i549 = data
  i548.m_LowerAngle = i549[0]
  i548.m_UpperAngle = i549[1]
  return i548
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i551 = data
  i550.m_MotorSpeed = i551[0]
  i550.m_MaximumMotorTorque = i551[1]
  return i550
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i553 = data
  i552.m_DampingRatio = i553[0]
  i552.m_Frequency = i553[1]
  i552.m_Angle = i553[2]
  return i552
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i555 = data
  i554.m_LowerTranslation = i555[0]
  i554.m_UpperTranslation = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i557 = data
  i556.position = new pc.Vec3( i557[0], i557[1], i557[2] )
  i556.scale = new pc.Vec3( i557[3], i557[4], i557[5] )
  i556.rotation = new pc.Quat(i557[6], i557[7], i557[8], i557[9])
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i561 = data
  i560.name = i561[0]
  i560.tagId = i561[1]
  i560.enabled = !!i561[2]
  i560.isStatic = !!i561[3]
  i560.layer = i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i562 = root || new pc.UnityMaterial()
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.renderQueue = i563[3]
  i562.enableInstancing = !!i563[4]
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i565[i + 0]) );
  }
  i562.floatParameters = i564
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i567[i + 0]) );
  }
  i562.colorParameters = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i569[i + 0]) );
  }
  i562.vectorParameters = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i571[i + 0]) );
  }
  i562.textureParameters = i570
  var i573 = i563[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i573[i + 0]) );
  }
  i562.materialFlags = i572
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Vec4( i585[1], i585[2], i585[3], i585[4] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'value')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i593 = data
  i592.name = i593[0]
  i592.enabled = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  i594.graphicsFormat = i595[11]
  i594.sRGBTexture = !!i595[12]
  i594.desiredColorSpace = i595[13]
  i594.wrapU = i595[14]
  i594.wrapV = i595[15]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i597 = data
  i596.enabled = !!i597[0]
  request.r(i597[1], i597[2], 0, i596, 'sharedMaterial')
  var i599 = i597[3]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sharedMaterials = i598
  i596.receiveShadows = !!i597[4]
  i596.shadowCastingMode = i597[5]
  i596.sortingLayerID = i597[6]
  i596.sortingOrder = i597[7]
  i596.lightmapIndex = i597[8]
  i596.lightmapSceneIndex = i597[9]
  i596.lightmapScaleOffset = new pc.Vec4( i597[10], i597[11], i597[12], i597[13] )
  i596.lightProbeUsage = i597[14]
  i596.reflectionProbeUsage = i597[15]
  i596.color = new pc.Color(i597[16], i597[17], i597[18], i597[19])
  request.r(i597[20], i597[21], 0, i596, 'sprite')
  i596.flipX = !!i597[22]
  i596.flipY = !!i597[23]
  i596.drawMode = i597[24]
  i596.size = new pc.Vec2( i597[25], i597[26] )
  i596.tileMode = i597[27]
  i596.adaptiveModeThreshold = i597[28]
  i596.maskInteraction = i597[29]
  i596.spriteSortPoint = i597[30]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i603 = data
  i602.usedByComposite = !!i603[0]
  i602.autoTiling = !!i603[1]
  i602.size = new pc.Vec2( i603[2], i603[3] )
  i602.edgeRadius = i603[4]
  i602.enabled = !!i603[5]
  i602.isTrigger = !!i603[6]
  i602.usedByEffector = !!i603[7]
  i602.density = i603[8]
  i602.offset = new pc.Vec2( i603[9], i603[10] )
  request.r(i603[11], i603[12], 0, i602, 'material')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i605 = data
  i604.bodyType = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'material')
  i604.simulated = !!i605[3]
  i604.useAutoMass = !!i605[4]
  i604.mass = i605[5]
  i604.drag = i605[6]
  i604.angularDrag = i605[7]
  i604.gravityScale = i605[8]
  i604.collisionDetectionMode = i605[9]
  i604.sleepMode = i605[10]
  i604.constraints = i605[11]
  return i604
}

Deserializers["Pin"] = function (request, data, root) {
  var i606 = root || request.c( 'Pin' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'head')
  request.r(i607[2], i607[3], 0, i606, 'end')
  request.r(i607[4], i607[5], 0, i606, 'center')
  i606.speed = i607[6]
  request.r(i607[7], i607[8], 0, i606, 'dragPin')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i609 = data
  i608.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i609[0], i608.main)
  i608.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i609[1], i608.colorBySpeed)
  i608.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i609[2], i608.colorOverLifetime)
  i608.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i609[3], i608.emission)
  i608.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i609[4], i608.rotationBySpeed)
  i608.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i609[5], i608.rotationOverLifetime)
  i608.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i609[6], i608.shape)
  i608.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i609[7], i608.sizeBySpeed)
  i608.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i609[8], i608.sizeOverLifetime)
  i608.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i609[9], i608.textureSheetAnimation)
  i608.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i609[10], i608.velocityOverLifetime)
  i608.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i609[11], i608.noise)
  i608.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i609[12], i608.inheritVelocity)
  i608.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i609[13], i608.forceOverLifetime)
  i608.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i609[14], i608.limitVelocityOverLifetime)
  i608.useAutoRandomSeed = !!i609[15]
  i608.randomSeed = i609[16]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemMain()
  var i611 = data
  i610.duration = i611[0]
  i610.loop = !!i611[1]
  i610.prewarm = !!i611[2]
  i610.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[3], i610.startDelay)
  i610.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[4], i610.startLifetime)
  i610.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[5], i610.startSpeed)
  i610.startSize3D = !!i611[6]
  i610.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[7], i610.startSizeX)
  i610.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[8], i610.startSizeY)
  i610.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[9], i610.startSizeZ)
  i610.startRotation3D = !!i611[10]
  i610.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[11], i610.startRotationX)
  i610.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[12], i610.startRotationY)
  i610.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[13], i610.startRotationZ)
  i610.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i611[14], i610.startColor)
  i610.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[15], i610.gravityModifier)
  i610.simulationSpace = i611[16]
  request.r(i611[17], i611[18], 0, i610, 'customSimulationSpace')
  i610.simulationSpeed = i611[19]
  i610.useUnscaledTime = !!i611[20]
  i610.scalingMode = i611[21]
  i610.playOnAwake = !!i611[22]
  i610.maxParticles = i611[23]
  i610.emitterVelocityMode = i611[24]
  i610.stopAction = i611[25]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i612 = root || new pc.MinMaxCurve()
  var i613 = data
  i612.mode = i613[0]
  i612.curveMin = new pc.AnimationCurve( { keys_flow: i613[1] } )
  i612.curveMax = new pc.AnimationCurve( { keys_flow: i613[2] } )
  i612.curveMultiplier = i613[3]
  i612.constantMin = i613[4]
  i612.constantMax = i613[5]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i614 = root || new pc.MinMaxGradient()
  var i615 = data
  i614.mode = i615[0]
  i614.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i615[1], i614.gradientMin)
  i614.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i615[2], i614.gradientMax)
  i614.colorMin = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.colorMax = new pc.Color(i615[7], i615[8], i615[9], i615[10])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i617 = data
  i616.mode = i617[0]
  var i619 = i617[1]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i619[i + 0]) );
  }
  i616.colorKeys = i618
  var i621 = i617[2]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i621[i + 0]) );
  }
  i616.alphaKeys = i620
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemColorBySpeed()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i623[1], i622.color)
  i622.range = new pc.Vec2( i623[2], i623[3] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i627 = data
  i626.color = new pc.Color(i627[0], i627[1], i627[2], i627[3])
  i626.time = i627[4]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i631 = data
  i630.alpha = i631[0]
  i630.time = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemColorOverLifetime()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i633[1], i632.color)
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemEmitter()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.rateOverTime)
  i634.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.rateOverDistance)
  var i637 = i635[3]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i637[i + 0]) );
  }
  i634.bursts = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemBurst()
  var i641 = data
  i640.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[0], i640.count)
  i640.cycleCount = i641[1]
  i640.minCount = i641[2]
  i640.maxCount = i641[3]
  i640.repeatInterval = i641[4]
  i640.time = i641[5]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemRotationBySpeed()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.separateAxes = !!i643[4]
  i642.range = new pc.Vec2( i643[5], i643[6] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemRotationOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.separateAxes = !!i645[4]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemShape()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.shapeType = i647[1]
  i646.randomDirectionAmount = i647[2]
  i646.sphericalDirectionAmount = i647[3]
  i646.randomPositionAmount = i647[4]
  i646.alignToDirection = !!i647[5]
  i646.radius = i647[6]
  i646.radiusMode = i647[7]
  i646.radiusSpread = i647[8]
  i646.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[9], i646.radiusSpeed)
  i646.radiusThickness = i647[10]
  i646.angle = i647[11]
  i646.length = i647[12]
  i646.boxThickness = new pc.Vec3( i647[13], i647[14], i647[15] )
  i646.meshShapeType = i647[16]
  request.r(i647[17], i647[18], 0, i646, 'mesh')
  request.r(i647[19], i647[20], 0, i646, 'meshRenderer')
  request.r(i647[21], i647[22], 0, i646, 'skinnedMeshRenderer')
  i646.useMeshMaterialIndex = !!i647[23]
  i646.meshMaterialIndex = i647[24]
  i646.useMeshColors = !!i647[25]
  i646.normalOffset = i647[26]
  i646.arc = i647[27]
  i646.arcMode = i647[28]
  i646.arcSpread = i647[29]
  i646.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[30], i646.arcSpeed)
  i646.donutRadius = i647[31]
  i646.position = new pc.Vec3( i647[32], i647[33], i647[34] )
  i646.rotation = new pc.Vec3( i647[35], i647[36], i647[37] )
  i646.scale = new pc.Vec3( i647[38], i647[39], i647[40] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemSizeBySpeed()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.x)
  i648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.y)
  i648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.z)
  i648.separateAxes = !!i649[4]
  i648.range = new pc.Vec2( i649[5], i649[6] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemSizeOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.separateAxes = !!i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.mode = i653[1]
  i652.animation = i653[2]
  i652.numTilesX = i653[3]
  i652.numTilesY = i653[4]
  i652.useRandomRow = !!i653[5]
  i652.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[6], i652.frameOverTime)
  i652.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[7], i652.startFrame)
  i652.cycleCount = i653[8]
  i652.rowIndex = i653[9]
  i652.flipU = i653[10]
  i652.flipV = i653[11]
  i652.spriteCount = i653[12]
  var i655 = i653[13]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.sprites = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.radial)
  i658.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[5], i658.speedModifier)
  i658.space = i659[6]
  i658.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[7], i658.orbitalX)
  i658.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.orbitalY)
  i658.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[9], i658.orbitalZ)
  i658.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[10], i658.orbitalOffsetX)
  i658.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.orbitalOffsetY)
  i658.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[12], i658.orbitalOffsetZ)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemNoise()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.separateAxes = !!i661[1]
  i660.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.strengthX)
  i660.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.strengthY)
  i660.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.strengthZ)
  i660.frequency = i661[5]
  i660.damping = !!i661[6]
  i660.octaveCount = i661[7]
  i660.octaveMultiplier = i661[8]
  i660.octaveScale = i661[9]
  i660.quality = i661[10]
  i660.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[11], i660.scrollSpeed)
  i660.scrollSpeedMultiplier = i661[12]
  i660.remapEnabled = !!i661[13]
  i660.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[14], i660.remapX)
  i660.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[15], i660.remapY)
  i660.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[16], i660.remapZ)
  i660.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[17], i660.positionAmount)
  i660.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[18], i660.rotationAmount)
  i660.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[19], i660.sizeAmount)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemInheritVelocity()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.mode = i663[1]
  i662.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.curve)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemForceOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.space = i665[4]
  i664.randomized = !!i665[5]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.limit)
  i666.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.limitX)
  i666.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.limitY)
  i666.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[4], i666.limitZ)
  i666.dampen = i667[5]
  i666.separateAxes = !!i667[6]
  i666.space = i667[7]
  i666.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[8], i666.drag)
  i666.multiplyDragByParticleSize = !!i667[9]
  i666.multiplyDragByParticleVelocity = !!i667[10]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i669 = data
  i668.enabled = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'sharedMaterial')
  var i671 = i669[3]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.sharedMaterials = i670
  i668.receiveShadows = !!i669[4]
  i668.shadowCastingMode = i669[5]
  i668.sortingLayerID = i669[6]
  i668.sortingOrder = i669[7]
  i668.lightmapIndex = i669[8]
  i668.lightmapSceneIndex = i669[9]
  i668.lightmapScaleOffset = new pc.Vec4( i669[10], i669[11], i669[12], i669[13] )
  i668.lightProbeUsage = i669[14]
  i668.reflectionProbeUsage = i669[15]
  request.r(i669[16], i669[17], 0, i668, 'mesh')
  i668.meshCount = i669[18]
  i668.activeVertexStreamsCount = i669[19]
  i668.alignment = i669[20]
  i668.renderMode = i669[21]
  i668.sortMode = i669[22]
  i668.lengthScale = i669[23]
  i668.velocityScale = i669[24]
  i668.cameraVelocityScale = i669[25]
  i668.normalDirection = i669[26]
  i668.sortingFudge = i669[27]
  i668.minParticleSize = i669[28]
  i668.maxParticleSize = i669[29]
  i668.pivot = new pc.Vec3( i669[30], i669[31], i669[32] )
  request.r(i669[33], i669[34], 0, i668, 'trailMaterial')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i673 = data
  i672.name = i673[0]
  i672.halfPrecision = !!i673[1]
  i672.useUInt32IndexFormat = !!i673[2]
  i672.vertexCount = i673[3]
  i672.aabb = i673[4]
  var i675 = i673[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( !!i675[i + 0] );
  }
  i672.streams = i674
  i672.vertices = i673[6]
  var i677 = i673[7]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i677[i + 0]) );
  }
  i672.subMeshes = i676
  var i679 = i673[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 16) {
    i678.push( new pc.Mat4().setData(i679[i + 0], i679[i + 1], i679[i + 2], i679[i + 3],  i679[i + 4], i679[i + 5], i679[i + 6], i679[i + 7],  i679[i + 8], i679[i + 9], i679[i + 10], i679[i + 11],  i679[i + 12], i679[i + 13], i679[i + 14], i679[i + 15]) );
  }
  i672.bindposes = i678
  var i681 = i673[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i681[i + 0]) );
  }
  i672.blendShapes = i680
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i687 = data
  i686.triangles = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i693 = data
  i692.name = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i695[i + 0]) );
  }
  i692.frames = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'sharedMesh')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'additionalVertexStreams')
  i698.enabled = !!i699[2]
  request.r(i699[3], i699[4], 0, i698, 'sharedMaterial')
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[6]
  i698.shadowCastingMode = i699[7]
  i698.sortingLayerID = i699[8]
  i698.sortingOrder = i699[9]
  i698.lightmapIndex = i699[10]
  i698.lightmapSceneIndex = i699[11]
  i698.lightmapScaleOffset = new pc.Vec4( i699[12], i699[13], i699[14], i699[15] )
  i698.lightProbeUsage = i699[16]
  i698.reflectionProbeUsage = i699[17]
  return i698
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i702 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i703 = data
  i702.loop = !!i703[0]
  i702.timeScale = i703[1]
  request.r(i703[2], i703[3], 0, i702, 'skeletonDataAsset')
  i702.initialSkinName = i703[4]
  i702.fixPrefabOverrideViaMeshFilter = i703[5]
  i702.initialFlipX = !!i703[6]
  i702.initialFlipY = !!i703[7]
  i702.updateWhenInvisible = i703[8]
  i702.zSpacing = i703[9]
  i702.useClipping = !!i703[10]
  i702.immutableTriangles = !!i703[11]
  i702.pmaVertexColors = !!i703[12]
  i702.clearStateOnDisable = !!i703[13]
  i702.tintBlack = !!i703[14]
  i702.singleSubmesh = !!i703[15]
  i702.fixDrawOrder = !!i703[16]
  i702.addNormals = !!i703[17]
  i702.calculateTangents = !!i703[18]
  i702.maskInteraction = i703[19]
  i702.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i703[20], i702.maskMaterials)
  i702.disableRenderingOnOverride = !!i703[21]
  i702.updateTiming = i703[22]
  i702.unscaledTime = !!i703[23]
  i702._animationName = i703[24]
  var i705 = i703[25]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.separatorSlotNames = i704
  return i702
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i706 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.materialsMaskDisabled = i708
  var i711 = i707[1]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i706.materialsInsideMask = i710
  var i713 = i707[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i706.materialsOutsideMask = i712
  return i706
}

Deserializers["Knight"] = function (request, data, root) {
  var i716 = root || request.c( 'Knight' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'anim')
  return i716
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i718 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'boneRoot')
  i718.flipBy180DegreeRotation = !!i719[2]
  request.r(i719[3], i719[4], 0, i718, 'skeletonRenderer')
  request.r(i719[5], i719[6], 0, i718, 'skeletonGraphic')
  return i718
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i720 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i721 = data
  i720.boneName = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'parentReference')
  i720.mode = i721[3]
  i720.position = !!i721[4]
  i720.rotation = !!i721[5]
  i720.scale = !!i721[6]
  i720.zPosition = !!i721[7]
  i720.overrideAlpha = i721[8]
  request.r(i721[9], i721[10], 0, i720, 'hierarchy')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i723 = data
  i722.name = i723[0]
  i722.index = i723[1]
  i722.startup = !!i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.aspect = i725[1]
  i724.orthographic = !!i725[2]
  i724.orthographicSize = i725[3]
  i724.backgroundColor = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.nearClipPlane = i725[8]
  i724.farClipPlane = i725[9]
  i724.fieldOfView = i725[10]
  i724.depth = i725[11]
  i724.clearFlags = i725[12]
  i724.cullingMask = i725[13]
  i724.rect = i725[14]
  request.r(i725[15], i725[16], 0, i724, 'targetTexture')
  i724.usePhysicalProperties = !!i725[17]
  i724.focalLength = i725[18]
  i724.sensorSize = new pc.Vec2( i725[19], i725[20] )
  i724.lensShift = new pc.Vec2( i725[21], i725[22] )
  i724.gateFit = i725[23]
  i724.commandBufferCount = i725[24]
  i724.cameraType = i725[25]
  return i724
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i726 = root || request.c( 'ViewportHandler' )
  var i727 = data
  i726.wireColor = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.UnitsSize = i727[4]
  i726.constraint = i727[5]
  request.r(i727[6], i727[7], 0, i726, 'camera')
  return i726
}

Deserializers["GameManager"] = function (request, data, root) {
  var i728 = root || request.c( 'GameManager' )
  var i729 = data
  return i728
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i730 = root || request.c( 'SoundManager' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'sfxObject')
  request.r(i731[2], i731[3], 0, i730, 'bgTheme')
  request.r(i731[4], i731[5], 0, i730, 'winSfx')
  request.r(i731[6], i731[7], 0, i730, 'loseSfx')
  return i730
}

Deserializers["InfinityParallaxManager"] = function (request, data, root) {
  var i732 = root || request.c( 'InfinityParallaxManager' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'item')
  request.r(i733[2], i733[3], 0, i732, 'container')
  request.r(i733[4], i733[5], 0, i732, 'spriteRenderer')
  i732.speedMultiplier = i733[6]
  i732.infinityParallaxErrorCompensationRatio = i733[7]
  return i732
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i734 = root || request.c( 'InputReceiver' )
  var i735 = data
  return i734
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i736 = root || request.c( 'CameraAnchor' )
  var i737 = data
  i736.anchorType = i737[0]
  i736.anchorOffset = new pc.Vec3( i737[1], i737[2], i737[3] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.isTrigger = !!i739[1]
  i738.usedByEffector = !!i739[2]
  i738.density = i739[3]
  i738.offset = new pc.Vec2( i739[4], i739[5] )
  request.r(i739[6], i739[7], 0, i738, 'material')
  i738.edgeRadius = i739[8]
  var i741 = i739[9]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
    i740.push( new pc.Vec2( i741[i + 0], i741[i + 1] ) );
  }
  i738.points = i740
  i738.useAdjacentStartPoint = !!i739[10]
  i738.adjacentStartPoint = new pc.Vec2( i739[11], i739[12] )
  i738.useAdjacentEndPoint = !!i739[13]
  i738.adjacentEndPoint = new pc.Vec2( i739[14], i739[15] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i745 = data
  i744.pivot = new pc.Vec2( i745[0], i745[1] )
  i744.anchorMin = new pc.Vec2( i745[2], i745[3] )
  i744.anchorMax = new pc.Vec2( i745[4], i745[5] )
  i744.sizeDelta = new pc.Vec2( i745[6], i745[7] )
  i744.anchoredPosition3D = new pc.Vec3( i745[8], i745[9], i745[10] )
  i744.rotation = new pc.Quat(i745[11], i745[12], i745[13], i745[14])
  i744.scale = new pc.Vec3( i745[15], i745[16], i745[17] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i747 = data
  i746.enabled = !!i747[0]
  i746.planeDistance = i747[1]
  i746.referencePixelsPerUnit = i747[2]
  i746.isFallbackOverlay = !!i747[3]
  i746.renderMode = i747[4]
  i746.renderOrder = i747[5]
  i746.sortingLayerName = i747[6]
  i746.sortingOrder = i747[7]
  i746.scaleFactor = i747[8]
  request.r(i747[9], i747[10], 0, i746, 'worldCamera')
  i746.overrideSorting = !!i747[11]
  i746.pixelPerfect = !!i747[12]
  i746.targetDisplay = i747[13]
  i746.overridePixelPerfect = !!i747[14]
  return i746
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i749 = data
  i748.m_UiScaleMode = i749[0]
  i748.m_ReferencePixelsPerUnit = i749[1]
  i748.m_ScaleFactor = i749[2]
  i748.m_ReferenceResolution = new pc.Vec2( i749[3], i749[4] )
  i748.m_ScreenMatchMode = i749[5]
  i748.m_MatchWidthOrHeight = i749[6]
  i748.m_PhysicalUnit = i749[7]
  i748.m_FallbackScreenDPI = i749[8]
  i748.m_DefaultSpriteDPI = i749[9]
  i748.m_DynamicPixelsPerUnit = i749[10]
  i748.m_PresetInfoIsWorld = !!i749[11]
  return i748
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i751 = data
  i750.m_IgnoreReversedGraphics = !!i751[0]
  i750.m_BlockingObjects = i751[1]
  i750.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i751[2] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i753 = data
  i752.cullTransparentMesh = !!i753[0]
  return i752
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Image' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Sprite')
  i754.m_Type = i755[2]
  i754.m_PreserveAspect = !!i755[3]
  i754.m_FillCenter = !!i755[4]
  i754.m_FillMethod = i755[5]
  i754.m_FillAmount = i755[6]
  i754.m_FillClockwise = !!i755[7]
  i754.m_FillOrigin = i755[8]
  i754.m_UseSpriteMesh = !!i755[9]
  i754.m_PixelsPerUnitMultiplier = i755[10]
  request.r(i755[11], i755[12], 0, i754, 'm_Material')
  i754.m_Maskable = !!i755[13]
  i754.m_Color = new pc.Color(i755[14], i755[15], i755[16], i755[17])
  i754.m_RaycastTarget = !!i755[18]
  i754.m_RaycastPadding = new pc.Vec4( i755[19], i755[20], i755[21], i755[22] )
  return i754
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Text' )
  var i757 = data
  i756.m_FontData = request.d('UnityEngine.UI.FontData', i757[0], i756.m_FontData)
  i756.m_Text = i757[1]
  request.r(i757[2], i757[3], 0, i756, 'm_Material')
  i756.m_Maskable = !!i757[4]
  i756.m_Color = new pc.Color(i757[5], i757[6], i757[7], i757[8])
  i756.m_RaycastTarget = !!i757[9]
  i756.m_RaycastPadding = new pc.Vec4( i757[10], i757[11], i757[12], i757[13] )
  return i756
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.FontData' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Font')
  i758.m_FontSize = i759[2]
  i758.m_FontStyle = i759[3]
  i758.m_BestFit = !!i759[4]
  i758.m_MinSize = i759[5]
  i758.m_MaxSize = i759[6]
  i758.m_Alignment = i759[7]
  i758.m_AlignByGeometry = !!i759[8]
  i758.m_RichText = !!i759[9]
  i758.m_HorizontalOverflow = i759[10]
  i758.m_VerticalOverflow = i759[11]
  i758.m_LineSpacing = i759[12]
  return i758
}

Deserializers["Bomb"] = function (request, data, root) {
  var i760 = root || request.c( 'Bomb' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.explosionFx = i762
  request.r(i761[1], i761[2], 0, i760, 'explosionFxClip')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i767 = data
  i766.radius = i767[0]
  i766.enabled = !!i767[1]
  i766.isTrigger = !!i767[2]
  i766.usedByEffector = !!i767[3]
  i766.density = i767[4]
  i766.offset = new pc.Vec2( i767[5], i767[6] )
  request.r(i767[7], i767[8], 0, i766, 'material')
  return i766
}

Deserializers["LoseTriggerArea"] = function (request, data, root) {
  var i768 = root || request.c( 'LoseTriggerArea' )
  var i769 = data
  return i768
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_FirstSelected')
  i770.m_sendNavigationEvents = !!i771[2]
  i770.m_DragThreshold = i771[3]
  return i770
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i773 = data
  i772.m_HorizontalAxis = i773[0]
  i772.m_VerticalAxis = i773[1]
  i772.m_SubmitButton = i773[2]
  i772.m_CancelButton = i773[3]
  i772.m_InputActionsPerSecond = i773[4]
  i772.m_RepeatDelay = i773[5]
  i772.m_ForceModuleActive = !!i773[6]
  i772.m_SendPointerHoverToParent = !!i773[7]
  return i772
}

Deserializers["King"] = function (request, data, root) {
  var i774 = root || request.c( 'King' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'helpMeSound')
  request.r(i775[2], i775[3], 0, i774, 'runningSfx')
  request.r(i775[4], i775[5], 0, i774, 'dieSfx')
  request.r(i775[6], i775[7], 0, i774, 'laughSfx')
  request.r(i775[8], i775[9], 0, i774, 'getHitSfx')
  request.r(i775[10], i775[11], 0, i774, 'anim')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i777 = data
  i776.ambientIntensity = i777[0]
  i776.reflectionIntensity = i777[1]
  i776.ambientMode = i777[2]
  i776.ambientLight = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.ambientSkyColor = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  i776.ambientGroundColor = new pc.Color(i777[11], i777[12], i777[13], i777[14])
  i776.ambientEquatorColor = new pc.Color(i777[15], i777[16], i777[17], i777[18])
  i776.fogColor = new pc.Color(i777[19], i777[20], i777[21], i777[22])
  i776.fogEndDistance = i777[23]
  i776.fogStartDistance = i777[24]
  i776.fogDensity = i777[25]
  i776.fog = !!i777[26]
  request.r(i777[27], i777[28], 0, i776, 'skybox')
  i776.fogMode = i777[29]
  var i779 = i777[30]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i779[i + 0]) );
  }
  i776.lightmaps = i778
  i776.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i777[31], i776.lightProbes)
  i776.lightmapsMode = i777[32]
  i776.mixedBakeMode = i777[33]
  i776.environmentLightingMode = i777[34]
  i776.ambientProbe = new pc.SphericalHarmonicsL2(i777[35])
  i776.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i777[36])
  i776.useReferenceAmbientProbe = !!i777[37]
  request.r(i777[38], i777[39], 0, i776, 'customReflection')
  request.r(i777[40], i777[41], 0, i776, 'defaultReflection')
  i776.defaultReflectionMode = i777[42]
  i776.defaultReflectionResolution = i777[43]
  i776.sunLightObjectId = i777[44]
  i776.pixelLightCount = i777[45]
  i776.defaultReflectionHDR = !!i777[46]
  i776.hasLightDataAsset = !!i777[47]
  i776.hasManualGenerate = !!i777[48]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'lightmapColor')
  request.r(i783[2], i783[3], 0, i782, 'lightmapDirection')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i784 = root || new UnityEngine.LightProbes()
  var i785 = data
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i795[i + 0]));
  }
  i792.ShaderCompilationErrors = i794
  i792.name = i793[1]
  i792.guid = i793[2]
  var i797 = i793[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.shaderDefinedKeywords = i796
  var i799 = i793[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i799[i + 0]) );
  }
  i792.passes = i798
  var i801 = i793[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i801[i + 0]) );
  }
  i792.usePasses = i800
  var i803 = i793[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i803[i + 0]) );
  }
  i792.defaultParameterValues = i802
  request.r(i793[7], i793[8], 0, i792, 'unityFallbackShader')
  i792.readDepth = !!i793[9]
  i792.isCreatedByShaderGraph = !!i793[10]
  i792.compiled = !!i793[11]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i807 = data
  i806.shaderName = i807[0]
  i806.errorMessage = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i810 = root || new pc.UnityShaderPass()
  var i811 = data
  i810.id = i811[0]
  i810.subShaderIndex = i811[1]
  i810.name = i811[2]
  i810.passType = i811[3]
  i810.grabPassTextureName = i811[4]
  i810.usePass = !!i811[5]
  i810.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[6], i810.zTest)
  i810.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[7], i810.zWrite)
  i810.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[8], i810.culling)
  i810.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i811[9], i810.blending)
  i810.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i811[10], i810.alphaBlending)
  i810.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[11], i810.colorWriteMask)
  i810.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[12], i810.offsetUnits)
  i810.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[13], i810.offsetFactor)
  i810.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[14], i810.stencilRef)
  i810.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[15], i810.stencilReadMask)
  i810.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[16], i810.stencilWriteMask)
  i810.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[17], i810.stencilOp)
  i810.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[18], i810.stencilOpFront)
  i810.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[19], i810.stencilOpBack)
  var i813 = i811[20]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i813[i + 0]) );
  }
  i810.tags = i812
  var i815 = i811[21]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i810.passDefinedKeywords = i814
  var i817 = i811[22]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i817[i + 0]) );
  }
  i810.passDefinedKeywordGroups = i816
  var i819 = i811[23]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i819[i + 0]) );
  }
  i810.variants = i818
  var i821 = i811[24]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i821[i + 0]) );
  }
  i810.excludedVariants = i820
  i810.hasDepthReader = !!i811[25]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i823 = data
  i822.val = i823[0]
  i822.name = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i825 = data
  i824.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[0], i824.src)
  i824.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[1], i824.dst)
  i824.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[2], i824.op)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i827 = data
  i826.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[0], i826.pass)
  i826.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[1], i826.fail)
  i826.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[2], i826.zFail)
  i826.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[3], i826.comp)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i831 = data
  i830.name = i831[0]
  i830.value = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i835 = data
  var i837 = i835[0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i834.keywords = i836
  i834.hasDiscard = !!i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i841 = data
  i840.passId = i841[0]
  i840.subShaderIndex = i841[1]
  var i843 = i841[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i840.keywords = i842
  i840.vertexProgram = i841[3]
  i840.fragmentProgram = i841[4]
  i840.exportedForWebGl2 = !!i841[5]
  i840.readDepth = !!i841[6]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'shader')
  i846.pass = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i851 = data
  i850.name = i851[0]
  i850.type = i851[1]
  i850.value = new pc.Vec4( i851[2], i851[3], i851[4], i851[5] )
  i850.textureValue = i851[6]
  i850.shaderPropertyFlag = i851[7]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i853 = data
  i852.name = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'texture')
  i852.aabb = i853[3]
  i852.vertices = i853[4]
  i852.triangles = i853[5]
  i852.textureRect = UnityEngine.Rect.MinMaxRect(i853[6], i853[7], i853[8], i853[9])
  i852.packedRect = UnityEngine.Rect.MinMaxRect(i853[10], i853[11], i853[12], i853[13])
  i852.border = new pc.Vec4( i853[14], i853[15], i853[16], i853[17] )
  i852.transparency = i853[18]
  i852.bounds = i853[19]
  i852.pixelsPerUnit = i853[20]
  i852.textureWidth = i853[21]
  i852.textureHeight = i853[22]
  i852.nativeSize = new pc.Vec2( i853[23], i853[24] )
  i852.pivot = new pc.Vec2( i853[25], i853[26] )
  i852.textureRectOffset = new pc.Vec2( i853[27], i853[28] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i855 = data
  i854.name = i855[0]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i857 = data
  i856.name = i857[0]
  i856.ascent = i857[1]
  i856.originalLineHeight = i857[2]
  i856.fontSize = i857[3]
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i859[i + 0]) );
  }
  i856.characterInfo = i858
  request.r(i857[5], i857[6], 0, i856, 'texture')
  i856.originalFontSize = i857[7]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i863 = data
  i862.index = i863[0]
  i862.advance = i863[1]
  i862.bearing = i863[2]
  i862.glyphWidth = i863[3]
  i862.glyphHeight = i863[4]
  i862.minX = i863[5]
  i862.maxX = i863[6]
  i862.minY = i863[7]
  i862.maxY = i863[8]
  i862.uvBottomLeftX = i863[9]
  i862.uvBottomLeftY = i863[10]
  i862.uvBottomRightX = i863[11]
  i862.uvBottomRightY = i863[12]
  i862.uvTopLeftX = i863[13]
  i862.uvTopLeftY = i863[14]
  i862.uvTopRightX = i863[15]
  i862.uvTopRightY = i863[16]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i865 = data
  i864.name = i865[0]
  i864.bytes64 = i865[1]
  i864.data = i865[2]
  return i864
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.atlasAssets = i868
  i866.scale = i867[1]
  request.r(i867[2], i867[3], 0, i866, 'skeletonJSON')
  i866.isUpgradingBlendModeMaterials = !!i867[4]
  i866.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i867[5], i866.blendModeMaterials)
  var i871 = i867[6]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i866.skeletonDataModifiers = i870
  var i873 = i867[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i866.fromAnimation = i872
  var i875 = i867[8]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i866.toAnimation = i874
  i866.duration = i867[9]
  i866.defaultMix = i867[10]
  request.r(i867[11], i867[12], 0, i866, 'controller')
  return i866
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i878 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i879 = data
  i878.applyAdditiveMaterial = !!i879[0]
  var i881 = i879[1]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i881[i + 0]));
  }
  i878.additiveMaterials = i880
  var i883 = i879[2]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i883[i + 0]));
  }
  i878.multiplyMaterials = i882
  var i885 = i879[3]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i885[i + 0]));
  }
  i878.screenMaterials = i884
  i878.requiresBlendModeMaterials = !!i879[4]
  return i878
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i888 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i889 = data
  i888.pageName = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'material')
  return i888
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i892 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'atlasFile')
  var i895 = i893[2]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.materials = i894
  i892.textureLoadingMode = i893[3]
  request.r(i893[4], i893[5], 0, i892, 'onDemandTextureLoader')
  return i892
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_Settings' )
  var i897 = data
  i896.m_enableWordWrapping = !!i897[0]
  i896.m_enableKerning = !!i897[1]
  i896.m_enableExtraPadding = !!i897[2]
  i896.m_enableTintAllSprites = !!i897[3]
  i896.m_enableParseEscapeCharacters = !!i897[4]
  i896.m_EnableRaycastTarget = !!i897[5]
  i896.m_GetFontFeaturesAtRuntime = !!i897[6]
  i896.m_missingGlyphCharacter = i897[7]
  i896.m_warningsDisabled = !!i897[8]
  request.r(i897[9], i897[10], 0, i896, 'm_defaultFontAsset')
  i896.m_defaultFontAssetPath = i897[11]
  i896.m_defaultFontSize = i897[12]
  i896.m_defaultAutoSizeMinRatio = i897[13]
  i896.m_defaultAutoSizeMaxRatio = i897[14]
  i896.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i897[15], i897[16] )
  i896.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i897[17], i897[18] )
  i896.m_autoSizeTextContainer = !!i897[19]
  i896.m_IsTextObjectScaleStatic = !!i897[20]
  var i899 = i897[21]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i896.m_fallbackFontAssets = i898
  i896.m_matchMaterialPreset = !!i897[22]
  request.r(i897[23], i897[24], 0, i896, 'm_defaultSpriteAsset')
  i896.m_defaultSpriteAssetPath = i897[25]
  i896.m_enableEmojiSupport = !!i897[26]
  i896.m_MissingCharacterSpriteUnicode = i897[27]
  i896.m_defaultColorGradientPresetsPath = i897[28]
  request.r(i897[29], i897[30], 0, i896, 'm_defaultStyleSheet')
  i896.m_StyleSheetsResourcePath = i897[31]
  request.r(i897[32], i897[33], 0, i896, 'm_leadingCharacters')
  request.r(i897[34], i897[35], 0, i896, 'm_followingCharacters')
  i896.m_UseModernHangulLineBreakingRules = !!i897[36]
  return i896
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i903 = data
  i902.hashCode = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'material')
  i902.materialHashCode = i903[3]
  request.r(i903[4], i903[5], 0, i902, 'atlas')
  i902.normalStyle = i903[6]
  i902.normalSpacingOffset = i903[7]
  i902.boldStyle = i903[8]
  i902.boldSpacing = i903[9]
  i902.italicStyle = i903[10]
  i902.tabSize = i903[11]
  i902.m_Version = i903[12]
  i902.m_SourceFontFileGUID = i903[13]
  request.r(i903[14], i903[15], 0, i902, 'm_SourceFontFile_EditorRef')
  request.r(i903[16], i903[17], 0, i902, 'm_SourceFontFile')
  i902.m_AtlasPopulationMode = i903[18]
  i902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i903[19], i902.m_FaceInfo)
  var i905 = i903[20]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.TextCore.Glyph', i905[i + 0]));
  }
  i902.m_GlyphTable = i904
  var i907 = i903[21]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_Character', i907[i + 0]));
  }
  i902.m_CharacterTable = i906
  var i909 = i903[22]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i902.m_AtlasTextures = i908
  i902.m_AtlasTextureIndex = i903[23]
  i902.m_IsMultiAtlasTexturesEnabled = !!i903[24]
  i902.m_ClearDynamicDataOnBuild = !!i903[25]
  var i911 = i903[26]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('UnityEngine.TextCore.GlyphRect', i911[i + 0]));
  }
  i902.m_UsedGlyphRects = i910
  var i913 = i903[27]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('UnityEngine.TextCore.GlyphRect', i913[i + 0]));
  }
  i902.m_FreeGlyphRects = i912
  i902.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i903[28], i902.m_fontInfo)
  i902.m_AtlasWidth = i903[29]
  i902.m_AtlasHeight = i903[30]
  i902.m_AtlasPadding = i903[31]
  i902.m_AtlasRenderMode = i903[32]
  var i915 = i903[33]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.TMP_Glyph', i915[i + 0]));
  }
  i902.m_glyphInfoList = i914
  i902.m_KerningTable = request.d('TMPro.KerningTable', i903[34], i902.m_KerningTable)
  i902.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i903[35], i902.m_FontFeatureTable)
  var i917 = i903[36]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i902.fallbackFontAssets = i916
  var i919 = i903[37]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i902.m_FallbackFontAssetTable = i918
  i902.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i903[38], i902.m_CreationSettings)
  var i921 = i903[39]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('TMPro.TMP_FontWeightPair', i921[i + 0]) );
  }
  i902.m_FontWeightTable = i920
  var i923 = i903[40]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('TMPro.TMP_FontWeightPair', i923[i + 0]) );
  }
  i902.fontWeights = i922
  return i902
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i925 = data
  i924.m_FaceIndex = i925[0]
  i924.m_FamilyName = i925[1]
  i924.m_StyleName = i925[2]
  i924.m_PointSize = i925[3]
  i924.m_Scale = i925[4]
  i924.m_UnitsPerEM = i925[5]
  i924.m_LineHeight = i925[6]
  i924.m_AscentLine = i925[7]
  i924.m_CapLine = i925[8]
  i924.m_MeanLine = i925[9]
  i924.m_Baseline = i925[10]
  i924.m_DescentLine = i925[11]
  i924.m_SuperscriptOffset = i925[12]
  i924.m_SuperscriptSize = i925[13]
  i924.m_SubscriptOffset = i925[14]
  i924.m_SubscriptSize = i925[15]
  i924.m_UnderlineOffset = i925[16]
  i924.m_UnderlineThickness = i925[17]
  i924.m_StrikethroughOffset = i925[18]
  i924.m_StrikethroughThickness = i925[19]
  i924.m_TabWidth = i925[20]
  return i924
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i929 = data
  i928.m_Index = i929[0]
  i928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i929[1], i928.m_Metrics)
  i928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i929[2], i928.m_GlyphRect)
  i928.m_Scale = i929[3]
  i928.m_AtlasIndex = i929[4]
  i928.m_ClassDefinitionType = i929[5]
  return i928
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i931 = data
  i930.m_Width = i931[0]
  i930.m_Height = i931[1]
  i930.m_HorizontalBearingX = i931[2]
  i930.m_HorizontalBearingY = i931[3]
  i930.m_HorizontalAdvance = i931[4]
  return i930
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i933 = data
  i932.m_X = i933[0]
  i932.m_Y = i933[1]
  i932.m_Width = i933[2]
  i932.m_Height = i933[3]
  return i932
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_Character' )
  var i937 = data
  i936.m_ElementType = i937[0]
  i936.m_Unicode = i937[1]
  i936.m_GlyphIndex = i937[2]
  i936.m_Scale = i937[3]
  return i936
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i943 = data
  i942.Name = i943[0]
  i942.PointSize = i943[1]
  i942.Scale = i943[2]
  i942.CharacterCount = i943[3]
  i942.LineHeight = i943[4]
  i942.Baseline = i943[5]
  i942.Ascender = i943[6]
  i942.CapHeight = i943[7]
  i942.Descender = i943[8]
  i942.CenterLine = i943[9]
  i942.SuperscriptOffset = i943[10]
  i942.SubscriptOffset = i943[11]
  i942.SubSize = i943[12]
  i942.Underline = i943[13]
  i942.UnderlineThickness = i943[14]
  i942.strikethrough = i943[15]
  i942.strikethroughThickness = i943[16]
  i942.TabWidth = i943[17]
  i942.Padding = i943[18]
  i942.AtlasWidth = i943[19]
  i942.AtlasHeight = i943[20]
  return i942
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Glyph' )
  var i947 = data
  i946.id = i947[0]
  i946.x = i947[1]
  i946.y = i947[2]
  i946.width = i947[3]
  i946.height = i947[4]
  i946.xOffset = i947[5]
  i946.yOffset = i947[6]
  i946.xAdvance = i947[7]
  i946.scale = i947[8]
  return i946
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.KerningTable' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('TMPro.KerningPair', i951[i + 0]));
  }
  i948.kerningPairs = i950
  return i948
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.KerningPair' )
  var i955 = data
  i954.xOffset = i955[0]
  i954.m_FirstGlyph = i955[1]
  i954.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i955[2], i954.m_FirstGlyphAdjustments)
  i954.m_SecondGlyph = i955[3]
  i954.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i955[4], i954.m_SecondGlyphAdjustments)
  i954.m_IgnoreSpacingAdjustments = !!i955[5]
  return i954
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i957 = data
  var i959 = i957[0]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i959[i + 0]));
  }
  i956.m_GlyphPairAdjustmentRecords = i958
  return i956
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i963 = data
  i962.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i963[0], i962.m_FirstAdjustmentRecord)
  i962.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i963[1], i962.m_SecondAdjustmentRecord)
  i962.m_FeatureLookupFlags = i963[2]
  return i962
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i965 = data
  i964.m_GlyphIndex = i965[0]
  i964.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i965[1], i964.m_GlyphValueRecord)
  return i964
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i967 = data
  i966.m_XPlacement = i967[0]
  i966.m_YPlacement = i967[1]
  i966.m_XAdvance = i967[2]
  i966.m_YAdvance = i967[3]
  return i966
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i969 = data
  i968.sourceFontFileName = i969[0]
  i968.sourceFontFileGUID = i969[1]
  i968.pointSizeSamplingMode = i969[2]
  i968.pointSize = i969[3]
  i968.padding = i969[4]
  i968.packingMode = i969[5]
  i968.atlasWidth = i969[6]
  i968.atlasHeight = i969[7]
  i968.characterSetSelectionMode = i969[8]
  i968.characterSequence = i969[9]
  i968.referencedFontAssetGUID = i969[10]
  i968.referencedTextAssetGUID = i969[11]
  i968.fontStyle = i969[12]
  i968.fontStyleModifier = i969[13]
  i968.renderMode = i969[14]
  i968.includeFontFeatures = !!i969[15]
  return i968
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'regularTypeface')
  request.r(i973[2], i973[3], 0, i972, 'italicTypeface')
  return i972
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i975 = data
  i974.hashCode = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'material')
  i974.materialHashCode = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'spriteSheet')
  var i977 = i975[6]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Sprite', i977[i + 0]));
  }
  i974.spriteInfoList = i976
  var i979 = i975[7]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i974.fallbackSpriteAssets = i978
  i974.m_Version = i975[8]
  i974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i975[9], i974.m_FaceInfo)
  var i981 = i975[10]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_SpriteCharacter', i981[i + 0]));
  }
  i974.m_SpriteCharacterTable = i980
  var i983 = i975[11]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_SpriteGlyph', i983[i + 0]));
  }
  i974.m_SpriteGlyphTable = i982
  return i974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i987 = data
  i986.name = i987[0]
  i986.hashCode = i987[1]
  i986.unicode = i987[2]
  i986.pivot = new pc.Vec2( i987[3], i987[4] )
  request.r(i987[5], i987[6], 0, i986, 'sprite')
  i986.id = i987[7]
  i986.x = i987[8]
  i986.y = i987[9]
  i986.width = i987[10]
  i986.height = i987[11]
  i986.xOffset = i987[12]
  i986.yOffset = i987[13]
  i986.xAdvance = i987[14]
  i986.scale = i987[15]
  return i986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_ElementType = i993[2]
  i992.m_Unicode = i993[3]
  i992.m_GlyphIndex = i993[4]
  i992.m_Scale = i993[5]
  return i992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'sprite')
  i996.m_Index = i997[2]
  i996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i997[3], i996.m_Metrics)
  i996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i997[4], i996.m_GlyphRect)
  i996.m_Scale = i997[5]
  i996.m_AtlasIndex = i997[6]
  i996.m_ClassDefinitionType = i997[7]
  return i996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Style', i1001[i + 0]));
  }
  i998.m_StyleList = i1000
  return i998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_Style' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_OpeningDefinition = i1005[2]
  i1004.m_ClosingDefinition = i1005[3]
  i1004.m_OpeningTagArray = i1005[4]
  i1004.m_ClosingTagArray = i1005[5]
  i1004.m_OpeningTagUnicodeArray = i1005[6]
  i1004.m_ClosingTagUnicodeArray = i1005[7]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[6], i1014.qualitySettings)
  i1014.enableRealtimeShadows = !!i1015[7]
  i1014.enableAutoInstancing = !!i1015[8]
  i1014.enableDynamicBatching = !!i1015[9]
  i1014.lightmapEncodingQuality = i1015[10]
  i1014.desiredColorSpace = i1015[11]
  var i1023 = i1015[12]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1014.allTags = i1022
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  i1030.value = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1037 = data
  i1036.fixedDeltaTime = i1037[0]
  i1036.maximumDeltaTime = i1037[1]
  i1036.timeScale = i1037[2]
  i1036.maximumParticleTimestep = i1037[3]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1039 = data
  i1038.gravity = new pc.Vec3( i1039[0], i1039[1], i1039[2] )
  i1038.defaultSolverIterations = i1039[3]
  i1038.bounceThreshold = i1039[4]
  i1038.autoSyncTransforms = !!i1039[5]
  i1038.autoSimulation = !!i1039[6]
  var i1041 = i1039[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'material')
  i1046.gravity = new pc.Vec2( i1047[2], i1047[3] )
  i1046.positionIterations = i1047[4]
  i1046.velocityIterations = i1047[5]
  i1046.velocityThreshold = i1047[6]
  i1046.maxLinearCorrection = i1047[7]
  i1046.maxAngularCorrection = i1047[8]
  i1046.maxTranslationSpeed = i1047[9]
  i1046.maxRotationSpeed = i1047[10]
  i1046.baumgarteScale = i1047[11]
  i1046.baumgarteTOIScale = i1047[12]
  i1046.timeToSleep = i1047[13]
  i1046.linearSleepTolerance = i1047[14]
  i1046.angularSleepTolerance = i1047[15]
  i1046.defaultContactOffset = i1047[16]
  i1046.autoSimulation = !!i1047[17]
  i1046.queriesHitTriggers = !!i1047[18]
  i1046.queriesStartInColliders = !!i1047[19]
  i1046.callbacksOnDisable = !!i1047[20]
  i1046.reuseCollisionCallbacks = !!i1047[21]
  i1046.autoSyncTransforms = !!i1047[22]
  var i1049 = i1047[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1057[i + 0]) );
  }
  i1054.qualityLevels = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.names = i1058
  i1054.shadows = i1055[2]
  i1054.anisotropicFiltering = i1055[3]
  i1054.antiAliasing = i1055[4]
  i1054.lodBias = i1055[5]
  i1054.shadowCascades = i1055[6]
  i1054.shadowDistance = i1055[7]
  i1054.shadowmaskMode = i1055[8]
  i1054.shadowProjection = i1055[9]
  i1054.shadowResolution = i1055[10]
  i1054.softParticles = !!i1055[11]
  i1054.softVegetation = !!i1055[12]
  i1054.activeColorSpace = i1055[13]
  i1054.desiredColorSpace = i1055[14]
  i1054.masterTextureLimit = i1055[15]
  i1054.maxQueuedFrames = i1055[16]
  i1054.particleRaycastBudget = i1055[17]
  i1054.pixelLightCount = i1055[18]
  i1054.realtimeReflectionProbes = !!i1055[19]
  i1054.shadowCascade2Split = i1055[20]
  i1054.shadowCascade4Split = new pc.Vec3( i1055[21], i1055[22], i1055[23] )
  i1054.streamingMipmapsActive = !!i1055[24]
  i1054.vSyncCount = i1055[25]
  i1054.asyncUploadBufferSize = i1055[26]
  i1054.asyncUploadTimeSlice = i1055[27]
  i1054.billboardsFaceCameraPosition = !!i1055[28]
  i1054.shadowNearPlaneOffset = i1055[29]
  i1054.streamingMipmapsMemoryBudget = i1055[30]
  i1054.maximumLODLevel = i1055[31]
  i1054.streamingMipmapsAddAllCameras = !!i1055[32]
  i1054.streamingMipmapsMaxLevelReduction = i1055[33]
  i1054.streamingMipmapsRenderersPerFrame = i1055[34]
  i1054.resolutionScalingFixedDPIFactor = i1055[35]
  i1054.streamingMipmapsMaxFileIORequests = i1055[36]
  i1054.currentQualityLevel = i1055[37]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1065 = data
  i1064.weight = i1065[0]
  i1064.vertices = i1065[1]
  i1064.normals = i1065[2]
  i1064.tangents = i1065[3]
  return i1064
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1067 = data
  i1066.xPlacement = i1067[0]
  i1066.yPlacement = i1067[1]
  i1066.xAdvance = i1067[2]
  i1066.yAdvance = i1067[3]
  return i1066
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[21],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[7],"72":[7],"73":[7],"74":[7],"75":[7],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[21],"85":[15],"86":[87],"88":[87],"32":[31],"23":[21],"89":[90],"91":[3],"92":[90],"93":[31],"94":[31],"35":[32],"37":[36,31],"95":[31],"34":[32],"96":[31],"97":[31],"98":[31],"99":[31],"100":[31],"101":[31],"102":[31],"103":[31],"104":[31],"105":[36,31],"106":[31],"107":[31],"108":[31],"109":[31],"38":[36,31],"110":[31],"111":[43],"112":[43],"44":[43],"113":[43],"114":[21],"115":[21],"116":[117],"118":[21],"119":[120],"121":[31],"122":[36,31],"16":[15],"123":[36,31],"124":[125,15],"126":[15],"127":[15,13],"128":[64],"129":[7],"19":[120],"130":[20],"131":[31],"132":[15,31],"133":[31,36],"134":[31],"135":[36,31],"136":[15],"137":[36,31],"138":[31],"139":[90]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.Shader","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Knight","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityBone","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","GameManager","SoundManager","UnityEngine.AudioClip","InfinityParallaxManager","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","Bomb","UnityEngine.GameObject","UnityEngine.CircleCollider2D","LoseTriggerArea","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","King","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "14.9";

Deserializers.lunaVersion = "6.2.0";

Deserializers.lunaSHA = "7963e9fed253d218ae1c5298f104efd7e457ea14";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "24841";

Deserializers.projectId = "7b9b35910aba8f3438b578cf9f26cb49";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f2a77dbc-ac2a-4b94-875a-816f25319c13";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

