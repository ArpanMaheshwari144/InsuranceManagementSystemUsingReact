import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductService from '../services/ProductService';

const ListUploadFileData = () => {
    const [products, setProducts] = useState([]); // Changed from product to products for clarity

    useEffect(() => {
        ProductService.getAllProduct()
            .then((res) => {
                setProducts(res.data);
            })
    }, []);
    
    debugger;
    return (
        <div>
            <h2 className="text-center">User</h2>
         
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>ProductDescriptions</th>
                            <th>ProductName</th>
                            <th>ProductPrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.productDesc}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUploadFileData;
