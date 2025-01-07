var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.JointSpring' )
  var i1735 = data
  i1734.spring = i1735[0]
  i1734.damper = i1735[1]
  i1734.targetPosition = i1735[2]
  return i1734
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.JointMotor' )
  var i1737 = data
  i1736.m_TargetVelocity = i1737[0]
  i1736.m_Force = i1737[1]
  i1736.m_FreeSpin = i1737[2]
  return i1736
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.JointLimits' )
  var i1739 = data
  i1738.m_Min = i1739[0]
  i1738.m_Max = i1739[1]
  i1738.m_Bounciness = i1739[2]
  i1738.m_BounceMinVelocity = i1739[3]
  i1738.m_ContactDistance = i1739[4]
  i1738.minBounce = i1739[5]
  i1738.maxBounce = i1739[6]
  return i1738
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.JointDrive' )
  var i1741 = data
  i1740.m_PositionSpring = i1741[0]
  i1740.m_PositionDamper = i1741[1]
  i1740.m_MaximumForce = i1741[2]
  i1740.m_UseAcceleration = i1741[3]
  return i1740
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1743 = data
  i1742.m_Spring = i1743[0]
  i1742.m_Damper = i1743[1]
  return i1742
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1745 = data
  i1744.m_Limit = i1745[0]
  i1744.m_Bounciness = i1745[1]
  i1744.m_ContactDistance = i1745[2]
  return i1744
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1747 = data
  i1746.m_ExtremumSlip = i1747[0]
  i1746.m_ExtremumValue = i1747[1]
  i1746.m_AsymptoteSlip = i1747[2]
  i1746.m_AsymptoteValue = i1747[3]
  i1746.m_Stiffness = i1747[4]
  return i1746
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1749 = data
  i1748.m_LowerAngle = i1749[0]
  i1748.m_UpperAngle = i1749[1]
  return i1748
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1751 = data
  i1750.m_MotorSpeed = i1751[0]
  i1750.m_MaximumMotorTorque = i1751[1]
  return i1750
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1753 = data
  i1752.m_DampingRatio = i1753[0]
  i1752.m_Frequency = i1753[1]
  i1752.m_Angle = i1753[2]
  return i1752
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1755 = data
  i1754.m_LowerTranslation = i1755[0]
  i1754.m_UpperTranslation = i1755[1]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1756 = root || new pc.UnityMaterial()
  var i1757 = data
  i1756.name = i1757[0]
  request.r(i1757[1], i1757[2], 0, i1756, 'shader')
  i1756.renderQueue = i1757[3]
  i1756.enableInstancing = !!i1757[4]
  var i1759 = i1757[5]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1759[i + 0]) );
  }
  i1756.floatParameters = i1758
  var i1761 = i1757[6]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1761[i + 0]) );
  }
  i1756.colorParameters = i1760
  var i1763 = i1757[7]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1763[i + 0]) );
  }
  i1756.vectorParameters = i1762
  var i1765 = i1757[8]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1765[i + 0]) );
  }
  i1756.textureParameters = i1764
  var i1767 = i1757[9]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1767[i + 0]) );
  }
  i1756.materialFlags = i1766
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.value = i1771[1]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1775 = data
  i1774.name = i1775[0]
  i1774.value = new pc.Color(i1775[1], i1775[2], i1775[3], i1775[4])
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.value = new pc.Vec4( i1779[1], i1779[2], i1779[3], i1779[4] )
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1783 = data
  i1782.name = i1783[0]
  request.r(i1783[1], i1783[2], 0, i1782, 'value')
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1787 = data
  i1786.name = i1787[0]
  i1786.enabled = !!i1787[1]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1789 = data
  i1788.name = i1789[0]
  i1788.width = i1789[1]
  i1788.height = i1789[2]
  i1788.mipmapCount = i1789[3]
  i1788.anisoLevel = i1789[4]
  i1788.filterMode = i1789[5]
  i1788.hdr = !!i1789[6]
  i1788.format = i1789[7]
  i1788.wrapMode = i1789[8]
  i1788.alphaIsTransparency = !!i1789[9]
  i1788.alphaSource = i1789[10]
  i1788.graphicsFormat = i1789[11]
  i1788.sRGBTexture = !!i1789[12]
  i1788.desiredColorSpace = i1789[13]
  i1788.wrapU = i1789[14]
  i1788.wrapV = i1789[15]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1791 = data
  i1790.position = new pc.Vec3( i1791[0], i1791[1], i1791[2] )
  i1790.scale = new pc.Vec3( i1791[3], i1791[4], i1791[5] )
  i1790.rotation = new pc.Quat(i1791[6], i1791[7], i1791[8], i1791[9])
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1793 = data
  i1792.enabled = !!i1793[0]
  request.r(i1793[1], i1793[2], 0, i1792, 'sharedMaterial')
  var i1795 = i1793[3]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 2) {
  request.r(i1795[i + 0], i1795[i + 1], 2, i1794, '')
  }
  i1792.sharedMaterials = i1794
  i1792.receiveShadows = !!i1793[4]
  i1792.shadowCastingMode = i1793[5]
  i1792.sortingLayerID = i1793[6]
  i1792.sortingOrder = i1793[7]
  i1792.lightmapIndex = i1793[8]
  i1792.lightmapSceneIndex = i1793[9]
  i1792.lightmapScaleOffset = new pc.Vec4( i1793[10], i1793[11], i1793[12], i1793[13] )
  i1792.lightProbeUsage = i1793[14]
  i1792.reflectionProbeUsage = i1793[15]
  i1792.color = new pc.Color(i1793[16], i1793[17], i1793[18], i1793[19])
  request.r(i1793[20], i1793[21], 0, i1792, 'sprite')
  i1792.flipX = !!i1793[22]
  i1792.flipY = !!i1793[23]
  i1792.drawMode = i1793[24]
  i1792.size = new pc.Vec2( i1793[25], i1793[26] )
  i1792.tileMode = i1793[27]
  i1792.adaptiveModeThreshold = i1793[28]
  i1792.maskInteraction = i1793[29]
  i1792.spriteSortPoint = i1793[30]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1799 = data
  i1798.usedByComposite = !!i1799[0]
  i1798.autoTiling = !!i1799[1]
  i1798.size = new pc.Vec2( i1799[2], i1799[3] )
  i1798.edgeRadius = i1799[4]
  i1798.enabled = !!i1799[5]
  i1798.isTrigger = !!i1799[6]
  i1798.usedByEffector = !!i1799[7]
  i1798.density = i1799[8]
  i1798.offset = new pc.Vec2( i1799[9], i1799[10] )
  request.r(i1799[11], i1799[12], 0, i1798, 'material')
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1801 = data
  i1800.bodyType = i1801[0]
  request.r(i1801[1], i1801[2], 0, i1800, 'material')
  i1800.simulated = !!i1801[3]
  i1800.useAutoMass = !!i1801[4]
  i1800.mass = i1801[5]
  i1800.drag = i1801[6]
  i1800.angularDrag = i1801[7]
  i1800.gravityScale = i1801[8]
  i1800.collisionDetectionMode = i1801[9]
  i1800.sleepMode = i1801[10]
  i1800.constraints = i1801[11]
  return i1800
}

