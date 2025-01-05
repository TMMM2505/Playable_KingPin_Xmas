using System.Collections;
using UnityEngine;

public class LevelManager : Singleton<LevelManager>
{
	[SerializeField]
	private Level levelPrefab;

	private Level currentLevel;

	private int loseCount;

	public Level CurrentLevel => currentLevel;

	private void Start()
	{
		Singleton<UIManager>.Ins.ShowGamePlay();
		loseCount = 0;
		CreateLevel();
	}

	private void CreateLevel()
	{
		if ((bool)currentLevel && (bool)currentLevel.gameObject)
		{
			Object.DestroyImmediate(currentLevel.gameObject);
		}
		currentLevel = Object.Instantiate(levelPrefab);
		currentLevel.SetUp();
		Singleton<SoundManager>.Ins.StopAll();
		Singleton<SoundManager>.Ins.PlaySound("Background", true);
	}

	public void OnWin()
	{
		currentLevel.OnWin();
		Singleton<CameraFollower>.Ins.OnEndGame();
	}

	public void OnLose()
	{
		currentLevel.OnLose();
		Singleton<SoundManager>.Ins.StopAll();
		Singleton<SoundManager>.Ins.PlaySound("Lose", false);
		Singleton<CameraFollower>.Ins.OnEndGame();
		StartCoroutine(DelayLose());
	}

	private IEnumerator DelayReplay()
	{
		yield return new WaitForSeconds(1f);
		CreateLevel();
	}

	private IEnumerator DelayLose()
	{
		yield return new WaitForSeconds(2f);
		Singleton<UIManager>.Ins.ShowLose();
	}
}
