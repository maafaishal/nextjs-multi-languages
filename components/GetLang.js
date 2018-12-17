import React, { Component } from 'react'
import PropTypes from 'prop-types'

function getLang (BaseComponent) {
  class GetLang extends Component {
    state = {
      data: null
    }

    componentDidMount () {
      let langLS = window.localStorage.getItem('lang') || 'id'
      var lang = langLS || 'id'

      import(`../lang/${lang}`).then(({ default: data }) => {
        this.setState({ data: data })
      })
    }
    render () {
      return <BaseComponent {...this.state} />
    }
  }

  GetLang.propTypes = {
    lang: PropTypes.string
  }

  return GetLang
}

export default getLang
