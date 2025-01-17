using UnityEngine;

public class LevelMap : MonoBehaviour
{
    // Start is called before the first frame update
    void Awake()
    {
        DeviceOrientationDetection.Instance.onPortraitMode += MapPortraitTransform;
        DeviceOrientationDetection.Instance.onLandscapeMode += MapLandscapeTransform;
    }

    private void MapPortraitTransform()
    {
        transform.localScale = Vector3.one * 0.7f;
        transform.position = new Vector3(transform.position.x, 3.5f, transform.position.z);
    }
    private void MapLandscapeTransform()
    {
        transform.localScale = Vector3.one;
        transform.position = new Vector3(transform.position.x, 4.5f, transform.position.z);
    }
}