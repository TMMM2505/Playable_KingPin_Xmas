using UnityEngine;

public class DeviceOrientationDetection : MonoBehaviour
{
    void Update()
    {
        // Check if the device orientation has changed
        if (Screen.orientation != ScreenOrientation.Unknown)
        {
            Debug.Log("Device orientation: " + Screen.orientation);

            // You can perform actions based on the orientation
            switch (Screen.orientation)
            {
                case ScreenOrientation.Portrait:
                    // Handle portrait orientation
                    break;

                case ScreenOrientation.LandscapeLeft:
                case ScreenOrientation.LandscapeRight:
                    // Handle landscape orientation
                    break;

                // Add more cases if needed for other orientations

                default:
                    break;
            }
        }
    }
}