using UnityEngine;

public class Lava : MonoBehaviour
{
	private bool checkLose = false;

	private void OnEnable()
	{
		checkLose = false;
	}

	private void OnTriggerEnter2D(Collider2D other)
	{
		if (other.gameObject.CompareTag("Coin"))
		{
			Coin coin = other.gameObject.GetComponent<Coin>();
			coin.InLava();
			if (!checkLose)
			{
				Singleton<LevelManager>.Ins.OnLose();
				checkLose = true;
			}
		}
	}
}
