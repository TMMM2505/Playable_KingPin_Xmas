using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InfinityParallaxManager : MonoBehaviour
{
    [SerializeField] private Transform item;
    [SerializeField] private Transform container;
    [SerializeField] private SpriteRenderer spriteRenderer;


    [Header("CUSTOMIZE")]
    [SerializeField] private float speedMultiplier;
    [SerializeField] private float infinityParallaxErrorCompensationRatio; //the ratio should be equal to speed multplier for seamless transition

    private List<Transform> _items;
    private float _rightBound;
    private float _leftBound;
    private bool _isPaused;
    private Coroutine _parallax;

    private void Awake()
    {
        Init();
    }


    private void StartRun()
    {
        _parallax = StartCoroutine(RunParallax());
    }

    private void Init()
    {
        Transform leftClone = Instantiate(item, container);
        Transform rightClone = Instantiate(item, container);

        leftClone.transform.position -= new Vector3(spriteRenderer.bounds.size.x, 0, 0);
        rightClone.transform.position += new Vector3(spriteRenderer.bounds.size.x, 0, 0);

        _leftBound = leftClone.transform.position.x - (0.5f - infinityParallaxErrorCompensationRatio) * spriteRenderer.bounds.size.x;
        _rightBound = rightClone.transform.position.x + (0.5f - infinityParallaxErrorCompensationRatio) * spriteRenderer.bounds.size.x;

        StartRun();
    }

    private IEnumerator RunParallax()
    {
        WaitForSeconds waitForSeconds = new WaitForSeconds(0.02f);

        _items = new List<Transform>();

        for (int i = 0; i < container.childCount; i++)
        {
            _items.Add(container.GetChild(i));

            _items[i].gameObject.SetActive(true);
        }

        while (true)
        {
            if (_isPaused)
            {
                yield return null;

                continue;
            }

            for (int i = 0; i < _items.Count; i++)
            {
                if (_items[i].position.x < _leftBound)
                {
                    _items[i].transform.position = new Vector3(_rightBound, _items[i].transform.position.y, _items[i].transform.position.z);
                }

                _items[i].position += speedMultiplier * Vector3.left;
            }

            yield return waitForSeconds;
        }
    }

    private void PauseParallax(bool isPause)
    {
        _isPaused = isPause;
    }

    private void StopParallax()
    {
        if (_parallax != null)
        {
            StopCoroutine(_parallax);
        }
    }
}
