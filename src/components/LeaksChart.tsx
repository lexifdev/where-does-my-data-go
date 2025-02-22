import { Box, Container, Typography } from "@mui/material";
import useScript from "./useScript";

export default function LeaksChart() {
  useScript("https://public.flourish.studio/resources/embed.js");
  return (
    <Container sx={{ my: 6 }}>
      <Box mb={6}>
        <div
          className="flourish-embed flourish-network"
          data-src="visualisation/11936083"
        ></div>
      </Box>
      <Typography variant="body1">
        온라인 쇼핑몰이나, 카카오톡, 기프티콘, 콘텐츠를 보기 위해 온라인
        서비스를 가입하려면 매번 눈에 띄는것이 법률적인 내용이 작은글씨로 화면
        가득히 담긴 ‘이용약관'과 ‘개인정보처리 방침'입니다. 혹시 이 페이지를 잘
        읽고 회원가입 하시나요?
        <br />
        <br />
        회원가입에서 무심코 정보제공 동의를 한 이름, 전화번호, 생년월일은 물론
        카드번호와 같은 중요한 금융정보들은 안전하게 잘 관리되고 있을까요?
      </Typography>
      <Typography variant="h6" sx={{ mt: 6 }}>
        <b>개인정보 계열사/제3자 정보 제공</b>
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        네이버, 카카오등의 온라인 서비스들은 수집한 이용자의 정보를 ‘더 나은
        서비스를 위한 계열사/제3자 정보 제공'이라는 조항으로 여러분의 정보를
        다른 기업에 제공한다는 내용은 익히 알고있는 사실입니다. 그럼 주요
        서비스들이 여러분의 개인정보를 제공하는 기업 수는 얼마나 될까요?
      </Typography>
    </Container>
  );
}
