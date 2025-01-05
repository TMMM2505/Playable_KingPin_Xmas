using System;
using Spine.Unity;

[Serializable]
public class AnimClip
{
	public int Index;

	[SpineAnimation("", "", true, false)]
	public string Name;
}
