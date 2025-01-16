using System;
using UnityEngine;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;

public class CamFollow : MonoBehaviour
{
    [SerializeField] GameObject objectToFollow;
    [SerializeField] bool beginFollow;
    [SerializeField] GameObject popup;
    public float speedRoom = 2.0f;
    public float speedMove = 5f;
    public float camSize = 2.5f;
    public float camSizeGamePlay2 = 5f;

    public GameObject ObjectToFollow { set => objectToFollow = value; get => objectToFollow; }
    public bool BeginFollow { set => beginFollow = value; get => beginFollow; }
    public GameObject Popup { set => popup = value; get => popup; }

    private Camera _myCam;

    Vector3 position;
    float interpolation;
    Vector3 popupScaleDefaut = Vector3.one;
    Vector3 camPositionDefaut = Vector3.zero;
    float camSizeDefaut = 8;

    Vector3 offset = Vector3.one;
    TweenerCore<float, float, FloatOptions> camRoomSeq;
    float camSizeCache = 5f;
    float camSizeGp1 => camSize;
    float camSizeGp2 => camSizeGamePlay2;
    bool isFollow = false;
    bool isUnFollow = false;
    private void Awake()
    {
        _myCam = GetComponent<Camera>();
        camSizeDefaut = _myCam.orthographicSize;
        camPositionDefaut = _myCam.transform.position;
        camSizeCache = camSizeGp1;

        GameManager.Instance.onWin += Follow;
    }

    void Update()
    {
        if (beginFollow)
        {
            interpolation = speedRoom * Time.deltaTime;
            _myCam.orthographicSize = Mathf.Lerp(_myCam.orthographicSize, camSizeCache, interpolation);

            var scale = popup.transform.localScale;
            scale.x = scale.y = Mathf.Lerp(scale.x, 1, interpolation * 3);
            popup.transform.localScale = scale;

            position = this.transform.position;
            if (!(objectToFollow is null))
            {
                try
                {
                    position.y = Mathf.Lerp(this.transform.position.y, objectToFollow.transform.position.y, interpolation);
                    position.x = Mathf.Lerp(this.transform.position.x, objectToFollow.transform.position.x, interpolation);
                }
                catch (Exception e)
                {
                    position = this.transform.position;
                }
            }
            this.transform.position = position;
        }

        if (isFollow && !beginFollow)
        {
            interpolation = speedMove * Time.deltaTime;

            position = this.transform.position;
            if (!isUnFollow)
            {
                if (!(objectToFollow is null))
                {
                    if (camPositionDefaut.y < objectToFollow.transform.position.y)
                    {
                        try
                        {
                            position.y = Mathf.Lerp(this.transform.position.y, objectToFollow.transform.position.y - 3f, interpolation);
                        }
                        catch
                        {
                            position = this.transform.position;
                        }
                    }
                    else position.y = Mathf.Lerp(this.transform.position.y, camPositionDefaut.y - 3f, interpolation);
                }
            }
            else position.y = Mathf.Lerp(this.transform.position.y, camPositionDefaut.y - 3f, interpolation);

            this.transform.position = position;
        }
    }

    public void UpdateCamSize(bool isPlay1 = true)
    {
        if (isPlay1) camSizeCache = camSizeGp1;
        else camSizeCache = camSizeGp2;
    }
    public void SetPosition(Vector3 pos, bool isMotion = false, float time = 1, Action actionCompleted = null)
    {
        var newPos = new Vector3(pos.x, pos.y, transform.position.z);
        if (!isMotion) this.transform.position = newPos;
        else
        {
            this.transform.DOMove(newPos, 1f).SetEase(Ease.Linear).OnComplete(() =>
            {
                actionCompleted?.Invoke();
            });
        }
    }
    public void SetTarget(GameObject objFollow)
    {
        objectToFollow = objFollow;
        offset = (this.transform.position - Vector3.left * 0.75f) - objFollow.transform.position;
    }
    public void Motion(Vector3 from, Vector3 to, float time = 1.5f, Action actionCompleted = null)
    {
        if (from == to) return;
        SetPosition(from);
        var pos = new Vector3(to.x, to.y, transform.position.z);
        this.transform.DOMove(pos, time).SetEase(Ease.InQuint).OnComplete(() =>
        {
            actionCompleted?.Invoke();
        });
    }
    public void CameraRoom(float camSize, bool isMotion = true)
    {
        float size = _myCam.orthographicSize;
        if (isMotion)
        {
            camRoomSeq = DOTween.To(() => size, x => size = x, camSize, 0.25f).OnUpdate(() =>
            {
                _myCam.orthographicSize = size;
            });
            DOTween.To(() => size, x => size = x, camSize, 0.25f).OnComplete(() =>
            {
                _myCam.orthographicSize = size;
            });
        }
        else _myCam.orthographicSize = camSize;

    }
    private void Follow()
    {
        beginFollow = true;
    }
    public void Follow(GameObject objFollow)
    {
        isFollow = true;
        this.objectToFollow = objFollow;
    }
    public void UnFollow()
    {
        isUnFollow = true;
    }
    public void StartRoom(GameObject objFollow, GameObject popup)
    {
        this.popup = popup;
        beginFollow = true;
        objectToFollow = objFollow;
        popupScaleDefaut = popup.transform.localScale;
    }
    public void Defaut()
    {
        isUnFollow = false;
        isFollow = false;
        beginFollow = false;
        objectToFollow = null;
        this._myCam.transform.position = camPositionDefaut;
        this._myCam.orthographicSize = camSizeDefaut;
        this.transform.DOKill();
        if (camRoomSeq != null) camRoomSeq.Kill();

        if (popup != null)
        {
            popup.transform.localScale = popupScaleDefaut;
            popup = null;
        }

    }
}