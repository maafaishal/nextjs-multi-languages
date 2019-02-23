import React from 'react'
import PropTypes from 'prop-types'
import Head from '../components/head'
import Nav from '../components/nav'

import GetLang from '../components/GetLang'
import Languages from '../components/languageList'

class Home extends React.Component {
  changeLanguage (lang) {
    window.localStorage.setItem('lang', lang)
    location.reload()
  }

  render () {
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <div className="hero">
          <h1 className="title">{this.props.data && this.props.data.title}</h1>
          <p className="description">
            {this.props.data && this.props.data.description} :
          </p>

          <div className="row">
            {Languages.map((data, i) =>
              <div key={i} className="card" onClick={() => this.changeLanguage(data.code)}>
                <img src={`/static/${data.flag}`} />
                <h4>{data.title}</h4>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px;
            text-align: center;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
            cursor: pointer;
          }
          .card h4 {
            margin-bottom: 0;
            color: #000;
            font-size: 14px;
          }
          .card img {
            width: 70px;
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.1);
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object
}

export default GetLang(Home)
