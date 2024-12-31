using UnityEngine;
using DG.Tweening;
public class Pin : MonoBehaviour
{
    [SerializeField] private Transform head;
    [SerializeField] private Transform end;

    public void ActivePin()
    {
        Vector2 direction = end.position - head.position;
        direction.Normalize();
        
        transform.DOMove((Vector2)transform.position + direction * 5f, 0.5f, false)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                gameObject.SetActive(false);
            });
    }
}
