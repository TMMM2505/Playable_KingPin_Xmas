using UnityEngine;
public class Knight : CharacterSpine
{
    private void Awake()
    {
        GameManager.Instance.onLose += AttackKing;

        DeviceOrientationDetection.Instance.onPortraitMode += KnightPortraitTransform;
        DeviceOrientationDetection.Instance.onLandscapeMode += KnightLandscapeTransform;
    }
    internal void DeathByBomb()
    {
        SetAnim(Constant.animKnightDieLava2, false);
    }
    private void AttackKing()
    {
        SetAnim(Constant.animKnightAttack, false);
    }
    private void KnightPortraitTransform()
    {
        transform.localScale = new Vector3(-1f, 1f, 1f);
        transform.position = new Vector3(-2.76f, transform.position.y, transform.position.z);
    }
    private void KnightLandscapeTransform()
    {
        transform.localScale = new Vector3(-1f, 1f, 1f) * 1.25f;
        transform.position = new Vector3(-3.51f, transform.position.y, transform.position.z);
    }
}
