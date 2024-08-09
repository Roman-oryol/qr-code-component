import ComponentWrapper from '../wrapper/ComponentWrapper';
import QrCode from '../qr-code/QrCode';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ComponentWrapper>
        <QrCode />
      </ComponentWrapper>
    </>
  );
}

export default App;
