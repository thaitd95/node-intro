const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  let rawData = fs.readFileSync(contactsLocation);
  let contactsList = JSON.parse(rawData);
  return contactsList;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  let newList = JSON.stringify(contacts);
  fs.writeFileSync(contactsLocation, newList);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

