import ImgBig1 from './assets/image-product-1.jpg';
import ImgBig2 from './assets/image-product-2.jpg';
import ImgBig3 from './assets/image-product-3.jpg';
import ImgBig4 from './assets/image-product-4.jpg';
import Img1 from './assets/image-product-1-thumbnail.jpg';
import Img2 from './assets/image-product-2-thumbnail.jpg';
import Img3 from './assets/image-product-3-thumbnail.jpg';
import Img4 from './assets/image-product-4-thumbnail.jpg';

const thumbImg = {
  img1: Img1,
  img2: Img2,
  img3: Img3,
  img4: Img4,
};
const imgs = [
  {
    img: ImgBig1,
  },
  {
    img: ImgBig2,
  },
  {
    img: ImgBig3,
  },
  {
    img: ImgBig4,
  },
];

const cartItems = [
  {
    id: 1,
    count: 0,
    title: 'Fall Limited Edition Sneakers',
    det: " These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.",
    currPrice: 125.0,
    prevPrice: '$250.00',
    discount: '50%',
    img: imgs,
    thumbImg: thumbImg,
  },
];

export default cartItems;
