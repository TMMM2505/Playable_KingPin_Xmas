using System;
using UnityEngine;

public class LoseTriggerArea : MonoBehaviour
{
    [SerializeField] LayerMask layerTrigger;

    internal static Action onLose;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (1 << collision.gameObject.layer == layerTrigger.value)
        {
            Debug.Log("Game Lose");
            onLose?.Invoke();
        }
    }
}
