// Styles
import { flex } from "@styled-system/patterns";

// Components
import { Box } from "@styled-system/jsx";
import PageContainer from "@components/page-container";
import Title from "@components/title";
import Card from "@components/card";
import CardHeader from "@components/card-header";
import CardTitle from "@components/card-title";
import CardLogo from "@components/card-logo";
import CardBody from "@components/card-body";

export default function AboutPage() {
  return (
    <PageContainer>
      <Box
        className={flex({
          w: "full",
        })}
      >
        <Box
          className={flex({ w: "full", justify: "center", align: "center" })}
        >
          <Title>Experience</Title>
        </Box>
        <Box
          className={flex({ w: "full", justify: "center", align: "center" })}
        >
          <Title>Education</Title>
        </Box>
      </Box>
      <Box>
        <Card>
          <CardHeader>
            <CardLogo src="" alt="logo" />
            <CardTitle>Company Name</CardTitle>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            aut et debitis, eveniet in maxime, corporis deserunt sed accusantium
            sequi expedita officia amet similique atque. Natus quasi optio
            veritatis. Minima!
          </CardBody>
        </Card>
      </Box>
    </PageContainer>
  );
}
