using System;
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : Singleton<GameManager>   
{
    [SerializeField] float timeWaitEndGame;

    internal Action onLose;
    internal Action onWin;

    private static int timeLose = 0;

    private void Awake()
    {
        onLose += OnLoseGame;
        onWin += OnWinGame;
    }
    private void OnWinGame()
    {
        
    }

    private void OnLoseGame()
    {
        timeLose++;

        StartCoroutine(GameLose());
    }

    private IEnumerator GameLose()
    {
        yield return new WaitForSeconds(timeWaitEndGame);

        if (timeLose < 2)
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex, LoadSceneMode.Single);
        }
        else
        {
            TriggerCTA();
        }
    }

    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle&pcampaignid=web_share");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
