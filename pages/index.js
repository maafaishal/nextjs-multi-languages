import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import GetLang from '../components/GetLang'

class Home extends React.Component {

  changeLanguage (lang) {
    window.localStorage.setItem('lang', lang)
    location.reload()
  }

  render() {
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
            <div className="card" onClick={() => this.changeLanguage('id')}>
              <img src="/static/flags/indonesia.png" />
              <h4>Indonesian</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('en')}>
              <img src="/static/flags/uk.png" />
              <h4>English</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('kr')}>
              <img src="/static/flags/korea.png" />
              <h4>Korean</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('jp')}>
              <img src="/static/flags/japan.png" />
              <h4>Japanese</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('gr')}>
              <img src="/static/flags/germany.png" />
              <h4>German</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('fr')}>
              <img src="/static/flags/france.png" />
              <h4>French</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('sp')}>
              <img src="/static/flags/spain.png" />
              <h4>Spanish</h4>
            </div>
            <div className="card" onClick={() => this.changeLanguage('cn')}>
              <img src="/static/flags/chinese.png" />
              <h4>Chinese</h4>
            </div>
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
    )}
}

export default GetLang(Home)
