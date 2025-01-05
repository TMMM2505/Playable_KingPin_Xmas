using System;
using UnityEngine;

public class Lava : MonoBehaviour
{
    bool checkLose = false;

    private void OnEnable()
    {
        checkLose = false;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.CompareTag(Constant.tagCoin))
        {
            Coin coin = other.gameObject.GetComponent<Coin>();
            coin.InLava();
            if (!checkLose)
            {
                LevelManager.Ins.OnLose();
                checkLose = true;
            }
        }
    }
}
