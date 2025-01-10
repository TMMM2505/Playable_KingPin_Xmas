using UnityEngine;

public class LevelMap : MonoBehaviour
{
    // Start is called before the first frame update
    void Awake()
    {
        DeviceOrientationDetection.onPortraitMode += MapPortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += MapLandscapeTransform;
    }

    private void MapPortraitTransform()
    {
        transform.localScale = Vector3.one * 0.7f;
    }
    private void MapLandscapeTransform()
    {
        transform.localScale = Vector3.one;
    }
}
