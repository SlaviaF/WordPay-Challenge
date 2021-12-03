import React from 'react'
import "./Pricing.css"

const Pricing = () => {
    return (
      <>
        <div className="pricing">
          <h1 className="title">Pricing</h1>
          <p className="price-info">
            Pay as you go for users and pay as you get paid for the media
          </p>
 { /* <div className="pricing-table">
            <div className="essentials">
              <h3 className="table-title">Essentials</h3>
              <div className="table-percent">
                <h3>10%</h3>
                <small>Transaction fee</small>
              </div>
              <div className="price-details essentials-section">
                <p>Pay per content</p>
                <p>A unified sign-on solution</p>
                <p>Paywall customization</p>
                <p>Wallet &#38; Single payments</p>
              </div>
            </div>

            <div className="advanced">
              <h3 className="table-title">Advanced</h3>
              <div className="table-percent">
                <h3>12.5%</h3>
                <small>Transaction fee</small>
              </div>
              <div className="price-details advanced-section">
                <p>Subscriptions</p>
                <p>Content optimization</p>
                <p>Paywall optimization A/B Splittesting</p>
                <p>Advanced pricing models</p>
              </div>
            </div>

            <div className="automation">
              <h3 className="table-title">Automation</h3>
              <div className="table-percent">
                <h3>15%</h3>
                <small>Transaction fee</small>
              </div>
              <div className="price-details auto-section">
                <p>Personalized subscriptions</p>
                <p>User Data Platform</p>
                <p>Automated paywall</p>
                <p>Automated pricing</p>
              </div>
            </div>
          </div>*/}
       

        <div className="table-responsiveness">
          <table className="table align-middle table-borderless">
            <thead>
              <tr>
                <th className="col text-center essential align-middle">Essentials</th>
                <th className="col text-center advance align-middle">Advanced</th>
                <th className="col text-center automate align-middle">Automation</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="col1 text-center ess-percent align-middle"><div><h3>10%</h3> <p>Transaction fee</p></div></th>
                <th className="col1 text-center add-percent align-middle"><div><h3>12.5%</h3><p>Transaction fee</p></div></th>
                <th className="col1 text-center auto-percent align-middle"><div><h3>15%</h3> <p>Transaction fee</p></div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="mb-1">
                <td className="row1 text-center  common">Pay per content</td>
                <td className="row2 text-center mb-1 common">Subscriptions</td>
                <td className="row3 text-center mb-1 common">
                  Personalized subscriptions
                </td>
              </tr>
              <tr>
                <td className="row1 text-center mb-1 common">
                  A unified sign-on solution
                </td>
                <td className="row2 text-center mb-1 common">
                  Content optimization
                </td>
                <td className="row3 text-center mb-1 common">
                  User Data Platform
                </td>
              </tr>
              <tr>
                <td className="row1 text-center mb-1 common">
                  Pabwall customization
                </td>
                <td className="row2 text-center mb-1 common">
                  Pabwall optimization A/B Splittesting
                </td>
                <td className="row3 text-center mb-1 common">
                  Automated pabwall
                </td>
              </tr>
              <tr>
                <td className="row1 text-center mb-1 common border-end-radius">
                  Wallet &#38; Single pabments
                </td>
                <td className="row2 text-center mb-1 common">
                  Advanced pricing models
                </td>
                <td className="row3 text-center mb-1 common border-bottom-radius">
                  Automated pricing
                </td>
              </tr>
            </tbody>
          </table>

          </div>

        </div>
      </>
    );
}

export default Pricing
