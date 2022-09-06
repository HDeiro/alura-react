import style from './product.module.scss';
import classNames from 'classnames';
import { ProductProps } from '..';

export default function Product(product: ProductProps) {
    return (
        <div className={style.product}>
            <img className={style.product__img}
                src={product.photo} 
                alt={`Imagem de um prato "${product.title}"`} />
            <div className={style.product__description}>
                <div className={style.product__title}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className={style.product__tags}>
                    <div className={classNames({
                        [style.product__type]: true,
                        [style[`product__type__${product.category.id}`]]: true
                    })}>
                        {product.category.label}
                    </div>
                    <div className={style.product__portion}>
                        {product.size}g
                    </div>
                    <div className={style.product__serving}>
                        Serve {product.serving} pessoa{product.serving !== 1 ? 's' : ''}
                    </div>
                    <div className={style.product__price}>
                        R$ {product.price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}