Deserializers["Pin"] = function (request, data, root) {
  var i1802 = root || request.c( 'Pin' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'head')
  request.r(i1803[2], i1803[3], 0, i1802, 'end')
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.tagId = i1805[1]
  i1804.enabled = !!i1805[2]
  i1804.isStatic = !!i1805[3]
  i1804.layer = i1805[4]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1807 = data
  i1806.radius = i1807[0]
  i1806.enabled = !!i1807[1]
  i1806.isTrigger = !!i1807[2]
  i1806.usedByEffector = !!i1807[3]
  i1806.density = i1807[4]
  i1806.offset = new pc.Vec2( i1807[5], i1807[6] )
  request.r(i1807[7], i1807[8], 0, i1806, 'material')
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'animatorController')
  request.r(i1809[2], i1809[3], 0, i1808, 'avatar')
  i1808.updateMode = i1809[4]
  i1808.hasTransformHierarchy = !!i1809[5]
  i1808.applyRootMotion = !!i1809[6]
  var i1811 = i1809[7]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 2, i1810, '')
  }
  i1808.humanBones = i1810
  i1808.enabled = !!i1809[8]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1815 = data
  i1814.name = i1815[0]
  i1814.halfPrecision = !!i1815[1]
  i1814.useUInt32IndexFormat = !!i1815[2]
  i1814.vertexCount = i1815[3]
  i1814.aabb = i1815[4]
  var i1817 = i1815[5]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( !!i1817[i + 0] );
  }
  i1814.streams = i1816
  i1814.vertices = i1815[6]
  var i1819 = i1815[7]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1819[i + 0]) );
  }
  i1814.subMeshes = i1818
  var i1821 = i1815[8]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 16) {
    i1820.push( new pc.Mat4().setData(i1821[i + 0], i1821[i + 1], i1821[i + 2], i1821[i + 3],  i1821[i + 4], i1821[i + 5], i1821[i + 6], i1821[i + 7],  i1821[i + 8], i1821[i + 9], i1821[i + 10], i1821[i + 11],  i1821[i + 12], i1821[i + 13], i1821[i + 14], i1821[i + 15]) );
  }
  i1814.bindposes = i1820
  var i1823 = i1815[9]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1823[i + 0]) );
  }
  i1814.blendShapes = i1822
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1829 = data
  i1828.triangles = i1829[0]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1835 = data
  i1834.name = i1835[0]
  var i1837 = i1835[1]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1837[i + 0]) );
  }
  i1834.frames = i1836
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.index = i1839[1]
  i1838.startup = !!i1839[2]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.aspect = i1841[1]
  i1840.orthographic = !!i1841[2]
  i1840.orthographicSize = i1841[3]
  i1840.backgroundColor = new pc.Color(i1841[4], i1841[5], i1841[6], i1841[7])
  i1840.nearClipPlane = i1841[8]
  i1840.farClipPlane = i1841[9]
  i1840.fieldOfView = i1841[10]
  i1840.depth = i1841[11]
  i1840.clearFlags = i1841[12]
  i1840.cullingMask = i1841[13]
  i1840.rect = i1841[14]
  request.r(i1841[15], i1841[16], 0, i1840, 'targetTexture')
  i1840.usePhysicalProperties = !!i1841[17]
  i1840.focalLength = i1841[18]
  i1840.sensorSize = new pc.Vec2( i1841[19], i1841[20] )
  i1840.lensShift = new pc.Vec2( i1841[21], i1841[22] )
  i1840.gateFit = i1841[23]
  i1840.commandBufferCount = i1841[24]
  i1840.cameraType = i1841[25]
  return i1840
}

Deserializers["ViewportHandler"] = function (request, data, root) {
  var i1842 = root || request.c( 'ViewportHandler' )
  var i1843 = data
  i1842.wireColor = new pc.Color(i1843[0], i1843[1], i1843[2], i1843[3])
  i1842.UnitsSize = i1843[4]
  i1842.constraint = i1843[5]
  request.r(i1843[6], i1843[7], 0, i1842, 'camera')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'clip')
  request.r(i1845[2], i1845[3], 0, i1844, 'outputAudioMixerGroup')
  i1844.playOnAwake = !!i1845[4]
  i1844.loop = !!i1845[5]
  i1844.time = i1845[6]
  i1844.volume = i1845[7]
  i1844.pitch = i1845[8]
  i1844.enabled = !!i1845[9]
  return i1844
}

Deserializers["InputReceiver"] = function (request, data, root) {
  var i1846 = root || request.c( 'InputReceiver' )
  var i1847 = data
  return i1846
}

