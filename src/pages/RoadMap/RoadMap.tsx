import { Transition } from '../../components/Transition/Transition';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Head from './Head/Head';

const RoadMap = () => {
  return (
    <main>
      <Head />

      <Events />

      <Footer />
    </main>
  );
};

const TransitionedRoadMap = Transition(RoadMap);

export default TransitionedRoadMap;
