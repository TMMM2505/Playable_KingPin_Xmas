var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSpring' )
  var i571 = data
  i570.spring = i571[0]
  i570.damper = i571[1]
  i570.targetPosition = i571[2]
  return i570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor' )
  var i573 = data
  i572.m_TargetVelocity = i573[0]
  i572.m_Force = i573[1]
  i572.m_FreeSpin = i573[2]
  return i572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointLimits' )
  var i575 = data
  i574.m_Min = i575[0]
  i574.m_Max = i575[1]
  i574.m_Bounciness = i575[2]
  i574.m_BounceMinVelocity = i575[3]
  i574.m_ContactDistance = i575[4]
  i574.minBounce = i575[5]
  i574.maxBounce = i575[6]
  return i574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointDrive' )
  var i577 = data
  i576.m_PositionSpring = i577[0]
  i576.m_PositionDamper = i577[1]
  i576.m_MaximumForce = i577[2]
  i576.m_UseAcceleration = i577[3]
  return i576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i579 = data
  i578.m_Spring = i579[0]
  i578.m_Damper = i579[1]
  return i578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i581 = data
  i580.m_Limit = i581[0]
  i580.m_Bounciness = i581[1]
  i580.m_ContactDistance = i581[2]
  return i580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i583 = data
  i582.m_ExtremumSlip = i583[0]
  i582.m_ExtremumValue = i583[1]
  i582.m_AsymptoteSlip = i583[2]
  i582.m_AsymptoteValue = i583[3]
  i582.m_Stiffness = i583[4]
  return i582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i585 = data
  i584.m_LowerAngle = i585[0]
  i584.m_UpperAngle = i585[1]
  return i584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i587 = data
  i586.m_MotorSpeed = i587[0]
  i586.m_MaximumMotorTorque = i587[1]
  return i586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i589 = data
  i588.m_DampingRatio = i589[0]
  i588.m_Frequency = i589[1]
  i588.m_Angle = i589[2]
  return i588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i591 = data
  i590.m_LowerTranslation = i591[0]
  i590.m_UpperTranslation = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i593 = data
  i592.position = new pc.Vec3( i593[0], i593[1], i593[2] )
  i592.scale = new pc.Vec3( i593[3], i593[4], i593[5] )
  i592.rotation = new pc.Quat(i593[6], i593[7], i593[8], i593[9])
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'clip')
  request.r(i595[2], i595[3], 0, i594, 'outputAudioMixerGroup')
  i594.playOnAwake = !!i595[4]
  i594.loop = !!i595[5]
  i594.time = i595[6]
  i594.volume = i595[7]
  i594.pitch = i595[8]
  i594.enabled = !!i595[9]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i597 = data
  i596.name = i597[0]
  i596.tagId = i597[1]
  i596.enabled = !!i597[2]
  i596.isStatic = !!i597[3]
  i596.layer = i597[4]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i598 = root || new pc.UnityMaterial()
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'shader')
  i598.renderQueue = i599[3]
  i598.enableInstancing = !!i599[4]
  var i601 = i599[5]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i601[i + 0]) );
  }
  i598.floatParameters = i600
  var i603 = i599[6]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i603[i + 0]) );
  }
  i598.colorParameters = i602
  var i605 = i599[7]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i605[i + 0]) );
  }
  i598.vectorParameters = i604
  var i607 = i599[8]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i607[i + 0]) );
  }
  i598.textureParameters = i606
  var i609 = i599[9]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i609[i + 0]) );
  }
  i598.materialFlags = i608
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i613 = data
  i612.name = i613[0]
  i612.value = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = new pc.Color(i617[1], i617[2], i617[3], i617[4])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = new pc.Vec4( i621[1], i621[2], i621[3], i621[4] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'value')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i629 = data
  i628.name = i629[0]
  i628.enabled = !!i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i631 = data
  i630.name = i631[0]
  i630.width = i631[1]
  i630.height = i631[2]
  i630.mipmapCount = i631[3]
  i630.anisoLevel = i631[4]
  i630.filterMode = i631[5]
  i630.hdr = !!i631[6]
  i630.format = i631[7]
  i630.wrapMode = i631[8]
  i630.alphaIsTransparency = !!i631[9]
  i630.alphaSource = i631[10]
  i630.graphicsFormat = i631[11]
  i630.sRGBTexture = !!i631[12]
  i630.desiredColorSpace = i631[13]
  i630.wrapU = i631[14]
  i630.wrapV = i631[15]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i633 = data
  i632.enabled = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'sharedMaterial')
  var i635 = i633[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sharedMaterials = i634
  i632.receiveShadows = !!i633[4]
  i632.shadowCastingMode = i633[5]
  i632.sortingLayerID = i633[6]
  i632.sortingOrder = i633[7]
  i632.lightmapIndex = i633[8]
  i632.lightmapSceneIndex = i633[9]
  i632.lightmapScaleOffset = new pc.Vec4( i633[10], i633[11], i633[12], i633[13] )
  i632.lightProbeUsage = i633[14]
  i632.reflectionProbeUsage = i633[15]
  i632.color = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  request.r(i633[20], i633[21], 0, i632, 'sprite')
  i632.flipX = !!i633[22]
  i632.flipY = !!i633[23]
  i632.drawMode = i633[24]
  i632.size = new pc.Vec2( i633[25], i633[26] )
  i632.tileMode = i633[27]
  i632.adaptiveModeThreshold = i633[28]
  i632.maskInteraction = i633[29]
  i632.spriteSortPoint = i633[30]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i639 = data
  i638.usedByComposite = !!i639[0]
  i638.autoTiling = !!i639[1]
  i638.size = new pc.Vec2( i639[2], i639[3] )
  i638.edgeRadius = i639[4]
  i638.enabled = !!i639[5]
  i638.isTrigger = !!i639[6]
  i638.usedByEffector = !!i639[7]
  i638.density = i639[8]
  i638.offset = new pc.Vec2( i639[9], i639[10] )
  request.r(i639[11], i639[12], 0, i638, 'material')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i641 = data
  i640.bodyType = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'material')
  i640.simulated = !!i641[3]
  i640.useAutoMass = !!i641[4]
  i640.mass = i641[5]
  i640.drag = i641[6]
  i640.angularDrag = i641[7]
  i640.gravityScale = i641[8]
  i640.collisionDetectionMode = i641[9]
  i640.sleepMode = i641[10]
  i640.constraints = i641[11]
  return i640
}

