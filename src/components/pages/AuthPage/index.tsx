import React from 'react'
import { Tab } from '../../ui/Tab'
import { Tabs } from '../../ui/Tabs'

export const AuthPage = () => {
  function rerender() {
    console.log('rerender')
    return ''
  }
  return (
    <>
      <Tabs>
        <Tab name='Авторизация'>
          <input />
        </Tab>
        <Tab name='Регистрация'>2</Tab>
        <Tab name='4'>
          <div>{rerender()}</div>
        </Tab>

      </Tabs>
    </>
  )
}