Deserializers["CameraAnchor"] = function (request, data, root) {
  var i1848 = root || request.c( 'CameraAnchor' )
  var i1849 = data
  i1848.anchorType = i1849[0]
  i1848.anchorOffset = new pc.Vec3( i1849[1], i1849[2], i1849[3] )
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.isTrigger = !!i1851[1]
  i1850.usedByEffector = !!i1851[2]
  i1850.density = i1851[3]
  i1850.offset = new pc.Vec2( i1851[4], i1851[5] )
  request.r(i1851[6], i1851[7], 0, i1850, 'material')
  i1850.edgeRadius = i1851[8]
  var i1853 = i1851[9]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 2) {
    i1852.push( new pc.Vec2( i1853[i + 0], i1853[i + 1] ) );
  }
  i1850.points = i1852
  i1850.useAdjacentStartPoint = !!i1851[10]
  i1850.adjacentStartPoint = new pc.Vec2( i1851[11], i1851[12] )
  i1850.useAdjacentEndPoint = !!i1851[13]
  i1850.adjacentEndPoint = new pc.Vec2( i1851[14], i1851[15] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.isTrigger = !!i1857[1]
  i1856.usedByEffector = !!i1857[2]
  i1856.density = i1857[3]
  i1856.offset = new pc.Vec2( i1857[4], i1857[5] )
  request.r(i1857[6], i1857[7], 0, i1856, 'material')
  i1856.usedByComposite = !!i1857[8]
  i1856.autoTiling = !!i1857[9]
  var i1859 = i1857[10]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
  var i1861 = i1859[i + 0]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
    i1860.push( new pc.Vec2( i1861[i + 0], i1861[i + 1] ) );
  }
    i1858.push( i1860 );
  }
  i1856.points = i1858
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1867 = data
  i1866.pivot = new pc.Vec2( i1867[0], i1867[1] )
  i1866.anchorMin = new pc.Vec2( i1867[2], i1867[3] )
  i1866.anchorMax = new pc.Vec2( i1867[4], i1867[5] )
  i1866.sizeDelta = new pc.Vec2( i1867[6], i1867[7] )
  i1866.anchoredPosition3D = new pc.Vec3( i1867[8], i1867[9], i1867[10] )
  i1866.rotation = new pc.Quat(i1867[11], i1867[12], i1867[13], i1867[14])
  i1866.scale = new pc.Vec3( i1867[15], i1867[16], i1867[17] )
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1869 = data
  i1868.enabled = !!i1869[0]
  i1868.planeDistance = i1869[1]
  i1868.referencePixelsPerUnit = i1869[2]
  i1868.isFallbackOverlay = !!i1869[3]
  i1868.renderMode = i1869[4]
  i1868.renderOrder = i1869[5]
  i1868.sortingLayerName = i1869[6]
  i1868.sortingOrder = i1869[7]
  i1868.scaleFactor = i1869[8]
  request.r(i1869[9], i1869[10], 0, i1868, 'worldCamera')
  i1868.overrideSorting = !!i1869[11]
  i1868.pixelPerfect = !!i1869[12]
  i1868.targetDisplay = i1869[13]
  i1868.overridePixelPerfect = !!i1869[14]
  return i1868
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1871 = data
  i1870.m_UiScaleMode = i1871[0]
  i1870.m_ReferencePixelsPerUnit = i1871[1]
  i1870.m_ScaleFactor = i1871[2]
  i1870.m_ReferenceResolution = new pc.Vec2( i1871[3], i1871[4] )
  i1870.m_ScreenMatchMode = i1871[5]
  i1870.m_MatchWidthOrHeight = i1871[6]
  i1870.m_PhysicalUnit = i1871[7]
  i1870.m_FallbackScreenDPI = i1871[8]
  i1870.m_DefaultSpriteDPI = i1871[9]
  i1870.m_DynamicPixelsPerUnit = i1871[10]
  i1870.m_PresetInfoIsWorld = !!i1871[11]
  return i1870
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1873 = data
  i1872.m_IgnoreReversedGraphics = !!i1873[0]
  i1872.m_BlockingObjects = i1873[1]
  i1872.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1873[2] )
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1875 = data
  i1874.cullTransparentMesh = !!i1875[0]
  return i1874
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.Image' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_Sprite')
  i1876.m_Type = i1877[2]
  i1876.m_PreserveAspect = !!i1877[3]
  i1876.m_FillCenter = !!i1877[4]
  i1876.m_FillMethod = i1877[5]
  i1876.m_FillAmount = i1877[6]
  i1876.m_FillClockwise = !!i1877[7]
  i1876.m_FillOrigin = i1877[8]
  i1876.m_UseSpriteMesh = !!i1877[9]
  i1876.m_PixelsPerUnitMultiplier = i1877[10]
  request.r(i1877[11], i1877[12], 0, i1876, 'm_Material')
  i1876.m_Maskable = !!i1877[13]
  i1876.m_Color = new pc.Color(i1877[14], i1877[15], i1877[16], i1877[17])
  i1876.m_RaycastTarget = !!i1877[18]
  i1876.m_RaycastPadding = new pc.Vec4( i1877[19], i1877[20], i1877[21], i1877[22] )
  return i1876
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.Text' )
  var i1879 = data
  i1878.m_FontData = request.d('UnityEngine.UI.FontData', i1879[0], i1878.m_FontData)
  i1878.m_Text = i1879[1]
  request.r(i1879[2], i1879[3], 0, i1878, 'm_Material')
  i1878.m_Maskable = !!i1879[4]
  i1878.m_Color = new pc.Color(i1879[5], i1879[6], i1879[7], i1879[8])
  i1878.m_RaycastTarget = !!i1879[9]
  i1878.m_RaycastPadding = new pc.Vec4( i1879[10], i1879[11], i1879[12], i1879[13] )
  return i1878
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'm_Font')
  i1880.m_FontSize = i1881[2]
  i1880.m_FontStyle = i1881[3]
  i1880.m_BestFit = !!i1881[4]
  i1880.m_MinSize = i1881[5]
  i1880.m_MaxSize = i1881[6]
  i1880.m_Alignment = i1881[7]
  i1880.m_AlignByGeometry = !!i1881[8]
  i1880.m_RichText = !!i1881[9]
  i1880.m_HorizontalOverflow = i1881[10]
  i1880.m_VerticalOverflow = i1881[11]
  i1880.m_LineSpacing = i1881[12]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'additionalVertexStreams')
  i1882.enabled = !!i1883[2]
  request.r(i1883[3], i1883[4], 0, i1882, 'sharedMaterial')
  var i1885 = i1883[5]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.sharedMaterials = i1884
  i1882.receiveShadows = !!i1883[6]
  i1882.shadowCastingMode = i1883[7]
  i1882.sortingLayerID = i1883[8]
  i1882.sortingOrder = i1883[9]
  i1882.lightmapIndex = i1883[10]
  i1882.lightmapSceneIndex = i1883[11]
  i1882.lightmapScaleOffset = new pc.Vec4( i1883[12], i1883[13], i1883[14], i1883[15] )
  i1882.lightProbeUsage = i1883[16]
  i1882.reflectionProbeUsage = i1883[17]
  return i1882
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1886 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1887 = data
  i1886.loop = !!i1887[0]
  i1886.timeScale = i1887[1]
  request.r(i1887[2], i1887[3], 0, i1886, 'skeletonDataAsset')
  i1886.initialSkinName = i1887[4]
  i1886.fixPrefabOverrideViaMeshFilter = i1887[5]
  i1886.initialFlipX = !!i1887[6]
  i1886.initialFlipY = !!i1887[7]
  i1886.updateWhenInvisible = i1887[8]
  i1886.zSpacing = i1887[9]
  i1886.useClipping = !!i1887[10]
  i1886.immutableTriangles = !!i1887[11]
  i1886.pmaVertexColors = !!i1887[12]
  i1886.clearStateOnDisable = !!i1887[13]
  i1886.tintBlack = !!i1887[14]
  i1886.singleSubmesh = !!i1887[15]
  i1886.fixDrawOrder = !!i1887[16]
  i1886.addNormals = !!i1887[17]
  i1886.calculateTangents = !!i1887[18]
  i1886.maskInteraction = i1887[19]
  i1886.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1887[20], i1886.maskMaterials)
  i1886.disableRenderingOnOverride = !!i1887[21]
  i1886.updateTiming = i1887[22]
  i1886.unscaledTime = !!i1887[23]
  i1886._animationName = i1887[24]
  var i1889 = i1887[25]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( i1889[i + 0] );
  }
  i1886.separatorSlotNames = i1888
  return i1886
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1890 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 2, i1892, '')
  }
  i1890.materialsMaskDisabled = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 2, i1894, '')
  }
  i1890.materialsInsideMask = i1894
  var i1897 = i1891[2]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1890.materialsOutsideMask = i1896
  return i1890
}

