using UnityEngine;
using DG.Tweening;
public class Bag : MonoBehaviour
{
    [SerializeField] private Transform model;

    public Transform Model => model;

    [SerializeField] private Transform idlePosition;
    [SerializeField] private Transform winPosition;
    [SerializeField] private Transform losePosition;

    public void SetAnim(string name)
    {
        switch (name)
        {
            case Constant.animKingIdle:
            {
                OnIdle();
                break;
            }
            case Constant.animKingWin:
            {
                OnWin();
                break;
            }
            case Constant.animKingLose:
            {
                OnLose();
                break;
            }
        }
    }
    public void OnIdle()
    {
        model.position = idlePosition.position;
        transform.DOMove(new Vector2(transform.position.x, transform.position.y + 0.03f), 0.5f, false)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Yoyo);
    }
    public void OnWin()
    {
        model.position = winPosition.position;
        transform.DOMove(new Vector2(transform.position.x + 0.1f, transform.position.y), 0.3f, false)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Yoyo);
    }
    public void OnLose()
    {
        model.position = losePosition.position;
        transform.DOMove(losePosition.position, 0.2f, false)
            .SetEase(Ease.Linear);
    }
}
