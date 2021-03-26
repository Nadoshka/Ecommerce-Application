import Axios from 'axios'
import { parseCookies } from 'nookies'
import { Segment } from 'semantic-ui-react'
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import barseUrl from '../utils/baseUrl'
import axios from 'axios'


function Cart({products}) {
  return (
    <Segment>
      <CartItemList/>
      <CartSummary/>
    </Segment>
  )
}

Cart.getInitialProps = async ctx => {
  const {token} = parseCookies(ctx)
  if (!token) {
    return {products: []}
  }
  const url = `${barseUrl}/api/cart`
  const payload = {headers : {authorization: token}}
  const response = await axios.get(url, payload)
  return { products: response.data}
}



export default Cart;
