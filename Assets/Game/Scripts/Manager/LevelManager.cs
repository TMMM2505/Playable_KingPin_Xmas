using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelManager : Singleton<LevelManager>
{
    [SerializeField] private Level levelPrefab;
    private Level currentLevel;
    public Level CurrentLevel => currentLevel;

    private int loseCount;

    private void Start()
    {
        UIManager.Ins.ShowGamePlay();
        loseCount = 0;
        CreateLevel();
    }

    void CreateLevel()
    {
        if (currentLevel && currentLevel.gameObject)
        {
            DestroyImmediate(currentLevel.gameObject);
        }
        currentLevel = Instantiate(levelPrefab);
        currentLevel.SetUp();
        
        SoundManager.Ins.StopAll();
        SoundManager.Ins.PlaySound(Constant.soundBg, true);
    }

    public void OnWin()
    {
        currentLevel.OnWin();
        CameraFollower.Ins.OnEndGame();
    }

    public void OnLose()
    {
        currentLevel.OnLose();
        SoundManager.Ins.StopAll();
        SoundManager.Ins.PlaySound(Constant.soundLose,false);
        CameraFollower.Ins.OnEndGame();
        // if (loseCount < 2)
        // {
        //     loseCount++;
        //     StartCoroutine(DelayReplay());
        // }
        // else
        {
            StartCoroutine(DelayLose());
        }
    }
    IEnumerator DelayReplay()
    {
        yield return new WaitForSeconds(1f);
        CreateLevel();
    }
    IEnumerator DelayLose()
    {
        yield return new WaitForSeconds(2f);
        UIManager.Ins.ShowLose();
    }
}
