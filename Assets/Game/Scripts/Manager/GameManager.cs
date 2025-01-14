using System;
using UnityEngine;
public class GameManager : Singleton<GameManager>   
{
    internal Action onLose;
    internal Action onWin;

    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle&pcampaignid=web_share");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
