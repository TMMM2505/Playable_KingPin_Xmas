using System;
using System.Collections.Generic;
using UnityEngine;
using Spine.Unity;
public class CharacterRequiredAnim : MonoBehaviour
{
    [SerializeField] private SkeletonAnimation anim;
    [SerializeField] private List<AnimClip> clips;

    public void SetAnim(string animName, bool loop)
    {
        int index = clips.Find(x => x.Name == animName).Index;
        anim.AnimationState.SetAnimation(index, animName, loop);

        //anim.AnimationName = animName;
        //anim.loop = loop;
    }
}

[Serializable]
public class AnimClip
{
    public int Index;
    [SpineAnimation]
    public string Name;
}