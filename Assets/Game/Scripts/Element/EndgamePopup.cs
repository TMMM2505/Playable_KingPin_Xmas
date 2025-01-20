using DG.Tweening;
using System.Collections;
using UnityEngine;

public class EndgamePopup : MonoBehaviour
{
    [SerializeField] RectTransform complete;
    [SerializeField] RectTransform button;
    [SerializeField] RectTransform timer;
    // Start is called before the first frame update
    void Awake()
    {
        transform.localScale = Vector3.zero;

        GameManager.Instance.onWin += Popup;

        DeviceOrientationDetection.Instance.onPortraitMode += PopupPortraitTransform;
        DeviceOrientationDetection.Instance.onLandscapeMode += PopupLandscapeTransform; 
    }

    private void Popup()
    {
        StartCoroutine(DelayedPopup(GameManager.Instance.timeWaitEndGame + .5f));
    }
    private IEnumerator DelayedPopup(float timeWait)
    {
        yield return new WaitForSeconds(timeWait);

        transform.DOScale(Vector3.one, .5f).SetEase(Ease.OutElastic);
    }
    private void PopupPortraitTransform()
    {
        complete.localPosition = new Vector3(complete.position.x, 929f, complete.position.z);
        complete.localScale = Vector3.one;

        button.localPosition = new Vector3(complete.position.x, -1000f, button.position.z);
        button.localScale = Vector3.one * 1.75f;

        timer.localPosition = Vector3.zero;
        timer.localScale = Vector3.one * 1.25f;
    }
    private void PopupLandscapeTransform()
    {
        complete.localPosition = new Vector3(complete.position.x, 340, complete.position.z);
        complete.localScale = Vector3.one * 0.9f;

        button.localPosition = new Vector3(complete.position.x, -481f, button.position.z);
        button.localScale = Vector3.one;

        timer.localPosition = new Vector3(complete.position.x, -72f, timer.position.z); ;
        timer.localScale = Vector3.one * 0.9f;
    }
}
