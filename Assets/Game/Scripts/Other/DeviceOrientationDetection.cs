using System;
using UnityEngine;

public class DeviceOrientationDetection : Singleton<DeviceOrientationDetection> 
{
    protected Action onPortraitMode;
    protected Action onLandscapeMode;
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