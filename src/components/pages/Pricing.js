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
          {/*Used bootstrap and CSS for the responsive table*/}
        <div className="table-responsiveness lg-w-75 sm-w-100">
          <table className="table align-middle table-borderless">
            <thead>
              <tr>
                <th scope="col" className="col1 text-center essential align-middle" >Essentials</th>
                <th scope="col" className="col1 text-center advance align-middle">Advanced</th>
                <th scope="col" className="col1 text-center automate align-middle">Automation</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col" className="col2 text-center ess-percent align-middle"><div><h3>10%</h3> <p>Transaction fee</p></div></th>
                <th scope="col" className="col2 text-center add-percent align-middle"><div><h3>12.5%</h3><p>Transaction fee</p></div></th>
                <th scope="col" className="col2 text-center auto-percent align-middle"><div><h3>15%</h3> <p>Transaction fee</p></div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="mb-1">
                <td className="row1 text-center common">Pay per content</td>
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
                  Paywall customization
                </td>
                <td className="row2 text-center mb-1 common">
                  Paywall optimization A/B Splittesting
                </td>
                <td className="row3 text-center mb-1 common">
                  Automated paywall
                </td>
              </tr>
              <tr>
                <td className="row1 text-center mb-1 common border-end-radius">
                  Wallet &#38; Single payments
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
