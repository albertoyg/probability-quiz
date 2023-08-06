// white background for page contents (center stage)
// This is the rounded box with a dropshadow 
import styles from "./index.module.scss"
import React, { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';


export default function chooseDifficulty() {
    const [difficultyChosen, setDifficultyChosen] = useState(false);
    const [difficulty, setDifficulty] = useState(null);

    return (
        <div className={styles.stageContainer}> 
            <div>
                {!difficultyChosen ? (
                    <div>
                        <h2>Select your difficulty</h2>
                        <Button onClick={() => { setDifficulty("EASY"); setDifficultyChosen(true); }}>Beginner</Button>
                        <Button onClick={() => { setDifficulty("MEDIUM"); setDifficultyChosen(true); }}>Intermediate</Button>
                        <Button onClick={() => { setDifficulty("HARD"); setDifficultyChosen(true); }}>Advanced</Button>
                    </div>
                ) : (
                        <div>
                        <h2>You selected {difficulty} difficulty</h2>
                        {/* Implement the next step here, such as domain or quiz */}
                        </div>
                )}
            </div> 
        </div>
    )
}