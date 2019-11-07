/* eslint-disable react/jsx-props-no-spreading */

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// To render styles on the server-side (for styled-components)
class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>

        <body>
          <noscript>
            <div
              style={{
                width: '900px',
                margin: '20% auto',
                textAlign: 'center',
              }}
            >
              <h2>
                It's pity that you wanna live in a{' '}
                <span style={{ color: 'red' }}>world without JavaScript!</span>{' '}
                🌎
              </h2>
            </div>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
