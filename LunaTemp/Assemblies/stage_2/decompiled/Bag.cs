using DG.Tweening;
using UnityEngine;

public class Bag : MonoBehaviour
{
	[SerializeField]
	private Transform model;

	[SerializeField]
	private Transform idlePosition;

	[SerializeField]
	private Transform winPosition;

	[SerializeField]
	private Transform losePosition;

	public Transform Model => model;

	public void SetAnim(string name)
	{
		switch (name)
		{
		case "CollectCoin_Idle":
			OnIdle();
			break;
		case "CollectCoin_Win":
			OnWin();
			break;
		case "CollectCoin_Lose":
			OnLose();
			break;
		}
	}

	public void OnIdle()
	{
		model.position = idlePosition.position;
		base.transform.DOMove(new Vector2(base.transform.position.x, base.transform.position.y + 0.03f), 0.5f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}

	public void OnWin()
	{
		model.position = winPosition.position;
		base.transform.DOMove(new Vector2(base.transform.position.x + 0.1f, base.transform.position.y), 0.3f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}

	public void OnLose()
	{
		model.position = losePosition.position;
		base.transform.DOMove(losePosition.position, 0.2f).SetEase(Ease.Linear);
	}
}
