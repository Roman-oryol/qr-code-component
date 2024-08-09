import {
  Article,
  Figure,
  Img,
  TextWrapper,
  Title,
  Description,
} from './styles';
import qrCode from '../../assets/image-qr-code.png';

function QrCode() {
  return (
    <Article>
      <Figure>
        <Img
          src={qrCode}
          width="288"
          height="288"
          alt="qr code of site Frontend Mentor"
        />
      </Figure>
      <TextWrapper>
        <Title>Improve your front-end skills by building projects</Title>
        <Description>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Description>
      </TextWrapper>
    </Article>
  );
}

export default QrCode;
