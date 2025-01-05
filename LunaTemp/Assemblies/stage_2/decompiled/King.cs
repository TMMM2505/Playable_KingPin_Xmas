using UnityEngine;

public class King : MonoBehaviour
{
	[SerializeField]
	private AnimKing anim;

	[SerializeField]
	private Bag bag;

	private void Start()
	{
		SetAnim("CollectCoin_Idle", true);
	}

	public void SetAnim(string name, bool loop)
	{
		anim.SetAnim(name, loop);
		bag.SetAnim(name);
	}
}
