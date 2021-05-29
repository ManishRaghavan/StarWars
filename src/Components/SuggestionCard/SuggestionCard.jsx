import React from 'react'
import styles from "./sugestionCard.module.css"
export const SuggestionCard = ({name,birth_year,gender,active,number}) => {

    return (
        <div className={number===active?`${styles.suggestionCard} ${styles.suggestionCard_Active}`:styles.suggestionCard} >
           <p className={styles.suggestionCard_name}>{name}<br/><span className={styles.suggestionCard_birth_year}>{birth_year}</span></p>
           <p className={styles.suggestionCard_gender}>{gender}</p>
        </div>
    )
}
   