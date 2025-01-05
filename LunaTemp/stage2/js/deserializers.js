var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSpring' )
  var i665 = data
  i664.spring = i665[0]
  i664.damper = i665[1]
  i664.targetPosition = i665[2]
  return i664
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor' )
  var i667 = data
  i666.m_TargetVelocity = i667[0]
  i666.m_Force = i667[1]
  i666.m_FreeSpin = i667[2]
  return i666
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointLimits' )
  var i669 = data
  i668.m_Min = i669[0]
  i668.m_Max = i669[1]
  i668.m_Bounciness = i669[2]
  i668.m_BounceMinVelocity = i669[3]
  i668.m_ContactDistance = i669[4]
  i668.minBounce = i669[5]
  i668.maxBounce = i669[6]
  return i668
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointDrive' )
  var i671 = data
  i670.m_PositionSpring = i671[0]
  i670.m_PositionDamper = i671[1]
  i670.m_MaximumForce = i671[2]
  i670.m_UseAcceleration = i671[3]
  return i670
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i673 = data
  i672.m_Spring = i673[0]
  i672.m_Damper = i673[1]
  return i672
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i675 = data
  i674.m_Limit = i675[0]
  i674.m_Bounciness = i675[1]
  i674.m_ContactDistance = i675[2]
  return i674
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i677 = data
  i676.m_ExtremumSlip = i677[0]
  i676.m_ExtremumValue = i677[1]
  i676.m_AsymptoteSlip = i677[2]
  i676.m_AsymptoteValue = i677[3]
  i676.m_Stiffness = i677[4]
  return i676
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i679 = data
  i678.m_LowerAngle = i679[0]
  i678.m_UpperAngle = i679[1]
  return i678
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i681 = data
  i680.m_MotorSpeed = i681[0]
  i680.m_MaximumMotorTorque = i681[1]
  return i680
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i683 = data
  i682.m_DampingRatio = i683[0]
  i682.m_Frequency = i683[1]
  i682.m_Angle = i683[2]
  return i682
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i685 = data
  i684.m_LowerTranslation = i685[0]
  i684.m_UpperTranslation = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i686 = root || new pc.UnityMaterial()
  var i687 = data
  i686.name = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'shader')
  i686.renderQueue = i687[3]
  i686.enableInstancing = !!i687[4]
  var i689 = i687[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i689[i + 0]) );
  }
  i686.floatParameters = i688
  var i691 = i687[6]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i691[i + 0]) );
  }
  i686.colorParameters = i690
  var i693 = i687[7]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i693[i + 0]) );
  }
  i686.vectorParameters = i692
  var i695 = i687[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i695[i + 0]) );
  }
  i686.textureParameters = i694
  var i697 = i687[9]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i697[i + 0]) );
  }
  i686.materialFlags = i696
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = new pc.Color(i705[1], i705[2], i705[3], i705[4])
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Vec4( i709[1], i709[2], i709[3], i709[4] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i713 = data
  i712.name = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'value')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i717 = data
  i716.name = i717[0]
  i716.enabled = !!i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i719 = data
  i718.name = i719[0]
  i718.width = i719[1]
  i718.height = i719[2]
  i718.mipmapCount = i719[3]
  i718.anisoLevel = i719[4]
  i718.filterMode = i719[5]
  i718.hdr = !!i719[6]
  i718.format = i719[7]
  i718.wrapMode = i719[8]
  i718.alphaIsTransparency = !!i719[9]
  i718.alphaSource = i719[10]
  i718.graphicsFormat = i719[11]
  i718.sRGBTexture = !!i719[12]
  i718.desiredColorSpace = i719[13]
  i718.wrapU = i719[14]
  i718.wrapV = i719[15]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i721 = data
  i720.position = new pc.Vec3( i721[0], i721[1], i721[2] )
  i720.scale = new pc.Vec3( i721[3], i721[4], i721[5] )
  i720.rotation = new pc.Quat(i721[6], i721[7], i721[8], i721[9])
  return i720
}

Deserializers["Level"] = function (request, data, root) {
  var i722 = root || request.c( 'Level' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Coin')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i722.coins = i724
  var i727 = i723[1]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Pin')))
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 1, i726, '')
  }
  i722.pins = i726
  request.r(i723[2], i723[3], 0, i722, 'bonus')
  request.r(i723[4], i723[5], 0, i722, 'coinPrefab')
  request.r(i723[6], i723[7], 0, i722, 'bag')
  request.r(i723[8], i723[9], 0, i722, 'hand')
  request.r(i723[10], i723[11], 0, i722, 'king')
  return i722
}

Deserializers["King"] = function (request, data, root) {
  var i732 = root || request.c( 'King' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'anim')
  request.r(i733[2], i733[3], 0, i732, 'bag')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i735 = data
  i734.name = i735[0]
  i734.tagId = i735[1]
  i734.enabled = !!i735[2]
  i734.isStatic = !!i735[3]
  i734.layer = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'additionalVertexStreams')
  i736.enabled = !!i737[2]
  request.r(i737[3], i737[4], 0, i736, 'sharedMaterial')
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[6]
  i736.shadowCastingMode = i737[7]
  i736.sortingLayerID = i737[8]
  i736.sortingOrder = i737[9]
  i736.lightmapIndex = i737[10]
  i736.lightmapSceneIndex = i737[11]
  i736.lightmapScaleOffset = new pc.Vec4( i737[12], i737[13], i737[14], i737[15] )
  i736.lightProbeUsage = i737[16]
  i736.reflectionProbeUsage = i737[17]
  return i736
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i742 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i743 = data
  i742.loop = !!i743[0]
  i742.timeScale = i743[1]
  request.r(i743[2], i743[3], 0, i742, 'skeletonDataAsset')
  i742.initialSkinName = i743[4]
  i742.fixPrefabOverrideViaMeshFilter = i743[5]
  i742.initialFlipX = !!i743[6]
  i742.initialFlipY = !!i743[7]
  i742.updateWhenInvisible = i743[8]
  i742.zSpacing = i743[9]
  i742.useClipping = !!i743[10]
  i742.immutableTriangles = !!i743[11]
  i742.pmaVertexColors = !!i743[12]
  i742.clearStateOnDisable = !!i743[13]
  i742.tintBlack = !!i743[14]
  i742.singleSubmesh = !!i743[15]
  i742.fixDrawOrder = !!i743[16]
  i742.addNormals = !!i743[17]
  i742.calculateTangents = !!i743[18]
  i742.maskInteraction = i743[19]
  i742.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i743[20], i742.maskMaterials)
  i742.disableRenderingOnOverride = !!i743[21]
  i742.updateTiming = i743[22]
  i742.unscaledTime = !!i743[23]
  i742._animationName = i743[24]
  var i745 = i743[25]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.separatorSlotNames = i744
  return i742
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i747 = data
  var i749 = i747[0]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.materialsMaskDisabled = i748
  var i751 = i747[1]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i746.materialsInsideMask = i750
  var i753 = i747[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i746.materialsOutsideMask = i752
  return i746
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i756 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'boneRoot')
  i756.flipBy180DegreeRotation = !!i757[2]
  request.r(i757[3], i757[4], 0, i756, 'skeletonRenderer')
  request.r(i757[5], i757[6], 0, i756, 'skeletonGraphic')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'sharedMesh')
  return i758
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i760 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i761 = data
  i760.copyPropertyBlock = !!i761[0]
  i760.copyMeshRendererFlags = !!i761[1]
  var i763 = i761[2]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.partsRenderers = i762
  request.r(i761[3], i761[4], 0, i760, 'skeletonRenderer')
  return i760
}

Deserializers["AnimKing"] = function (request, data, root) {
  var i766 = root || request.c( 'AnimKing' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'anim')
  var i769 = i767[2]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('AnimClip')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('AnimClip', i769[i + 0]));
  }
  i766.clips = i768
  return i766
}

