import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Statistics.module.css';

const Statistics = ({data}) => {
    const usedLanguages = {};
    let usedLanguagesElems = [];
    const repoLanguages = data.nodes;

    const filteredLanguages = repoLanguages.filter((a, i) => { 
        if(a.primaryLanguage) {
            return a.primaryLanguage.name !== 'Makefile' && a.primaryLanguage.name !== 'Shell'  ;
        } else {
            return true;
        }
    })

    const totalPublicBytes = Math.ceil(filteredLanguages.map(a => {
        if(a.languages.edges.length) {
            return a.languages.edges.reduce((a, b) => a + b.size, 0);
        }
        return 0;
    }).reduce((a, b) => a + b) / 1000);
    
    for(let i = 0; i<filteredLanguages.length; i++) {
        const languageArr = filteredLanguages[i].languages.edges;
        for(let j = 0; j<languageArr.length; j++) {
            if(usedLanguages[languageArr[j].node.name]) {
                usedLanguages[languageArr[j].node.name] += Math.ceil(languageArr[j].size / 1000)
            } else {
                usedLanguages[languageArr[j].node.name] = Math.ceil(languageArr[j].size / 1000);
            }
        }
    }
    usedLanguagesElems = Object.keys(usedLanguages).map((lang, i) => (
        <ProgressBar name={lang} key={i} progress={Math.ceil((usedLanguages[lang] / totalPublicBytes) * 100)} total={totalPublicBytes} />
    ));

    console.log(usedLanguages);

    return (
        <div>
            <h2 className={styles.title}>Ordered by most recent usage</h2>
            {usedLanguagesElems}
        </div>
    )
}

export default Statistics;