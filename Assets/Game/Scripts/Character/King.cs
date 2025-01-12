using UnityEngine;

public class King : MonoBehaviour
{
    [SerializeField] private CharacterRequiredAnim anim;

    private void Awake()
    {
        LoseTriggerArea.onLose += KingLose;
    }
    private void KingLose()
    {
        anim.SetAnim(Constant.animKingDie, false);
    }
}
