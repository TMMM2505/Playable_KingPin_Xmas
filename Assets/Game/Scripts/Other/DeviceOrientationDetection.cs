using System;
using UnityEngine;

public class DeviceOrientationDetection : Singleton<DeviceOrientationDetection> 
{
    internal Action onPortraitMode;
    internal Action onLandscapeMode;
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