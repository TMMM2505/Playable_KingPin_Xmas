using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
	[SerializeField]
	private List<Coin> coins = new List<Coin>();

	[SerializeField]
	private List<Pin> pins = new List<Pin>();

	[SerializeField]
	private Bonus bonus;

	[SerializeField]
	private Coin coinPrefab;

	[SerializeField]
	private Bag bag;

	[SerializeField]
	private Hand hand;

	[SerializeField]
	private King king;

	private int maxScore;

	public int CoinAmount => coins.Count;

	public int MaxScore => maxScore;

	public Hand Hand => hand;

	public Bag Bag => bag;

	public void SetUp()
	{
		bonus.SpawnCoin = SpawnCoins;
		maxScore = coins.Count + bonus.Amount;
		SetTutorial();
	}

	private void SpawnCoins(int amount, BonusType bonusType)
	{
		for (int i = 0; i < amount; i++)
		{
			Coin coin = Object.Instantiate(coinPrefab, bonus.transform.position, Quaternion.identity);
			coins.Add(coin);
			coin.transform.SetParent(base.transform);
		}
	}

	public void SetTutorial()
	{
		foreach (Pin pin in pins)
		{
			if (pin.gameObject.activeSelf)
			{
				hand.gameObject.SetActive(true);
				hand.SetClick(pin.Center.position, pin.transform);
				break;
			}
		}
	}

	public void OnWin()
	{
		king.SetAnim("CollectCoin_Win", true);
	}

	public void OnLose()
	{
		king.SetAnim("CollectCoin_Lose", true);
	}
}
