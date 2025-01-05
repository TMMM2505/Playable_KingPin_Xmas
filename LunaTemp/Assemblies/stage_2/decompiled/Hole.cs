using System.Collections;
using UnityEngine;

public class Hole : MonoBehaviour
{
	private int score;

	private void OnEnable()
	{
		score = 0;
	}

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (other.gameObject.CompareTag("Coin"))
		{
			other.GetComponent<Coin>().OnCollected();
			score++;
			if (score >= Singleton<LevelManager>.Ins.CurrentLevel.MaxScore)
			{
				Singleton<LevelManager>.Ins.OnWin();
			}
			StopAllCoroutines();
			StartCoroutine(CheckEndGame());
		}
	}

	private IEnumerator CheckEndGame()
	{
		yield return new WaitForSeconds(1f);
		if (score < Singleton<LevelManager>.Ins.CurrentLevel.MaxScore)
		{
			Singleton<LevelManager>.Ins.OnLose();
		}
	}
}
