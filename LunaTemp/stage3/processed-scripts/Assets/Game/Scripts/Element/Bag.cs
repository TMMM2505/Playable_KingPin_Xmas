using UnityEngine;
using DG.Tweening;
public class Bag : MonoBehaviour
{
    [SerializeField] private Transform model;
    [SerializeField] private Transform idlePosition;
    [SerializeField] private Transform winPosition;
    [SerializeField] private Transform losePosition;

    public void OnIdle()
    {
        model.position = idlePosition.position;
        transform.DOMove(new Vector2(transform.position.x, transform.position.y + 0.1f), 0.2f, false)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Yoyo);
    }
    public void OnWin()
    {
        transform.DOMove(winPosition.position, 0.2f, false)
            .SetEase(Ease.Linear);
    }
    public void OnLose()
    {
        transform.DOMove(losePosition.position, 0.2f, false)
            .SetEase(Ease.Linear);
    }
}
