import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Container, Row, Text } from '@nextui-org/react';

export default function Home({ posts }) {
  return (
    <Container responsive>
      {posts.map(({ slug, frontmatter }, index) => (
        <Card
          auto={true}
          animated
          key={slug}
          css={{
            marginTop: index > 0 ? '$10' : '$0',
          }}
        >
          <Row>
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <Text
                  h2
                  css={{
                    textGradient: '45deg, $blue500 -20%, $pink500 50%',
                  }}
                  weight="bold"
                >
                  {frontmatter.title}
                </Text>
              </a>
            </Link>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