Deserializers["Pin"] = function (request, data, root) {
  var i642 = root || request.c( 'Pin' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'head')
  request.r(i643[2], i643[3], 0, i642, 'end')
  request.r(i643[4], i643[5], 0, i642, 'center')
  i642.speed = i643[6]
  request.r(i643[7], i643[8], 0, i642, 'dragPin')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i645 = data
  i644.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i645[0], i644.main)
  i644.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i645[1], i644.colorBySpeed)
  i644.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i645[2], i644.colorOverLifetime)
  i644.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i645[3], i644.emission)
  i644.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i645[4], i644.rotationBySpeed)
  i644.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i645[5], i644.rotationOverLifetime)
  i644.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i645[6], i644.shape)
  i644.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i645[7], i644.sizeBySpeed)
  i644.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i645[8], i644.sizeOverLifetime)
  i644.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i645[9], i644.textureSheetAnimation)
  i644.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i645[10], i644.velocityOverLifetime)
  i644.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i645[11], i644.noise)
  i644.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i645[12], i644.inheritVelocity)
  i644.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i645[13], i644.forceOverLifetime)
  i644.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i645[14], i644.limitVelocityOverLifetime)
  i644.useAutoRandomSeed = !!i645[15]
  i644.randomSeed = i645[16]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemMain()
  var i647 = data
  i646.duration = i647[0]
  i646.loop = !!i647[1]
  i646.prewarm = !!i647[2]
  i646.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.startDelay)
  i646.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[4], i646.startLifetime)
  i646.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[5], i646.startSpeed)
  i646.startSize3D = !!i647[6]
  i646.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[7], i646.startSizeX)
  i646.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[8], i646.startSizeY)
  i646.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[9], i646.startSizeZ)
  i646.startRotation3D = !!i647[10]
  i646.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[11], i646.startRotationX)
  i646.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[12], i646.startRotationY)
  i646.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[13], i646.startRotationZ)
  i646.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[14], i646.startColor)
  i646.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[15], i646.gravityModifier)
  i646.simulationSpace = i647[16]
  request.r(i647[17], i647[18], 0, i646, 'customSimulationSpace')
  i646.simulationSpeed = i647[19]
  i646.useUnscaledTime = !!i647[20]
  i646.scalingMode = i647[21]
  i646.playOnAwake = !!i647[22]
  i646.maxParticles = i647[23]
  i646.emitterVelocityMode = i647[24]
  i646.stopAction = i647[25]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i648 = root || new pc.MinMaxCurve()
  var i649 = data
  i648.mode = i649[0]
  i648.curveMin = new pc.AnimationCurve( { keys_flow: i649[1] } )
  i648.curveMax = new pc.AnimationCurve( { keys_flow: i649[2] } )
  i648.curveMultiplier = i649[3]
  i648.constantMin = i649[4]
  i648.constantMax = i649[5]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i650 = root || new pc.MinMaxGradient()
  var i651 = data
  i650.mode = i651[0]
  i650.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i651[1], i650.gradientMin)
  i650.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i651[2], i650.gradientMax)
  i650.colorMin = new pc.Color(i651[3], i651[4], i651[5], i651[6])
  i650.colorMax = new pc.Color(i651[7], i651[8], i651[9], i651[10])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i653 = data
  i652.mode = i653[0]
  var i655 = i653[1]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i655[i + 0]) );
  }
  i652.colorKeys = i654
  var i657 = i653[2]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i657[i + 0]) );
  }
  i652.alphaKeys = i656
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemColorBySpeed()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[1], i658.color)
  i658.range = new pc.Vec2( i659[2], i659[3] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i663 = data
  i662.color = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  i662.time = i663[4]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i667 = data
  i666.alpha = i667[0]
  i666.time = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemColorOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i669[1], i668.color)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemEmitter()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.rateOverTime)
  i670.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.rateOverDistance)
  var i673 = i671[3]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i673[i + 0]) );
  }
  i670.bursts = i672
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemBurst()
  var i677 = data
  i676.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[0], i676.count)
  i676.cycleCount = i677[1]
  i676.minCount = i677[2]
  i676.maxCount = i677[3]
  i676.repeatInterval = i677[4]
  i676.time = i677[5]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemRotationBySpeed()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.separateAxes = !!i679[4]
  i678.range = new pc.Vec2( i679[5], i679[6] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemRotationOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.separateAxes = !!i681[4]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemShape()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.shapeType = i683[1]
  i682.randomDirectionAmount = i683[2]
  i682.sphericalDirectionAmount = i683[3]
  i682.randomPositionAmount = i683[4]
  i682.alignToDirection = !!i683[5]
  i682.radius = i683[6]
  i682.radiusMode = i683[7]
  i682.radiusSpread = i683[8]
  i682.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[9], i682.radiusSpeed)
  i682.radiusThickness = i683[10]
  i682.angle = i683[11]
  i682.length = i683[12]
  i682.boxThickness = new pc.Vec3( i683[13], i683[14], i683[15] )
  i682.meshShapeType = i683[16]
  request.r(i683[17], i683[18], 0, i682, 'mesh')
  request.r(i683[19], i683[20], 0, i682, 'meshRenderer')
  request.r(i683[21], i683[22], 0, i682, 'skinnedMeshRenderer')
  i682.useMeshMaterialIndex = !!i683[23]
  i682.meshMaterialIndex = i683[24]
  i682.useMeshColors = !!i683[25]
  i682.normalOffset = i683[26]
  i682.arc = i683[27]
  i682.arcMode = i683[28]
  i682.arcSpread = i683[29]
  i682.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[30], i682.arcSpeed)
  i682.donutRadius = i683[31]
  i682.position = new pc.Vec3( i683[32], i683[33], i683[34] )
  i682.rotation = new pc.Vec3( i683[35], i683[36], i683[37] )
  i682.scale = new pc.Vec3( i683[38], i683[39], i683[40] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemSizeBySpeed()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.separateAxes = !!i685[4]
  i684.range = new pc.Vec2( i685[5], i685[6] )
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemSizeOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.separateAxes = !!i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.mode = i689[1]
  i688.animation = i689[2]
  i688.numTilesX = i689[3]
  i688.numTilesY = i689[4]
  i688.useRandomRow = !!i689[5]
  i688.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[6], i688.frameOverTime)
  i688.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[7], i688.startFrame)
  i688.cycleCount = i689[8]
  i688.rowIndex = i689[9]
  i688.flipU = i689[10]
  i688.flipV = i689[11]
  i688.spriteCount = i689[12]
  var i691 = i689[13]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sprites = i690
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[4], i694.radial)
  i694.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[5], i694.speedModifier)
  i694.space = i695[6]
  i694.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[7], i694.orbitalX)
  i694.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[8], i694.orbitalY)
  i694.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[9], i694.orbitalZ)
  i694.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[10], i694.orbitalOffsetX)
  i694.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[11], i694.orbitalOffsetY)
  i694.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[12], i694.orbitalOffsetZ)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemNoise()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.separateAxes = !!i697[1]
  i696.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.strengthX)
  i696.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.strengthY)
  i696.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[4], i696.strengthZ)
  i696.frequency = i697[5]
  i696.damping = !!i697[6]
  i696.octaveCount = i697[7]
  i696.octaveMultiplier = i697[8]
  i696.octaveScale = i697[9]
  i696.quality = i697[10]
  i696.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[11], i696.scrollSpeed)
  i696.scrollSpeedMultiplier = i697[12]
  i696.remapEnabled = !!i697[13]
  i696.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[14], i696.remapX)
  i696.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[15], i696.remapY)
  i696.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[16], i696.remapZ)
  i696.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[17], i696.positionAmount)
  i696.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[18], i696.rotationAmount)
  i696.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[19], i696.sizeAmount)
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemInheritVelocity()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.mode = i699[1]
  i698.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.curve)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemForceOverLifetime()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.x)
  i700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.y)
  i700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.z)
  i700.space = i701[4]
  i700.randomized = !!i701[5]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.limit)
  i702.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.limitX)
  i702.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.limitY)
  i702.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[4], i702.limitZ)
  i702.dampen = i703[5]
  i702.separateAxes = !!i703[6]
  i702.space = i703[7]
  i702.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[8], i702.drag)
  i702.multiplyDragByParticleSize = !!i703[9]
  i702.multiplyDragByParticleVelocity = !!i703[10]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i705 = data
  i704.enabled = !!i705[0]
  request.r(i705[1], i705[2], 0, i704, 'sharedMaterial')
  var i707 = i705[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.sharedMaterials = i706
  i704.receiveShadows = !!i705[4]
  i704.shadowCastingMode = i705[5]
  i704.sortingLayerID = i705[6]
  i704.sortingOrder = i705[7]
  i704.lightmapIndex = i705[8]
  i704.lightmapSceneIndex = i705[9]
  i704.lightmapScaleOffset = new pc.Vec4( i705[10], i705[11], i705[12], i705[13] )
  i704.lightProbeUsage = i705[14]
  i704.reflectionProbeUsage = i705[15]
  request.r(i705[16], i705[17], 0, i704, 'mesh')
  i704.meshCount = i705[18]
  i704.activeVertexStreamsCount = i705[19]
  i704.alignment = i705[20]
  i704.renderMode = i705[21]
  i704.sortMode = i705[22]
  i704.lengthScale = i705[23]
  i704.velocityScale = i705[24]
  i704.cameraVelocityScale = i705[25]
  i704.normalDirection = i705[26]
  i704.sortingFudge = i705[27]
  i704.minParticleSize = i705[28]
  i704.maxParticleSize = i705[29]
  i704.pivot = new pc.Vec3( i705[30], i705[31], i705[32] )
  request.r(i705[33], i705[34], 0, i704, 'trailMaterial')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i709 = data
  i708.name = i709[0]
  i708.halfPrecision = !!i709[1]
  i708.useUInt32IndexFormat = !!i709[2]
  i708.vertexCount = i709[3]
  i708.aabb = i709[4]
  var i711 = i709[5]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( !!i711[i + 0] );
  }
  i708.streams = i710
  i708.vertices = i709[6]
  var i713 = i709[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i713[i + 0]) );
  }
  i708.subMeshes = i712
  var i715 = i709[8]
  var i714 = []
  for(var i = 0; i < i715.length; i += 16) {
    i714.push( new pc.Mat4().setData(i715[i + 0], i715[i + 1], i715[i + 2], i715[i + 3],  i715[i + 4], i715[i + 5], i715[i + 6], i715[i + 7],  i715[i + 8], i715[i + 9], i715[i + 10], i715[i + 11],  i715[i + 12], i715[i + 13], i715[i + 14], i715[i + 15]) );
  }
  i708.bindposes = i714
  var i717 = i709[9]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i717[i + 0]) );
  }
  i708.blendShapes = i716
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i723 = data
  i722.triangles = i723[0]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i729 = data
  i728.name = i729[0]
  var i731 = i729[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i731[i + 0]) );
  }
  i728.frames = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'sharedMesh')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'additionalVertexStreams')
  i734.enabled = !!i735[2]
  request.r(i735[3], i735[4], 0, i734, 'sharedMaterial')
  var i737 = i735[5]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sharedMaterials = i736
  i734.receiveShadows = !!i735[6]
  i734.shadowCastingMode = i735[7]
  i734.sortingLayerID = i735[8]
  i734.sortingOrder = i735[9]
  i734.lightmapIndex = i735[10]
  i734.lightmapSceneIndex = i735[11]
  i734.lightmapScaleOffset = new pc.Vec4( i735[12], i735[13], i735[14], i735[15] )
  i734.lightProbeUsage = i735[16]
  i734.reflectionProbeUsage = i735[17]
  return i734
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i738 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i739 = data
  i738.loop = !!i739[0]
  i738.timeScale = i739[1]
  request.r(i739[2], i739[3], 0, i738, 'skeletonDataAsset')
  i738.initialSkinName = i739[4]
  i738.fixPrefabOverrideViaMeshFilter = i739[5]
  i738.initialFlipX = !!i739[6]
  i738.initialFlipY = !!i739[7]
  i738.updateWhenInvisible = i739[8]
  i738.zSpacing = i739[9]
  i738.useClipping = !!i739[10]
  i738.immutableTriangles = !!i739[11]
  i738.pmaVertexColors = !!i739[12]
  i738.clearStateOnDisable = !!i739[13]
  i738.tintBlack = !!i739[14]
  i738.singleSubmesh = !!i739[15]
  i738.fixDrawOrder = !!i739[16]
  i738.addNormals = !!i739[17]
  i738.calculateTangents = !!i739[18]
  i738.maskInteraction = i739[19]
  i738.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i739[20], i738.maskMaterials)
  i738.disableRenderingOnOverride = !!i739[21]
  i738.updateTiming = i739[22]
  i738.unscaledTime = !!i739[23]
  i738._animationName = i739[24]
  var i741 = i739[25]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.separatorSlotNames = i740
  return i738
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i742 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i743 = data
  var i745 = i743[0]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.materialsMaskDisabled = i744
  var i747 = i743[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i742.materialsInsideMask = i746
  var i749 = i743[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i742.materialsOutsideMask = i748
  return i742
}

Deserializers["Knight"] = function (request, data, root) {
  var i752 = root || request.c( 'Knight' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'anim')
  return i752
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i754 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'boneRoot')
  i754.flipBy180DegreeRotation = !!i755[2]
  request.r(i755[3], i755[4], 0, i754, 'skeletonRenderer')
  request.r(i755[5], i755[6], 0, i754, 'skeletonGraphic')
  return i754
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i756 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i757 = data
  i756.boneName = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'parentReference')
  i756.mode = i757[3]
  i756.position = !!i757[4]
  i756.rotation = !!i757[5]
  i756.scale = !!i757[6]
  i756.zPosition = !!i757[7]
  i756.overrideAlpha = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'hierarchy')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i759 = data
  i758.name = i759[0]
  i758.index = i759[1]
  i758.startup = !!i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.aspect = i761[1]
  i760.orthographic = !!i761[2]
  i760.orthographicSize = i761[3]
  i760.backgroundColor = new pc.Color(i761[4], i761[5], i761[6], i761[7])
  i760.nearClipPlane = i761[8]
  i760.farClipPlane = i761[9]
  i760.fieldOfView = i761[10]
  i760.depth = i761[11]
  i760.clearFlags = i761[12]
  i760.cullingMask = i761[13]
  i760.rect = i761[14]
  request.r(i761[15], i761[16], 0, i760, 'targetTexture')
  i760.usePhysicalProperties = !!i761[17]
  i760.focalLength = i761[18]
  i760.sensorSize = new pc.Vec2( i761[19], i761[20] )
  i760.lensShift = new pc.Vec2( i761[21], i761[22] )
  i760.gateFit = i761[23]
  i760.commandBufferCount = i761[24]
  i760.cameraType = i761[25]
  return i760
}

