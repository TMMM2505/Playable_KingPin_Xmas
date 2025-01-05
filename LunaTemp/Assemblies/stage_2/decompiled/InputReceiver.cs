using System.Collections;
using UnityEngine;

public class InputReceiver : MonoBehaviour
{
	[SerializeField]
	private AudioSource source;

	private bool firstClick = true;

	public bool FirstClick
	{
		get
		{
			return firstClick;
		}
		set
		{
			firstClick = value;
		}
	}

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			Singleton<SoundManager>.Ins.PlaySound("Click", false);
			HandleTarget();
		}
	}

	private void HandleTarget()
	{
		Vector3 mousePos = Input.mousePosition;
		mousePos = Camera.main.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, -10f));
		Vector3 direction = mousePos - Camera.main.transform.position;
		RaycastHit2D[] hits = Physics2D.RaycastAll(Physics2D.Raycast(mousePos, direction, float.PositiveInfinity).point, Vector2.zero, float.PositiveInfinity);
		for (int i = 0; i < hits.Length; i++)
		{
			if (!hits[i].collider || !hits[i].collider.GetComponent<Pin>())
			{
				continue;
			}
			Pin pin = hits[i].collider.gameObject.GetComponent<Pin>();
			if ((bool)pin)
			{
				pin.ActivePin();
				if (Singleton<LevelManager>.Ins.CurrentLevel.Hand.gameObject.activeSelf)
				{
					Singleton<LevelManager>.Ins.CurrentLevel.Hand.gameObject.SetActive(false);
					StopAllCoroutines();
					StartCoroutine(ResetTutorial());
				}
			}
		}
	}

	private IEnumerator ResetTutorial()
	{
		yield return new WaitForSeconds(2f);
		if ((bool)Singleton<LevelManager>.Ins.CurrentLevel.gameObject)
		{
			Singleton<LevelManager>.Ins.CurrentLevel.SetTutorial();
		}
	}

	public void TriggerCTA()
	{
	}
}
