import { Box, Container, Typography } from "@mui/material";
import ex1 from "../assets/images/ex1.png";
export default function LeaksChart() {
  return (
    <Container sx={{ my: 6 }}>
      <Box mb={6}>
        <img src={ex1} alt="ex1" style={{ width: "100%" }} />
      </Box>
      <Typography variant="body1">
        온라인 쇼핑몰이나, 카카오톡, 기프티콘, 콘텐츠를 보기 위해 온라인
        서비스를 가입하려면 매번 눈에 띄는것이 법률적인 내용이 작은글씨로 화면
        가득히 담긴 ‘이용약관'과 ‘개인정보 처리방침'입니다. 혹시 이 페이지를 잘
        읽고 회원가입을 하시나요?
      </Typography>
    </Container>
  );
}
