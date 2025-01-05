using System.Collections;
using UnityEngine;
using DG.Tweening;

public class Coin : MonoBehaviour
{
    [SerializeField] private Animator anim;
    [SerializeField] private ParticleSystem vfxSteamPrefab;
    private void Start()
    {
        SetAnim();
    }

    void SetAnim()
    {
        anim.ResetTrigger("coinIdle");
        anim.SetTrigger("coinIdle");
    }

    public void InLava()
    {
        SoundManager.Ins.PlaySound(Constant.soundInLava, false);
        ParticleSystem vfx = Instantiate(vfxSteamPrefab, transform.position, Quaternion.Euler(-90, 0, 0));
        Destroy(gameObject);
    }

    public void OnCollected()
    {
        transform.DOMove(LevelManager.Ins.CurrentLevel.Bag.Model.transform.position, 0.5f, false)
            .SetEase(Ease.Linear);
        StartCoroutine(DelayDestroy());
    }

    IEnumerator DelayDestroy()
    {
        yield return new WaitForSeconds(0.5f);
        SoundManager.Ins.PlaySound(Constant.soundCollectCoin, false);
        gameObject.SetActive(false);
    }
}
