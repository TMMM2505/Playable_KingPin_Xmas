using System;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
	public Sound[] Sounds;

	public List<AudioSource> audioSources = new List<AudioSource>();

	public void PlaySound(string name, bool loop)
	{
		Sound s = Array.Find(Sounds, (Sound x) => x.name == name);
		if (s != null)
		{
			AudioSource source = GetAvailableAudioSource();
			source.clip = s.clip;
			source.Play();
			source.loop = loop;
		}
	}

	private AudioSource GetAvailableAudioSource()
	{
		AudioSource availableSource = audioSources.Find((AudioSource source) => !source.isPlaying);
		if (availableSource == null)
		{
			availableSource = base.gameObject.AddComponent<AudioSource>();
			audioSources.Add(availableSource);
		}
		return availableSource;
	}

	public void StopAll()
	{
		foreach (AudioSource source in audioSources)
		{
			source.Stop();
			source.clip = null;
		}
	}
}
