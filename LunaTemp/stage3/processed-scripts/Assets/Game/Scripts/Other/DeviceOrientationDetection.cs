using System;
using UnityEngine;

public class DeviceOrientationDetection : MonoBehaviour
{
    internal static Action onPortraitMode;
    internal static Action onLandscapeMode;
    void Update()
    {
        if (Screen.width > Screen.height)
        {
            onLandscapeMode?.Invoke();
        }
        else
        {
            onPortraitMode?.Invoke();
        }
    }
}