Deserializers["CamFollow"] = function (request, data, root) {
  var i762 = root || request.c( 'CamFollow' )
  var i763 = data
  i762.speedRoom = i763[0]
  i762.speedMove = i763[1]
  i762.camSize = i763[2]
  i762.camSizeGamePlay2 = i763[3]
  request.r(i763[4], i763[5], 0, i762, 'objectToFollow')
  i762.beginFollow = !!i763[6]
  request.r(i763[7], i763[8], 0, i762, 'popup')
  return i762
}

Deserializers["GameManager"] = function (request, data, root) {
  var i764 = root || request.c( 'GameManager' )
  var i765 = data
  i764.timeWaitEndGame = i765[0]
  return i764
}

Deserializers["DeviceOrientationDetection"] = function (request, data, root) {
  var i766 = root || request.c( 'DeviceOrientationDetection' )
  var i767 = data
  return i766
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i768 = root || request.c( 'SoundManager' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'sfxObject')
  request.r(i769[2], i769[3], 0, i768, 'bgTheme')
  request.r(i769[4], i769[5], 0, i768, 'winSfx')
  request.r(i769[6], i769[7], 0, i768, 'loseSfx')
  return i768
}

Deserializers["InfinityParallaxManager"] = function (request, data, root) {
  var i770 = root || request.c( 'InfinityParallaxManager' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'item')
  request.r(i771[2], i771[3], 0, i770, 'container')
  request.r(i771[4], i771[5], 0, i770, 'spriteRenderer')
  i770.speedMultiplier = i771[6]
  i770.infinityParallaxErrorCompensationRatio = i771[7]
  return i770
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i772 = root || request.c( 'InputReceiver' )
  var i773 = data
  return i772
}

Deserializers["LevelMap"] = function (request, data, root) {
  var i774 = root || request.c( 'LevelMap' )
  var i775 = data
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i777 = data
  i776.enabled = !!i777[0]
  i776.isTrigger = !!i777[1]
  i776.usedByEffector = !!i777[2]
  i776.density = i777[3]
  i776.offset = new pc.Vec2( i777[4], i777[5] )
  request.r(i777[6], i777[7], 0, i776, 'material')
  i776.edgeRadius = i777[8]
  var i779 = i777[9]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
    i778.push( new pc.Vec2( i779[i + 0], i779[i + 1] ) );
  }
  i776.points = i778
  i776.useAdjacentStartPoint = !!i777[10]
  i776.adjacentStartPoint = new pc.Vec2( i777[11], i777[12] )
  i776.useAdjacentEndPoint = !!i777[13]
  i776.adjacentEndPoint = new pc.Vec2( i777[14], i777[15] )
  return i776
}

