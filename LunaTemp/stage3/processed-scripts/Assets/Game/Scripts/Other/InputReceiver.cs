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

    void HandleTarget()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos = Camera.main.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, -10));

        Vector3 direction = mousePos - Camera.main.transform.position;

        RaycastHit2D hit = Physics2D.Raycast(mousePos, direction, Mathf.Infinity);
        RaycastHit2D[] hits = Physics2D.RaycastAll(hit.point, Vector2.zero, Mathf.Infinity);
        for (int i = 0; i < hits.Length; i++)
        {
            if (hits[i].collider && hits[i].collider.GetComponent<Pin>())
            {
                Pin pin = hits[i].collider.gameObject.GetComponent<Pin>();
                // if (firstClick)
                // {
                //     // if (pin.Tutorial)
                //     // {
                //     //     pin.ActivePin();
                //     //     firstClick = false;
                //     // }
                // }
                // else 
                if (pin)
                {
                    pin.ActivePin();
                }
            }
        }
    }
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle&pcampaignid=web_share");
        Luna.Unity.LifeCycle.GameEnded();
    }

}
