using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coin : MonoBehaviour
{
    [SerializeField] private Animator anim;

    private void Start()
    {
        SetAnim();
    }

    void SetAnim()
    {
        anim.ResetTrigger("coinIdle");
        anim.SetTrigger("coinIdle");
    }
}
