using System;
using System.Collections;
using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] private Animator anim;

    private void Start()
    {
        StartCoroutine(LoopClick());
    }

    public void SetClick(Vector2 position, Transform parent)
    {
        transform.SetParent(parent);
        transform.position = position;
        StartCoroutine(LoopClick());
    }

    void RunAnim()
    {
        anim.ResetTrigger("click");
        anim.SetTrigger("click");
    }
    IEnumerator LoopClick()
    {
        yield return new WaitForSeconds(1.5f);
        RunAnim();
        StartCoroutine(LoopClick());
    }
}
