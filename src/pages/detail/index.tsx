import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { getProductById } from 'src/services/product.service'
import { IProduct } from './detail.type'
import ListCard from 'src/components/listCard'
import css from './detail.module.scss'
import { useCartContext } from 'src/components/context/cartContext'

type TParams = {
  productID: string
}

export default function Detail() {
  const param = useParams<TParams>()
  const [productItem, setProductItem] = useState<IProduct>()
  const {addToCart, sizeShoes, size} = useCartContext()
  
  useEffect(() => {
    if (!param.productID) return
    getProductById(param.productID).then((resp) => {
      // console.log(resp)
      setProductItem(resp.content)
    })
    .catch((err) => { console.log(err) })

  }, [param.productID])

  const handleAddtoCarts = () =>{
    if(productItem){
      addToCart(productItem)
    }
    
  }
  const handleSize = (size:string) =>{
    sizeShoes(size)
  } 


  return (
    <div className={css['detail']}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '3rem 0' }}>
        <div className={css['product-img-div']}>
          <img className={css['product-img']} style={{ width: 400, height: 400 }} src={productItem?.image} />
        </div>
        <div className='content'>
          <h3>{productItem?.name}</h3>
          <p>{productItem?.shortDescription}</p>

          <div className={css['size-container']}>
            {productItem?.size.map((item, index) => {
              return (
                <button onClick={()=>handleSize(item)} className={css['button-size']} key={index}>
                  <span className={css['size']}><a href="#">{item}</a></span>
                </button>
              )
            })}
          </div>
          <h3 style={{color: 'red', marginTop: '20px', marginBottom:0}}>{productItem?.price}$</h3>

          <div className={css['button-quantity']}>
           <p style={{fontSize: '25px'}}>Size: {size}</p>
          </div>

          <div className={css['add-to-card']}>
            <button onClick={handleAddtoCarts} className={css['button-add']}>Add to cart</button>
          </div>

        </div>
      </div>
      <div className={css['realate-product']}>
        <h2 style={{textAlign: 'center'}}>- Realate Product -</h2>

        {productItem?.relatedProducts && <ListCard list={productItem.relatedProducts} />}

      </div>
    </div>
  )
}
