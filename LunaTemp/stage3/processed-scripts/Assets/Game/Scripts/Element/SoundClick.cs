using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundClick : MonoBehaviour
{
    [SerializeField] float loopTime;
    [SerializeField] AudioSource sound;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(AudioReplay());
    }

    private IEnumerator AudioReplay()
    {
        while (true)
        {
            yield return new WaitForSeconds(loopTime);

            sound.Play();
        }
    }
}
