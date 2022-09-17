import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgBig1 from '../assets/image-product-1.jpg';
import ImgBig2 from '../assets/image-product-2.jpg';
import ImgBig3 from '../assets/image-product-3.jpg';
import ImgBig4 from '../assets/image-product-4.jpg';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const Card = ({ img }) => {
  const dispatch = useDispatch();
  return (
    <div
      className='card--con'
      onClick={() => {
        dispatch(openModal());
      }}
    >
      <img src={img} alt='/' />
    </div>
  );
};

function ImgSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={require(`../assets/image-product-${i + 1}-thumbnail.jpg`)}
            alt='/'
          />
        </a>
      );
    },
    dots: true,
    arrows: true,
  };
  // const { cartItems } = useSelector((store) => store.cart);
  // const data = cartItems[0].img;
  return (
    <>
      <Slider {...settings}>
        <Card img={ImgBig1} />
        <Card img={ImgBig2} />
        <Card img={ImgBig3} />
        <Card img={ImgBig4} />
      </Slider>
    </>
  );
}

export default ImgSlider;
