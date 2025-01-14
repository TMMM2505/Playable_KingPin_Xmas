using DG.Tweening;
using UnityEngine;

public class King : CharacterSpine
{
    private void Awake()
    {
        GameManager.Instance.onLose += KingLose;
        GameManager.Instance.onWin += KingWin;
    }
    private void KingLose()
    {
        transform.localScale = new Vector3(-1, 1, 1);
        transform.DOMove(new Vector3(1.6f, transform.position.y, transform.position.z), .1f);
        SetAnim(Constant.animKingLose, true);
    }
    private void KingDie()
    {
        SetAnim(Constant.animKingDie, false);
    }
    private void KingWin()
    {
        transform.localScale = new Vector3(-1, 1, 1);
        SetAnim(Constant.animKingWinLaugh, true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.enemyLayer)
        {
            KingDie();
        }
    }
}
