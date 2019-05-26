import React from 'react';
import styles from './Activity.module.css';
import Emoji from '../Emoji';

const Activity = (props) => {
    const { content, isPrivate, image } = props;
    const recentTime = new Date(content.pushedAt).toDateString();
    // const createdTime = new Date(content.createdAt).toDateString();

    return (
        <div className={styles.container}>
        <p className={styles.date}>{recentTime}</p>
        {isPrivate ? 
        <p><Emoji symbol="🔐" label="locked"/> Updated private repository</p>
        : 
        <>
        <div className={styles.card}>
        <div className={styles.image}>
            <img src={image} alt="icon"/>
        </div>
        <div className={styles.content}>
            <p><a href={content.object.repository.url}><Emoji symbol="🗃" label="repo"/> {content.object.repository.name}</a></p>
            <p>{content.object.message}</p>
            <p className={styles.stats}><Emoji symbol="📝" label="add" /> {content.object.additions} additions, 
            {content.object.deletions} deletions </p>
            <p className={styles.stats}><Emoji symbol="🗂" label="add" /> {content.object.changedFiles} file(s) changed</p>
            <p className={styles.total}><Emoji symbol="📈" label="add" /> {content.object.history.totalCount} total commits</p>              
        </div>
        </div>
        </>
        }
        </div>
    )
}

export default Activity;