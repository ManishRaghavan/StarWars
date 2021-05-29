import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from "./sugestionCard.module.css"
export const SuggestionCard = ({name,birth_year,gender,active,number,url}) => {
    const urlParser =  url.split("/")
    const id = urlParser[5]*1
    const history = useHistory()

    const handleSearch = (person_id)=>{
        history.push(`/person/${person_id}`)
    }

    return (
        <div key={id} onClick={()=>handleSearch(id)} className={number===active?`${styles.suggestionCard} ${styles.suggestionCard_Active}`:styles.suggestionCard} >
           <p className={styles.suggestionCard_name}>{name}<br/><span className={styles.suggestionCard_birth_year}>{birth_year}</span></p>
           <p className={styles.suggestionCard_gender}>{gender}</p>
        </div>
    )
}
   