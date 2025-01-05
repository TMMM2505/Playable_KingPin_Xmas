using System.Collections;
using DG.Tweening;
using UnityEngine;

public class Coin : MonoBehaviour
{
	[SerializeField]
	private Animator anim;

	[SerializeField]
	private ParticleSystem vfxSteamPrefab;

	private void Start()
	{
		SetAnim();
	}

	private void SetAnim()
	{
		anim.ResetTrigger("coinIdle");
		anim.SetTrigger("coinIdle");
	}

	public void InLava()
	{
		Singleton<SoundManager>.Ins.PlaySound("InLava", false);
		ParticleSystem vfx = Object.Instantiate(vfxSteamPrefab, base.transform.position, Quaternion.Euler(-90f, 0f, 0f));
		Object.Destroy(base.gameObject);
	}

	public void OnCollected()
	{
		base.transform.DOMove(Singleton<LevelManager>.Ins.CurrentLevel.Bag.Model.transform.position, 0.5f).SetEase(Ease.Linear);
		StartCoroutine(DelayDestroy());
	}

	private IEnumerator DelayDestroy()
	{
		yield return new WaitForSeconds(0.5f);
		base.gameObject.SetActive(false);
	}
}
