import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory() //the react-router replacement for the native History API of the DOM

  const routeToShop = () => {
    //with code
    // history.pushState(null, null, '/') //react component would not notice, so we can't do this
    history.push('/items-list')
    //now we can do logic, for example, check 'auth' status
    //this is an example of 'imperative code'
    //verses simply dropping a <Link /> in the JSX which would be 'declarative code'
    if (true) {  //authed
      history.push('/items-list')
    } else {
      history.push('/Login')
    }
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
