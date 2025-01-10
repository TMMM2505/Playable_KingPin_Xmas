using UnityEngine;

public class InputReceiver : MonoBehaviour
{
    bool firstClick = true;

    public bool FirstClick
    {
        get => firstClick;
        set => firstClick = value;
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
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
