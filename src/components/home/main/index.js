import React from 'react'
import Categories from './sectionOne/Categories'
import Collections from './sectionOne/Collections'
import styles from './Main.module.scss';
import Title from './sectionTwo/Title';
import TitleInfo from './sectionTwo/TitleInfo';
import ItemMarket from './sectionThree/ItemMarket';

export default function Main() {
    return (
        <main>
            <section className={styles['one-section']}>
                <Categories />
                <Collections />
            </section>
            <section className={styles['two-section']}>
                <Title/>
                <TitleInfo/>
            </section>
            <section className={styles['three-section']}>
                <ItemMarket/>
            </section>
        </main>
    )
}
