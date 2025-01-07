var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointSpring' )
  var i739 = data
  i738.spring = i739[0]
  i738.damper = i739[1]
  i738.targetPosition = i739[2]
  return i738
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointMotor' )
  var i741 = data
  i740.m_TargetVelocity = i741[0]
  i740.m_Force = i741[1]
  i740.m_FreeSpin = i741[2]
  return i740
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointLimits' )
  var i743 = data
  i742.m_Min = i743[0]
  i742.m_Max = i743[1]
  i742.m_Bounciness = i743[2]
  i742.m_BounceMinVelocity = i743[3]
  i742.m_ContactDistance = i743[4]
  i742.minBounce = i743[5]
  i742.maxBounce = i743[6]
  return i742
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointDrive' )
  var i745 = data
  i744.m_PositionSpring = i745[0]
  i744.m_PositionDamper = i745[1]
  i744.m_MaximumForce = i745[2]
  i744.m_UseAcceleration = i745[3]
  return i744
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i747 = data
  i746.m_Spring = i747[0]
  i746.m_Damper = i747[1]
  return i746
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i749 = data
  i748.m_Limit = i749[0]
  i748.m_Bounciness = i749[1]
  i748.m_ContactDistance = i749[2]
  return i748
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i751 = data
  i750.m_ExtremumSlip = i751[0]
  i750.m_ExtremumValue = i751[1]
  i750.m_AsymptoteSlip = i751[2]
  i750.m_AsymptoteValue = i751[3]
  i750.m_Stiffness = i751[4]
  return i750
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i753 = data
  i752.m_LowerAngle = i753[0]
  i752.m_UpperAngle = i753[1]
  return i752
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i755 = data
  i754.m_MotorSpeed = i755[0]
  i754.m_MaximumMotorTorque = i755[1]
  return i754
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i757 = data
  i756.m_DampingRatio = i757[0]
  i756.m_Frequency = i757[1]
  i756.m_Angle = i757[2]
  return i756
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i759 = data
  i758.m_LowerTranslation = i759[0]
  i758.m_UpperTranslation = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i760 = root || new pc.UnityMaterial()
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'shader')
  i760.renderQueue = i761[3]
  i760.enableInstancing = !!i761[4]
  var i763 = i761[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i763[i + 0]) );
  }
  i760.floatParameters = i762
  var i765 = i761[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i765[i + 0]) );
  }
  i760.colorParameters = i764
  var i767 = i761[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i767[i + 0]) );
  }
  i760.vectorParameters = i766
  var i769 = i761[8]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i769[i + 0]) );
  }
  i760.textureParameters = i768
  var i771 = i761[9]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i771[i + 0]) );
  }
  i760.materialFlags = i770
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i779 = data
  i778.name = i779[0]
  i778.value = new pc.Color(i779[1], i779[2], i779[3], i779[4])
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i783 = data
  i782.name = i783[0]
  i782.value = new pc.Vec4( i783[1], i783[2], i783[3], i783[4] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'value')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i791 = data
  i790.name = i791[0]
  i790.enabled = !!i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i793 = data
  i792.name = i793[0]
  i792.width = i793[1]
  i792.height = i793[2]
  i792.mipmapCount = i793[3]
  i792.anisoLevel = i793[4]
  i792.filterMode = i793[5]
  i792.hdr = !!i793[6]
  i792.format = i793[7]
  i792.wrapMode = i793[8]
  i792.alphaIsTransparency = !!i793[9]
  i792.alphaSource = i793[10]
  i792.graphicsFormat = i793[11]
  i792.sRGBTexture = !!i793[12]
  i792.desiredColorSpace = i793[13]
  i792.wrapU = i793[14]
  i792.wrapV = i793[15]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i795 = data
  i794.position = new pc.Vec3( i795[0], i795[1], i795[2] )
  i794.scale = new pc.Vec3( i795[3], i795[4], i795[5] )
  i794.rotation = new pc.Quat(i795[6], i795[7], i795[8], i795[9])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i797 = data
  i796.enabled = !!i797[0]
  request.r(i797[1], i797[2], 0, i796, 'sharedMaterial')
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sharedMaterials = i798
  i796.receiveShadows = !!i797[4]
  i796.shadowCastingMode = i797[5]
  i796.sortingLayerID = i797[6]
  i796.sortingOrder = i797[7]
  i796.lightmapIndex = i797[8]
  i796.lightmapSceneIndex = i797[9]
  i796.lightmapScaleOffset = new pc.Vec4( i797[10], i797[11], i797[12], i797[13] )
  i796.lightProbeUsage = i797[14]
  i796.reflectionProbeUsage = i797[15]
  i796.color = new pc.Color(i797[16], i797[17], i797[18], i797[19])
  request.r(i797[20], i797[21], 0, i796, 'sprite')
  i796.flipX = !!i797[22]
  i796.flipY = !!i797[23]
  i796.drawMode = i797[24]
  i796.size = new pc.Vec2( i797[25], i797[26] )
  i796.tileMode = i797[27]
  i796.adaptiveModeThreshold = i797[28]
  i796.maskInteraction = i797[29]
  i796.spriteSortPoint = i797[30]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i803 = data
  i802.usedByComposite = !!i803[0]
  i802.autoTiling = !!i803[1]
  i802.size = new pc.Vec2( i803[2], i803[3] )
  i802.edgeRadius = i803[4]
  i802.enabled = !!i803[5]
  i802.isTrigger = !!i803[6]
  i802.usedByEffector = !!i803[7]
  i802.density = i803[8]
  i802.offset = new pc.Vec2( i803[9], i803[10] )
  request.r(i803[11], i803[12], 0, i802, 'material')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i805 = data
  i804.bodyType = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'material')
  i804.simulated = !!i805[3]
  i804.useAutoMass = !!i805[4]
  i804.mass = i805[5]
  i804.drag = i805[6]
  i804.angularDrag = i805[7]
  i804.gravityScale = i805[8]
  i804.collisionDetectionMode = i805[9]
  i804.sleepMode = i805[10]
  i804.constraints = i805[11]
  return i804
}

