import {
  Body,
  Col,
  Content,
  Grid,
  H1,
  H2,
  H3,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';
import React, { useEffect } from 'react';
import Bootstrap from './Bootstrap';
import MusicCard from './components/MusicCard';

export default function App() {
  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <Bootstrap>
      <Header transparent>
        <Left style={{ flex: 1 }} />
        <Body
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Title style={{ color: 'black' }}>Header</Title>
        </Body>
        <Right style={{ flex: 1 }} />
      </Header>
      <Content padder>
        <H1>Absen</H1>
        <Grid style={{ marginTop: 30, paddingHorizontal: 30 }}>
          <Col>
            <MusicCard />
          </Col>
        </Grid>
      </Content>
    </Bootstrap>
  );
}
