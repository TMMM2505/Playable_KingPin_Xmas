using System;
using UnityEngine;

public class Bonus : MonoBehaviour
{
    public Action<int, BonusType> SpawnCoin;
    [SerializeField] private BonusType bonusType;
    [SerializeField] private int amount;

    public int Amount => amount;

    bool isActive = false;
    private void OnEnable()
    {
        isActive = false;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.CompareTag(Constant.tagCoin))
        {
            if (!isActive)
            {
                SoundManager.Instance.PlaySound(Constant.soundCoinBonus, false);
                SpawnCoin?.Invoke(amount, bonusType);
                isActive = true;
            }
        }
    }
}

public enum BonusType
{
    multiple,
    plus,
}