Deserializers["Bomb"] = function (request, data, root) {
  var i782 = root || request.c( 'Bomb' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i782.explosionFx = i784
  request.r(i783[1], i783[2], 0, i782, 'explosionFxClip')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i789 = data
  i788.radius = i789[0]
  i788.enabled = !!i789[1]
  i788.isTrigger = !!i789[2]
  i788.usedByEffector = !!i789[3]
  i788.density = i789[4]
  i788.offset = new pc.Vec2( i789[5], i789[6] )
  request.r(i789[7], i789[8], 0, i788, 'material')
  return i788
}

Deserializers["LoseTriggerArea"] = function (request, data, root) {
  var i790 = root || request.c( 'LoseTriggerArea' )
  var i791 = data
  return i790
}

Deserializers["Pulse"] = function (request, data, root) {
  var i792 = root || request.c( 'Pulse' )
  var i793 = data
  i792.scale = i793[0]
  i792.duration = i793[1]
  i792.ease = i793[2]
  i792.loopCount = i793[3]
  i792.from = !!i793[4]
  return i792
}

Deserializers["Hand"] = function (request, data, root) {
  var i794 = root || request.c( 'Hand' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'designatedPin')
  return i794
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_FirstSelected')
  i796.m_sendNavigationEvents = !!i797[2]
  i796.m_DragThreshold = i797[3]
  return i796
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i799 = data
  i798.m_HorizontalAxis = i799[0]
  i798.m_VerticalAxis = i799[1]
  i798.m_SubmitButton = i799[2]
  i798.m_CancelButton = i799[3]
  i798.m_InputActionsPerSecond = i799[4]
  i798.m_RepeatDelay = i799[5]
  i798.m_ForceModuleActive = !!i799[6]
  i798.m_SendPointerHoverToParent = !!i799[7]
  return i798
}

Deserializers["King"] = function (request, data, root) {
  var i800 = root || request.c( 'King' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'helpMeSound')
  request.r(i801[2], i801[3], 0, i800, 'runningSfx')
  request.r(i801[4], i801[5], 0, i800, 'dieSfx')
  request.r(i801[6], i801[7], 0, i800, 'laughSfx')
  request.r(i801[8], i801[9], 0, i800, 'getHitSfx')
  request.r(i801[10], i801[11], 0, i800, 'anim')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i803 = data
  i802.pivot = new pc.Vec2( i803[0], i803[1] )
  i802.anchorMin = new pc.Vec2( i803[2], i803[3] )
  i802.anchorMax = new pc.Vec2( i803[4], i803[5] )
  i802.sizeDelta = new pc.Vec2( i803[6], i803[7] )
  i802.anchoredPosition3D = new pc.Vec3( i803[8], i803[9], i803[10] )
  i802.rotation = new pc.Quat(i803[11], i803[12], i803[13], i803[14])
  i802.scale = new pc.Vec3( i803[15], i803[16], i803[17] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.planeDistance = i805[1]
  i804.referencePixelsPerUnit = i805[2]
  i804.isFallbackOverlay = !!i805[3]
  i804.renderMode = i805[4]
  i804.renderOrder = i805[5]
  i804.sortingLayerName = i805[6]
  i804.sortingOrder = i805[7]
  i804.scaleFactor = i805[8]
  request.r(i805[9], i805[10], 0, i804, 'worldCamera')
  i804.overrideSorting = !!i805[11]
  i804.pixelPerfect = !!i805[12]
  i804.targetDisplay = i805[13]
  i804.overridePixelPerfect = !!i805[14]
  return i804
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i807 = data
  i806.m_UiScaleMode = i807[0]
  i806.m_ReferencePixelsPerUnit = i807[1]
  i806.m_ScaleFactor = i807[2]
  i806.m_ReferenceResolution = new pc.Vec2( i807[3], i807[4] )
  i806.m_ScreenMatchMode = i807[5]
  i806.m_MatchWidthOrHeight = i807[6]
  i806.m_PhysicalUnit = i807[7]
  i806.m_FallbackScreenDPI = i807[8]
  i806.m_DefaultSpriteDPI = i807[9]
  i806.m_DynamicPixelsPerUnit = i807[10]
  i806.m_PresetInfoIsWorld = !!i807[11]
  return i806
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i809 = data
  i808.m_IgnoreReversedGraphics = !!i809[0]
  i808.m_BlockingObjects = i809[1]
  i808.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i809[2] )
  return i808
}

Deserializers["CountdownController"] = function (request, data, root) {
  var i810 = root || request.c( 'CountdownController' )
  var i811 = data
  i810.countdownTime = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'countdownDisplay')
  request.r(i811[3], i811[4], 0, i810, 'uiFill')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i813 = data
  i812.cullTransparentMesh = !!i813[0]
  return i812
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i815 = data
  i814.m_hasFontAssetChanged = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'm_baseMaterial')
  i814.m_maskOffset = new pc.Vec4( i815[3], i815[4], i815[5], i815[6] )
  i814.m_text = i815[7]
  i814.m_isRightToLeft = !!i815[8]
  request.r(i815[9], i815[10], 0, i814, 'm_fontAsset')
  request.r(i815[11], i815[12], 0, i814, 'm_sharedMaterial')
  var i817 = i815[13]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.m_fontSharedMaterials = i816
  request.r(i815[14], i815[15], 0, i814, 'm_fontMaterial')
  var i819 = i815[16]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i814.m_fontMaterials = i818
  i814.m_fontColor32 = UnityEngine.Color32.ConstructColor(i815[17], i815[18], i815[19], i815[20])
  i814.m_fontColor = new pc.Color(i815[21], i815[22], i815[23], i815[24])
  i814.m_enableVertexGradient = !!i815[25]
  i814.m_colorMode = i815[26]
  i814.m_fontColorGradient = request.d('TMPro.VertexGradient', i815[27], i814.m_fontColorGradient)
  request.r(i815[28], i815[29], 0, i814, 'm_fontColorGradientPreset')
  request.r(i815[30], i815[31], 0, i814, 'm_spriteAsset')
  i814.m_tintAllSprites = !!i815[32]
  request.r(i815[33], i815[34], 0, i814, 'm_StyleSheet')
  i814.m_TextStyleHashCode = i815[35]
  i814.m_overrideHtmlColors = !!i815[36]
  i814.m_faceColor = UnityEngine.Color32.ConstructColor(i815[37], i815[38], i815[39], i815[40])
  i814.m_fontSize = i815[41]
  i814.m_fontSizeBase = i815[42]
  i814.m_fontWeight = i815[43]
  i814.m_enableAutoSizing = !!i815[44]
  i814.m_fontSizeMin = i815[45]
  i814.m_fontSizeMax = i815[46]
  i814.m_fontStyle = i815[47]
  i814.m_HorizontalAlignment = i815[48]
  i814.m_VerticalAlignment = i815[49]
  i814.m_textAlignment = i815[50]
  i814.m_characterSpacing = i815[51]
  i814.m_wordSpacing = i815[52]
  i814.m_lineSpacing = i815[53]
  i814.m_lineSpacingMax = i815[54]
  i814.m_paragraphSpacing = i815[55]
  i814.m_charWidthMaxAdj = i815[56]
  i814.m_enableWordWrapping = !!i815[57]
  i814.m_wordWrappingRatios = i815[58]
  i814.m_overflowMode = i815[59]
  request.r(i815[60], i815[61], 0, i814, 'm_linkedTextComponent')
  request.r(i815[62], i815[63], 0, i814, 'parentLinkedComponent')
  i814.m_enableKerning = !!i815[64]
  i814.m_enableExtraPadding = !!i815[65]
  i814.checkPaddingRequired = !!i815[66]
  i814.m_isRichText = !!i815[67]
  i814.m_parseCtrlCharacters = !!i815[68]
  i814.m_isOrthographic = !!i815[69]
  i814.m_isCullingEnabled = !!i815[70]
  i814.m_horizontalMapping = i815[71]
  i814.m_verticalMapping = i815[72]
  i814.m_uvLineOffset = i815[73]
  i814.m_geometrySortingOrder = i815[74]
  i814.m_IsTextObjectScaleStatic = !!i815[75]
  i814.m_VertexBufferAutoSizeReduction = !!i815[76]
  i814.m_useMaxVisibleDescender = !!i815[77]
  i814.m_pageToDisplay = i815[78]
  i814.m_margin = new pc.Vec4( i815[79], i815[80], i815[81], i815[82] )
  i814.m_isUsingLegacyAnimationComponent = !!i815[83]
  i814.m_isVolumetricText = !!i815[84]
  request.r(i815[85], i815[86], 0, i814, 'm_Material')
  i814.m_Maskable = !!i815[87]
  i814.m_Color = new pc.Color(i815[88], i815[89], i815[90], i815[91])
  i814.m_RaycastTarget = !!i815[92]
  i814.m_RaycastPadding = new pc.Vec4( i815[93], i815[94], i815[95], i815[96] )
  return i814
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.VertexGradient' )
  var i821 = data
  i820.topLeft = new pc.Color(i821[0], i821[1], i821[2], i821[3])
  i820.topRight = new pc.Color(i821[4], i821[5], i821[6], i821[7])
  i820.bottomLeft = new pc.Color(i821[8], i821[9], i821[10], i821[11])
  i820.bottomRight = new pc.Color(i821[12], i821[13], i821[14], i821[15])
  return i820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Image' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Sprite')
  i822.m_Type = i823[2]
  i822.m_PreserveAspect = !!i823[3]
  i822.m_FillCenter = !!i823[4]
  i822.m_FillMethod = i823[5]
  i822.m_FillAmount = i823[6]
  i822.m_FillClockwise = !!i823[7]
  i822.m_FillOrigin = i823[8]
  i822.m_UseSpriteMesh = !!i823[9]
  i822.m_PixelsPerUnitMultiplier = i823[10]
  request.r(i823[11], i823[12], 0, i822, 'm_Material')
  i822.m_Maskable = !!i823[13]
  i822.m_Color = new pc.Color(i823[14], i823[15], i823[16], i823[17])
  i822.m_RaycastTarget = !!i823[18]
  i822.m_RaycastPadding = new pc.Vec4( i823[19], i823[20], i823[21], i823[22] )
  return i822
}

