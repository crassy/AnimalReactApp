import './ImageList.css';
import ImageShow from "./ImageShow";


function ImageList({images}){
    const renderedImaged = images.map((image) => {
        return <ImageShow key ={Image.id} image ={image}/>;
    });
    return <div className="image-list">{renderedImaged}</div>
}

export default ImageList;