Deserializers["AnimClip"] = function (request, data, root) {
  var i772 = root || request.c( 'AnimClip' )
  var i773 = data
  i772.Index = i773[0]
  i772.Name = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i775 = data
  i774.usedByComposite = !!i775[0]
  i774.autoTiling = !!i775[1]
  i774.size = new pc.Vec2( i775[2], i775[3] )
  i774.edgeRadius = i775[4]
  i774.enabled = !!i775[5]
  i774.isTrigger = !!i775[6]
  i774.usedByEffector = !!i775[7]
  i774.density = i775[8]
  i774.offset = new pc.Vec2( i775[9], i775[10] )
  request.r(i775[11], i775[12], 0, i774, 'material')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i777 = data
  i776.radius = i777[0]
  i776.enabled = !!i777[1]
  i776.isTrigger = !!i777[2]
  i776.usedByEffector = !!i777[3]
  i776.density = i777[4]
  i776.offset = new pc.Vec2( i777[5], i777[6] )
  request.r(i777[7], i777[8], 0, i776, 'material')
  return i776
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i778 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i779 = data
  i778.boneName = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'parentReference')
  i778.mode = i779[3]
  i778.position = !!i779[4]
  i778.rotation = !!i779[5]
  i778.scale = !!i779[6]
  i778.zPosition = !!i779[7]
  i778.overrideAlpha = i779[8]
  request.r(i779[9], i779[10], 0, i778, 'hierarchy')
  return i778
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i780 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i781 = data
  return i780
}

Deserializers["Bag"] = function (request, data, root) {
  var i782 = root || request.c( 'Bag' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'model')
  request.r(i783[2], i783[3], 0, i782, 'idlePosition')
  request.r(i783[4], i783[5], 0, i782, 'winPosition')
  request.r(i783[6], i783[7], 0, i782, 'losePosition')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i785 = data
  i784.enabled = !!i785[0]
  request.r(i785[1], i785[2], 0, i784, 'sharedMaterial')
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[4]
  i784.shadowCastingMode = i785[5]
  i784.sortingLayerID = i785[6]
  i784.sortingOrder = i785[7]
  i784.lightmapIndex = i785[8]
  i784.lightmapSceneIndex = i785[9]
  i784.lightmapScaleOffset = new pc.Vec4( i785[10], i785[11], i785[12], i785[13] )
  i784.lightProbeUsage = i785[14]
  i784.reflectionProbeUsage = i785[15]
  i784.color = new pc.Color(i785[16], i785[17], i785[18], i785[19])
  request.r(i785[20], i785[21], 0, i784, 'sprite')
  i784.flipX = !!i785[22]
  i784.flipY = !!i785[23]
  i784.drawMode = i785[24]
  i784.size = new pc.Vec2( i785[25], i785[26] )
  i784.tileMode = i785[27]
  i784.adaptiveModeThreshold = i785[28]
  i784.maskInteraction = i785[29]
  i784.spriteSortPoint = i785[30]
  return i784
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i788 = root || request.c( 'CameraAnchor' )
  var i789 = data
  i788.anchorType = i789[0]
  i788.anchorOffset = new pc.Vec3( i789[1], i789[2], i789[3] )
  return i788
}

Deserializers["Hand"] = function (request, data, root) {
  var i790 = root || request.c( 'Hand' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'anim')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'animatorController')
  request.r(i793[2], i793[3], 0, i792, 'avatar')
  i792.updateMode = i793[4]
  i792.hasTransformHierarchy = !!i793[5]
  i792.applyRootMotion = !!i793[6]
  var i795 = i793[7]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.humanBones = i794
  i792.enabled = !!i793[8]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i799 = data
  i798.bodyType = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'material')
  i798.simulated = !!i799[3]
  i798.useAutoMass = !!i799[4]
  i798.mass = i799[5]
  i798.drag = i799[6]
  i798.angularDrag = i799[7]
  i798.gravityScale = i799[8]
  i798.collisionDetectionMode = i799[9]
  i798.sleepMode = i799[10]
  i798.constraints = i799[11]
  return i798
}

Deserializers["Pin"] = function (request, data, root) {
  var i800 = root || request.c( 'Pin' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'head')
  request.r(i801[2], i801[3], 0, i800, 'end')
  request.r(i801[4], i801[5], 0, i800, 'center')
  return i800
}

Deserializers["Hole"] = function (request, data, root) {
  var i802 = root || request.c( 'Hole' )
  var i803 = data
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.isTrigger = !!i805[1]
  i804.usedByEffector = !!i805[2]
  i804.density = i805[3]
  i804.offset = new pc.Vec2( i805[4], i805[5] )
  request.r(i805[6], i805[7], 0, i804, 'material')
  i804.edgeRadius = i805[8]
  var i807 = i805[9]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
    i806.push( new pc.Vec2( i807[i + 0], i807[i + 1] ) );
  }
  i804.points = i806
  i804.useAdjacentStartPoint = !!i805[10]
  i804.adjacentStartPoint = new pc.Vec2( i805[11], i805[12] )
  i804.useAdjacentEndPoint = !!i805[13]
  i804.adjacentEndPoint = new pc.Vec2( i805[14], i805[15] )
  return i804
}

Deserializers["Coin"] = function (request, data, root) {
  var i810 = root || request.c( 'Coin' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'anim')
  request.r(i811[2], i811[3], 0, i810, 'vfxSteamPrefab')
  return i810
}

Deserializers["Bonus"] = function (request, data, root) {
  var i812 = root || request.c( 'Bonus' )
  var i813 = data
  i812.bonusType = i813[0]
  i812.amount = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i815 = data
  i814.enabled = !!i815[0]
  i814.isTrigger = !!i815[1]
  i814.usedByEffector = !!i815[2]
  i814.density = i815[3]
  i814.offset = new pc.Vec2( i815[4], i815[5] )
  request.r(i815[6], i815[7], 0, i814, 'material')
  i814.usedByComposite = !!i815[8]
  i814.autoTiling = !!i815[9]
  var i817 = i815[10]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
  var i819 = i817[i + 0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
    i818.push( new pc.Vec2( i819[i + 0], i819[i + 1] ) );
  }
    i816.push( i818 );
  }
  i814.points = i816
  return i814
}

