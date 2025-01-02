using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Spine.Unity;
public class AnimKing : MonoBehaviour
{
    [SerializeField] private SkeletonAnimation anim;
    [SerializeField] private List<AnimClip> clips;

    private void Awake()
    {
        anim = GetComponent<SkeletonAnimation>();
    }

    public void SetAnim(string animName, bool loop)
    {
        int index = clips.Find(x => x.Name == animName).Index;
        anim.AnimationState.SetAnimation(index, animName, loop);
    }
}

[Serializable]
public class AnimClip
{
    public int Index;
    [SpineAnimation]
    public string Name;
}