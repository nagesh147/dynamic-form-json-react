import React, { useState } from 'react'
import './styles.css'
import data from '../../data.json'
import Radio from '../elements/Radio'
import Text from '../elements/Text'

export default function EntryForm() {
  const [jsonData, setJsonData] = useState(data)

  const orderHandler = (currentOrder) => {
    currentOrder++
    const nextFormItem = jsonData.filter((i) => i.order === currentOrder)

    return (
      nextFormItem &&
      nextFormItem.map((formItem) => {
        return (
          <div className="innerForm">
            <label>{formItem.question}</label>
            {renderElement(formItem)}
          </div>
        )
      })
    )
  }

  const renderElement = (formItem) => {
    switch (formItem.dataType) {
      case 'radio':
        return (
          <Radio
            jsonData={jsonData}
            formItem={formItem}
            currentOrder={formItem.order}
            orderHandler={orderHandler}
          />
        )
      case 'text':
        return (
          <Text
            jsonData={jsonData}
            formItem={formItem}
            currentOrder={formItem.order}
            orderHandler={orderHandler}
          />
        )
      default:
        return
    }
  }

  return (
    jsonData &&
    jsonData
      .filter((i) => i.order === 1)
      .map((formItem) => {
        return (
          <div className="entryForm" key={formItem.question}>
            <label>{formItem.question}</label>
            {renderElement(formItem)}
          </div>
        )
      })
  )
}