Deserializers["Spine.Unity.SkeletonUtility"] = function (request, data, root) {
  var i1900 = root || request.c( 'Spine.Unity.SkeletonUtility' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'boneRoot')
  i1900.flipBy180DegreeRotation = !!i1901[2]
  request.r(i1901[3], i1901[4], 0, i1900, 'skeletonRenderer')
  request.r(i1901[5], i1901[6], 0, i1900, 'skeletonGraphic')
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'sharedMesh')
  return i1902
}

Deserializers["Spine.Unity.SkeletonRenderSeparator"] = function (request, data, root) {
  var i1904 = root || request.c( 'Spine.Unity.SkeletonRenderSeparator' )
  var i1905 = data
  i1904.copyPropertyBlock = !!i1905[0]
  i1904.copyMeshRendererFlags = !!i1905[1]
  var i1907 = i1905[2]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonPartsRenderer')))
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 1, i1906, '')
  }
  i1904.partsRenderers = i1906
  request.r(i1905[3], i1905[4], 0, i1904, 'skeletonRenderer')
  return i1904
}

Deserializers["Spine.Unity.SkeletonUtilityBone"] = function (request, data, root) {
  var i1910 = root || request.c( 'Spine.Unity.SkeletonUtilityBone' )
  var i1911 = data
  i1910.boneName = i1911[0]
  request.r(i1911[1], i1911[2], 0, i1910, 'parentReference')
  i1910.mode = i1911[3]
  i1910.position = !!i1911[4]
  i1910.rotation = !!i1911[5]
  i1910.scale = !!i1911[6]
  i1910.zPosition = !!i1911[7]
  i1910.overrideAlpha = i1911[8]
  request.r(i1911[9], i1911[10], 0, i1910, 'hierarchy')
  return i1910
}

Deserializers["Bag"] = function (request, data, root) {
  var i1912 = root || request.c( 'Bag' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'model')
  request.r(i1913[2], i1913[3], 0, i1912, 'idlePosition')
  request.r(i1913[4], i1913[5], 0, i1912, 'winPosition')
  request.r(i1913[6], i1913[7], 0, i1912, 'losePosition')
  return i1912
}

Deserializers["Spine.Unity.SkeletonPartsRenderer"] = function (request, data, root) {
  var i1914 = root || request.c( 'Spine.Unity.SkeletonPartsRenderer' )
  var i1915 = data
  return i1914
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'm_FirstSelected')
  i1916.m_sendNavigationEvents = !!i1917[2]
  i1916.m_DragThreshold = i1917[3]
  return i1916
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1919 = data
  i1918.m_HorizontalAxis = i1919[0]
  i1918.m_VerticalAxis = i1919[1]
  i1918.m_SubmitButton = i1919[2]
  i1918.m_CancelButton = i1919[3]
  i1918.m_InputActionsPerSecond = i1919[4]
  i1918.m_RepeatDelay = i1919[5]
  i1918.m_ForceModuleActive = !!i1919[6]
  i1918.m_SendPointerHoverToParent = !!i1919[7]
  return i1918
}

