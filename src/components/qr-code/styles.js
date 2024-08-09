import styled from 'styled-components';

const Article = styled.article`
  width: 320px;
  padding: 16px 16px 40px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
`;

const Figure = styled.figure`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing300};
`;

const Img = styled.img`
  display: block;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing200};
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing200};
  font-size: ${({ theme }) => theme.textPreset1.fontSize};
  line-height: ${({ theme }) => theme.textPreset1.lineHeight};
  font-weight: ${({ theme }) => theme.textPreset1.fontWeight};
  color: ${({ theme }) => theme.color.slate900};
`;

const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.textPreset2.fontSize};
  line-height: ${({ theme }) => theme.textPreset2.lineHeight};
  font-weight: ${({ theme }) => theme.textPreset2.fontWeight};
  letter-spacing: ${({ theme }) => theme.textPreset2.letterSpacing};
  color: ${({ theme }) => theme.color.slate500};
`;

export { Article, Figure, Img, TextWrapper, Title, Description };
