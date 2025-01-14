public class Knight : CharacterSpine
{
    private void Awake()
    {
        GameManager.Instance.onLose += AttackKing;
    }
    internal void DeathByBomb()
    {
        SetAnim(Constant.animKnightDieLava2, false);
    }
    private void AttackKing()
    {
        SetAnim(Constant.animKnightAttack, false);
    }
}
