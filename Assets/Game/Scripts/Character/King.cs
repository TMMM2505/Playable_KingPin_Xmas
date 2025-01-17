using DG.Tweening;
using UnityEngine;

public class King : CharacterSpine
{
    [SerializeField] private AudioClip helpMeSound;
    [SerializeField] private AudioClip runningSfx;
    [SerializeField] private AudioClip dieSfx;
    [SerializeField] private AudioClip laughSfx;
    [SerializeField] private AudioClip getHitSfx;

    private void Awake()
    {
        GameManager.Instance.onLose += KingLose;
        GameManager.Instance.onWin += KingWin;

        DeviceOrientationDetection.Instance.onPortraitMode += KingPortraitTransform;
        DeviceOrientationDetection.Instance.onLandscapeMode += KingLandscapeTransform;
    }
    private void Start()
    {
        SoundManager.Instance.PlaySoundFXClip(helpMeSound, transform, 1f, false);
        SoundManager.Instance.PlaySoundFXClip(runningSfx, transform, 1f, true);
    }
    private void KingLose()
    {
        transform.localScale = new Vector3(-1, 1, 1);
        transform.DOMove(new Vector3(1.6f, transform.position.y, transform.position.z), .1f);
        SoundManager.Instance.StopSourceByName(runningSfx.name);    

        SetAnim(Constant.animKingLose, true);
    }
    private void KingDie()
    {
        SoundManager.Instance.PlaySoundFXClip(dieSfx, transform, 1f, false);

        SetAnim(Constant.animKingDie, false);
    }
    private void KingWin()
    {
        transform.localScale = new Vector3(-1, 1, 1);
        SoundManager.Instance.StopSourceByName(runningSfx.name);

        SetAnim(Constant.animKingWinLaugh, true);
        SoundManager.Instance.PlaySoundFXClip(laughSfx, transform, 1f, false);
    }

    private void KingPortraitTransform()
    {
        if (GameManager.Instance.isWin)
        {
            transform.localScale = new Vector3(-1f, 1f, 1f);
        }
        else
        {
            transform.localScale = Vector3.one;
        }
        
        transform.position = new Vector3(2, transform.position.y, transform.position.z);
    }
    private void KingLandscapeTransform()
    {
        if (GameManager.Instance.isWin)
        {
            transform.localScale = new Vector3(-1f, 1f, 1f) * 1.25f;
        }
        else
        {
            transform.localScale = Vector3.one * 1.25f;
        }

        transform.position = new Vector3(2.75f, transform.position.y, transform.position.z);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.layer == Constant.enemyLayer)
        {
            SoundManager.Instance.PlaySoundFXClip(getHitSfx, transform, 1f, false);
            KingDie();
        }
    }
}
