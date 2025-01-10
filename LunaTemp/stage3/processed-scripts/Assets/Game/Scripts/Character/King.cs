using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class King : MonoBehaviour
{
    private void Awake()
    {
        DeviceOrientationDetection.onPortraitMode += KingPortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += KingLandscapeTransform;
    }
    private void KingPortraitTransform()
    {
        transform.localScale = Vector3.one * 1.5f;
        transform.position = new Vector3(transform.position.x, -8.34f, transform.position.z);
    }
    private void KingLandscapeTransform()
    {
        transform.localScale = Vector3.one * 1.9f;
        transform.position = new Vector3(transform.position.x, -10.66f, transform.position.z);
    }
}