Deserializers["Pin"] = function (request, data, root) {
  var i806 = root || request.c( 'Pin' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'head')
  request.r(i807[2], i807[3], 0, i806, 'end')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i809 = data
  i808.name = i809[0]
  i808.tagId = i809[1]
  i808.enabled = !!i809[2]
  i808.isStatic = !!i809[3]
  i808.layer = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i811 = data
  i810.radius = i811[0]
  i810.enabled = !!i811[1]
  i810.isTrigger = !!i811[2]
  i810.usedByEffector = !!i811[3]
  i810.density = i811[4]
  i810.offset = new pc.Vec2( i811[5], i811[6] )
  request.r(i811[7], i811[8], 0, i810, 'material')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'animatorController')
  request.r(i813[2], i813[3], 0, i812, 'avatar')
  i812.updateMode = i813[4]
  i812.hasTransformHierarchy = !!i813[5]
  i812.applyRootMotion = !!i813[6]
  var i815 = i813[7]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.humanBones = i814
  i812.enabled = !!i813[8]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i819 = data
  i818.name = i819[0]
  i818.halfPrecision = !!i819[1]
  i818.useUInt32IndexFormat = !!i819[2]
  i818.vertexCount = i819[3]
  i818.aabb = i819[4]
  var i821 = i819[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( !!i821[i + 0] );
  }
  i818.streams = i820
  i818.vertices = i819[6]
  var i823 = i819[7]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i823[i + 0]) );
  }
  i818.subMeshes = i822
  var i825 = i819[8]
  var i824 = []
  for(var i = 0; i < i825.length; i += 16) {
    i824.push( new pc.Mat4().setData(i825[i + 0], i825[i + 1], i825[i + 2], i825[i + 3],  i825[i + 4], i825[i + 5], i825[i + 6], i825[i + 7],  i825[i + 8], i825[i + 9], i825[i + 10], i825[i + 11],  i825[i + 12], i825[i + 13], i825[i + 14], i825[i + 15]) );
  }
  i818.bindposes = i824
  var i827 = i819[9]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i827[i + 0]) );
  }
  i818.blendShapes = i826
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i833 = data
  i832.triangles = i833[0]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i839 = data
  i838.name = i839[0]
  var i841 = i839[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i841[i + 0]) );
  }
  i838.frames = i840
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i843 = data
  i842.name = i843[0]
  i842.index = i843[1]
  i842.startup = !!i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i845 = data
  i844.enabled = !!i845[0]
  i844.aspect = i845[1]
  i844.orthographic = !!i845[2]
  i844.orthographicSize = i845[3]
  i844.backgroundColor = new pc.Color(i845[4], i845[5], i845[6], i845[7])
  i844.nearClipPlane = i845[8]
  i844.farClipPlane = i845[9]
  i844.fieldOfView = i845[10]
  i844.depth = i845[11]
  i844.clearFlags = i845[12]
  i844.cullingMask = i845[13]
  i844.rect = i845[14]
  request.r(i845[15], i845[16], 0, i844, 'targetTexture')
  i844.usePhysicalProperties = !!i845[17]
  i844.focalLength = i845[18]
  i844.sensorSize = new pc.Vec2( i845[19], i845[20] )
  i844.lensShift = new pc.Vec2( i845[21], i845[22] )
  i844.gateFit = i845[23]
  i844.commandBufferCount = i845[24]
  i844.cameraType = i845[25]
  return i844
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i846 = root || request.c( 'ViewportHandler' )
  var i847 = data
  i846.wireColor = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  i846.UnitsSize = i847[4]
  i846.constraint = i847[5]
  request.r(i847[6], i847[7], 0, i846, 'camera')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'clip')
  request.r(i849[2], i849[3], 0, i848, 'outputAudioMixerGroup')
  i848.playOnAwake = !!i849[4]
  i848.loop = !!i849[5]
  i848.time = i849[6]
  i848.volume = i849[7]
  i848.pitch = i849[8]
  i848.enabled = !!i849[9]
  return i848
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i850 = root || request.c( 'InputReceiver' )
  var i851 = data
  return i850
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i852 = root || request.c( 'CameraAnchor' )
  var i853 = data
  i852.anchorType = i853[0]
  i852.anchorOffset = new pc.Vec3( i853[1], i853[2], i853[3] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.isTrigger = !!i855[1]
  i854.usedByEffector = !!i855[2]
  i854.density = i855[3]
  i854.offset = new pc.Vec2( i855[4], i855[5] )
  request.r(i855[6], i855[7], 0, i854, 'material')
  i854.edgeRadius = i855[8]
  var i857 = i855[9]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
    i856.push( new pc.Vec2( i857[i + 0], i857[i + 1] ) );
  }
  i854.points = i856
  i854.useAdjacentStartPoint = !!i855[10]
  i854.adjacentStartPoint = new pc.Vec2( i855[11], i855[12] )
  i854.useAdjacentEndPoint = !!i855[13]
  i854.adjacentEndPoint = new pc.Vec2( i855[14], i855[15] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i861 = data
  i860.enabled = !!i861[0]
  i860.isTrigger = !!i861[1]
  i860.usedByEffector = !!i861[2]
  i860.density = i861[3]
  i860.offset = new pc.Vec2( i861[4], i861[5] )
  request.r(i861[6], i861[7], 0, i860, 'material')
  i860.usedByComposite = !!i861[8]
  i860.autoTiling = !!i861[9]
  var i863 = i861[10]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
  var i865 = i863[i + 0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
    i864.push( new pc.Vec2( i865[i + 0], i865[i + 1] ) );
  }
    i862.push( i864 );
  }
  i860.points = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i871 = data
  i870.pivot = new pc.Vec2( i871[0], i871[1] )
  i870.anchorMin = new pc.Vec2( i871[2], i871[3] )
  i870.anchorMax = new pc.Vec2( i871[4], i871[5] )
  i870.sizeDelta = new pc.Vec2( i871[6], i871[7] )
  i870.anchoredPosition3D = new pc.Vec3( i871[8], i871[9], i871[10] )
  i870.rotation = new pc.Quat(i871[11], i871[12], i871[13], i871[14])
  i870.scale = new pc.Vec3( i871[15], i871[16], i871[17] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i873 = data
  i872.enabled = !!i873[0]
  i872.planeDistance = i873[1]
  i872.referencePixelsPerUnit = i873[2]
  i872.isFallbackOverlay = !!i873[3]
  i872.renderMode = i873[4]
  i872.renderOrder = i873[5]
  i872.sortingLayerName = i873[6]
  i872.sortingOrder = i873[7]
  i872.scaleFactor = i873[8]
  request.r(i873[9], i873[10], 0, i872, 'worldCamera')
  i872.overrideSorting = !!i873[11]
  i872.pixelPerfect = !!i873[12]
  i872.targetDisplay = i873[13]
  i872.overridePixelPerfect = !!i873[14]
  return i872
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i875 = data
  i874.m_UiScaleMode = i875[0]
  i874.m_ReferencePixelsPerUnit = i875[1]
  i874.m_ScaleFactor = i875[2]
  i874.m_ReferenceResolution = new pc.Vec2( i875[3], i875[4] )
  i874.m_ScreenMatchMode = i875[5]
  i874.m_MatchWidthOrHeight = i875[6]
  i874.m_PhysicalUnit = i875[7]
  i874.m_FallbackScreenDPI = i875[8]
  i874.m_DefaultSpriteDPI = i875[9]
  i874.m_DynamicPixelsPerUnit = i875[10]
  i874.m_PresetInfoIsWorld = !!i875[11]
  return i874
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i877 = data
  i876.m_IgnoreReversedGraphics = !!i877[0]
  i876.m_BlockingObjects = i877[1]
  i876.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i877[2] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i879 = data
  i878.cullTransparentMesh = !!i879[0]
  return i878
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Image' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_Sprite')
  i880.m_Type = i881[2]
  i880.m_PreserveAspect = !!i881[3]
  i880.m_FillCenter = !!i881[4]
  i880.m_FillMethod = i881[5]
  i880.m_FillAmount = i881[6]
  i880.m_FillClockwise = !!i881[7]
  i880.m_FillOrigin = i881[8]
  i880.m_UseSpriteMesh = !!i881[9]
  i880.m_PixelsPerUnitMultiplier = i881[10]
  request.r(i881[11], i881[12], 0, i880, 'm_Material')
  i880.m_Maskable = !!i881[13]
  i880.m_Color = new pc.Color(i881[14], i881[15], i881[16], i881[17])
  i880.m_RaycastTarget = !!i881[18]
  i880.m_RaycastPadding = new pc.Vec4( i881[19], i881[20], i881[21], i881[22] )
  return i880
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Text' )
  var i883 = data
  i882.m_FontData = request.d('UnityEngine.UI.FontData', i883[0], i882.m_FontData)
  i882.m_Text = i883[1]
  request.r(i883[2], i883[3], 0, i882, 'm_Material')
  i882.m_Maskable = !!i883[4]
  i882.m_Color = new pc.Color(i883[5], i883[6], i883[7], i883[8])
  i882.m_RaycastTarget = !!i883[9]
  i882.m_RaycastPadding = new pc.Vec4( i883[10], i883[11], i883[12], i883[13] )
  return i882
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.FontData' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Font')
  i884.m_FontSize = i885[2]
  i884.m_FontStyle = i885[3]
  i884.m_BestFit = !!i885[4]
  i884.m_MinSize = i885[5]
  i884.m_MaxSize = i885[6]
  i884.m_Alignment = i885[7]
  i884.m_AlignByGeometry = !!i885[8]
  i884.m_RichText = !!i885[9]
  i884.m_HorizontalOverflow = i885[10]
  i884.m_VerticalOverflow = i885[11]
  i884.m_LineSpacing = i885[12]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'additionalVertexStreams')
  i886.enabled = !!i887[2]
  request.r(i887[3], i887[4], 0, i886, 'sharedMaterial')
  var i889 = i887[5]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.sharedMaterials = i888
  i886.receiveShadows = !!i887[6]
  i886.shadowCastingMode = i887[7]
  i886.sortingLayerID = i887[8]
  i886.sortingOrder = i887[9]
  i886.lightmapIndex = i887[10]
  i886.lightmapSceneIndex = i887[11]
  i886.lightmapScaleOffset = new pc.Vec4( i887[12], i887[13], i887[14], i887[15] )
  i886.lightProbeUsage = i887[16]
  i886.reflectionProbeUsage = i887[17]
  return i886
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i890 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i891 = data
  i890.loop = !!i891[0]
  i890.timeScale = i891[1]
  request.r(i891[2], i891[3], 0, i890, 'skeletonDataAsset')
  i890.initialSkinName = i891[4]
  i890.fixPrefabOverrideViaMeshFilter = i891[5]
  i890.initialFlipX = !!i891[6]
  i890.initialFlipY = !!i891[7]
  i890.updateWhenInvisible = i891[8]
  i890.zSpacing = i891[9]
  i890.useClipping = !!i891[10]
  i890.immutableTriangles = !!i891[11]
  i890.pmaVertexColors = !!i891[12]
  i890.clearStateOnDisable = !!i891[13]
  i890.tintBlack = !!i891[14]
  i890.singleSubmesh = !!i891[15]
  i890.fixDrawOrder = !!i891[16]
  i890.addNormals = !!i891[17]
  i890.calculateTangents = !!i891[18]
  i890.maskInteraction = i891[19]
  i890.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i891[20], i890.maskMaterials)
  i890.disableRenderingOnOverride = !!i891[21]
  i890.updateTiming = i891[22]
  i890.unscaledTime = !!i891[23]
  i890._animationName = i891[24]
  var i893 = i891[25]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i890.separatorSlotNames = i892
  return i890
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i894 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.materialsMaskDisabled = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i894.materialsInsideMask = i898
  var i901 = i895[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i894.materialsOutsideMask = i900
  return i894
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i904 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'boneRoot')
  i904.flipBy180DegreeRotation = !!i905[2]
  request.r(i905[3], i905[4], 0, i904, 'skeletonRenderer')
  request.r(i905[5], i905[6], 0, i904, 'skeletonGraphic')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'sharedMesh')
  return i906
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i908 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i909 = data
  i908.copyPropertyBlock = !!i909[0]
  i908.copyMeshRendererFlags = !!i909[1]
  var i911 = i909[2]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908.partsRenderers = i910
  request.r(i909[3], i909[4], 0, i908, 'skeletonRenderer')
  return i908
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i914 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i915 = data
  i914.boneName = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'parentReference')
  i914.mode = i915[3]
  i914.position = !!i915[4]
  i914.rotation = !!i915[5]
  i914.scale = !!i915[6]
  i914.zPosition = !!i915[7]
  i914.overrideAlpha = i915[8]
  request.r(i915[9], i915[10], 0, i914, 'hierarchy')
  return i914
}

