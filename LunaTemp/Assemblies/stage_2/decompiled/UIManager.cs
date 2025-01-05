using DG.Tweening;
using UnityEngine;

public class UIManager : Singleton<UIManager>
{
	[SerializeField]
	private GameObject uicLose;

	[SerializeField]
	private GameObject image;

	[SerializeField]
	private GameObject text;

	public void TriggerCTA()
	{
	}

	public void ShowGamePlay()
	{
		uicLose.SetActive(false);
	}

	public void ShowLose()
	{
		uicLose.SetActive(true);
		Vector3 scale = image.transform.localScale;
		image.transform.localScale += new Vector3(0.3f, 0.3f, 0.3f);
		image.transform.DOScale(scale, 0.1f).SetEase(Ease.Linear);
		scale = text.transform.localScale - new Vector3(0.1f, 0.1f, 0.1f);
		text.transform.DOScale(scale, 0.5f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}
}
