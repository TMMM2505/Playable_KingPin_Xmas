using UnityEngine;

public class CameraFollower : Singleton<CameraFollower>
{
	[SerializeField]
	private ViewportHandler viewportHandler;

	public void OnEndGame()
	{
	}
}
