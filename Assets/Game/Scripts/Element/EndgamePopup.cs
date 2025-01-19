using DG.Tweening;
using System.Collections;
using UnityEngine;

public class EndgamePopup : MonoBehaviour
{
    // Start is called before the first frame update
    void Awake()
    {
        transform.localScale = Vector3.zero;

        GameManager.Instance.onWin += Popup;
    }

    private void Popup()
    {
        StartCoroutine(DelayedPopup(GameManager.Instance.timeWaitEndGame + .25f));
    }
    private IEnumerator DelayedPopup(float timeWait)
    {
        yield return new WaitForSeconds(timeWait);

        transform.DOScale(Vector3.one, 1f).SetEase(Ease.OutElastic);
    }
}
