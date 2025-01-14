using System;
using UnityEngine;

public class LoseTriggerArea : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.layer == Constant.bombLayer)
        {
            Debug.Log("Game Lose");
            GameManager.Instance.onLose?.Invoke();
            gameObject.SetActive(false);    
        }
    }
}
