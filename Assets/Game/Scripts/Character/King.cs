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
        SetAnim(Constant.animKingIdle, true);
    }

    public void SetAnim(string name, bool loop)
    {
        anim.SetAnim(name, loop);
        bag.SetAnim(name);
    }
}
