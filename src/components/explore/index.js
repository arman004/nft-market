import React from 'react'
import ExpImg from './expSectionOne/ExpImg'
import ExpTitle from './expSectionOne/ExpTitle'
import styles from './Explore.module.scss';
import ItemTitle from './expSectionTwo/ItemTitle';
import ItemList from './expSectionTwo/ItemList';
import Users from './expSectionThree/Users';

export default function Explore() {
  return (
    <section>
      <section className={styles['exp-section-one']}>
        <ExpTitle/>
        <ExpImg/>
      </section>
      <section className={styles['exp-section-two']}>
        <ItemTitle/>
        <ItemList/>
      </section>
      <section className={styles['exp-section-three']}>
        <Users/>
      </section>
    </section>
  )
}
