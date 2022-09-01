export default function validateContactForm(values) {
    const errors = {}
    const regExWordOnly = /^[a_zA_Z]+$/

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters'
    } else if (!regExWordOnly.test(values.firstName)) {
        errors.firstName = 'Must be word characters only'
    }  else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    } 

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters'
    } else if (!regExWordOnly.test(values.lastName)) {
        errors.lastName = 'Must be word characters only'
    }  else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less'
    } 

    const regExNumOnly = /^\d+$/
    if (!regExNumOnly.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only number'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain @ symbol'
    }

    return errors
}