//using DG.Tweening;
//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;

//public class Hand : MonoBehaviour
//{
//    [SerializeField] PinNormal designatedPin;
//    [SerializeField] float appearCooldown;
//    [SerializeField] bool rightSide;
//    AnimatorComponent animator;

//    public void Awake()
//    {
//        animator = this.GetComponentInChildren<AnimatorComponent>();
//        designatedPin.ActionClick += Disappear;
//        transform.localScale = Vector3.zero;
//    }
//    private void Start()
//    {
//        StartCoroutine(HandAppear());
//    }
//    public void Disappear(PinNormal pin)
//    {
//        gameObject.SetActive(false);
//    }

//    IEnumerator HandAppear()
//    {
//        yield return new WaitForSeconds(appearCooldown);

//        if (rightSide)
//        {
//            transform.DOScale(new Vector3(-1, 1, 1), 1f).OnComplete(() => Gamemanager.Instance.state = EGameState.GAME_PLAYING);
//        }
//        else
//        {
//            transform.DOScale(new Vector3(1, 1, 1), 1f).OnComplete(() => Gamemanager.Instance.state = EGameState.GAME_PLAYING);
//        }
//    }
//}