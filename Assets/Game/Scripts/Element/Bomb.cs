using UnityEngine;

public class Bomb : MonoBehaviour
{
    [SerializeField] LayerMask targetLayer;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(1 << collision.gameObject.layer == targetLayer.value)
        {
            collision.GetComponentInParent<Knight>().DeathByBomb();
            Destroy(gameObject);
        }
    }
}