Deserializers["Bag"] = function (request, data, root) {
  var i916 = root || request.c( 'Bag' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'model')
  request.r(i917[2], i917[3], 0, i916, 'idlePosition')
  request.r(i917[4], i917[5], 0, i916, 'winPosition')
  request.r(i917[6], i917[7], 0, i916, 'losePosition')
  return i916
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i919 = data
  return i918
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_FirstSelected')
  i920.m_sendNavigationEvents = !!i921[2]
  i920.m_DragThreshold = i921[3]
  return i920
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i923 = data
  i922.m_HorizontalAxis = i923[0]
  i922.m_VerticalAxis = i923[1]
  i922.m_SubmitButton = i923[2]
  i922.m_CancelButton = i923[3]
  i922.m_InputActionsPerSecond = i923[4]
  i922.m_RepeatDelay = i923[5]
  i922.m_ForceModuleActive = !!i923[6]
  i922.m_SendPointerHoverToParent = !!i923[7]
  return i922
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i924 = root || request.c( 'SoundClick' )
  var i925 = data
  i924.loopTime = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'sound')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i927 = data
  i926.ambientIntensity = i927[0]
  i926.reflectionIntensity = i927[1]
  i926.ambientMode = i927[2]
  i926.ambientLight = new pc.Color(i927[3], i927[4], i927[5], i927[6])
  i926.ambientSkyColor = new pc.Color(i927[7], i927[8], i927[9], i927[10])
  i926.ambientGroundColor = new pc.Color(i927[11], i927[12], i927[13], i927[14])
  i926.ambientEquatorColor = new pc.Color(i927[15], i927[16], i927[17], i927[18])
  i926.fogColor = new pc.Color(i927[19], i927[20], i927[21], i927[22])
  i926.fogEndDistance = i927[23]
  i926.fogStartDistance = i927[24]
  i926.fogDensity = i927[25]
  i926.fog = !!i927[26]
  request.r(i927[27], i927[28], 0, i926, 'skybox')
  i926.fogMode = i927[29]
  var i929 = i927[30]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i929[i + 0]) );
  }
  i926.lightmaps = i928
  i926.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i927[31], i926.lightProbes)
  i926.lightmapsMode = i927[32]
  i926.mixedBakeMode = i927[33]
  i926.environmentLightingMode = i927[34]
  i926.ambientProbe = new pc.SphericalHarmonicsL2(i927[35])
  i926.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i927[36])
  i926.useReferenceAmbientProbe = !!i927[37]
  request.r(i927[38], i927[39], 0, i926, 'customReflection')
  request.r(i927[40], i927[41], 0, i926, 'defaultReflection')
  i926.defaultReflectionMode = i927[42]
  i926.defaultReflectionResolution = i927[43]
  i926.sunLightObjectId = i927[44]
  i926.pixelLightCount = i927[45]
  i926.defaultReflectionHDR = !!i927[46]
  i926.hasLightDataAsset = !!i927[47]
  i926.hasManualGenerate = !!i927[48]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'lightmapColor')
  request.r(i933[2], i933[3], 0, i932, 'lightmapDirection')
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i934 = root || new UnityEngine.LightProbes()
  var i935 = data
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i945[i + 0]));
  }
  i942.ShaderCompilationErrors = i944
  i942.name = i943[1]
  i942.guid = i943[2]
  var i947 = i943[3]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i942.shaderDefinedKeywords = i946
  var i949 = i943[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i949[i + 0]) );
  }
  i942.passes = i948
  var i951 = i943[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i951[i + 0]) );
  }
  i942.usePasses = i950
  var i953 = i943[6]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i953[i + 0]) );
  }
  i942.defaultParameterValues = i952
  request.r(i943[7], i943[8], 0, i942, 'unityFallbackShader')
  i942.readDepth = !!i943[9]
  i942.isCreatedByShaderGraph = !!i943[10]
  i942.compiled = !!i943[11]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i957 = data
  i956.shaderName = i957[0]
  i956.errorMessage = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i960 = root || new pc.UnityShaderPass()
  var i961 = data
  i960.id = i961[0]
  i960.subShaderIndex = i961[1]
  i960.name = i961[2]
  i960.passType = i961[3]
  i960.grabPassTextureName = i961[4]
  i960.usePass = !!i961[5]
  i960.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[6], i960.zTest)
  i960.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[7], i960.zWrite)
  i960.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[8], i960.culling)
  i960.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[9], i960.blending)
  i960.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i961[10], i960.alphaBlending)
  i960.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[11], i960.colorWriteMask)
  i960.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[12], i960.offsetUnits)
  i960.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[13], i960.offsetFactor)
  i960.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[14], i960.stencilRef)
  i960.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[15], i960.stencilReadMask)
  i960.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[16], i960.stencilWriteMask)
  i960.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[17], i960.stencilOp)
  i960.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[18], i960.stencilOpFront)
  i960.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i961[19], i960.stencilOpBack)
  var i963 = i961[20]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i963[i + 0]) );
  }
  i960.tags = i962
  var i965 = i961[21]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.passDefinedKeywords = i964
  var i967 = i961[22]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i967[i + 0]) );
  }
  i960.passDefinedKeywordGroups = i966
  var i969 = i961[23]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i969[i + 0]) );
  }
  i960.variants = i968
  var i971 = i961[24]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i971[i + 0]) );
  }
  i960.excludedVariants = i970
  i960.hasDepthReader = !!i961[25]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i973 = data
  i972.val = i973[0]
  i972.name = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i975 = data
  i974.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[0], i974.src)
  i974.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[1], i974.dst)
  i974.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[2], i974.op)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i977 = data
  i976.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[0], i976.pass)
  i976.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[1], i976.fail)
  i976.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[2], i976.zFail)
  i976.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[3], i976.comp)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i981 = data
  i980.name = i981[0]
  i980.value = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.keywords = i986
  i984.hasDiscard = !!i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i991 = data
  i990.passId = i991[0]
  i990.subShaderIndex = i991[1]
  var i993 = i991[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.vertexProgram = i991[3]
  i990.fragmentProgram = i991[4]
  i990.exportedForWebGl2 = !!i991[5]
  i990.readDepth = !!i991[6]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'shader')
  i996.pass = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.type = i1001[1]
  i1000.value = new pc.Vec4( i1001[2], i1001[3], i1001[4], i1001[5] )
  i1000.textureValue = i1001[6]
  i1000.shaderPropertyFlag = i1001[7]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1003 = data
  i1002.name = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'texture')
  i1002.aabb = i1003[3]
  i1002.vertices = i1003[4]
  i1002.triangles = i1003[5]
  i1002.textureRect = UnityEngine.Rect.MinMaxRect(i1003[6], i1003[7], i1003[8], i1003[9])
  i1002.packedRect = UnityEngine.Rect.MinMaxRect(i1003[10], i1003[11], i1003[12], i1003[13])
  i1002.border = new pc.Vec4( i1003[14], i1003[15], i1003[16], i1003[17] )
  i1002.transparency = i1003[18]
  i1002.bounds = i1003[19]
  i1002.pixelsPerUnit = i1003[20]
  i1002.textureWidth = i1003[21]
  i1002.textureHeight = i1003[22]
  i1002.nativeSize = new pc.Vec2( i1003[23], i1003[24] )
  i1002.pivot = new pc.Vec2( i1003[25], i1003[26] )
  i1002.textureRectOffset = new pc.Vec2( i1003[27], i1003[28] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1005 = data
  i1004.name = i1005[0]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.wrapMode = i1007[1]
  i1006.isLooping = !!i1007[2]
  i1006.length = i1007[3]
  var i1009 = i1007[4]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1009[i + 0]) );
  }
  i1006.curves = i1008
  var i1011 = i1007[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1011[i + 0]) );
  }
  i1006.events = i1010
  i1006.halfPrecision = !!i1007[6]
  i1006._frameRate = i1007[7]
  i1006.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1007[8], i1006.localBounds)
  i1006.hasMuscleCurves = !!i1007[9]
  var i1013 = i1007[10]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1006.clipMuscleConstant = i1012
  i1006.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1007[11], i1006.clipBindingConstant)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1017 = data
  i1016.path = i1017[0]
  i1016.hash = i1017[1]
  i1016.componentType = i1017[2]
  i1016.property = i1017[3]
  i1016.keys = i1017[4]
  var i1019 = i1017[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1019[i + 0]) );
  }
  i1016.objectReferenceKeys = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1023 = data
  i1022.time = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'value')
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1027 = data
  i1026.functionName = i1027[0]
  i1026.floatParameter = i1027[1]
  i1026.intParameter = i1027[2]
  i1026.stringParameter = i1027[3]
  request.r(i1027[4], i1027[5], 0, i1026, 'objectReferenceParameter')
  i1026.time = i1027[6]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1029 = data
  i1028.center = new pc.Vec3( i1029[0], i1029[1], i1029[2] )
  i1028.extends = new pc.Vec3( i1029[3], i1029[4], i1029[5] )
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1032.genericBindings = i1034
  var i1037 = i1033[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1032.pptrCurveMapping = i1036
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.ascent = i1039[1]
  i1038.originalLineHeight = i1039[2]
  i1038.fontSize = i1039[3]
  var i1041 = i1039[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1041[i + 0]) );
  }
  i1038.characterInfo = i1040
  request.r(i1039[5], i1039[6], 0, i1038, 'texture')
  i1038.originalFontSize = i1039[7]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1045 = data
  i1044.index = i1045[0]
  i1044.advance = i1045[1]
  i1044.bearing = i1045[2]
  i1044.glyphWidth = i1045[3]
  i1044.glyphHeight = i1045[4]
  i1044.minX = i1045[5]
  i1044.maxX = i1045[6]
  i1044.minY = i1045[7]
  i1044.maxY = i1045[8]
  i1044.uvBottomLeftX = i1045[9]
  i1044.uvBottomLeftY = i1045[10]
  i1044.uvBottomRightX = i1045[11]
  i1044.uvBottomRightY = i1045[12]
  i1044.uvTopLeftX = i1045[13]
  i1044.uvTopLeftY = i1045[14]
  i1044.uvTopRightX = i1045[15]
  i1044.uvTopRightY = i1045[16]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1047 = data
  i1046.name = i1047[0]
  var i1049 = i1047[1]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1049[i + 0]) );
  }
  i1046.layers = i1048
  var i1051 = i1047[2]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1051[i + 0]) );
  }
  i1046.parameters = i1050
  i1046.animationClips = i1047[3]
  i1046.avatarUnsupported = i1047[4]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.defaultWeight = i1055[1]
  i1054.blendingMode = i1055[2]
  i1054.avatarMask = i1055[3]
  i1054.syncedLayerIndex = i1055[4]
  i1054.syncedLayerAffectsTiming = !!i1055[5]
  i1054.syncedLayers = i1055[6]
  i1054.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1055[7], i1054.stateMachine)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1057 = data
  i1056.id = i1057[0]
  i1056.name = i1057[1]
  i1056.path = i1057[2]
  var i1059 = i1057[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1059[i + 0]) );
  }
  i1056.states = i1058
  var i1061 = i1057[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1061[i + 0]) );
  }
  i1056.machines = i1060
  var i1063 = i1057[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1063[i + 0]) );
  }
  i1056.entryStateTransitions = i1062
  var i1065 = i1057[6]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1065[i + 0]) );
  }
  i1056.exitStateTransitions = i1064
  var i1067 = i1057[7]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1067[i + 0]) );
  }
  i1056.anyStateTransitions = i1066
  i1056.defaultStateId = i1057[8]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.name = i1071[1]
  i1070.cycleOffset = i1071[2]
  i1070.cycleOffsetParameter = i1071[3]
  i1070.cycleOffsetParameterActive = !!i1071[4]
  i1070.mirror = !!i1071[5]
  i1070.mirrorParameter = i1071[6]
  i1070.mirrorParameterActive = !!i1071[7]
  i1070.motionId = i1071[8]
  i1070.nameHash = i1071[9]
  i1070.fullPathHash = i1071[10]
  i1070.speed = i1071[11]
  i1070.speedParameter = i1071[12]
  i1070.speedParameterActive = !!i1071[13]
  i1070.tag = i1071[14]
  i1070.tagHash = i1071[15]
  i1070.writeDefaultValues = !!i1071[16]
  var i1073 = i1071[17]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.behaviours = i1072
  var i1075 = i1071[18]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1075[i + 0]) );
  }
  i1070.transitions = i1074
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1081 = data
  i1080.fullPath = i1081[0]
  i1080.canTransitionToSelf = !!i1081[1]
  i1080.duration = i1081[2]
  i1080.exitTime = i1081[3]
  i1080.hasExitTime = !!i1081[4]
  i1080.hasFixedDuration = !!i1081[5]
  i1080.interruptionSource = i1081[6]
  i1080.offset = i1081[7]
  i1080.orderedInterruption = !!i1081[8]
  i1080.destinationStateId = i1081[9]
  i1080.isExit = !!i1081[10]
  i1080.mute = !!i1081[11]
  i1080.solo = !!i1081[12]
  var i1083 = i1081[13]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1083[i + 0]) );
  }
  i1080.conditions = i1082
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1089 = data
  i1088.destinationStateId = i1089[0]
  i1088.isExit = !!i1089[1]
  i1088.mute = !!i1089[2]
  i1088.solo = !!i1089[3]
  var i1091 = i1089[4]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1091[i + 0]) );
  }
  i1088.conditions = i1090
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1095 = data
  i1094.mode = i1095[0]
  i1094.parameter = i1095[1]
  i1094.threshold = i1095[2]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1099 = data
  i1098.defaultBool = !!i1099[0]
  i1098.defaultFloat = i1099[1]
  i1098.defaultInt = i1099[2]
  i1098.name = i1099[3]
  i1098.nameHash = i1099[4]
  i1098.type = i1099[5]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.bytes64 = i1101[1]
  i1100.data = i1101[2]
  return i1100
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1102 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.atlasAssets = i1104
  i1102.scale = i1103[1]
  request.r(i1103[2], i1103[3], 0, i1102, 'skeletonJSON')
  i1102.isUpgradingBlendModeMaterials = !!i1103[4]
  i1102.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1103[5], i1102.blendModeMaterials)
  var i1107 = i1103[6]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1102.skeletonDataModifiers = i1106
  var i1109 = i1103[7]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1102.fromAnimation = i1108
  var i1111 = i1103[8]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1102.toAnimation = i1110
  i1102.duration = i1103[9]
  i1102.defaultMix = i1103[10]
  request.r(i1103[11], i1103[12], 0, i1102, 'controller')
  return i1102
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1114 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1115 = data
  i1114.applyAdditiveMaterial = !!i1115[0]
  var i1117 = i1115[1]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1117[i + 0]));
  }
  i1114.additiveMaterials = i1116
  var i1119 = i1115[2]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1119[i + 0]));
  }
  i1114.multiplyMaterials = i1118
  var i1121 = i1115[3]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1121[i + 0]));
  }
  i1114.screenMaterials = i1120
  i1114.requiresBlendModeMaterials = !!i1115[4]
  return i1114
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1124 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1125 = data
  i1124.pageName = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'material')
  return i1124
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'atlasFile')
  var i1131 = i1129[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1128.materials = i1130
  i1128.textureLoadingMode = i1129[3]
  request.r(i1129[4], i1129[5], 0, i1128, 'onDemandTextureLoader')
  return i1128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_Settings' )
  var i1133 = data
  i1132.m_enableWordWrapping = !!i1133[0]
  i1132.m_enableKerning = !!i1133[1]
  i1132.m_enableExtraPadding = !!i1133[2]
  i1132.m_enableTintAllSprites = !!i1133[3]
  i1132.m_enableParseEscapeCharacters = !!i1133[4]
  i1132.m_EnableRaycastTarget = !!i1133[5]
  i1132.m_GetFontFeaturesAtRuntime = !!i1133[6]
  i1132.m_missingGlyphCharacter = i1133[7]
  i1132.m_warningsDisabled = !!i1133[8]
  request.r(i1133[9], i1133[10], 0, i1132, 'm_defaultFontAsset')
  i1132.m_defaultFontAssetPath = i1133[11]
  i1132.m_defaultFontSize = i1133[12]
  i1132.m_defaultAutoSizeMinRatio = i1133[13]
  i1132.m_defaultAutoSizeMaxRatio = i1133[14]
  i1132.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1133[15], i1133[16] )
  i1132.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1133[17], i1133[18] )
  i1132.m_autoSizeTextContainer = !!i1133[19]
  i1132.m_IsTextObjectScaleStatic = !!i1133[20]
  var i1135 = i1133[21]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1132.m_fallbackFontAssets = i1134
  i1132.m_matchMaterialPreset = !!i1133[22]
  request.r(i1133[23], i1133[24], 0, i1132, 'm_defaultSpriteAsset')
  i1132.m_defaultSpriteAssetPath = i1133[25]
  i1132.m_enableEmojiSupport = !!i1133[26]
  i1132.m_MissingCharacterSpriteUnicode = i1133[27]
  i1132.m_defaultColorGradientPresetsPath = i1133[28]
  request.r(i1133[29], i1133[30], 0, i1132, 'm_defaultStyleSheet')
  i1132.m_StyleSheetsResourcePath = i1133[31]
  request.r(i1133[32], i1133[33], 0, i1132, 'm_leadingCharacters')
  request.r(i1133[34], i1133[35], 0, i1132, 'm_followingCharacters')
  i1132.m_UseModernHangulLineBreakingRules = !!i1133[36]
  return i1132
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1139 = data
  i1138.hashCode = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'material')
  i1138.materialHashCode = i1139[3]
  request.r(i1139[4], i1139[5], 0, i1138, 'spriteSheet')
  var i1141 = i1139[6]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Sprite', i1141[i + 0]));
  }
  i1138.spriteInfoList = i1140
  var i1143 = i1139[7]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1138.fallbackSpriteAssets = i1142
  i1138.m_Version = i1139[8]
  i1138.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1139[9], i1138.m_FaceInfo)
  var i1145 = i1139[10]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_SpriteCharacter', i1145[i + 0]));
  }
  i1138.m_SpriteCharacterTable = i1144
  var i1147 = i1139[11]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_SpriteGlyph', i1147[i + 0]));
  }
  i1138.m_SpriteGlyphTable = i1146
  return i1138
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.hashCode = i1151[1]
  i1150.unicode = i1151[2]
  i1150.pivot = new pc.Vec2( i1151[3], i1151[4] )
  request.r(i1151[5], i1151[6], 0, i1150, 'sprite')
  i1150.id = i1151[7]
  i1150.x = i1151[8]
  i1150.y = i1151[9]
  i1150.width = i1151[10]
  i1150.height = i1151[11]
  i1150.xOffset = i1151[12]
  i1150.yOffset = i1151[13]
  i1150.xAdvance = i1151[14]
  i1150.scale = i1151[15]
  return i1150
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1155 = data
  i1154.m_FaceIndex = i1155[0]
  i1154.m_FamilyName = i1155[1]
  i1154.m_StyleName = i1155[2]
  i1154.m_PointSize = i1155[3]
  i1154.m_Scale = i1155[4]
  i1154.m_UnitsPerEM = i1155[5]
  i1154.m_LineHeight = i1155[6]
  i1154.m_AscentLine = i1155[7]
  i1154.m_CapLine = i1155[8]
  i1154.m_MeanLine = i1155[9]
  i1154.m_Baseline = i1155[10]
  i1154.m_DescentLine = i1155[11]
  i1154.m_SuperscriptOffset = i1155[12]
  i1154.m_SuperscriptSize = i1155[13]
  i1154.m_SubscriptOffset = i1155[14]
  i1154.m_SubscriptSize = i1155[15]
  i1154.m_UnderlineOffset = i1155[16]
  i1154.m_UnderlineThickness = i1155[17]
  i1154.m_StrikethroughOffset = i1155[18]
  i1154.m_StrikethroughThickness = i1155[19]
  i1154.m_TabWidth = i1155[20]
  return i1154
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1159 = data
  i1158.m_Name = i1159[0]
  i1158.m_HashCode = i1159[1]
  i1158.m_ElementType = i1159[2]
  i1158.m_Unicode = i1159[3]
  i1158.m_GlyphIndex = i1159[4]
  i1158.m_Scale = i1159[5]
  return i1158
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'sprite')
  i1162.m_Index = i1163[2]
  i1162.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1163[3], i1162.m_Metrics)
  i1162.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1163[4], i1162.m_GlyphRect)
  i1162.m_Scale = i1163[5]
  i1162.m_AtlasIndex = i1163[6]
  i1162.m_ClassDefinitionType = i1163[7]
  return i1162
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1165 = data
  i1164.m_Width = i1165[0]
  i1164.m_Height = i1165[1]
  i1164.m_HorizontalBearingX = i1165[2]
  i1164.m_HorizontalBearingY = i1165[3]
  i1164.m_HorizontalAdvance = i1165[4]
  return i1164
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1167 = data
  i1166.m_X = i1167[0]
  i1166.m_Y = i1167[1]
  i1166.m_Width = i1167[2]
  i1166.m_Height = i1167[3]
  return i1166
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_Style', i1171[i + 0]));
  }
  i1168.m_StyleList = i1170
  return i1168
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_Style' )
  var i1175 = data
  i1174.m_Name = i1175[0]
  i1174.m_HashCode = i1175[1]
  i1174.m_OpeningDefinition = i1175[2]
  i1174.m_ClosingDefinition = i1175[3]
  i1174.m_OpeningTagArray = i1175[4]
  i1174.m_ClosingTagArray = i1175[5]
  i1174.m_OpeningTagUnicodeArray = i1175[6]
  i1174.m_ClosingTagUnicodeArray = i1175[7]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1179[i + 0]) );
  }
  i1176.files = i1178
  i1176.componentToPrefabIds = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1183 = data
  i1182.path = i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'unityObject')
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1187[i + 0]) );
  }
  i1184.scriptsExecutionOrder = i1186
  var i1189 = i1185[1]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1189[i + 0]) );
  }
  i1184.sortingLayers = i1188
  var i1191 = i1185[2]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1191[i + 0]) );
  }
  i1184.cullingLayers = i1190
  i1184.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1185[3], i1184.timeSettings)
  i1184.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1185[4], i1184.physicsSettings)
  i1184.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1185[5], i1184.physics2DSettings)
  i1184.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1185[6], i1184.qualitySettings)
  i1184.enableRealtimeShadows = !!i1185[7]
  i1184.enableAutoInstancing = !!i1185[8]
  i1184.enableDynamicBatching = !!i1185[9]
  i1184.lightmapEncodingQuality = i1185[10]
  i1184.desiredColorSpace = i1185[11]
  var i1193 = i1185[12]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( i1193[i + 0] );
  }
  i1184.allTags = i1192
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.value = i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  i1200.value = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.name = i1205[1]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1207 = data
  i1206.fixedDeltaTime = i1207[0]
  i1206.maximumDeltaTime = i1207[1]
  i1206.timeScale = i1207[2]
  i1206.maximumParticleTimestep = i1207[3]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1209 = data
  i1208.gravity = new pc.Vec3( i1209[0], i1209[1], i1209[2] )
  i1208.defaultSolverIterations = i1209[3]
  i1208.bounceThreshold = i1209[4]
  i1208.autoSyncTransforms = !!i1209[5]
  i1208.autoSimulation = !!i1209[6]
  var i1211 = i1209[7]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1211[i + 0]) );
  }
  i1208.collisionMatrix = i1210
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1215 = data
  i1214.enabled = !!i1215[0]
  i1214.layerId = i1215[1]
  i1214.otherLayerId = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'material')
  i1216.gravity = new pc.Vec2( i1217[2], i1217[3] )
  i1216.positionIterations = i1217[4]
  i1216.velocityIterations = i1217[5]
  i1216.velocityThreshold = i1217[6]
  i1216.maxLinearCorrection = i1217[7]
  i1216.maxAngularCorrection = i1217[8]
  i1216.maxTranslationSpeed = i1217[9]
  i1216.maxRotationSpeed = i1217[10]
  i1216.baumgarteScale = i1217[11]
  i1216.baumgarteTOIScale = i1217[12]
  i1216.timeToSleep = i1217[13]
  i1216.linearSleepTolerance = i1217[14]
  i1216.angularSleepTolerance = i1217[15]
  i1216.defaultContactOffset = i1217[16]
  i1216.autoSimulation = !!i1217[17]
  i1216.queriesHitTriggers = !!i1217[18]
  i1216.queriesStartInColliders = !!i1217[19]
  i1216.callbacksOnDisable = !!i1217[20]
  i1216.reuseCollisionCallbacks = !!i1217[21]
  i1216.autoSyncTransforms = !!i1217[22]
  var i1219 = i1217[23]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1219[i + 0]) );
  }
  i1216.collisionMatrix = i1218
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1223 = data
  i1222.enabled = !!i1223[0]
  i1222.layerId = i1223[1]
  i1222.otherLayerId = i1223[2]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1227[i + 0]) );
  }
  i1224.qualityLevels = i1226
  var i1229 = i1225[1]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1224.names = i1228
  i1224.shadows = i1225[2]
  i1224.anisotropicFiltering = i1225[3]
  i1224.antiAliasing = i1225[4]
  i1224.lodBias = i1225[5]
  i1224.shadowCascades = i1225[6]
  i1224.shadowDistance = i1225[7]
  i1224.shadowmaskMode = i1225[8]
  i1224.shadowProjection = i1225[9]
  i1224.shadowResolution = i1225[10]
  i1224.softParticles = !!i1225[11]
  i1224.softVegetation = !!i1225[12]
  i1224.activeColorSpace = i1225[13]
  i1224.desiredColorSpace = i1225[14]
  i1224.masterTextureLimit = i1225[15]
  i1224.maxQueuedFrames = i1225[16]
  i1224.particleRaycastBudget = i1225[17]
  i1224.pixelLightCount = i1225[18]
  i1224.realtimeReflectionProbes = !!i1225[19]
  i1224.shadowCascade2Split = i1225[20]
  i1224.shadowCascade4Split = new pc.Vec3( i1225[21], i1225[22], i1225[23] )
  i1224.streamingMipmapsActive = !!i1225[24]
  i1224.vSyncCount = i1225[25]
  i1224.asyncUploadBufferSize = i1225[26]
  i1224.asyncUploadTimeSlice = i1225[27]
  i1224.billboardsFaceCameraPosition = !!i1225[28]
  i1224.shadowNearPlaneOffset = i1225[29]
  i1224.streamingMipmapsMemoryBudget = i1225[30]
  i1224.maximumLODLevel = i1225[31]
  i1224.streamingMipmapsAddAllCameras = !!i1225[32]
  i1224.streamingMipmapsMaxLevelReduction = i1225[33]
  i1224.streamingMipmapsRenderersPerFrame = i1225[34]
  i1224.resolutionScalingFixedDPIFactor = i1225[35]
  i1224.streamingMipmapsMaxFileIORequests = i1225[36]
  i1224.currentQualityLevel = i1225[37]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1235 = data
  i1234.weight = i1235[0]
  i1234.vertices = i1235[1]
  i1234.normals = i1235[2]
  i1234.tangents = i1235[3]
  return i1234
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[31],"82":[83],"84":[83],"23":[22],"15":[13],"85":[86],"87":[88],"89":[31,35],"90":[91],"92":[88],"93":[94],"95":[88],"96":[88],"97":[38],"98":[38],"99":[88],"100":[101],"102":[2],"103":[101],"104":[22],"105":[22],"26":[23],"28":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"29":[27,22],"121":[22],"122":[41],"123":[41],"42":[41],"124":[41],"125":[13],"126":[13],"127":[128],"129":[13],"130":[131],"132":[22],"133":[27,22],"32":[31],"91":[27,22],"134":[10,31],"88":[31],"37":[31,35],"135":[60],"136":[6],"34":[131],"137":[38],"138":[22],"139":[31,22],"140":[22,27],"141":[22],"142":[27,22],"143":[31],"144":[27,22],"145":[22],"146":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.Mesh","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.27f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "12/31/2024 08:38:27";

Deserializers.lunaDaysRunning = "6.8";

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

Deserializers.buildID = "f3989dda-fd5f-495c-b0f5-14b2994b3e8e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

