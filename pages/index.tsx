import { GetStaticProps } from 'next'
import Head from "next/head";

import ItemList from "../components/ItemList";
import * as types from "../types";

export default function Home({ items }) {
  const posts = recordsToPosts(items);
  posts.sort((a, b) => {
    // newest to oldest
    if (a.created < b.created) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <div>
      <Head>
        <title>Jeff's Tumblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-xl pt-4">
        <h1 className="title">Jeff's Tumblog</h1>
        <ItemList items={posts} />
      </main>

      <footer></footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  let more = true;
  let items = [];
  const baseUrl = "https://api.airtable.com/v0/appyCRV9pIaeq29gR/Posts";
  let page = 1;
  const queryParams = new URLSearchParams();
  while (more) {
    console.log(`Fetching page ${page}`);
    const url = baseUrl + "?" + queryParams.toString();
    const resp = await fetch(
      url,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
        },
      }
    );
    const data = await resp.json();
    if (!resp.ok) {
      console.log("Error calling airtable", resp.status, data);
      more = false;
    }
    items = [...items, ...data.records];
    if ("offset" in data) {
      queryParams.set("offset", data.offset);
      ++page;
    } else {
      more = false;
    }
  }
  return { props: { items }, unstable_revalidate: 1 };
}

function recordsToPosts(records: types.AirtableItem[]): types.Item[] {
  const posts = records.map((r) => {
    return {
      id: r.id,
      name: r.fields.Name,
      type: r.fields.Type,
      comment: r.fields.Comment,
      created: r.fields["Created (Override)"]
        ? r.fields["Created (Override)"]
        : r.fields.Created,
      link: r.fields.Link,
    };
  });
  return posts;
}
