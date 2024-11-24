import { useNavigate } from "react-router-dom";
import logo from "../assets/ai-pass.svg";
import styled from "styled-components";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleWebcamClick = () => {
    navigate("/guide");
  };

  return (
    <Container>
      <BackgroundImg />
      <Logo>
        <img src={logo} alt="img" />
      </Logo>
      <Title>
        <TitleHeader>실시간 여권 규정 검증</TitleHeader>
        <div>더욱 빠르고 정확한</div>
        <div>여권 사진 촬영</div>
      </Title>
      <Explanation>
        <ExplanationHeader>실시간으로 확인할 수 있어요!</ExplanationHeader>
        <Li>얼굴 윤곽</Li>
        <Li>얼굴 방향</Li>
        <Li>얼굴 표정</Li>
        <Li>조명 및 그림자</Li>
      </Explanation>
      <ButtonContainer>
        <Button>사진첩에서 업로드</Button>
        <Button onClick={handleWebcamClick}>지금 촬영</Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundImg = styled.div`
  background-image: url("src/assets/plane.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 30px;
  line-height: 50px;
  font-weight: 700;
`;

const TitleHeader = styled.div`
  color: #0c1870;
`;

const Explanation = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  border: 1px solid #0c1870;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ExplanationHeader = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Li = styled.li`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1.2%;
`;

const ButtonContainer = styled.div`
  margin-top: 108px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  margin: 8px;
  border: 1px solid #0c1870;
  border-radius: 12px;
  background-color: white;
  color: #0c1870;
  padding: 18px 16px;
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
`;
