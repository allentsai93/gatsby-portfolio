import React from 'react';
import styles from './Activity.module.css';

const Activity = (props) => {
    const { content, isPrivate } = props;
    const recentTime = new Date(content.pushedAt).toDateString();
    const createdTime = new Date(content.createdAt).toDateString();

    return (
        <div className={styles.container}>
        <p className={styles.date}>{recentTime}</p>
        {isPrivate ? 
        <p>Updated private repository</p>
        : 
        <p>Committed {content.object.additions} lines of code to address {content.object.message} on <a href={content.object.repository.url}> {content.object.repository.name}</a></p>
        }
        </div>
    )
}

export default Activity;