using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

public class AnimKing : MonoBehaviour
{
	[SerializeField]
	private SkeletonAnimation anim;

	[SerializeField]
	private List<AnimClip> clips = new List<AnimClip>();

	private void Awake()
	{
		anim = GetComponent<SkeletonAnimation>();
	}

	public void SetAnim(string animName, bool loop)
	{
		int index = clips.Find((AnimClip x) => x.Name == animName).Index;
		anim.AnimationState.SetAnimation(index, animName, loop);
	}
}
