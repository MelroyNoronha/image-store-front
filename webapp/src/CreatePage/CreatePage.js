import React from 'react';
import './CreatePage';
import ImageList from './ImageList';
import { useSelector } from 'react-redux'

const CreatePage = () => {
    
    const images = useSelector( (state) => {
        console.log(state);
        const collections = state.collection.data;
        return collections[collections.length-1].images;
    });

    return (
    
        <div>
            {
                <ImageList images={images}/>
            }
            <button>Add More</button>
            <button>Save</button>
    
        </div>
    )
};

export default CreatePage;