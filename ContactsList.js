import React from 'react'
import {SectionList, Text} from 'react-native'
import Row from './Row'
import PropTypes from 'prop-types'

const renderItem = o => <Row {...o.item} />;

const renderSectionHeader = o => <Text>{o.section.title}</Text>

const ContactsList = props => {
  const contactsByLetter = props.contacts.reduce((o, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...o,
      [firstLetter]: [...o[firstLetter] || [], contact]
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    title: letter,
    data: contactsByLetter[letter]
  }))

  return (
    <SectionList 
      renderItem={renderItem} 
      renderSectionHeader={renderSectionHeader} 
      sections={sections} 
    />
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array
}

export default ContactsList