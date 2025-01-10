using UnityEngine;

public class ZoneSize : MonoBehaviour
{
    [SerializeField] Vector3 portraitPos;
    [SerializeField] Vector3 landscapePos;
    // Start is called before the first frame update
    void Awake()
    {
        DeviceOrientationDetection.onPortraitMode += ZonePortraitTransform;
        DeviceOrientationDetection.onLandscapeMode += ZoneLandscapeTransform;
    }
    private void ZonePortraitTransform()
    {
        transform.localPosition = portraitPos;
        transform.localScale = Vector3.one; 
    }
    private void ZoneLandscapeTransform()
    {
        transform.localPosition = landscapePos;
        transform.localScale = Vector3.one * 1.3f;
    }
}
