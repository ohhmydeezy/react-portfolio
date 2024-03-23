import Hero from '../main-hero/hero'
import TextBubble from '../text-bubbles/text-bubble';
import ImageSlider from '../carousel/ImageSlider';


function Home() {
    return (
        <div>
            <Hero />
            <ImageSlider />
            <TextBubble />
        </div>
    );
}

export default Home;