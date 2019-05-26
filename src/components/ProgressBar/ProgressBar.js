import React, {useState, useEffect} from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({name, progress, total}) => {
    const [load, setLoad] = useState(0);

    useEffect(() => {
        if(load <= progress) {
            let newLoad = load;
            setLoad(newLoad + 1);
        }
    }, [load])

    return (
        <div className={styles.container}>
            <span>{name}</span>
            <div className={styles.progress}>
            <span>{Math.ceil(progress / 100 * total)}kb / {total}kb</span>
            <div className={styles.bar} style={{
                width: `${load}%`,
                transition: `width 300ms linear`
            }}>
            </div>
        </div>
        </div>
    )
}

export default ProgressBar;