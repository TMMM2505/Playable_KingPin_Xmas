using System;
using DG.Tweening;
using UnityEngine;

public class CameraFollower : Singleton<CameraFollower>
{
    [SerializeField] private ViewportHandler viewportHandler;
    public void OnEndGame()
    {
        // viewportHandler.UnitsSize = 10;
        // viewportHandler.enabled = false; 
        
        // King king = FindObjectOfType<King>();
        // transform.DOMove(new Vector2(king.transform.position.x, king.transform.position.y), 0.2f)
        //     .SetEase(Ease.Linear);
    }
}
