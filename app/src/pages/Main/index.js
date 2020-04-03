import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        products : [],
        productInfo: {},
        page : 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (pageNumber = 1) => {

        const response = await api.get(`/products/?page=${pageNumber}`)

        const { docs, ...productInfo } = response.data;

        this.setState({ products : response.data.docs, productInfo, page: pageNumber });
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

        if ( page == 1) return;
 
        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
     }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if ( page === productInfo.pages) return;
 
        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, productInfo, page} = this.state

    return (
        <section className="product-list"> 
        {products.map( product => (
            <article className="flex flex-start width-100 flex-wrap" key={product._id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <a href={product.url} target="_blank">Acessar</a>
            </article>
        ))}
        <div className="width-100 flex pagination">
            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
        </section>
    )
    }
    
}