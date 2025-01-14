using UnityEngine;

public class Bomb : MonoBehaviour
{
    [SerializeField] private GameObject explosionFx;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.enemyLayer)
        {
            collision.GetComponentInParent<Knight>().DeathByBomb();
            GameManager.Instance.onWin?.Invoke();
            Instantiate(explosionFx, transform.position, Quaternion.identity);
            gameObject.SetActive(false);
        }
    }
}
