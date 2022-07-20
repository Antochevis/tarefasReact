import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import SectionCards from './componentes/main/sectionCards/SectionCards';
import Text from './componentes/main/sectionText/Text';
import SectionMap from './componentes/main/sectionMap/SectionMap';

function App() {
  return (
    <div className="home">
      <Header />
      <SectionCards />
      <Text />
      <SectionMap />
      <Footer />
    </div>
  );
}

export default App;
