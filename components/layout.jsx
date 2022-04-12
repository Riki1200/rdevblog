import Link from 'next/link';
import { Text, useTheme, Card, Grid, Container } from '@nextui-org/react';
export default function Layout({ children }) {
  return (
    <>
      <Grid.Container>
        <Grid fluid xl={100}>
          <Link href="/">
            <a>🏡</a>
          </Link>
          <Text span>Welcome to my blog</Text>{' '}
          <Card css={{ px: '$4' }}>
            <Text
              h1
              size={60}
              css={{
                textGradient: '45deg, $blue500 -20%, $pink500 50%',
              }}
              weight="bold"
            >
              Lets
            </Text>
            <Text
              h1
              size={60}
              css={{
                textGradient: '45deg, $purple500 -20%, $pink500 100%',
              }}
              weight="bold"
            >
              Make the Web
            </Text>
            <Text
              h1
              size={60}
              css={{
                textGradient: '45deg, $yellow500 -20%, $red500 100%',
              }}
              weight="bold"
            >
              Prettier
            </Text>
          </Card>
        </Grid>

        <Grid
          alignContent="stretch"
          xl={4}
          css={{
            padding: '$14',
          }}
        >
          <main>{children}</main>
        </Grid>

        <Grid xl={6}>
          <Text
            css={{
              color: '$blue800',
              fontSize: '$tiny',
              padding: '$2 $4',
            }}
          >
            &copy; 2022 DailyDevTips
          </Text>
        </Grid>
      </Grid.Container>
    </>
  );
}