Deserializers["EndgamePopup"] = function (request, data, root) {
  var i824 = root || request.c( 'EndgamePopup' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'complete')
  request.r(i825[2], i825[3], 0, i824, 'button')
  request.r(i825[4], i825[5], 0, i824, 'timer')
  return i824
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.Button' )
  var i827 = data
  i826.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i827[0], i826.m_OnClick)
  i826.m_Navigation = request.d('UnityEngine.UI.Navigation', i827[1], i826.m_Navigation)
  i826.m_Transition = i827[2]
  i826.m_Colors = request.d('UnityEngine.UI.ColorBlock', i827[3], i826.m_Colors)
  i826.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i827[4], i826.m_SpriteState)
  i826.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i827[5], i826.m_AnimationTriggers)
  i826.m_Interactable = !!i827[6]
  request.r(i827[7], i827[8], 0, i826, 'm_TargetGraphic')
  return i826
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i829 = data
  i828.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i829[0], i828.m_PersistentCalls)
  return i828
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('UnityEngine.Events.PersistentCall', i833[i + 0]));
  }
  i830.m_Calls = i832
  return i830
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_Target')
  i836.m_TargetAssemblyTypeName = i837[2]
  i836.m_MethodName = i837[3]
  i836.m_Mode = i837[4]
  i836.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i837[5], i836.m_Arguments)
  i836.m_CallState = i837[6]
  return i836
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_ObjectArgument')
  i838.m_ObjectArgumentAssemblyTypeName = i839[2]
  i838.m_IntArgument = i839[3]
  i838.m_FloatArgument = i839[4]
  i838.m_StringArgument = i839[5]
  i838.m_BoolArgument = !!i839[6]
  return i838
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i841 = data
  i840.m_Mode = i841[0]
  i840.m_WrapAround = !!i841[1]
  request.r(i841[2], i841[3], 0, i840, 'm_SelectOnUp')
  request.r(i841[4], i841[5], 0, i840, 'm_SelectOnDown')
  request.r(i841[6], i841[7], 0, i840, 'm_SelectOnLeft')
  request.r(i841[8], i841[9], 0, i840, 'm_SelectOnRight')
  return i840
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i843 = data
  i842.m_NormalColor = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  i842.m_HighlightedColor = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.m_PressedColor = new pc.Color(i843[8], i843[9], i843[10], i843[11])
  i842.m_SelectedColor = new pc.Color(i843[12], i843[13], i843[14], i843[15])
  i842.m_DisabledColor = new pc.Color(i843[16], i843[17], i843[18], i843[19])
  i842.m_ColorMultiplier = i843[20]
  i842.m_FadeDuration = i843[21]
  return i842
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_HighlightedSprite')
  request.r(i845[2], i845[3], 0, i844, 'm_PressedSprite')
  request.r(i845[4], i845[5], 0, i844, 'm_SelectedSprite')
  request.r(i845[6], i845[7], 0, i844, 'm_DisabledSprite')
  return i844
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i847 = data
  i846.m_NormalTrigger = i847[0]
  i846.m_HighlightedTrigger = i847[1]
  i846.m_PressedTrigger = i847[2]
  i846.m_SelectedTrigger = i847[3]
  i846.m_DisabledTrigger = i847[4]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i849 = data
  i848.ambientIntensity = i849[0]
  i848.reflectionIntensity = i849[1]
  i848.ambientMode = i849[2]
  i848.ambientLight = new pc.Color(i849[3], i849[4], i849[5], i849[6])
  i848.ambientSkyColor = new pc.Color(i849[7], i849[8], i849[9], i849[10])
  i848.ambientGroundColor = new pc.Color(i849[11], i849[12], i849[13], i849[14])
  i848.ambientEquatorColor = new pc.Color(i849[15], i849[16], i849[17], i849[18])
  i848.fogColor = new pc.Color(i849[19], i849[20], i849[21], i849[22])
  i848.fogEndDistance = i849[23]
  i848.fogStartDistance = i849[24]
  i848.fogDensity = i849[25]
  i848.fog = !!i849[26]
  request.r(i849[27], i849[28], 0, i848, 'skybox')
  i848.fogMode = i849[29]
  var i851 = i849[30]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i851[i + 0]) );
  }
  i848.lightmaps = i850
  i848.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i849[31], i848.lightProbes)
  i848.lightmapsMode = i849[32]
  i848.mixedBakeMode = i849[33]
  i848.environmentLightingMode = i849[34]
  i848.ambientProbe = new pc.SphericalHarmonicsL2(i849[35])
  i848.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i849[36])
  i848.useReferenceAmbientProbe = !!i849[37]
  request.r(i849[38], i849[39], 0, i848, 'customReflection')
  request.r(i849[40], i849[41], 0, i848, 'defaultReflection')
  i848.defaultReflectionMode = i849[42]
  i848.defaultReflectionResolution = i849[43]
  i848.sunLightObjectId = i849[44]
  i848.pixelLightCount = i849[45]
  i848.defaultReflectionHDR = !!i849[46]
  i848.hasLightDataAsset = !!i849[47]
  i848.hasManualGenerate = !!i849[48]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'lightmapColor')
  request.r(i855[2], i855[3], 0, i854, 'lightmapDirection')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i856 = root || new UnityEngine.LightProbes()
  var i857 = data
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i867[i + 0]));
  }
  i864.ShaderCompilationErrors = i866
  i864.name = i865[1]
  i864.guid = i865[2]
  var i869 = i865[3]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.shaderDefinedKeywords = i868
  var i871 = i865[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i871[i + 0]) );
  }
  i864.passes = i870
  var i873 = i865[5]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i873[i + 0]) );
  }
  i864.usePasses = i872
  var i875 = i865[6]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i875[i + 0]) );
  }
  i864.defaultParameterValues = i874
  request.r(i865[7], i865[8], 0, i864, 'unityFallbackShader')
  i864.readDepth = !!i865[9]
  i864.isCreatedByShaderGraph = !!i865[10]
  i864.compiled = !!i865[11]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i879 = data
  i878.shaderName = i879[0]
  i878.errorMessage = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i882 = root || new pc.UnityShaderPass()
  var i883 = data
  i882.id = i883[0]
  i882.subShaderIndex = i883[1]
  i882.name = i883[2]
  i882.passType = i883[3]
  i882.grabPassTextureName = i883[4]
  i882.usePass = !!i883[5]
  i882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[6], i882.zTest)
  i882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[7], i882.zWrite)
  i882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[8], i882.culling)
  i882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[9], i882.blending)
  i882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i883[10], i882.alphaBlending)
  i882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[11], i882.colorWriteMask)
  i882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[12], i882.offsetUnits)
  i882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[13], i882.offsetFactor)
  i882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[14], i882.stencilRef)
  i882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[15], i882.stencilReadMask)
  i882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[16], i882.stencilWriteMask)
  i882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[17], i882.stencilOp)
  i882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[18], i882.stencilOpFront)
  i882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i883[19], i882.stencilOpBack)
  var i885 = i883[20]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i885[i + 0]) );
  }
  i882.tags = i884
  var i887 = i883[21]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.passDefinedKeywords = i886
  var i889 = i883[22]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i889[i + 0]) );
  }
  i882.passDefinedKeywordGroups = i888
  var i891 = i883[23]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i891[i + 0]) );
  }
  i882.variants = i890
  var i893 = i883[24]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i893[i + 0]) );
  }
  i882.excludedVariants = i892
  i882.hasDepthReader = !!i883[25]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i895 = data
  i894.val = i895[0]
  i894.name = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i897 = data
  i896.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[0], i896.src)
  i896.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[1], i896.dst)
  i896.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[2], i896.op)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i899 = data
  i898.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[0], i898.pass)
  i898.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[1], i898.fail)
  i898.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[2], i898.zFail)
  i898.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i899[3], i898.comp)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.keywords = i908
  i906.hasDiscard = !!i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i913 = data
  i912.passId = i913[0]
  i912.subShaderIndex = i913[1]
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.vertexProgram = i913[3]
  i912.fragmentProgram = i913[4]
  i912.exportedForWebGl2 = !!i913[5]
  i912.readDepth = !!i913[6]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'shader')
  i918.pass = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i923 = data
  i922.name = i923[0]
  i922.type = i923[1]
  i922.value = new pc.Vec4( i923[2], i923[3], i923[4], i923[5] )
  i922.textureValue = i923[6]
  i922.shaderPropertyFlag = i923[7]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i925 = data
  i924.name = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'texture')
  i924.aabb = i925[3]
  i924.vertices = i925[4]
  i924.triangles = i925[5]
  i924.textureRect = UnityEngine.Rect.MinMaxRect(i925[6], i925[7], i925[8], i925[9])
  i924.packedRect = UnityEngine.Rect.MinMaxRect(i925[10], i925[11], i925[12], i925[13])
  i924.border = new pc.Vec4( i925[14], i925[15], i925[16], i925[17] )
  i924.transparency = i925[18]
  i924.bounds = i925[19]
  i924.pixelsPerUnit = i925[20]
  i924.textureWidth = i925[21]
  i924.textureHeight = i925[22]
  i924.nativeSize = new pc.Vec2( i925[23], i925[24] )
  i924.pivot = new pc.Vec2( i925[25], i925[26] )
  i924.textureRectOffset = new pc.Vec2( i925[27], i925[28] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i927 = data
  i926.name = i927[0]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i929 = data
  i928.name = i929[0]
  i928.ascent = i929[1]
  i928.originalLineHeight = i929[2]
  i928.fontSize = i929[3]
  var i931 = i929[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i931[i + 0]) );
  }
  i928.characterInfo = i930
  request.r(i929[5], i929[6], 0, i928, 'texture')
  i928.originalFontSize = i929[7]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i935 = data
  i934.index = i935[0]
  i934.advance = i935[1]
  i934.bearing = i935[2]
  i934.glyphWidth = i935[3]
  i934.glyphHeight = i935[4]
  i934.minX = i935[5]
  i934.maxX = i935[6]
  i934.minY = i935[7]
  i934.maxY = i935[8]
  i934.uvBottomLeftX = i935[9]
  i934.uvBottomLeftY = i935[10]
  i934.uvBottomRightX = i935[11]
  i934.uvBottomRightY = i935[12]
  i934.uvTopLeftX = i935[13]
  i934.uvTopLeftY = i935[14]
  i934.uvTopRightX = i935[15]
  i934.uvTopRightY = i935[16]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i937 = data
  i936.name = i937[0]
  i936.bytes64 = i937[1]
  i936.data = i937[2]
  return i936
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i938 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.atlasAssets = i940
  i938.scale = i939[1]
  request.r(i939[2], i939[3], 0, i938, 'skeletonJSON')
  i938.isUpgradingBlendModeMaterials = !!i939[4]
  i938.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i939[5], i938.blendModeMaterials)
  var i943 = i939[6]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i938.skeletonDataModifiers = i942
  var i945 = i939[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i938.fromAnimation = i944
  var i947 = i939[8]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i938.toAnimation = i946
  i938.duration = i939[9]
  i938.defaultMix = i939[10]
  request.r(i939[11], i939[12], 0, i938, 'controller')
  return i938
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i950 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i951 = data
  i950.applyAdditiveMaterial = !!i951[0]
  var i953 = i951[1]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i953[i + 0]));
  }
  i950.additiveMaterials = i952
  var i955 = i951[2]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i955[i + 0]));
  }
  i950.multiplyMaterials = i954
  var i957 = i951[3]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i957[i + 0]));
  }
  i950.screenMaterials = i956
  i950.requiresBlendModeMaterials = !!i951[4]
  return i950
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i960 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i961 = data
  i960.pageName = i961[0]
  request.r(i961[1], i961[2], 0, i960, 'material')
  return i960
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i964 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'atlasFile')
  var i967 = i965[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.materials = i966
  i964.textureLoadingMode = i965[3]
  request.r(i965[4], i965[5], 0, i964, 'onDemandTextureLoader')
  return i964
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i969 = data
  i968.hashCode = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'material')
  i968.materialHashCode = i969[3]
  request.r(i969[4], i969[5], 0, i968, 'atlas')
  i968.normalStyle = i969[6]
  i968.normalSpacingOffset = i969[7]
  i968.boldStyle = i969[8]
  i968.boldSpacing = i969[9]
  i968.italicStyle = i969[10]
  i968.tabSize = i969[11]
  i968.m_Version = i969[12]
  i968.m_SourceFontFileGUID = i969[13]
  request.r(i969[14], i969[15], 0, i968, 'm_SourceFontFile_EditorRef')
  request.r(i969[16], i969[17], 0, i968, 'm_SourceFontFile')
  i968.m_AtlasPopulationMode = i969[18]
  i968.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i969[19], i968.m_FaceInfo)
  var i971 = i969[20]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('UnityEngine.TextCore.Glyph', i971[i + 0]));
  }
  i968.m_GlyphTable = i970
  var i973 = i969[21]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_Character', i973[i + 0]));
  }
  i968.m_CharacterTable = i972
  var i975 = i969[22]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i968.m_AtlasTextures = i974
  i968.m_AtlasTextureIndex = i969[23]
  i968.m_IsMultiAtlasTexturesEnabled = !!i969[24]
  i968.m_ClearDynamicDataOnBuild = !!i969[25]
  var i977 = i969[26]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('UnityEngine.TextCore.GlyphRect', i977[i + 0]));
  }
  i968.m_UsedGlyphRects = i976
  var i979 = i969[27]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('UnityEngine.TextCore.GlyphRect', i979[i + 0]));
  }
  i968.m_FreeGlyphRects = i978
  i968.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i969[28], i968.m_fontInfo)
  i968.m_AtlasWidth = i969[29]
  i968.m_AtlasHeight = i969[30]
  i968.m_AtlasPadding = i969[31]
  i968.m_AtlasRenderMode = i969[32]
  var i981 = i969[33]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_Glyph', i981[i + 0]));
  }
  i968.m_glyphInfoList = i980
  i968.m_KerningTable = request.d('TMPro.KerningTable', i969[34], i968.m_KerningTable)
  i968.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i969[35], i968.m_FontFeatureTable)
  var i983 = i969[36]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i968.fallbackFontAssets = i982
  var i985 = i969[37]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 1, i984, '')
  }
  i968.m_FallbackFontAssetTable = i984
  i968.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i969[38], i968.m_CreationSettings)
  var i987 = i969[39]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('TMPro.TMP_FontWeightPair', i987[i + 0]) );
  }
  i968.m_FontWeightTable = i986
  var i989 = i969[40]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('TMPro.TMP_FontWeightPair', i989[i + 0]) );
  }
  i968.fontWeights = i988
  return i968
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i991 = data
  i990.m_FaceIndex = i991[0]
  i990.m_FamilyName = i991[1]
  i990.m_StyleName = i991[2]
  i990.m_PointSize = i991[3]
  i990.m_Scale = i991[4]
  i990.m_UnitsPerEM = i991[5]
  i990.m_LineHeight = i991[6]
  i990.m_AscentLine = i991[7]
  i990.m_CapLine = i991[8]
  i990.m_MeanLine = i991[9]
  i990.m_Baseline = i991[10]
  i990.m_DescentLine = i991[11]
  i990.m_SuperscriptOffset = i991[12]
  i990.m_SuperscriptSize = i991[13]
  i990.m_SubscriptOffset = i991[14]
  i990.m_SubscriptSize = i991[15]
  i990.m_UnderlineOffset = i991[16]
  i990.m_UnderlineThickness = i991[17]
  i990.m_StrikethroughOffset = i991[18]
  i990.m_StrikethroughThickness = i991[19]
  i990.m_TabWidth = i991[20]
  return i990
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i995 = data
  i994.m_Index = i995[0]
  i994.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i995[1], i994.m_Metrics)
  i994.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i995[2], i994.m_GlyphRect)
  i994.m_Scale = i995[3]
  i994.m_AtlasIndex = i995[4]
  i994.m_ClassDefinitionType = i995[5]
  return i994
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i997 = data
  i996.m_Width = i997[0]
  i996.m_Height = i997[1]
  i996.m_HorizontalBearingX = i997[2]
  i996.m_HorizontalBearingY = i997[3]
  i996.m_HorizontalAdvance = i997[4]
  return i996
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i999 = data
  i998.m_X = i999[0]
  i998.m_Y = i999[1]
  i998.m_Width = i999[2]
  i998.m_Height = i999[3]
  return i998
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_Character' )
  var i1003 = data
  i1002.m_ElementType = i1003[0]
  i1002.m_Unicode = i1003[1]
  i1002.m_GlyphIndex = i1003[2]
  i1002.m_Scale = i1003[3]
  return i1002
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1009 = data
  i1008.Name = i1009[0]
  i1008.PointSize = i1009[1]
  i1008.Scale = i1009[2]
  i1008.CharacterCount = i1009[3]
  i1008.LineHeight = i1009[4]
  i1008.Baseline = i1009[5]
  i1008.Ascender = i1009[6]
  i1008.CapHeight = i1009[7]
  i1008.Descender = i1009[8]
  i1008.CenterLine = i1009[9]
  i1008.SuperscriptOffset = i1009[10]
  i1008.SubscriptOffset = i1009[11]
  i1008.SubSize = i1009[12]
  i1008.Underline = i1009[13]
  i1008.UnderlineThickness = i1009[14]
  i1008.strikethrough = i1009[15]
  i1008.strikethroughThickness = i1009[16]
  i1008.TabWidth = i1009[17]
  i1008.Padding = i1009[18]
  i1008.AtlasWidth = i1009[19]
  i1008.AtlasHeight = i1009[20]
  return i1008
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1013 = data
  i1012.id = i1013[0]
  i1012.x = i1013[1]
  i1012.y = i1013[2]
  i1012.width = i1013[3]
  i1012.height = i1013[4]
  i1012.xOffset = i1013[5]
  i1012.yOffset = i1013[6]
  i1012.xAdvance = i1013[7]
  i1012.scale = i1013[8]
  return i1012
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.KerningTable' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.KerningPair', i1017[i + 0]));
  }
  i1014.kerningPairs = i1016
  return i1014
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.KerningPair' )
  var i1021 = data
  i1020.xOffset = i1021[0]
  i1020.m_FirstGlyph = i1021[1]
  i1020.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1021[2], i1020.m_FirstGlyphAdjustments)
  i1020.m_SecondGlyph = i1021[3]
  i1020.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1021[4], i1020.m_SecondGlyphAdjustments)
  i1020.m_IgnoreSpacingAdjustments = !!i1021[5]
  return i1020
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1025[i + 0]));
  }
  i1022.m_GlyphPairAdjustmentRecords = i1024
  return i1022
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1029 = data
  i1028.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1029[0], i1028.m_FirstAdjustmentRecord)
  i1028.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1029[1], i1028.m_SecondAdjustmentRecord)
  i1028.m_FeatureLookupFlags = i1029[2]
  return i1028
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1031 = data
  i1030.m_GlyphIndex = i1031[0]
  i1030.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1031[1], i1030.m_GlyphValueRecord)
  return i1030
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1033 = data
  i1032.m_XPlacement = i1033[0]
  i1032.m_YPlacement = i1033[1]
  i1032.m_XAdvance = i1033[2]
  i1032.m_YAdvance = i1033[3]
  return i1032
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1037 = data
  i1036.sourceFontFileName = i1037[0]
  i1036.sourceFontFileGUID = i1037[1]
  i1036.pointSizeSamplingMode = i1037[2]
  i1036.pointSize = i1037[3]
  i1036.padding = i1037[4]
  i1036.packingMode = i1037[5]
  i1036.atlasWidth = i1037[6]
  i1036.atlasHeight = i1037[7]
  i1036.characterSetSelectionMode = i1037[8]
  i1036.characterSequence = i1037[9]
  i1036.referencedFontAssetGUID = i1037[10]
  i1036.referencedTextAssetGUID = i1037[11]
  i1036.fontStyle = i1037[12]
  i1036.fontStyleModifier = i1037[13]
  i1036.renderMode = i1037[14]
  i1036.includeFontFeatures = !!i1037[15]
  return i1036
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'regularTypeface')
  request.r(i1041[2], i1041[3], 0, i1040, 'italicTypeface')
  return i1040
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_Settings' )
  var i1043 = data
  i1042.m_enableWordWrapping = !!i1043[0]
  i1042.m_enableKerning = !!i1043[1]
  i1042.m_enableExtraPadding = !!i1043[2]
  i1042.m_enableTintAllSprites = !!i1043[3]
  i1042.m_enableParseEscapeCharacters = !!i1043[4]
  i1042.m_EnableRaycastTarget = !!i1043[5]
  i1042.m_GetFontFeaturesAtRuntime = !!i1043[6]
  i1042.m_missingGlyphCharacter = i1043[7]
  i1042.m_warningsDisabled = !!i1043[8]
  request.r(i1043[9], i1043[10], 0, i1042, 'm_defaultFontAsset')
  i1042.m_defaultFontAssetPath = i1043[11]
  i1042.m_defaultFontSize = i1043[12]
  i1042.m_defaultAutoSizeMinRatio = i1043[13]
  i1042.m_defaultAutoSizeMaxRatio = i1043[14]
  i1042.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1043[15], i1043[16] )
  i1042.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1043[17], i1043[18] )
  i1042.m_autoSizeTextContainer = !!i1043[19]
  i1042.m_IsTextObjectScaleStatic = !!i1043[20]
  var i1045 = i1043[21]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1042.m_fallbackFontAssets = i1044
  i1042.m_matchMaterialPreset = !!i1043[22]
  request.r(i1043[23], i1043[24], 0, i1042, 'm_defaultSpriteAsset')
  i1042.m_defaultSpriteAssetPath = i1043[25]
  i1042.m_enableEmojiSupport = !!i1043[26]
  i1042.m_MissingCharacterSpriteUnicode = i1043[27]
  i1042.m_defaultColorGradientPresetsPath = i1043[28]
  request.r(i1043[29], i1043[30], 0, i1042, 'm_defaultStyleSheet')
  i1042.m_StyleSheetsResourcePath = i1043[31]
  request.r(i1043[32], i1043[33], 0, i1042, 'm_leadingCharacters')
  request.r(i1043[34], i1043[35], 0, i1042, 'm_followingCharacters')
  i1042.m_UseModernHangulLineBreakingRules = !!i1043[36]
  return i1042
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1047 = data
  i1046.hashCode = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'material')
  i1046.materialHashCode = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'spriteSheet')
  var i1049 = i1047[6]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_Sprite', i1049[i + 0]));
  }
  i1046.spriteInfoList = i1048
  var i1051 = i1047[7]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1046.fallbackSpriteAssets = i1050
  i1046.m_Version = i1047[8]
  i1046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1047[9], i1046.m_FaceInfo)
  var i1053 = i1047[10]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_SpriteCharacter', i1053[i + 0]));
  }
  i1046.m_SpriteCharacterTable = i1052
  var i1055 = i1047[11]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.TMP_SpriteGlyph', i1055[i + 0]));
  }
  i1046.m_SpriteGlyphTable = i1054
  return i1046
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.hashCode = i1059[1]
  i1058.unicode = i1059[2]
  i1058.pivot = new pc.Vec2( i1059[3], i1059[4] )
  request.r(i1059[5], i1059[6], 0, i1058, 'sprite')
  i1058.id = i1059[7]
  i1058.x = i1059[8]
  i1058.y = i1059[9]
  i1058.width = i1059[10]
  i1058.height = i1059[11]
  i1058.xOffset = i1059[12]
  i1058.yOffset = i1059[13]
  i1058.xAdvance = i1059[14]
  i1058.scale = i1059[15]
  return i1058
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1065 = data
  i1064.m_Name = i1065[0]
  i1064.m_HashCode = i1065[1]
  i1064.m_ElementType = i1065[2]
  i1064.m_Unicode = i1065[3]
  i1064.m_GlyphIndex = i1065[4]
  i1064.m_Scale = i1065[5]
  return i1064
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'sprite')
  i1068.m_Index = i1069[2]
  i1068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1069[3], i1068.m_Metrics)
  i1068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1069[4], i1068.m_GlyphRect)
  i1068.m_Scale = i1069[5]
  i1068.m_AtlasIndex = i1069[6]
  i1068.m_ClassDefinitionType = i1069[7]
  return i1068
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_Style', i1073[i + 0]));
  }
  i1070.m_StyleList = i1072
  return i1070
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_Style' )
  var i1077 = data
  i1076.m_Name = i1077[0]
  i1076.m_HashCode = i1077[1]
  i1076.m_OpeningDefinition = i1077[2]
  i1076.m_ClosingDefinition = i1077[3]
  i1076.m_OpeningTagArray = i1077[4]
  i1076.m_ClosingTagArray = i1077[5]
  i1076.m_OpeningTagUnicodeArray = i1077[6]
  i1076.m_ClosingTagUnicodeArray = i1077[7]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1081[i + 0]) );
  }
  i1078.files = i1080
  i1078.componentToPrefabIds = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1085 = data
  i1084.path = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'unityObject')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1089[i + 0]) );
  }
  i1086.scriptsExecutionOrder = i1088
  var i1091 = i1087[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1091[i + 0]) );
  }
  i1086.sortingLayers = i1090
  var i1093 = i1087[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1093[i + 0]) );
  }
  i1086.cullingLayers = i1092
  i1086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1087[3], i1086.timeSettings)
  i1086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1087[4], i1086.physicsSettings)
  i1086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1087[5], i1086.physics2DSettings)
  i1086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1087[6], i1086.qualitySettings)
  i1086.enableRealtimeShadows = !!i1087[7]
  i1086.enableAutoInstancing = !!i1087[8]
  i1086.enableDynamicBatching = !!i1087[9]
  i1086.lightmapEncodingQuality = i1087[10]
  i1086.desiredColorSpace = i1087[11]
  var i1095 = i1087[12]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1086.allTags = i1094
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  i1102.value = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1109 = data
  i1108.fixedDeltaTime = i1109[0]
  i1108.maximumDeltaTime = i1109[1]
  i1108.timeScale = i1109[2]
  i1108.maximumParticleTimestep = i1109[3]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1111 = data
  i1110.gravity = new pc.Vec3( i1111[0], i1111[1], i1111[2] )
  i1110.defaultSolverIterations = i1111[3]
  i1110.bounceThreshold = i1111[4]
  i1110.autoSyncTransforms = !!i1111[5]
  i1110.autoSimulation = !!i1111[6]
  var i1113 = i1111[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'material')
  i1118.gravity = new pc.Vec2( i1119[2], i1119[3] )
  i1118.positionIterations = i1119[4]
  i1118.velocityIterations = i1119[5]
  i1118.velocityThreshold = i1119[6]
  i1118.maxLinearCorrection = i1119[7]
  i1118.maxAngularCorrection = i1119[8]
  i1118.maxTranslationSpeed = i1119[9]
  i1118.maxRotationSpeed = i1119[10]
  i1118.baumgarteScale = i1119[11]
  i1118.baumgarteTOIScale = i1119[12]
  i1118.timeToSleep = i1119[13]
  i1118.linearSleepTolerance = i1119[14]
  i1118.angularSleepTolerance = i1119[15]
  i1118.defaultContactOffset = i1119[16]
  i1118.autoSimulation = !!i1119[17]
  i1118.queriesHitTriggers = !!i1119[18]
  i1118.queriesStartInColliders = !!i1119[19]
  i1118.callbacksOnDisable = !!i1119[20]
  i1118.reuseCollisionCallbacks = !!i1119[21]
  i1118.autoSyncTransforms = !!i1119[22]
  var i1121 = i1119[23]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1121[i + 0]) );
  }
  i1118.collisionMatrix = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.layerId = i1125[1]
  i1124.otherLayerId = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[i + 0]) );
  }
  i1126.qualityLevels = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.names = i1130
  i1126.shadows = i1127[2]
  i1126.anisotropicFiltering = i1127[3]
  i1126.antiAliasing = i1127[4]
  i1126.lodBias = i1127[5]
  i1126.shadowCascades = i1127[6]
  i1126.shadowDistance = i1127[7]
  i1126.shadowmaskMode = i1127[8]
  i1126.shadowProjection = i1127[9]
  i1126.shadowResolution = i1127[10]
  i1126.softParticles = !!i1127[11]
  i1126.softVegetation = !!i1127[12]
  i1126.activeColorSpace = i1127[13]
  i1126.desiredColorSpace = i1127[14]
  i1126.masterTextureLimit = i1127[15]
  i1126.maxQueuedFrames = i1127[16]
  i1126.particleRaycastBudget = i1127[17]
  i1126.pixelLightCount = i1127[18]
  i1126.realtimeReflectionProbes = !!i1127[19]
  i1126.shadowCascade2Split = i1127[20]
  i1126.shadowCascade4Split = new pc.Vec3( i1127[21], i1127[22], i1127[23] )
  i1126.streamingMipmapsActive = !!i1127[24]
  i1126.vSyncCount = i1127[25]
  i1126.asyncUploadBufferSize = i1127[26]
  i1126.asyncUploadTimeSlice = i1127[27]
  i1126.billboardsFaceCameraPosition = !!i1127[28]
  i1126.shadowNearPlaneOffset = i1127[29]
  i1126.streamingMipmapsMemoryBudget = i1127[30]
  i1126.maximumLODLevel = i1127[31]
  i1126.streamingMipmapsAddAllCameras = !!i1127[32]
  i1126.streamingMipmapsMaxLevelReduction = i1127[33]
  i1126.streamingMipmapsRenderersPerFrame = i1127[34]
  i1126.resolutionScalingFixedDPIFactor = i1127[35]
  i1126.streamingMipmapsMaxFileIORequests = i1127[36]
  i1126.currentQualityLevel = i1127[37]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1137 = data
  i1136.weight = i1137[0]
  i1136.vertices = i1137[1]
  i1136.normals = i1137[2]
  i1136.tangents = i1137[3]
  return i1136
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1139 = data
  i1138.xPlacement = i1139[0]
  i1138.yPlacement = i1139[1]
  i1138.xAdvance = i1139[2]
  i1138.yAdvance = i1139[3]
  return i1138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[21],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[21],"91":[15],"92":[93],"94":[93],"43":[42],"95":[96],"97":[3],"98":[96],"99":[42],"100":[42],"45":[43],"48":[49,42],"101":[42],"44":[43],"102":[42],"103":[42],"104":[42],"105":[42],"106":[42],"107":[42],"108":[42],"109":[42],"110":[42],"111":[49,42],"112":[42],"113":[42],"114":[42],"115":[42],"116":[49,42],"117":[42],"118":[39],"119":[39],"40":[39],"120":[39],"121":[21],"122":[21],"123":[124],"125":[21],"126":[127],"128":[42],"129":[49,42],"16":[15],"130":[49,42],"131":[132,15],"133":[15],"134":[15,13],"135":[70],"136":[7],"19":[127],"137":[20],"138":[42],"139":[15,42],"47":[42,49],"140":[42],"141":[49,42],"142":[15],"143":[49,42],"144":[42],"145":[96]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.Shader","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Knight","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityBone","UnityEngine.Camera","CamFollow","UnityEngine.GameObject","UnityEngine.AudioListener","GameManager","DeviceOrientationDetection","SoundManager","UnityEngine.AudioClip","InfinityParallaxManager","InputReceiver","LevelMap","UnityEngine.EdgeCollider2D","Bomb","UnityEngine.CircleCollider2D","LoseTriggerArea","Pulse","Hand","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","King","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CountdownController","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","EndgamePopup","UnityEngine.UI.Button","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "19.8";

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

Deserializers.buildID = "b37e7920-6ff0-472d-86fb-1672a541b3ee";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

