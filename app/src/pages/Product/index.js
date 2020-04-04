import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';


export default class Product extends Component {
    state = {
        product : {}
    }

  async componentDidMount() {

        const { id } = this.props.match.params
 
        const response = await api.get(`/products/${id}`);
        console.log(id)
        this.setState({ product : response.data })
    }

    render () {
        const { product } = this.state
        return (
        <div className="product-info flex justify-center flex-wrap">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <Link to='/' className="back-button">Voltar</Link>
        </div>
        );
    }
}