Deserializers["Lava"] = function (request, data, root) {
  var i824 = root || request.c( 'Lava' )
  var i825 = data
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i827 = data
  i826.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i827[0], i826.main)
  i826.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i827[1], i826.colorBySpeed)
  i826.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i827[2], i826.colorOverLifetime)
  i826.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i827[3], i826.emission)
  i826.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i827[4], i826.rotationBySpeed)
  i826.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i827[5], i826.rotationOverLifetime)
  i826.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i827[6], i826.shape)
  i826.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i827[7], i826.sizeBySpeed)
  i826.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i827[8], i826.sizeOverLifetime)
  i826.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i827[9], i826.textureSheetAnimation)
  i826.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i827[10], i826.velocityOverLifetime)
  i826.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i827[11], i826.noise)
  i826.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i827[12], i826.inheritVelocity)
  i826.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i827[13], i826.forceOverLifetime)
  i826.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i827[14], i826.limitVelocityOverLifetime)
  i826.useAutoRandomSeed = !!i827[15]
  i826.randomSeed = i827[16]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemMain()
  var i829 = data
  i828.duration = i829[0]
  i828.loop = !!i829[1]
  i828.prewarm = !!i829[2]
  i828.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.startDelay)
  i828.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.startLifetime)
  i828.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[5], i828.startSpeed)
  i828.startSize3D = !!i829[6]
  i828.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[7], i828.startSizeX)
  i828.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[8], i828.startSizeY)
  i828.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[9], i828.startSizeZ)
  i828.startRotation3D = !!i829[10]
  i828.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[11], i828.startRotationX)
  i828.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[12], i828.startRotationY)
  i828.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[13], i828.startRotationZ)
  i828.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i829[14], i828.startColor)
  i828.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[15], i828.gravityModifier)
  i828.simulationSpace = i829[16]
  request.r(i829[17], i829[18], 0, i828, 'customSimulationSpace')
  i828.simulationSpeed = i829[19]
  i828.useUnscaledTime = !!i829[20]
  i828.scalingMode = i829[21]
  i828.playOnAwake = !!i829[22]
  i828.maxParticles = i829[23]
  i828.emitterVelocityMode = i829[24]
  i828.stopAction = i829[25]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i830 = root || new pc.MinMaxCurve()
  var i831 = data
  i830.mode = i831[0]
  i830.curveMin = new pc.AnimationCurve( { keys_flow: i831[1] } )
  i830.curveMax = new pc.AnimationCurve( { keys_flow: i831[2] } )
  i830.curveMultiplier = i831[3]
  i830.constantMin = i831[4]
  i830.constantMax = i831[5]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i832 = root || new pc.MinMaxGradient()
  var i833 = data
  i832.mode = i833[0]
  i832.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i833[1], i832.gradientMin)
  i832.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i833[2], i832.gradientMax)
  i832.colorMin = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.colorMax = new pc.Color(i833[7], i833[8], i833[9], i833[10])
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i835 = data
  i834.mode = i835[0]
  var i837 = i835[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i837[i + 0]) );
  }
  i834.colorKeys = i836
  var i839 = i835[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i839[i + 0]) );
  }
  i834.alphaKeys = i838
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemColorBySpeed()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i841[1], i840.color)
  i840.range = new pc.Vec2( i841[2], i841[3] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i845 = data
  i844.color = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  i844.time = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i849 = data
  i848.alpha = i849[0]
  i848.time = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemColorOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i851[1], i850.color)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemEmitter()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.rateOverTime)
  i852.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.rateOverDistance)
  var i855 = i853[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i855[i + 0]) );
  }
  i852.bursts = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemBurst()
  var i859 = data
  i858.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[0], i858.count)
  i858.cycleCount = i859[1]
  i858.minCount = i859[2]
  i858.maxCount = i859[3]
  i858.repeatInterval = i859[4]
  i858.time = i859[5]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemRotationBySpeed()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.x)
  i860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.y)
  i860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.z)
  i860.separateAxes = !!i861[4]
  i860.range = new pc.Vec2( i861[5], i861[6] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemRotationOverLifetime()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[1], i862.x)
  i862.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[2], i862.y)
  i862.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[3], i862.z)
  i862.separateAxes = !!i863[4]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemShape()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.shapeType = i865[1]
  i864.randomDirectionAmount = i865[2]
  i864.sphericalDirectionAmount = i865[3]
  i864.randomPositionAmount = i865[4]
  i864.alignToDirection = !!i865[5]
  i864.radius = i865[6]
  i864.radiusMode = i865[7]
  i864.radiusSpread = i865[8]
  i864.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[9], i864.radiusSpeed)
  i864.radiusThickness = i865[10]
  i864.angle = i865[11]
  i864.length = i865[12]
  i864.boxThickness = new pc.Vec3( i865[13], i865[14], i865[15] )
  i864.meshShapeType = i865[16]
  request.r(i865[17], i865[18], 0, i864, 'mesh')
  request.r(i865[19], i865[20], 0, i864, 'meshRenderer')
  request.r(i865[21], i865[22], 0, i864, 'skinnedMeshRenderer')
  i864.useMeshMaterialIndex = !!i865[23]
  i864.meshMaterialIndex = i865[24]
  i864.useMeshColors = !!i865[25]
  i864.normalOffset = i865[26]
  i864.arc = i865[27]
  i864.arcMode = i865[28]
  i864.arcSpread = i865[29]
  i864.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[30], i864.arcSpeed)
  i864.donutRadius = i865[31]
  i864.position = new pc.Vec3( i865[32], i865[33], i865[34] )
  i864.rotation = new pc.Vec3( i865[35], i865[36], i865[37] )
  i864.scale = new pc.Vec3( i865[38], i865[39], i865[40] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemSizeBySpeed()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[1], i866.x)
  i866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[2], i866.y)
  i866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[3], i866.z)
  i866.separateAxes = !!i867[4]
  i866.range = new pc.Vec2( i867[5], i867[6] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemSizeOverLifetime()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[1], i868.x)
  i868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.y)
  i868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.z)
  i868.separateAxes = !!i869[4]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.mode = i871[1]
  i870.animation = i871[2]
  i870.numTilesX = i871[3]
  i870.numTilesY = i871[4]
  i870.useRandomRow = !!i871[5]
  i870.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[6], i870.frameOverTime)
  i870.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[7], i870.startFrame)
  i870.cycleCount = i871[8]
  i870.rowIndex = i871[9]
  i870.flipU = i871[10]
  i870.flipV = i871[11]
  i870.spriteCount = i871[12]
  var i873 = i871[13]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.sprites = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.x)
  i876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.y)
  i876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.z)
  i876.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[4], i876.radial)
  i876.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[5], i876.speedModifier)
  i876.space = i877[6]
  i876.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[7], i876.orbitalX)
  i876.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[8], i876.orbitalY)
  i876.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[9], i876.orbitalZ)
  i876.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[10], i876.orbitalOffsetX)
  i876.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[11], i876.orbitalOffsetY)
  i876.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[12], i876.orbitalOffsetZ)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemNoise()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.separateAxes = !!i879[1]
  i878.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.strengthX)
  i878.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[3], i878.strengthY)
  i878.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[4], i878.strengthZ)
  i878.frequency = i879[5]
  i878.damping = !!i879[6]
  i878.octaveCount = i879[7]
  i878.octaveMultiplier = i879[8]
  i878.octaveScale = i879[9]
  i878.quality = i879[10]
  i878.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[11], i878.scrollSpeed)
  i878.scrollSpeedMultiplier = i879[12]
  i878.remapEnabled = !!i879[13]
  i878.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[14], i878.remapX)
  i878.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[15], i878.remapY)
  i878.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[16], i878.remapZ)
  i878.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[17], i878.positionAmount)
  i878.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[18], i878.rotationAmount)
  i878.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[19], i878.sizeAmount)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemInheritVelocity()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.mode = i881[1]
  i880.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.curve)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemForceOverLifetime()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.x)
  i882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.y)
  i882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.z)
  i882.space = i883[4]
  i882.randomized = !!i883[5]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.limit)
  i884.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.limitX)
  i884.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.limitY)
  i884.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[4], i884.limitZ)
  i884.dampen = i885[5]
  i884.separateAxes = !!i885[6]
  i884.space = i885[7]
  i884.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[8], i884.drag)
  i884.multiplyDragByParticleSize = !!i885[9]
  i884.multiplyDragByParticleVelocity = !!i885[10]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i887 = data
  i886.enabled = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'sharedMaterial')
  var i889 = i887[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.sharedMaterials = i888
  i886.receiveShadows = !!i887[4]
  i886.shadowCastingMode = i887[5]
  i886.sortingLayerID = i887[6]
  i886.sortingOrder = i887[7]
  i886.lightmapIndex = i887[8]
  i886.lightmapSceneIndex = i887[9]
  i886.lightmapScaleOffset = new pc.Vec4( i887[10], i887[11], i887[12], i887[13] )
  i886.lightProbeUsage = i887[14]
  i886.reflectionProbeUsage = i887[15]
  request.r(i887[16], i887[17], 0, i886, 'mesh')
  i886.meshCount = i887[18]
  i886.activeVertexStreamsCount = i887[19]
  i886.alignment = i887[20]
  i886.renderMode = i887[21]
  i886.sortMode = i887[22]
  i886.lengthScale = i887[23]
  i886.velocityScale = i887[24]
  i886.cameraVelocityScale = i887[25]
  i886.normalDirection = i887[26]
  i886.sortingFudge = i887[27]
  i886.minParticleSize = i887[28]
  i886.maxParticleSize = i887[29]
  i886.pivot = new pc.Vec3( i887[30], i887[31], i887[32] )
  request.r(i887[33], i887[34], 0, i886, 'trailMaterial')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i891 = data
  i890.name = i891[0]
  i890.index = i891[1]
  i890.startup = !!i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.aspect = i893[1]
  i892.orthographic = !!i893[2]
  i892.orthographicSize = i893[3]
  i892.backgroundColor = new pc.Color(i893[4], i893[5], i893[6], i893[7])
  i892.nearClipPlane = i893[8]
  i892.farClipPlane = i893[9]
  i892.fieldOfView = i893[10]
  i892.depth = i893[11]
  i892.clearFlags = i893[12]
  i892.cullingMask = i893[13]
  i892.rect = i893[14]
  request.r(i893[15], i893[16], 0, i892, 'targetTexture')
  i892.usePhysicalProperties = !!i893[17]
  i892.focalLength = i893[18]
  i892.sensorSize = new pc.Vec2( i893[19], i893[20] )
  i892.lensShift = new pc.Vec2( i893[21], i893[22] )
  i892.gateFit = i893[23]
  i892.commandBufferCount = i893[24]
  i892.cameraType = i893[25]
  return i892
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i894 = root || request.c( 'ViewportHandler' )
  var i895 = data
  i894.wireColor = new pc.Color(i895[0], i895[1], i895[2], i895[3])
  i894.UnitsSize = i895[4]
  i894.constraint = i895[5]
  request.r(i895[6], i895[7], 0, i894, 'camera')
  return i894
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i896 = root || request.c( 'CameraFollower' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'viewportHandler')
  return i896
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i898 = root || request.c( 'InputReceiver' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'source')
  return i898
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i900 = root || request.c( 'SoundManager' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Sound', i903[i + 0]) );
  }
  i900.Sounds = i902
  var i905 = i901[1]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i900.audioSources = i904
  return i900
}

Deserializers["Sound"] = function (request, data, root) {
  var i908 = root || request.c( 'Sound' )
  var i909 = data
  i908.name = i909[0]
  request.r(i909[1], i909[2], 0, i908, 'clip')
  return i908
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i912 = root || request.c( 'LevelManager' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'levelPrefab')
  return i912
}

