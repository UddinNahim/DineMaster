import Banner from './Banner';
import Menu from './../Menu/Menu';
import OnlineOrder from './OnlineOrder';
import PopularMenu from './PopularMenu';
import Reviews from './TESTIMONIALS/Reviews';
import OurShop from '../Our Shop/OurShop';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <OnlineOrder />
            <PopularMenu />
            <Menu />
            <OurShop />
            <Reviews />

        </div>
    );
};

export default Home;