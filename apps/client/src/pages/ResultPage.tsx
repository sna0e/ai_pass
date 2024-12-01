import { Button } from "@repo/ui/button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ResultPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const imgData = queryParams.get("image") ?? "";
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/guide");
  };

  const handleDownload = () => {
    if (!imgData) return;

    const imgBlob = base64ToBlob(imgData);
    const url = URL.createObjectURL(imgBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "passport_img.png";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const base64ToBlob = (base64Data: string) => {
    const byteCharacters = atob(base64Data.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: "image/png" });
  };
  return (
    <Container>
      <Photo src={imgData} />
      <ButtonContainer>
        <Button className={"second"} clickButton={handleBack}>
          버리고 다시 촬영
        </Button>
        <Button className={"primary"} clickButton={handleDownload}>
          여권 사진 저장
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.img`
  margin-top: 40px;
  width: 214px;
  height: 275px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 600px;
  width: 86vw;
`;
