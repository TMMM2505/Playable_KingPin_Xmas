using System;
using UnityEngine;

public class Bonus : MonoBehaviour
{
	public Action<int, BonusType> SpawnCoin;

	[SerializeField]
	private BonusType bonusType;

	[SerializeField]
	private int amount;

	private bool isActive = false;

	public int Amount => amount;

	private void OnEnable()
	{
		isActive = false;
	}

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (other.gameObject.CompareTag("Coin") && !isActive)
		{
			Singleton<SoundManager>.Ins.PlaySound("CoinBonus", false);
			SpawnCoin?.Invoke(amount, bonusType);
			isActive = true;
		}
	}
}
