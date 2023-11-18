import { ContentContainer, Intro, PageContainer } from '@home';
import { ShowRow } from '@show';

export function Home() {
  return (
    <PageContainer>
      <Intro />
      <ContentContainer>
        <ShowRow />
      </ContentContainer>
    </PageContainer>
  );
}
