import Head from "./Head/Head";
import { Transition } from '../../components/Transition/Transition';

const MarketPlace = () => {
  return (
    <main>
      <Head />
    </main>
  );
};

const TransitionedMarketPlace = Transition(MarketPlace);

export default TransitionedMarketPlace;

