using System.Collections;
using UnityEngine;

public class Hole : MonoBehaviour
{
    private int score;

    private void OnEnable()
    {
        score = 0;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.CompareTag(Constant.tagCoin))
        {
            other.GetComponent<Coin>().OnCollected();
            score++;
            if (score >= LevelManager.Ins.CurrentLevel.MaxScore)
            {
                LevelManager.Ins.OnWin();
            }
            StopAllCoroutines();
            StartCoroutine(CheckEndGame());
        }
    }

    IEnumerator CheckEndGame()
    {
        yield return new WaitForSeconds(1f);
        if (score < LevelManager.Ins.CurrentLevel.MaxScore)
        {
            LevelManager.Ins.OnLose();
        }
    }
}
