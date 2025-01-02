using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class King : MonoBehaviour
{
    [SerializeField] private AnimKing anim;
    [SerializeField] private Bag bag;

    private void Start()
    {
        anim.SetAnim(Constant.animKingIdle, true);
        bag.OnIdle();
    }
}
