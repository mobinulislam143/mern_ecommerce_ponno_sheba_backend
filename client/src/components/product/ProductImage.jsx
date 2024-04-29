import React from 'react';
import ImageGallery from "react-image-gallery";
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import './ImageGallery.css'

function ProductImage(props) {
    let images = [
        {original: 'product6.jpg', thumbnail: 'product6.jpg'},
        {original: 'product6.jpg', thumbnail: 'product6.jpg'},
        {original: 'product6.jpg', thumbnail: 'product6.jpg'},
        {original: 'product6.jpg', thumbnail: 'product6.jpg'},
        {original: 'product6.jpg', thumbnail: 'product6.jpg'},
    ]
    return (
            <ImageGallery items={images} />
     
    );
}

export default ProductImage;