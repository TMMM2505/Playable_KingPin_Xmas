using System.Collections.Generic;
using UnityEngine;

public class Bomb : MonoBehaviour
{
    [SerializeField] private List<GameObject> explosionFx;

    [SerializeField] private AudioClip explosionFxClip;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.enemyLayer)
        {
            collision.GetComponentInParent<Knight>().DeathByBomb();
            GameManager.Instance.onWin?.Invoke();
            ExplosionEffects();
            gameObject.SetActive(false);
        }
    }

    private void ExplosionEffects()
    {
        SoundManager.Instance.PlaySoundFXClip(explosionFxClip, transform, 1f, false);

        foreach (GameObject effect in explosionFx)
        {
            Instantiate(effect, transform.position, Quaternion.identity);
        }
    }
}
