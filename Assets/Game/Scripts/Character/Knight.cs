using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Knight : MonoBehaviour
{
    [SerializeField] SkeletonAnimation skeletonAnim;

    internal void DeathByBomb()
    {
        skeletonAnim.AnimationName = Constant.animKnightDieLava2;
    }
}
