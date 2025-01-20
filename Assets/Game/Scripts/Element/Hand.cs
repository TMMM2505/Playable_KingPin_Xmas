using UnityEngine;

public class Hand : MonoBehaviour
{
    [SerializeField] Pin designatedPin;
    //[SerializeField] float appearCooldown;
    //[SerializeField] bool rightSide;
    public void Awake()
    {
        designatedPin.onClick += Disappear;
        //transform.localScale = Vector3.zero;
    }
    public void Disappear()
    {
        gameObject.SetActive(false);
    }

    //IEnumerator HandAppear()
    //{
    //    yield return new WaitForSeconds(appearCooldown);

    //    if (rightSide)
    //    {
    //        transform.DOScale(new Vector3(-1, 1, 1), 1f).OnComplete(() => Gamemanager.Instance.state = EGameState.GAME_PLAYING);
    //    }
    //    else
    //    {
    //        transform.DOScale(new Vector3(1, 1, 1), 1f).OnComplete(() => Gamemanager.Instance.state = EGameState.GAME_PLAYING);
    //    }
    //}
}