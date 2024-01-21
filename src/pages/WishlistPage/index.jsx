import React from 'react'
import Wishlist from '../../components/Wishlist'
import { Helmet } from 'react-helmet-async'

function WishlistPage() {
  return (
    <>
    <Helmet>
      <title>Tasty Wishlist Page</title>
    </Helmet>
    <Wishlist />
  </>
  )
}

export default WishlistPage