Deserializers["SoundClick"] = function (request, data, root) {
  var i1920 = root || request.c( 'SoundClick' )
  var i1921 = data
  i1920.loopTime = i1921[0]
  request.r(i1921[1], i1921[2], 0, i1920, 'sound')
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1923 = data
  i1922.ambientIntensity = i1923[0]
  i1922.reflectionIntensity = i1923[1]
  i1922.ambientMode = i1923[2]
  i1922.ambientLight = new pc.Color(i1923[3], i1923[4], i1923[5], i1923[6])
  i1922.ambientSkyColor = new pc.Color(i1923[7], i1923[8], i1923[9], i1923[10])
  i1922.ambientGroundColor = new pc.Color(i1923[11], i1923[12], i1923[13], i1923[14])
  i1922.ambientEquatorColor = new pc.Color(i1923[15], i1923[16], i1923[17], i1923[18])
  i1922.fogColor = new pc.Color(i1923[19], i1923[20], i1923[21], i1923[22])
  i1922.fogEndDistance = i1923[23]
  i1922.fogStartDistance = i1923[24]
  i1922.fogDensity = i1923[25]
  i1922.fog = !!i1923[26]
  request.r(i1923[27], i1923[28], 0, i1922, 'skybox')
  i1922.fogMode = i1923[29]
  var i1925 = i1923[30]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1925[i + 0]) );
  }
  i1922.lightmaps = i1924
  i1922.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1923[31], i1922.lightProbes)
  i1922.lightmapsMode = i1923[32]
  i1922.mixedBakeMode = i1923[33]
  i1922.environmentLightingMode = i1923[34]
  i1922.ambientProbe = new pc.SphericalHarmonicsL2(i1923[35])
  i1922.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1923[36])
  i1922.useReferenceAmbientProbe = !!i1923[37]
  request.r(i1923[38], i1923[39], 0, i1922, 'customReflection')
  request.r(i1923[40], i1923[41], 0, i1922, 'defaultReflection')
  i1922.defaultReflectionMode = i1923[42]
  i1922.defaultReflectionResolution = i1923[43]
  i1922.sunLightObjectId = i1923[44]
  i1922.pixelLightCount = i1923[45]
  i1922.defaultReflectionHDR = !!i1923[46]
  i1922.hasLightDataAsset = !!i1923[47]
  i1922.hasManualGenerate = !!i1923[48]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'lightmapColor')
  request.r(i1929[2], i1929[3], 0, i1928, 'lightmapDirection')
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1930 = root || new UnityEngine.LightProbes()
  var i1931 = data
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1939 = data
  var i1941 = i1939[0]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1941[i + 0]));
  }
  i1938.ShaderCompilationErrors = i1940
  i1938.name = i1939[1]
  i1938.guid = i1939[2]
  var i1943 = i1939[3]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( i1943[i + 0] );
  }
  i1938.shaderDefinedKeywords = i1942
  var i1945 = i1939[4]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1945[i + 0]) );
  }
  i1938.passes = i1944
  var i1947 = i1939[5]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1947[i + 0]) );
  }
  i1938.usePasses = i1946
  var i1949 = i1939[6]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1949[i + 0]) );
  }
  i1938.defaultParameterValues = i1948
  request.r(i1939[7], i1939[8], 0, i1938, 'unityFallbackShader')
  i1938.readDepth = !!i1939[9]
  i1938.isCreatedByShaderGraph = !!i1939[10]
  i1938.compiled = !!i1939[11]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1953 = data
  i1952.shaderName = i1953[0]
  i1952.errorMessage = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1956 = root || new pc.UnityShaderPass()
  var i1957 = data
  i1956.id = i1957[0]
  i1956.subShaderIndex = i1957[1]
  i1956.name = i1957[2]
  i1956.passType = i1957[3]
  i1956.grabPassTextureName = i1957[4]
  i1956.usePass = !!i1957[5]
  i1956.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[6], i1956.zTest)
  i1956.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[7], i1956.zWrite)
  i1956.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[8], i1956.culling)
  i1956.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1957[9], i1956.blending)
  i1956.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1957[10], i1956.alphaBlending)
  i1956.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[11], i1956.colorWriteMask)
  i1956.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[12], i1956.offsetUnits)
  i1956.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[13], i1956.offsetFactor)
  i1956.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[14], i1956.stencilRef)
  i1956.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[15], i1956.stencilReadMask)
  i1956.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[16], i1956.stencilWriteMask)
  i1956.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1957[17], i1956.stencilOp)
  i1956.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1957[18], i1956.stencilOpFront)
  i1956.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1957[19], i1956.stencilOpBack)
  var i1959 = i1957[20]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1959[i + 0]) );
  }
  i1956.tags = i1958
  var i1961 = i1957[21]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( i1961[i + 0] );
  }
  i1956.passDefinedKeywords = i1960
  var i1963 = i1957[22]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1963[i + 0]) );
  }
  i1956.passDefinedKeywordGroups = i1962
  var i1965 = i1957[23]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1965[i + 0]) );
  }
  i1956.variants = i1964
  var i1967 = i1957[24]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1967[i + 0]) );
  }
  i1956.excludedVariants = i1966
  i1956.hasDepthReader = !!i1957[25]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1969 = data
  i1968.val = i1969[0]
  i1968.name = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1971 = data
  i1970.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1971[0], i1970.src)
  i1970.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1971[1], i1970.dst)
  i1970.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1971[2], i1970.op)
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1973 = data
  i1972.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[0], i1972.pass)
  i1972.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[1], i1972.fail)
  i1972.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[2], i1972.zFail)
  i1972.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[3], i1972.comp)
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.value = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( i1983[i + 0] );
  }
  i1980.keywords = i1982
  i1980.hasDiscard = !!i1981[1]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1987 = data
  i1986.passId = i1987[0]
  i1986.subShaderIndex = i1987[1]
  var i1989 = i1987[2]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( i1989[i + 0] );
  }
  i1986.keywords = i1988
  i1986.vertexProgram = i1987[3]
  i1986.fragmentProgram = i1987[4]
  i1986.exportedForWebGl2 = !!i1987[5]
  i1986.readDepth = !!i1987[6]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'shader')
  i1992.pass = i1993[2]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.type = i1997[1]
  i1996.value = new pc.Vec4( i1997[2], i1997[3], i1997[4], i1997[5] )
  i1996.textureValue = i1997[6]
  i1996.shaderPropertyFlag = i1997[7]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1999 = data
  i1998.name = i1999[0]
  request.r(i1999[1], i1999[2], 0, i1998, 'texture')
  i1998.aabb = i1999[3]
  i1998.vertices = i1999[4]
  i1998.triangles = i1999[5]
  i1998.textureRect = UnityEngine.Rect.MinMaxRect(i1999[6], i1999[7], i1999[8], i1999[9])
  i1998.packedRect = UnityEngine.Rect.MinMaxRect(i1999[10], i1999[11], i1999[12], i1999[13])
  i1998.border = new pc.Vec4( i1999[14], i1999[15], i1999[16], i1999[17] )
  i1998.transparency = i1999[18]
  i1998.bounds = i1999[19]
  i1998.pixelsPerUnit = i1999[20]
  i1998.textureWidth = i1999[21]
  i1998.textureHeight = i1999[22]
  i1998.nativeSize = new pc.Vec2( i1999[23], i1999[24] )
  i1998.pivot = new pc.Vec2( i1999[25], i1999[26] )
  i1998.textureRectOffset = new pc.Vec2( i1999[27], i1999[28] )
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2001 = data
  i2000.name = i2001[0]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.wrapMode = i2003[1]
  i2002.isLooping = !!i2003[2]
  i2002.length = i2003[3]
  var i2005 = i2003[4]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2005[i + 0]) );
  }
  i2002.curves = i2004
  var i2007 = i2003[5]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2007[i + 0]) );
  }
  i2002.events = i2006
  i2002.halfPrecision = !!i2003[6]
  i2002._frameRate = i2003[7]
  i2002.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2003[8], i2002.localBounds)
  i2002.hasMuscleCurves = !!i2003[9]
  var i2009 = i2003[10]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( i2009[i + 0] );
  }
  i2002.clipMuscleConstant = i2008
  i2002.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2003[11], i2002.clipBindingConstant)
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2013 = data
  i2012.path = i2013[0]
  i2012.hash = i2013[1]
  i2012.componentType = i2013[2]
  i2012.property = i2013[3]
  i2012.keys = i2013[4]
  var i2015 = i2013[5]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2015[i + 0]) );
  }
  i2012.objectReferenceKeys = i2014
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2019 = data
  i2018.time = i2019[0]
  request.r(i2019[1], i2019[2], 0, i2018, 'value')
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2023 = data
  i2022.functionName = i2023[0]
  i2022.floatParameter = i2023[1]
  i2022.intParameter = i2023[2]
  i2022.stringParameter = i2023[3]
  request.r(i2023[4], i2023[5], 0, i2022, 'objectReferenceParameter')
  i2022.time = i2023[6]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2025 = data
  i2024.center = new pc.Vec3( i2025[0], i2025[1], i2025[2] )
  i2024.extends = new pc.Vec3( i2025[3], i2025[4], i2025[5] )
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2029 = data
  var i2031 = i2029[0]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( i2031[i + 0] );
  }
  i2028.genericBindings = i2030
  var i2033 = i2029[1]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( i2033[i + 0] );
  }
  i2028.pptrCurveMapping = i2032
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.ascent = i2035[1]
  i2034.originalLineHeight = i2035[2]
  i2034.fontSize = i2035[3]
  var i2037 = i2035[4]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2037[i + 0]) );
  }
  i2034.characterInfo = i2036
  request.r(i2035[5], i2035[6], 0, i2034, 'texture')
  i2034.originalFontSize = i2035[7]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2041 = data
  i2040.index = i2041[0]
  i2040.advance = i2041[1]
  i2040.bearing = i2041[2]
  i2040.glyphWidth = i2041[3]
  i2040.glyphHeight = i2041[4]
  i2040.minX = i2041[5]
  i2040.maxX = i2041[6]
  i2040.minY = i2041[7]
  i2040.maxY = i2041[8]
  i2040.uvBottomLeftX = i2041[9]
  i2040.uvBottomLeftY = i2041[10]
  i2040.uvBottomRightX = i2041[11]
  i2040.uvBottomRightY = i2041[12]
  i2040.uvTopLeftX = i2041[13]
  i2040.uvTopLeftY = i2041[14]
  i2040.uvTopRightX = i2041[15]
  i2040.uvTopRightY = i2041[16]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2043 = data
  i2042.name = i2043[0]
  var i2045 = i2043[1]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2045[i + 0]) );
  }
  i2042.layers = i2044
  var i2047 = i2043[2]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2047[i + 0]) );
  }
  i2042.parameters = i2046
  i2042.animationClips = i2043[3]
  i2042.avatarUnsupported = i2043[4]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.defaultWeight = i2051[1]
  i2050.blendingMode = i2051[2]
  i2050.avatarMask = i2051[3]
  i2050.syncedLayerIndex = i2051[4]
  i2050.syncedLayerAffectsTiming = !!i2051[5]
  i2050.syncedLayers = i2051[6]
  i2050.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2051[7], i2050.stateMachine)
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2053 = data
  i2052.id = i2053[0]
  i2052.name = i2053[1]
  i2052.path = i2053[2]
  var i2055 = i2053[3]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2055[i + 0]) );
  }
  i2052.states = i2054
  var i2057 = i2053[4]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2057[i + 0]) );
  }
  i2052.machines = i2056
  var i2059 = i2053[5]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2059[i + 0]) );
  }
  i2052.entryStateTransitions = i2058
  var i2061 = i2053[6]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2061[i + 0]) );
  }
  i2052.exitStateTransitions = i2060
  var i2063 = i2053[7]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2063[i + 0]) );
  }
  i2052.anyStateTransitions = i2062
  i2052.defaultStateId = i2053[8]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2067 = data
  i2066.id = i2067[0]
  i2066.name = i2067[1]
  i2066.cycleOffset = i2067[2]
  i2066.cycleOffsetParameter = i2067[3]
  i2066.cycleOffsetParameterActive = !!i2067[4]
  i2066.mirror = !!i2067[5]
  i2066.mirrorParameter = i2067[6]
  i2066.mirrorParameterActive = !!i2067[7]
  i2066.motionId = i2067[8]
  i2066.nameHash = i2067[9]
  i2066.fullPathHash = i2067[10]
  i2066.speed = i2067[11]
  i2066.speedParameter = i2067[12]
  i2066.speedParameterActive = !!i2067[13]
  i2066.tag = i2067[14]
  i2066.tagHash = i2067[15]
  i2066.writeDefaultValues = !!i2067[16]
  var i2069 = i2067[17]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2066.behaviours = i2068
  var i2071 = i2067[18]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2071[i + 0]) );
  }
  i2066.transitions = i2070
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2077 = data
  i2076.fullPath = i2077[0]
  i2076.canTransitionToSelf = !!i2077[1]
  i2076.duration = i2077[2]
  i2076.exitTime = i2077[3]
  i2076.hasExitTime = !!i2077[4]
  i2076.hasFixedDuration = !!i2077[5]
  i2076.interruptionSource = i2077[6]
  i2076.offset = i2077[7]
  i2076.orderedInterruption = !!i2077[8]
  i2076.destinationStateId = i2077[9]
  i2076.isExit = !!i2077[10]
  i2076.mute = !!i2077[11]
  i2076.solo = !!i2077[12]
  var i2079 = i2077[13]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2079[i + 0]) );
  }
  i2076.conditions = i2078
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2085 = data
  i2084.destinationStateId = i2085[0]
  i2084.isExit = !!i2085[1]
  i2084.mute = !!i2085[2]
  i2084.solo = !!i2085[3]
  var i2087 = i2085[4]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2087[i + 0]) );
  }
  i2084.conditions = i2086
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2091 = data
  i2090.mode = i2091[0]
  i2090.parameter = i2091[1]
  i2090.threshold = i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2095 = data
  i2094.defaultBool = !!i2095[0]
  i2094.defaultFloat = i2095[1]
  i2094.defaultInt = i2095[2]
  i2094.name = i2095[3]
  i2094.nameHash = i2095[4]
  i2094.type = i2095[5]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.bytes64 = i2097[1]
  i2096.data = i2097[2]
  return i2096
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2098 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.atlasAssets = i2100
  i2098.scale = i2099[1]
  request.r(i2099[2], i2099[3], 0, i2098, 'skeletonJSON')
  i2098.isUpgradingBlendModeMaterials = !!i2099[4]
  i2098.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2099[5], i2098.blendModeMaterials)
  var i2103 = i2099[6]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 1, i2102, '')
  }
  i2098.skeletonDataModifiers = i2102
  var i2105 = i2099[7]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2098.fromAnimation = i2104
  var i2107 = i2099[8]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2098.toAnimation = i2106
  i2098.duration = i2099[9]
  i2098.defaultMix = i2099[10]
  request.r(i2099[11], i2099[12], 0, i2098, 'controller')
  return i2098
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2110 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2111 = data
  i2110.applyAdditiveMaterial = !!i2111[0]
  var i2113 = i2111[1]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2113[i + 0]));
  }
  i2110.additiveMaterials = i2112
  var i2115 = i2111[2]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2115[i + 0]));
  }
  i2110.multiplyMaterials = i2114
  var i2117 = i2111[3]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2117[i + 0]));
  }
  i2110.screenMaterials = i2116
  i2110.requiresBlendModeMaterials = !!i2111[4]
  return i2110
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2120 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2121 = data
  i2120.pageName = i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'material')
  return i2120
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2124 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'atlasFile')
  var i2127 = i2125[2]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.materials = i2126
  i2124.textureLoadingMode = i2125[3]
  request.r(i2125[4], i2125[5], 0, i2124, 'onDemandTextureLoader')
  return i2124
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.TMP_Settings' )
  var i2129 = data
  i2128.m_enableWordWrapping = !!i2129[0]
  i2128.m_enableKerning = !!i2129[1]
  i2128.m_enableExtraPadding = !!i2129[2]
  i2128.m_enableTintAllSprites = !!i2129[3]
  i2128.m_enableParseEscapeCharacters = !!i2129[4]
  i2128.m_EnableRaycastTarget = !!i2129[5]
  i2128.m_GetFontFeaturesAtRuntime = !!i2129[6]
  i2128.m_missingGlyphCharacter = i2129[7]
  i2128.m_warningsDisabled = !!i2129[8]
  request.r(i2129[9], i2129[10], 0, i2128, 'm_defaultFontAsset')
  i2128.m_defaultFontAssetPath = i2129[11]
  i2128.m_defaultFontSize = i2129[12]
  i2128.m_defaultAutoSizeMinRatio = i2129[13]
  i2128.m_defaultAutoSizeMaxRatio = i2129[14]
  i2128.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2129[15], i2129[16] )
  i2128.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2129[17], i2129[18] )
  i2128.m_autoSizeTextContainer = !!i2129[19]
  i2128.m_IsTextObjectScaleStatic = !!i2129[20]
  var i2131 = i2129[21]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2131.length; i += 2) {
  request.r(i2131[i + 0], i2131[i + 1], 1, i2130, '')
  }
  i2128.m_fallbackFontAssets = i2130
  i2128.m_matchMaterialPreset = !!i2129[22]
  request.r(i2129[23], i2129[24], 0, i2128, 'm_defaultSpriteAsset')
  i2128.m_defaultSpriteAssetPath = i2129[25]
  i2128.m_enableEmojiSupport = !!i2129[26]
  i2128.m_MissingCharacterSpriteUnicode = i2129[27]
  i2128.m_defaultColorGradientPresetsPath = i2129[28]
  request.r(i2129[29], i2129[30], 0, i2128, 'm_defaultStyleSheet')
  i2128.m_StyleSheetsResourcePath = i2129[31]
  request.r(i2129[32], i2129[33], 0, i2128, 'm_leadingCharacters')
  request.r(i2129[34], i2129[35], 0, i2128, 'm_followingCharacters')
  i2128.m_UseModernHangulLineBreakingRules = !!i2129[36]
  return i2128
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2134 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2135 = data
  i2134.hashCode = i2135[0]
  request.r(i2135[1], i2135[2], 0, i2134, 'material')
  i2134.materialHashCode = i2135[3]
  request.r(i2135[4], i2135[5], 0, i2134, 'spriteSheet')
  var i2137 = i2135[6]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.add(request.d('TMPro.TMP_Sprite', i2137[i + 0]));
  }
  i2134.spriteInfoList = i2136
  var i2139 = i2135[7]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 1, i2138, '')
  }
  i2134.fallbackSpriteAssets = i2138
  i2134.m_Version = i2135[8]
  i2134.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2135[9], i2134.m_FaceInfo)
  var i2141 = i2135[10]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(request.d('TMPro.TMP_SpriteCharacter', i2141[i + 0]));
  }
  i2134.m_SpriteCharacterTable = i2140
  var i2143 = i2135[11]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.add(request.d('TMPro.TMP_SpriteGlyph', i2143[i + 0]));
  }
  i2134.m_SpriteGlyphTable = i2142
  return i2134
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2146 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.hashCode = i2147[1]
  i2146.unicode = i2147[2]
  i2146.pivot = new pc.Vec2( i2147[3], i2147[4] )
  request.r(i2147[5], i2147[6], 0, i2146, 'sprite')
  i2146.id = i2147[7]
  i2146.x = i2147[8]
  i2146.y = i2147[9]
  i2146.width = i2147[10]
  i2146.height = i2147[11]
  i2146.xOffset = i2147[12]
  i2146.yOffset = i2147[13]
  i2146.xAdvance = i2147[14]
  i2146.scale = i2147[15]
  return i2146
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2151 = data
  i2150.m_FaceIndex = i2151[0]
  i2150.m_FamilyName = i2151[1]
  i2150.m_StyleName = i2151[2]
  i2150.m_PointSize = i2151[3]
  i2150.m_Scale = i2151[4]
  i2150.m_UnitsPerEM = i2151[5]
  i2150.m_LineHeight = i2151[6]
  i2150.m_AscentLine = i2151[7]
  i2150.m_CapLine = i2151[8]
  i2150.m_MeanLine = i2151[9]
  i2150.m_Baseline = i2151[10]
  i2150.m_DescentLine = i2151[11]
  i2150.m_SuperscriptOffset = i2151[12]
  i2150.m_SuperscriptSize = i2151[13]
  i2150.m_SubscriptOffset = i2151[14]
  i2150.m_SubscriptSize = i2151[15]
  i2150.m_UnderlineOffset = i2151[16]
  i2150.m_UnderlineThickness = i2151[17]
  i2150.m_StrikethroughOffset = i2151[18]
  i2150.m_StrikethroughThickness = i2151[19]
  i2150.m_TabWidth = i2151[20]
  return i2150
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2154 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2155 = data
  i2154.m_Name = i2155[0]
  i2154.m_HashCode = i2155[1]
  i2154.m_ElementType = i2155[2]
  i2154.m_Unicode = i2155[3]
  i2154.m_GlyphIndex = i2155[4]
  i2154.m_Scale = i2155[5]
  return i2154
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2158 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'sprite')
  i2158.m_Index = i2159[2]
  i2158.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2159[3], i2158.m_Metrics)
  i2158.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2159[4], i2158.m_GlyphRect)
  i2158.m_Scale = i2159[5]
  i2158.m_AtlasIndex = i2159[6]
  i2158.m_ClassDefinitionType = i2159[7]
  return i2158
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2161 = data
  i2160.m_Width = i2161[0]
  i2160.m_Height = i2161[1]
  i2160.m_HorizontalBearingX = i2161[2]
  i2160.m_HorizontalBearingY = i2161[3]
  i2160.m_HorizontalAdvance = i2161[4]
  return i2160
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2163 = data
  i2162.m_X = i2163[0]
  i2162.m_Y = i2163[1]
  i2162.m_Width = i2163[2]
  i2162.m_Height = i2163[3]
  return i2162
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2164 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2165 = data
  var i2167 = i2165[0]
  var i2166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.add(request.d('TMPro.TMP_Style', i2167[i + 0]));
  }
  i2164.m_StyleList = i2166
  return i2164
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2170 = root || request.c( 'TMPro.TMP_Style' )
  var i2171 = data
  i2170.m_Name = i2171[0]
  i2170.m_HashCode = i2171[1]
  i2170.m_OpeningDefinition = i2171[2]
  i2170.m_ClosingDefinition = i2171[3]
  i2170.m_OpeningTagArray = i2171[4]
  i2170.m_ClosingTagArray = i2171[5]
  i2170.m_OpeningTagUnicodeArray = i2171[6]
  i2170.m_ClosingTagUnicodeArray = i2171[7]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2173 = data
  var i2175 = i2173[0]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2175[i + 0]) );
  }
  i2172.files = i2174
  i2172.componentToPrefabIds = i2173[1]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2179 = data
  i2178.path = i2179[0]
  request.r(i2179[1], i2179[2], 0, i2178, 'unityObject')
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2183[i + 0]) );
  }
  i2180.scriptsExecutionOrder = i2182
  var i2185 = i2181[1]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2185[i + 0]) );
  }
  i2180.sortingLayers = i2184
  var i2187 = i2181[2]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2187[i + 0]) );
  }
  i2180.cullingLayers = i2186
  i2180.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2181[3], i2180.timeSettings)
  i2180.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2181[4], i2180.physicsSettings)
  i2180.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2181[5], i2180.physics2DSettings)
  i2180.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2181[6], i2180.qualitySettings)
  i2180.enableRealtimeShadows = !!i2181[7]
  i2180.enableAutoInstancing = !!i2181[8]
  i2180.enableDynamicBatching = !!i2181[9]
  i2180.lightmapEncodingQuality = i2181[10]
  i2180.desiredColorSpace = i2181[11]
  var i2189 = i2181[12]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( i2189[i + 0] );
  }
  i2180.allTags = i2188
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2193 = data
  i2192.name = i2193[0]
  i2192.value = i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2197 = data
  i2196.id = i2197[0]
  i2196.name = i2197[1]
  i2196.value = i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2201 = data
  i2200.id = i2201[0]
  i2200.name = i2201[1]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2203 = data
  i2202.fixedDeltaTime = i2203[0]
  i2202.maximumDeltaTime = i2203[1]
  i2202.timeScale = i2203[2]
  i2202.maximumParticleTimestep = i2203[3]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2205 = data
  i2204.gravity = new pc.Vec3( i2205[0], i2205[1], i2205[2] )
  i2204.defaultSolverIterations = i2205[3]
  i2204.bounceThreshold = i2205[4]
  i2204.autoSyncTransforms = !!i2205[5]
  i2204.autoSimulation = !!i2205[6]
  var i2207 = i2205[7]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2207[i + 0]) );
  }
  i2204.collisionMatrix = i2206
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.layerId = i2211[1]
  i2210.otherLayerId = i2211[2]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'material')
  i2212.gravity = new pc.Vec2( i2213[2], i2213[3] )
  i2212.positionIterations = i2213[4]
  i2212.velocityIterations = i2213[5]
  i2212.velocityThreshold = i2213[6]
  i2212.maxLinearCorrection = i2213[7]
  i2212.maxAngularCorrection = i2213[8]
  i2212.maxTranslationSpeed = i2213[9]
  i2212.maxRotationSpeed = i2213[10]
  i2212.baumgarteScale = i2213[11]
  i2212.baumgarteTOIScale = i2213[12]
  i2212.timeToSleep = i2213[13]
  i2212.linearSleepTolerance = i2213[14]
  i2212.angularSleepTolerance = i2213[15]
  i2212.defaultContactOffset = i2213[16]
  i2212.autoSimulation = !!i2213[17]
  i2212.queriesHitTriggers = !!i2213[18]
  i2212.queriesStartInColliders = !!i2213[19]
  i2212.callbacksOnDisable = !!i2213[20]
  i2212.reuseCollisionCallbacks = !!i2213[21]
  i2212.autoSyncTransforms = !!i2213[22]
  var i2215 = i2213[23]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2215[i + 0]) );
  }
  i2212.collisionMatrix = i2214
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.layerId = i2219[1]
  i2218.otherLayerId = i2219[2]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2221 = data
  var i2223 = i2221[0]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2223[i + 0]) );
  }
  i2220.qualityLevels = i2222
  var i2225 = i2221[1]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( i2225[i + 0] );
  }
  i2220.names = i2224
  i2220.shadows = i2221[2]
  i2220.anisotropicFiltering = i2221[3]
  i2220.antiAliasing = i2221[4]
  i2220.lodBias = i2221[5]
  i2220.shadowCascades = i2221[6]
  i2220.shadowDistance = i2221[7]
  i2220.shadowmaskMode = i2221[8]
  i2220.shadowProjection = i2221[9]
  i2220.shadowResolution = i2221[10]
  i2220.softParticles = !!i2221[11]
  i2220.softVegetation = !!i2221[12]
  i2220.activeColorSpace = i2221[13]
  i2220.desiredColorSpace = i2221[14]
  i2220.masterTextureLimit = i2221[15]
  i2220.maxQueuedFrames = i2221[16]
  i2220.particleRaycastBudget = i2221[17]
  i2220.pixelLightCount = i2221[18]
  i2220.realtimeReflectionProbes = !!i2221[19]
  i2220.shadowCascade2Split = i2221[20]
  i2220.shadowCascade4Split = new pc.Vec3( i2221[21], i2221[22], i2221[23] )
  i2220.streamingMipmapsActive = !!i2221[24]
  i2220.vSyncCount = i2221[25]
  i2220.asyncUploadBufferSize = i2221[26]
  i2220.asyncUploadTimeSlice = i2221[27]
  i2220.billboardsFaceCameraPosition = !!i2221[28]
  i2220.shadowNearPlaneOffset = i2221[29]
  i2220.streamingMipmapsMemoryBudget = i2221[30]
  i2220.maximumLODLevel = i2221[31]
  i2220.streamingMipmapsAddAllCameras = !!i2221[32]
  i2220.streamingMipmapsMaxLevelReduction = i2221[33]
  i2220.streamingMipmapsRenderersPerFrame = i2221[34]
  i2220.resolutionScalingFixedDPIFactor = i2221[35]
  i2220.streamingMipmapsMaxFileIORequests = i2221[36]
  i2220.currentQualityLevel = i2221[37]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2231 = data
  i2230.weight = i2231[0]
  i2230.vertices = i2231[1]
  i2230.normals = i2231[2]
  i2230.tangents = i2231[3]
  return i2230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[13],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[31],"82":[83],"84":[83],"23":[22],"15":[13],"85":[86],"87":[88],"89":[31,35],"90":[91],"92":[88],"93":[94],"95":[88],"96":[88],"97":[38],"98":[38],"99":[88],"100":[101],"102":[2],"103":[101],"104":[22],"105":[22],"26":[23],"28":[27,22],"106":[22],"25":[23],"107":[22],"108":[22],"109":[22],"110":[22],"111":[22],"112":[22],"113":[22],"114":[22],"115":[22],"116":[27,22],"117":[22],"118":[22],"119":[22],"120":[22],"29":[27,22],"121":[22],"122":[40],"123":[40],"41":[40],"124":[40],"125":[13],"126":[13],"127":[128],"129":[13],"130":[131],"132":[22],"133":[27,22],"32":[31],"91":[27,22],"134":[10,31],"88":[31],"37":[31,35],"135":[60],"136":[6],"34":[131],"137":[38],"138":[22],"139":[31,22],"140":[22,27],"141":[22],"142":[27,22],"143":[31],"144":[27,22],"145":[22],"146":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Pin","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","ViewportHandler","UnityEngine.AudioSource","UnityEngine.AudioClip","InputReceiver","CameraAnchor","UnityEngine.EdgeCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Spine.Unity.SkeletonUtility","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderSeparator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.SkeletonUtilityBone","Bag","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Mesh","SoundClick","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "5a4d9340-a039-44f1-8115-9380c6f27141";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

