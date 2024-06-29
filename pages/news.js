import Head from 'next/head'
import NewsList from '@/components/NewsList'
import IconList from '@/components/IconList'

export default function News({news}) {
  return (
    <>
      <Head>
        <title>SSDC Website - News</title>
        <meta
          name="description"
          content="Stay updated with our latest news. This website is run by ssdc seneca"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h2>Latest News</h2>
      </div>
      <NewsList news={news} />
      <IconList />
    </>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_ENDPOINT}/api/news`);
    const news = await res.json();

    if (!news) {
        return {
          notFound: true,
        }
      }

    return {
        props: { news },
    };
}