Deserializers["UIManager"] = function (request, data, root) {
  var i914 = root || request.c( 'UIManager' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'uicLose')
  request.r(i915[2], i915[3], 0, i914, 'image')
  request.r(i915[4], i915[5], 0, i914, 'text')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i917 = data
  i916.pivot = new pc.Vec2( i917[0], i917[1] )
  i916.anchorMin = new pc.Vec2( i917[2], i917[3] )
  i916.anchorMax = new pc.Vec2( i917[4], i917[5] )
  i916.sizeDelta = new pc.Vec2( i917[6], i917[7] )
  i916.anchoredPosition3D = new pc.Vec3( i917[8], i917[9], i917[10] )
  i916.rotation = new pc.Quat(i917[11], i917[12], i917[13], i917[14])
  i916.scale = new pc.Vec3( i917[15], i917[16], i917[17] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i919 = data
  i918.enabled = !!i919[0]
  i918.planeDistance = i919[1]
  i918.referencePixelsPerUnit = i919[2]
  i918.isFallbackOverlay = !!i919[3]
  i918.renderMode = i919[4]
  i918.renderOrder = i919[5]
  i918.sortingLayerName = i919[6]
  i918.sortingOrder = i919[7]
  i918.scaleFactor = i919[8]
  request.r(i919[9], i919[10], 0, i918, 'worldCamera')
  i918.overrideSorting = !!i919[11]
  i918.pixelPerfect = !!i919[12]
  i918.targetDisplay = i919[13]
  i918.overridePixelPerfect = !!i919[14]
  return i918
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i921 = data
  i920.m_UiScaleMode = i921[0]
  i920.m_ReferencePixelsPerUnit = i921[1]
  i920.m_ScaleFactor = i921[2]
  i920.m_ReferenceResolution = new pc.Vec2( i921[3], i921[4] )
  i920.m_ScreenMatchMode = i921[5]
  i920.m_MatchWidthOrHeight = i921[6]
  i920.m_PhysicalUnit = i921[7]
  i920.m_FallbackScreenDPI = i921[8]
  i920.m_DefaultSpriteDPI = i921[9]
  i920.m_DynamicPixelsPerUnit = i921[10]
  i920.m_PresetInfoIsWorld = !!i921[11]
  return i920
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i923 = data
  i922.m_IgnoreReversedGraphics = !!i923[0]
  i922.m_BlockingObjects = i923[1]
  i922.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i923[2] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i925 = data
  i924.cullTransparentMesh = !!i925[0]
  return i924
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Image' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_Sprite')
  i926.m_Type = i927[2]
  i926.m_PreserveAspect = !!i927[3]
  i926.m_FillCenter = !!i927[4]
  i926.m_FillMethod = i927[5]
  i926.m_FillAmount = i927[6]
  i926.m_FillClockwise = !!i927[7]
  i926.m_FillOrigin = i927[8]
  i926.m_UseSpriteMesh = !!i927[9]
  i926.m_PixelsPerUnitMultiplier = i927[10]
  request.r(i927[11], i927[12], 0, i926, 'm_Material')
  i926.m_Maskable = !!i927[13]
  i926.m_Color = new pc.Color(i927[14], i927[15], i927[16], i927[17])
  i926.m_RaycastTarget = !!i927[18]
  i926.m_RaycastPadding = new pc.Vec4( i927[19], i927[20], i927[21], i927[22] )
  return i926
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Button' )
  var i929 = data
  i928.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i929[0], i928.m_OnClick)
  i928.m_Navigation = request.d('UnityEngine.UI.Navigation', i929[1], i928.m_Navigation)
  i928.m_Transition = i929[2]
  i928.m_Colors = request.d('UnityEngine.UI.ColorBlock', i929[3], i928.m_Colors)
  i928.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i929[4], i928.m_SpriteState)
  i928.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i929[5], i928.m_AnimationTriggers)
  i928.m_Interactable = !!i929[6]
  request.r(i929[7], i929[8], 0, i928, 'm_TargetGraphic')
  return i928
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i931 = data
  i930.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i931[0], i930.m_PersistentCalls)
  return i930
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('UnityEngine.Events.PersistentCall', i935[i + 0]));
  }
  i932.m_Calls = i934
  return i932
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_Target')
  i938.m_TargetAssemblyTypeName = i939[2]
  i938.m_MethodName = i939[3]
  i938.m_Mode = i939[4]
  i938.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i939[5], i938.m_Arguments)
  i938.m_CallState = i939[6]
  return i938
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_ObjectArgument')
  i940.m_ObjectArgumentAssemblyTypeName = i941[2]
  i940.m_IntArgument = i941[3]
  i940.m_FloatArgument = i941[4]
  i940.m_StringArgument = i941[5]
  i940.m_BoolArgument = !!i941[6]
  return i940
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i943 = data
  i942.m_Mode = i943[0]
  i942.m_WrapAround = !!i943[1]
  request.r(i943[2], i943[3], 0, i942, 'm_SelectOnUp')
  request.r(i943[4], i943[5], 0, i942, 'm_SelectOnDown')
  request.r(i943[6], i943[7], 0, i942, 'm_SelectOnLeft')
  request.r(i943[8], i943[9], 0, i942, 'm_SelectOnRight')
  return i942
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i945 = data
  i944.m_NormalColor = new pc.Color(i945[0], i945[1], i945[2], i945[3])
  i944.m_HighlightedColor = new pc.Color(i945[4], i945[5], i945[6], i945[7])
  i944.m_PressedColor = new pc.Color(i945[8], i945[9], i945[10], i945[11])
  i944.m_SelectedColor = new pc.Color(i945[12], i945[13], i945[14], i945[15])
  i944.m_DisabledColor = new pc.Color(i945[16], i945[17], i945[18], i945[19])
  i944.m_ColorMultiplier = i945[20]
  i944.m_FadeDuration = i945[21]
  return i944
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_HighlightedSprite')
  request.r(i947[2], i947[3], 0, i946, 'm_PressedSprite')
  request.r(i947[4], i947[5], 0, i946, 'm_SelectedSprite')
  request.r(i947[6], i947[7], 0, i946, 'm_DisabledSprite')
  return i946
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i949 = data
  i948.m_NormalTrigger = i949[0]
  i948.m_HighlightedTrigger = i949[1]
  i948.m_PressedTrigger = i949[2]
  i948.m_SelectedTrigger = i949[3]
  i948.m_DisabledTrigger = i949[4]
  return i948
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_FirstSelected')
  i950.m_sendNavigationEvents = !!i951[2]
  i950.m_DragThreshold = i951[3]
  return i950
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i953 = data
  i952.m_HorizontalAxis = i953[0]
  i952.m_VerticalAxis = i953[1]
  i952.m_SubmitButton = i953[2]
  i952.m_CancelButton = i953[3]
  i952.m_InputActionsPerSecond = i953[4]
  i952.m_RepeatDelay = i953[5]
  i952.m_ForceModuleActive = !!i953[6]
  i952.m_SendPointerHoverToParent = !!i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i955 = data
  i954.ambientIntensity = i955[0]
  i954.reflectionIntensity = i955[1]
  i954.ambientMode = i955[2]
  i954.ambientLight = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.ambientSkyColor = new pc.Color(i955[7], i955[8], i955[9], i955[10])
  i954.ambientGroundColor = new pc.Color(i955[11], i955[12], i955[13], i955[14])
  i954.ambientEquatorColor = new pc.Color(i955[15], i955[16], i955[17], i955[18])
  i954.fogColor = new pc.Color(i955[19], i955[20], i955[21], i955[22])
  i954.fogEndDistance = i955[23]
  i954.fogStartDistance = i955[24]
  i954.fogDensity = i955[25]
  i954.fog = !!i955[26]
  request.r(i955[27], i955[28], 0, i954, 'skybox')
  i954.fogMode = i955[29]
  var i957 = i955[30]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i957[i + 0]) );
  }
  i954.lightmaps = i956
  i954.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i955[31], i954.lightProbes)
  i954.lightmapsMode = i955[32]
  i954.mixedBakeMode = i955[33]
  i954.environmentLightingMode = i955[34]
  i954.ambientProbe = new pc.SphericalHarmonicsL2(i955[35])
  i954.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i955[36])
  i954.useReferenceAmbientProbe = !!i955[37]
  request.r(i955[38], i955[39], 0, i954, 'customReflection')
  request.r(i955[40], i955[41], 0, i954, 'defaultReflection')
  i954.defaultReflectionMode = i955[42]
  i954.defaultReflectionResolution = i955[43]
  i954.sunLightObjectId = i955[44]
  i954.pixelLightCount = i955[45]
  i954.defaultReflectionHDR = !!i955[46]
  i954.hasLightDataAsset = !!i955[47]
  i954.hasManualGenerate = !!i955[48]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'lightmapColor')
  request.r(i961[2], i961[3], 0, i960, 'lightmapDirection')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i962 = root || new UnityEngine.LightProbes()
  var i963 = data
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i973[i + 0]));
  }
  i970.ShaderCompilationErrors = i972
  i970.name = i971[1]
  i970.guid = i971[2]
  var i975 = i971[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.shaderDefinedKeywords = i974
  var i977 = i971[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i977[i + 0]) );
  }
  i970.passes = i976
  var i979 = i971[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i979[i + 0]) );
  }
  i970.usePasses = i978
  var i981 = i971[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i981[i + 0]) );
  }
  i970.defaultParameterValues = i980
  request.r(i971[7], i971[8], 0, i970, 'unityFallbackShader')
  i970.readDepth = !!i971[9]
  i970.isCreatedByShaderGraph = !!i971[10]
  i970.compiled = !!i971[11]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i985 = data
  i984.shaderName = i985[0]
  i984.errorMessage = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i988 = root || new pc.UnityShaderPass()
  var i989 = data
  i988.id = i989[0]
  i988.subShaderIndex = i989[1]
  i988.name = i989[2]
  i988.passType = i989[3]
  i988.grabPassTextureName = i989[4]
  i988.usePass = !!i989[5]
  i988.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[6], i988.zTest)
  i988.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[7], i988.zWrite)
  i988.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[8], i988.culling)
  i988.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i989[9], i988.blending)
  i988.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i989[10], i988.alphaBlending)
  i988.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[11], i988.colorWriteMask)
  i988.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[12], i988.offsetUnits)
  i988.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[13], i988.offsetFactor)
  i988.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[14], i988.stencilRef)
  i988.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[15], i988.stencilReadMask)
  i988.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[16], i988.stencilWriteMask)
  i988.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[17], i988.stencilOp)
  i988.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[18], i988.stencilOpFront)
  i988.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i989[19], i988.stencilOpBack)
  var i991 = i989[20]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i991[i + 0]) );
  }
  i988.tags = i990
  var i993 = i989[21]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i988.passDefinedKeywords = i992
  var i995 = i989[22]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i995[i + 0]) );
  }
  i988.passDefinedKeywordGroups = i994
  var i997 = i989[23]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i997[i + 0]) );
  }
  i988.variants = i996
  var i999 = i989[24]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i999[i + 0]) );
  }
  i988.excludedVariants = i998
  i988.hasDepthReader = !!i989[25]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1001 = data
  i1000.val = i1001[0]
  i1000.name = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1003 = data
  i1002.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[0], i1002.src)
  i1002.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[1], i1002.dst)
  i1002.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1003[2], i1002.op)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1005 = data
  i1004.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[0], i1004.pass)
  i1004.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[1], i1004.fail)
  i1004.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[2], i1004.zFail)
  i1004.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[3], i1004.comp)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.value = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1012.keywords = i1014
  i1012.hasDiscard = !!i1013[1]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1019 = data
  i1018.passId = i1019[0]
  i1018.subShaderIndex = i1019[1]
  var i1021 = i1019[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1018.keywords = i1020
  i1018.vertexProgram = i1019[3]
  i1018.fragmentProgram = i1019[4]
  i1018.exportedForWebGl2 = !!i1019[5]
  i1018.readDepth = !!i1019[6]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'shader')
  i1024.pass = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.type = i1029[1]
  i1028.value = new pc.Vec4( i1029[2], i1029[3], i1029[4], i1029[5] )
  i1028.textureValue = i1029[6]
  i1028.shaderPropertyFlag = i1029[7]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1031 = data
  i1030.name = i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'texture')
  i1030.aabb = i1031[3]
  i1030.vertices = i1031[4]
  i1030.triangles = i1031[5]
  i1030.textureRect = UnityEngine.Rect.MinMaxRect(i1031[6], i1031[7], i1031[8], i1031[9])
  i1030.packedRect = UnityEngine.Rect.MinMaxRect(i1031[10], i1031[11], i1031[12], i1031[13])
  i1030.border = new pc.Vec4( i1031[14], i1031[15], i1031[16], i1031[17] )
  i1030.transparency = i1031[18]
  i1030.bounds = i1031[19]
  i1030.pixelsPerUnit = i1031[20]
  i1030.textureWidth = i1031[21]
  i1030.textureHeight = i1031[22]
  i1030.nativeSize = new pc.Vec2( i1031[23], i1031[24] )
  i1030.pivot = new pc.Vec2( i1031[25], i1031[26] )
  i1030.textureRectOffset = new pc.Vec2( i1031[27], i1031[28] )
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1033 = data
  i1032.name = i1033[0]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.wrapMode = i1035[1]
  i1034.isLooping = !!i1035[2]
  i1034.length = i1035[3]
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1037[i + 0]) );
  }
  i1034.curves = i1036
  var i1039 = i1035[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1039[i + 0]) );
  }
  i1034.events = i1038
  i1034.halfPrecision = !!i1035[6]
  i1034._frameRate = i1035[7]
  i1034.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1035[8], i1034.localBounds)
  i1034.hasMuscleCurves = !!i1035[9]
  var i1041 = i1035[10]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1034.clipMuscleConstant = i1040
  i1034.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1035[11], i1034.clipBindingConstant)
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1045 = data
  i1044.path = i1045[0]
  i1044.hash = i1045[1]
  i1044.componentType = i1045[2]
  i1044.property = i1045[3]
  i1044.keys = i1045[4]
  var i1047 = i1045[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1047[i + 0]) );
  }
  i1044.objectReferenceKeys = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1051 = data
  i1050.time = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'value')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1055 = data
  i1054.functionName = i1055[0]
  i1054.floatParameter = i1055[1]
  i1054.intParameter = i1055[2]
  i1054.stringParameter = i1055[3]
  request.r(i1055[4], i1055[5], 0, i1054, 'objectReferenceParameter')
  i1054.time = i1055[6]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1057 = data
  i1056.center = new pc.Vec3( i1057[0], i1057[1], i1057[2] )
  i1056.extends = new pc.Vec3( i1057[3], i1057[4], i1057[5] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.genericBindings = i1062
  var i1065 = i1061[1]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.pptrCurveMapping = i1064
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.ascent = i1067[1]
  i1066.originalLineHeight = i1067[2]
  i1066.fontSize = i1067[3]
  var i1069 = i1067[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1069[i + 0]) );
  }
  i1066.characterInfo = i1068
  request.r(i1067[5], i1067[6], 0, i1066, 'texture')
  i1066.originalFontSize = i1067[7]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1073 = data
  i1072.index = i1073[0]
  i1072.advance = i1073[1]
  i1072.bearing = i1073[2]
  i1072.glyphWidth = i1073[3]
  i1072.glyphHeight = i1073[4]
  i1072.minX = i1073[5]
  i1072.maxX = i1073[6]
  i1072.minY = i1073[7]
  i1072.maxY = i1073[8]
  i1072.uvBottomLeftX = i1073[9]
  i1072.uvBottomLeftY = i1073[10]
  i1072.uvBottomRightX = i1073[11]
  i1072.uvBottomRightY = i1073[12]
  i1072.uvTopLeftX = i1073[13]
  i1072.uvTopLeftY = i1073[14]
  i1072.uvTopRightX = i1073[15]
  i1072.uvTopRightY = i1073[16]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1075 = data
  i1074.name = i1075[0]
  var i1077 = i1075[1]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1077[i + 0]) );
  }
  i1074.layers = i1076
  var i1079 = i1075[2]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1079[i + 0]) );
  }
  i1074.parameters = i1078
  i1074.animationClips = i1075[3]
  i1074.avatarUnsupported = i1075[4]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.defaultWeight = i1083[1]
  i1082.blendingMode = i1083[2]
  i1082.avatarMask = i1083[3]
  i1082.syncedLayerIndex = i1083[4]
  i1082.syncedLayerAffectsTiming = !!i1083[5]
  i1082.syncedLayers = i1083[6]
  i1082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[7], i1082.stateMachine)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.name = i1085[1]
  i1084.path = i1085[2]
  var i1087 = i1085[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1087[i + 0]) );
  }
  i1084.states = i1086
  var i1089 = i1085[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1089[i + 0]) );
  }
  i1084.machines = i1088
  var i1091 = i1085[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1091[i + 0]) );
  }
  i1084.entryStateTransitions = i1090
  var i1093 = i1085[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1093[i + 0]) );
  }
  i1084.exitStateTransitions = i1092
  var i1095 = i1085[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1095[i + 0]) );
  }
  i1084.anyStateTransitions = i1094
  i1084.defaultStateId = i1085[8]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  i1098.cycleOffset = i1099[2]
  i1098.cycleOffsetParameter = i1099[3]
  i1098.cycleOffsetParameterActive = !!i1099[4]
  i1098.mirror = !!i1099[5]
  i1098.mirrorParameter = i1099[6]
  i1098.mirrorParameterActive = !!i1099[7]
  i1098.motionId = i1099[8]
  i1098.nameHash = i1099[9]
  i1098.fullPathHash = i1099[10]
  i1098.speed = i1099[11]
  i1098.speedParameter = i1099[12]
  i1098.speedParameterActive = !!i1099[13]
  i1098.tag = i1099[14]
  i1098.tagHash = i1099[15]
  i1098.writeDefaultValues = !!i1099[16]
  var i1101 = i1099[17]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.behaviours = i1100
  var i1103 = i1099[18]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1103[i + 0]) );
  }
  i1098.transitions = i1102
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1109 = data
  i1108.fullPath = i1109[0]
  i1108.canTransitionToSelf = !!i1109[1]
  i1108.duration = i1109[2]
  i1108.exitTime = i1109[3]
  i1108.hasExitTime = !!i1109[4]
  i1108.hasFixedDuration = !!i1109[5]
  i1108.interruptionSource = i1109[6]
  i1108.offset = i1109[7]
  i1108.orderedInterruption = !!i1109[8]
  i1108.destinationStateId = i1109[9]
  i1108.isExit = !!i1109[10]
  i1108.mute = !!i1109[11]
  i1108.solo = !!i1109[12]
  var i1111 = i1109[13]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1111[i + 0]) );
  }
  i1108.conditions = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1117 = data
  i1116.destinationStateId = i1117[0]
  i1116.isExit = !!i1117[1]
  i1116.mute = !!i1117[2]
  i1116.solo = !!i1117[3]
  var i1119 = i1117[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1119[i + 0]) );
  }
  i1116.conditions = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1123 = data
  i1122.mode = i1123[0]
  i1122.parameter = i1123[1]
  i1122.threshold = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1127 = data
  i1126.defaultBool = !!i1127[0]
  i1126.defaultFloat = i1127[1]
  i1126.defaultInt = i1127[2]
  i1126.name = i1127[3]
  i1126.nameHash = i1127[4]
  i1126.type = i1127[5]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.bytes64 = i1129[1]
  i1128.data = i1129[2]
  return i1128
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1130 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 2, i1132, '')
  }
  i1130.atlasAssets = i1132
  i1130.scale = i1131[1]
  request.r(i1131[2], i1131[3], 0, i1130, 'skeletonJSON')
  i1130.isUpgradingBlendModeMaterials = !!i1131[4]
  i1130.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1131[5], i1130.blendModeMaterials)
  var i1135 = i1131[6]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 1, i1134, '')
  }
  i1130.skeletonDataModifiers = i1134
  var i1137 = i1131[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1130.fromAnimation = i1136
  var i1139 = i1131[8]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1130.toAnimation = i1138
  i1130.duration = i1131[9]
  i1130.defaultMix = i1131[10]
  request.r(i1131[11], i1131[12], 0, i1130, 'controller')
  return i1130
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1142 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1143 = data
  i1142.applyAdditiveMaterial = !!i1143[0]
  var i1145 = i1143[1]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1145[i + 0]));
  }
  i1142.additiveMaterials = i1144
  var i1147 = i1143[2]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1147[i + 0]));
  }
  i1142.multiplyMaterials = i1146
  var i1149 = i1143[3]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1149[i + 0]));
  }
  i1142.screenMaterials = i1148
  i1142.requiresBlendModeMaterials = !!i1143[4]
  return i1142
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1152 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1153 = data
  i1152.pageName = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'material')
  return i1152
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1156 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'atlasFile')
  var i1159 = i1157[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1156.materials = i1158
  i1156.textureLoadingMode = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'onDemandTextureLoader')
  return i1156
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_Settings' )
  var i1161 = data
  i1160.m_enableWordWrapping = !!i1161[0]
  i1160.m_enableKerning = !!i1161[1]
  i1160.m_enableExtraPadding = !!i1161[2]
  i1160.m_enableTintAllSprites = !!i1161[3]
  i1160.m_enableParseEscapeCharacters = !!i1161[4]
  i1160.m_EnableRaycastTarget = !!i1161[5]
  i1160.m_GetFontFeaturesAtRuntime = !!i1161[6]
  i1160.m_missingGlyphCharacter = i1161[7]
  i1160.m_warningsDisabled = !!i1161[8]
  request.r(i1161[9], i1161[10], 0, i1160, 'm_defaultFontAsset')
  i1160.m_defaultFontAssetPath = i1161[11]
  i1160.m_defaultFontSize = i1161[12]
  i1160.m_defaultAutoSizeMinRatio = i1161[13]
  i1160.m_defaultAutoSizeMaxRatio = i1161[14]
  i1160.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1161[15], i1161[16] )
  i1160.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1161[17], i1161[18] )
  i1160.m_autoSizeTextContainer = !!i1161[19]
  i1160.m_IsTextObjectScaleStatic = !!i1161[20]
  var i1163 = i1161[21]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1160.m_fallbackFontAssets = i1162
  i1160.m_matchMaterialPreset = !!i1161[22]
  request.r(i1161[23], i1161[24], 0, i1160, 'm_defaultSpriteAsset')
  i1160.m_defaultSpriteAssetPath = i1161[25]
  i1160.m_enableEmojiSupport = !!i1161[26]
  i1160.m_MissingCharacterSpriteUnicode = i1161[27]
  i1160.m_defaultColorGradientPresetsPath = i1161[28]
  request.r(i1161[29], i1161[30], 0, i1160, 'm_defaultStyleSheet')
  i1160.m_StyleSheetsResourcePath = i1161[31]
  request.r(i1161[32], i1161[33], 0, i1160, 'm_leadingCharacters')
  request.r(i1161[34], i1161[35], 0, i1160, 'm_followingCharacters')
  i1160.m_UseModernHangulLineBreakingRules = !!i1161[36]
  return i1160
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1167 = data
  i1166.hashCode = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'material')
  i1166.materialHashCode = i1167[3]
  request.r(i1167[4], i1167[5], 0, i1166, 'atlas')
  i1166.normalStyle = i1167[6]
  i1166.normalSpacingOffset = i1167[7]
  i1166.boldStyle = i1167[8]
  i1166.boldSpacing = i1167[9]
  i1166.italicStyle = i1167[10]
  i1166.tabSize = i1167[11]
  i1166.m_Version = i1167[12]
  i1166.m_SourceFontFileGUID = i1167[13]
  request.r(i1167[14], i1167[15], 0, i1166, 'm_SourceFontFile_EditorRef')
  request.r(i1167[16], i1167[17], 0, i1166, 'm_SourceFontFile')
  i1166.m_AtlasPopulationMode = i1167[18]
  i1166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1167[19], i1166.m_FaceInfo)
  var i1169 = i1167[20]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('UnityEngine.TextCore.Glyph', i1169[i + 0]));
  }
  i1166.m_GlyphTable = i1168
  var i1171 = i1167[21]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_Character', i1171[i + 0]));
  }
  i1166.m_CharacterTable = i1170
  var i1173 = i1167[22]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 2, i1172, '')
  }
  i1166.m_AtlasTextures = i1172
  i1166.m_AtlasTextureIndex = i1167[23]
  i1166.m_IsMultiAtlasTexturesEnabled = !!i1167[24]
  i1166.m_ClearDynamicDataOnBuild = !!i1167[25]
  var i1175 = i1167[26]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.TextCore.GlyphRect', i1175[i + 0]));
  }
  i1166.m_UsedGlyphRects = i1174
  var i1177 = i1167[27]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('UnityEngine.TextCore.GlyphRect', i1177[i + 0]));
  }
  i1166.m_FreeGlyphRects = i1176
  i1166.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1167[28], i1166.m_fontInfo)
  i1166.m_AtlasWidth = i1167[29]
  i1166.m_AtlasHeight = i1167[30]
  i1166.m_AtlasPadding = i1167[31]
  i1166.m_AtlasRenderMode = i1167[32]
  var i1179 = i1167[33]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.TMP_Glyph', i1179[i + 0]));
  }
  i1166.m_glyphInfoList = i1178
  i1166.m_KerningTable = request.d('TMPro.KerningTable', i1167[34], i1166.m_KerningTable)
  i1166.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1167[35], i1166.m_FontFeatureTable)
  var i1181 = i1167[36]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 1, i1180, '')
  }
  i1166.fallbackFontAssets = i1180
  var i1183 = i1167[37]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1166.m_FallbackFontAssetTable = i1182
  i1166.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1167[38], i1166.m_CreationSettings)
  var i1185 = i1167[39]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('TMPro.TMP_FontWeightPair', i1185[i + 0]) );
  }
  i1166.m_FontWeightTable = i1184
  var i1187 = i1167[40]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('TMPro.TMP_FontWeightPair', i1187[i + 0]) );
  }
  i1166.fontWeights = i1186
  return i1166
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1189 = data
  i1188.m_FaceIndex = i1189[0]
  i1188.m_FamilyName = i1189[1]
  i1188.m_StyleName = i1189[2]
  i1188.m_PointSize = i1189[3]
  i1188.m_Scale = i1189[4]
  i1188.m_UnitsPerEM = i1189[5]
  i1188.m_LineHeight = i1189[6]
  i1188.m_AscentLine = i1189[7]
  i1188.m_CapLine = i1189[8]
  i1188.m_MeanLine = i1189[9]
  i1188.m_Baseline = i1189[10]
  i1188.m_DescentLine = i1189[11]
  i1188.m_SuperscriptOffset = i1189[12]
  i1188.m_SuperscriptSize = i1189[13]
  i1188.m_SubscriptOffset = i1189[14]
  i1188.m_SubscriptSize = i1189[15]
  i1188.m_UnderlineOffset = i1189[16]
  i1188.m_UnderlineThickness = i1189[17]
  i1188.m_StrikethroughOffset = i1189[18]
  i1188.m_StrikethroughThickness = i1189[19]
  i1188.m_TabWidth = i1189[20]
  return i1188
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1193 = data
  i1192.m_Index = i1193[0]
  i1192.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1193[1], i1192.m_Metrics)
  i1192.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1193[2], i1192.m_GlyphRect)
  i1192.m_Scale = i1193[3]
  i1192.m_AtlasIndex = i1193[4]
  i1192.m_ClassDefinitionType = i1193[5]
  return i1192
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1195 = data
  i1194.m_Width = i1195[0]
  i1194.m_Height = i1195[1]
  i1194.m_HorizontalBearingX = i1195[2]
  i1194.m_HorizontalBearingY = i1195[3]
  i1194.m_HorizontalAdvance = i1195[4]
  return i1194
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1197 = data
  i1196.m_X = i1197[0]
  i1196.m_Y = i1197[1]
  i1196.m_Width = i1197[2]
  i1196.m_Height = i1197[3]
  return i1196
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_Character' )
  var i1201 = data
  i1200.m_ElementType = i1201[0]
  i1200.m_Unicode = i1201[1]
  i1200.m_GlyphIndex = i1201[2]
  i1200.m_Scale = i1201[3]
  return i1200
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1207 = data
  i1206.Name = i1207[0]
  i1206.PointSize = i1207[1]
  i1206.Scale = i1207[2]
  i1206.CharacterCount = i1207[3]
  i1206.LineHeight = i1207[4]
  i1206.Baseline = i1207[5]
  i1206.Ascender = i1207[6]
  i1206.CapHeight = i1207[7]
  i1206.Descender = i1207[8]
  i1206.CenterLine = i1207[9]
  i1206.SuperscriptOffset = i1207[10]
  i1206.SubscriptOffset = i1207[11]
  i1206.SubSize = i1207[12]
  i1206.Underline = i1207[13]
  i1206.UnderlineThickness = i1207[14]
  i1206.strikethrough = i1207[15]
  i1206.strikethroughThickness = i1207[16]
  i1206.TabWidth = i1207[17]
  i1206.Padding = i1207[18]
  i1206.AtlasWidth = i1207[19]
  i1206.AtlasHeight = i1207[20]
  return i1206
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1211 = data
  i1210.id = i1211[0]
  i1210.x = i1211[1]
  i1210.y = i1211[2]
  i1210.width = i1211[3]
  i1210.height = i1211[4]
  i1210.xOffset = i1211[5]
  i1210.yOffset = i1211[6]
  i1210.xAdvance = i1211[7]
  i1210.scale = i1211[8]
  return i1210
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.KerningTable' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.KerningPair', i1215[i + 0]));
  }
  i1212.kerningPairs = i1214
  return i1212
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.KerningPair' )
  var i1219 = data
  i1218.xOffset = i1219[0]
  i1218.m_FirstGlyph = i1219[1]
  i1218.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1219[2], i1218.m_FirstGlyphAdjustments)
  i1218.m_SecondGlyph = i1219[3]
  i1218.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1219[4], i1218.m_SecondGlyphAdjustments)
  i1218.m_IgnoreSpacingAdjustments = !!i1219[5]
  return i1218
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1223[i + 0]));
  }
  i1220.m_GlyphPairAdjustmentRecords = i1222
  return i1220
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1227 = data
  i1226.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1227[0], i1226.m_FirstAdjustmentRecord)
  i1226.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1227[1], i1226.m_SecondAdjustmentRecord)
  i1226.m_FeatureLookupFlags = i1227[2]
  return i1226
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1229 = data
  i1228.m_GlyphIndex = i1229[0]
  i1228.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1229[1], i1228.m_GlyphValueRecord)
  return i1228
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1231 = data
  i1230.m_XPlacement = i1231[0]
  i1230.m_YPlacement = i1231[1]
  i1230.m_XAdvance = i1231[2]
  i1230.m_YAdvance = i1231[3]
  return i1230
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1233 = data
  i1232.sourceFontFileName = i1233[0]
  i1232.sourceFontFileGUID = i1233[1]
  i1232.pointSizeSamplingMode = i1233[2]
  i1232.pointSize = i1233[3]
  i1232.padding = i1233[4]
  i1232.packingMode = i1233[5]
  i1232.atlasWidth = i1233[6]
  i1232.atlasHeight = i1233[7]
  i1232.characterSetSelectionMode = i1233[8]
  i1232.characterSequence = i1233[9]
  i1232.referencedFontAssetGUID = i1233[10]
  i1232.referencedTextAssetGUID = i1233[11]
  i1232.fontStyle = i1233[12]
  i1232.fontStyleModifier = i1233[13]
  i1232.renderMode = i1233[14]
  i1232.includeFontFeatures = !!i1233[15]
  return i1232
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'regularTypeface')
  request.r(i1237[2], i1237[3], 0, i1236, 'italicTypeface')
  return i1236
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1239 = data
  i1238.hashCode = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'material')
  i1238.materialHashCode = i1239[3]
  request.r(i1239[4], i1239[5], 0, i1238, 'spriteSheet')
  var i1241 = i1239[6]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_Sprite', i1241[i + 0]));
  }
  i1238.spriteInfoList = i1240
  var i1243 = i1239[7]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1238.fallbackSpriteAssets = i1242
  i1238.m_Version = i1239[8]
  i1238.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1239[9], i1238.m_FaceInfo)
  var i1245 = i1239[10]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.TMP_SpriteCharacter', i1245[i + 0]));
  }
  i1238.m_SpriteCharacterTable = i1244
  var i1247 = i1239[11]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_SpriteGlyph', i1247[i + 0]));
  }
  i1238.m_SpriteGlyphTable = i1246
  return i1238
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.hashCode = i1251[1]
  i1250.unicode = i1251[2]
  i1250.pivot = new pc.Vec2( i1251[3], i1251[4] )
  request.r(i1251[5], i1251[6], 0, i1250, 'sprite')
  i1250.id = i1251[7]
  i1250.x = i1251[8]
  i1250.y = i1251[9]
  i1250.width = i1251[10]
  i1250.height = i1251[11]
  i1250.xOffset = i1251[12]
  i1250.yOffset = i1251[13]
  i1250.xAdvance = i1251[14]
  i1250.scale = i1251[15]
  return i1250
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1257 = data
  i1256.m_Name = i1257[0]
  i1256.m_HashCode = i1257[1]
  i1256.m_ElementType = i1257[2]
  i1256.m_Unicode = i1257[3]
  i1256.m_GlyphIndex = i1257[4]
  i1256.m_Scale = i1257[5]
  return i1256
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'sprite')
  i1260.m_Index = i1261[2]
  i1260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1261[3], i1260.m_Metrics)
  i1260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1261[4], i1260.m_GlyphRect)
  i1260.m_Scale = i1261[5]
  i1260.m_AtlasIndex = i1261[6]
  i1260.m_ClassDefinitionType = i1261[7]
  return i1260
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.TMP_Style', i1265[i + 0]));
  }
  i1262.m_StyleList = i1264
  return i1262
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_Style' )
  var i1269 = data
  i1268.m_Name = i1269[0]
  i1268.m_HashCode = i1269[1]
  i1268.m_OpeningDefinition = i1269[2]
  i1268.m_ClosingDefinition = i1269[3]
  i1268.m_OpeningTagArray = i1269[4]
  i1268.m_ClosingTagArray = i1269[5]
  i1268.m_OpeningTagUnicodeArray = i1269[6]
  i1268.m_ClosingTagUnicodeArray = i1269[7]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1273[i + 0]) );
  }
  i1270.files = i1272
  i1270.componentToPrefabIds = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1277 = data
  i1276.path = i1277[0]
  request.r(i1277[1], i1277[2], 0, i1276, 'unityObject')
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1281[i + 0]) );
  }
  i1278.scriptsExecutionOrder = i1280
  var i1283 = i1279[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1283[i + 0]) );
  }
  i1278.sortingLayers = i1282
  var i1285 = i1279[2]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1285[i + 0]) );
  }
  i1278.cullingLayers = i1284
  i1278.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1279[3], i1278.timeSettings)
  i1278.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1279[4], i1278.physicsSettings)
  i1278.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1279[5], i1278.physics2DSettings)
  i1278.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1279[6], i1278.qualitySettings)
  i1278.enableRealtimeShadows = !!i1279[7]
  i1278.enableAutoInstancing = !!i1279[8]
  i1278.enableDynamicBatching = !!i1279[9]
  i1278.lightmapEncodingQuality = i1279[10]
  i1278.desiredColorSpace = i1279[11]
  var i1287 = i1279[12]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( i1287[i + 0] );
  }
  i1278.allTags = i1286
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.value = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.name = i1295[1]
  i1294.value = i1295[2]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1299 = data
  i1298.id = i1299[0]
  i1298.name = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1301 = data
  i1300.fixedDeltaTime = i1301[0]
  i1300.maximumDeltaTime = i1301[1]
  i1300.timeScale = i1301[2]
  i1300.maximumParticleTimestep = i1301[3]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1303 = data
  i1302.gravity = new pc.Vec3( i1303[0], i1303[1], i1303[2] )
  i1302.defaultSolverIterations = i1303[3]
  i1302.bounceThreshold = i1303[4]
  i1302.autoSyncTransforms = !!i1303[5]
  i1302.autoSimulation = !!i1303[6]
  var i1305 = i1303[7]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1305[i + 0]) );
  }
  i1302.collisionMatrix = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1309 = data
  i1308.enabled = !!i1309[0]
  i1308.layerId = i1309[1]
  i1308.otherLayerId = i1309[2]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'material')
  i1310.gravity = new pc.Vec2( i1311[2], i1311[3] )
  i1310.positionIterations = i1311[4]
  i1310.velocityIterations = i1311[5]
  i1310.velocityThreshold = i1311[6]
  i1310.maxLinearCorrection = i1311[7]
  i1310.maxAngularCorrection = i1311[8]
  i1310.maxTranslationSpeed = i1311[9]
  i1310.maxRotationSpeed = i1311[10]
  i1310.baumgarteScale = i1311[11]
  i1310.baumgarteTOIScale = i1311[12]
  i1310.timeToSleep = i1311[13]
  i1310.linearSleepTolerance = i1311[14]
  i1310.angularSleepTolerance = i1311[15]
  i1310.defaultContactOffset = i1311[16]
  i1310.autoSimulation = !!i1311[17]
  i1310.queriesHitTriggers = !!i1311[18]
  i1310.queriesStartInColliders = !!i1311[19]
  i1310.callbacksOnDisable = !!i1311[20]
  i1310.reuseCollisionCallbacks = !!i1311[21]
  i1310.autoSyncTransforms = !!i1311[22]
  var i1313 = i1311[23]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1313[i + 0]) );
  }
  i1310.collisionMatrix = i1312
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1317 = data
  i1316.enabled = !!i1317[0]
  i1316.layerId = i1317[1]
  i1316.otherLayerId = i1317[2]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1321[i + 0]) );
  }
  i1318.qualityLevels = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( i1323[i + 0] );
  }
  i1318.names = i1322
  i1318.shadows = i1319[2]
  i1318.anisotropicFiltering = i1319[3]
  i1318.antiAliasing = i1319[4]
  i1318.lodBias = i1319[5]
  i1318.shadowCascades = i1319[6]
  i1318.shadowDistance = i1319[7]
  i1318.shadowmaskMode = i1319[8]
  i1318.shadowProjection = i1319[9]
  i1318.shadowResolution = i1319[10]
  i1318.softParticles = !!i1319[11]
  i1318.softVegetation = !!i1319[12]
  i1318.activeColorSpace = i1319[13]
  i1318.desiredColorSpace = i1319[14]
  i1318.masterTextureLimit = i1319[15]
  i1318.maxQueuedFrames = i1319[16]
  i1318.particleRaycastBudget = i1319[17]
  i1318.pixelLightCount = i1319[18]
  i1318.realtimeReflectionProbes = !!i1319[19]
  i1318.shadowCascade2Split = i1319[20]
  i1318.shadowCascade4Split = new pc.Vec3( i1319[21], i1319[22], i1319[23] )
  i1318.streamingMipmapsActive = !!i1319[24]
  i1318.vSyncCount = i1319[25]
  i1318.asyncUploadBufferSize = i1319[26]
  i1318.asyncUploadTimeSlice = i1319[27]
  i1318.billboardsFaceCameraPosition = !!i1319[28]
  i1318.shadowNearPlaneOffset = i1319[29]
  i1318.streamingMipmapsMemoryBudget = i1319[30]
  i1318.maximumLODLevel = i1319[31]
  i1318.streamingMipmapsAddAllCameras = !!i1319[32]
  i1318.streamingMipmapsMaxLevelReduction = i1319[33]
  i1318.streamingMipmapsRenderersPerFrame = i1319[34]
  i1318.resolutionScalingFixedDPIFactor = i1319[35]
  i1318.streamingMipmapsMaxFileIORequests = i1319[36]
  i1318.currentQualityLevel = i1319[37]
  return i1318
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1327 = data
  i1326.xPlacement = i1327[0]
  i1326.yPlacement = i1327[1]
  i1326.xAdvance = i1327[2]
  i1326.yAdvance = i1327[3]
  return i1326
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[35],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[27],"81":[27],"82":[27],"83":[27],"84":[27],"85":[27],"86":[27],"87":[27],"88":[27],"89":[27],"90":[27],"91":[27],"92":[27],"93":[35],"94":[11],"95":[96],"97":[96],"46":[45],"37":[35],"98":[99],"100":[22],"101":[99],"102":[45],"103":[45],"49":[46],"51":[50,45],"104":[45],"48":[46],"105":[45],"106":[45],"107":[45],"108":[45],"109":[45],"110":[45],"111":[45],"112":[45],"113":[45],"114":[50,45],"115":[45],"116":[45],"117":[45],"118":[45],"119":[50,45],"120":[45],"121":[53],"122":[53],"54":[53],"123":[53],"124":[35],"125":[35],"126":[127],"128":[35],"129":[130],"131":[45],"132":[50,45],"13":[11],"133":[50,45],"134":[25,11],"135":[11],"18":[11,16],"136":[73],"137":[27],"15":[130],"138":[21],"139":[45],"140":[11,45],"141":[45,50],"142":[45],"143":[50,45],"144":[11],"145":[50,45],"146":[45],"147":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level","Coin","Pin","Bonus","Bag","Hand","King","AnimKing","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.BoxCollider2D","UnityEngine.CircleCollider2D","Spine.Unity.SkeletonUtilityBone","UnityEngine.SpriteRenderer","UnityEngine.Sprite","CameraAnchor","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","Hole","UnityEngine.EdgeCollider2D","UnityEngine.ParticleSystem","UnityEngine.PolygonCollider2D","Lava","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","CameraFollower","InputReceiver","SoundManager","UnityEngine.AudioClip","LevelManager","UIManager","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "Playable_KinhPin_Xmas";

Deserializers.lunaInitializationTime = "01/05/2025 05:37:13";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25626";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1840";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5465";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "618e19fa-657e-4424-b4d2-d8bdc0854311";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

