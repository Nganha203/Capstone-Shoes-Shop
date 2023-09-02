import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from 'src/services/product.service'
import { IProduct } from './detail.type'
import ListCard from 'src/components/listCard'

type TParams = {
  productID: string
}

export default function Detail() {
  const param = useParams<TParams>()
  const [productItem, setProductItem] = useState<IProduct>()

  useEffect(() => {
    if (!param.productID) return
    getProductById(param.productID).then((resp) => {
      // console.log(resp)
      setProductItem(resp.content)
    })
      .catch((err) => { console.log(err) })

  }, [param.productID])

  return (
    <div >
      <div style={{ display: 'flex' }}>
        <div className='product-img'>
          <img style={{ width: 400, height: 400 }} src={productItem?.image} />
        </div>
        <div className='content'>
          <p>{productItem?.name}</p>
          <p>{productItem?.shortDescription}</p>
        </div>
      </div>
      <div>
        <h2>- Realate Product -</h2>

        {productItem?.relatedProducts && <ListCard list={productItem.relatedProducts} />}

      </div>
    </div>
  )
}
