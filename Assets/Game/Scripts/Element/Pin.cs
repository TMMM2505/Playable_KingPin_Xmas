using System.Collections;
using UnityEngine;
using DG.Tweening;
public class Pin : MonoBehaviour
{
    [SerializeField] private Transform head;
    [SerializeField] private Transform end;
    [SerializeField] private Transform center;

    [SerializeField] private float speed;

    [SerializeField] private AudioClip dragPin;

    public Transform Center => center;

    public void ActivePin()
    {
        SoundManager.Instance.PlaySoundFXClip(dragPin, transform, 1f, false);
        Vector2 direction = end.position - head.position;
        direction.Normalize();
        
        transform.DOMove((Vector2)transform.position + direction * speed, 0.5f, false)
            .SetEase(Ease.Linear);
        StartCoroutine(DelayDestroy());
    }

    IEnumerator DelayDestroy()
    {
        yield return new WaitForSeconds(0.5f);
        gameObject.SetActive(false);
    }
}
