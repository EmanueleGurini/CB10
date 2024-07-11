import ShowBox from "../showbox/ShowBox";
import ThumbNail from "../thumbnail/ThumbNail";

function ProductLightBox() {
  return (
    <div>
      <ShowBox imgUrl="./src/assets/images/image-product-1.jpg" />
      <ThumbNail thumbNail="./src/assets/images/image-product-1-thumbnail.jpg" />
    </div>
  );
}

export default ProductLightBox;
