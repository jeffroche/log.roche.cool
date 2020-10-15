import { GetStaticProps } from 'next'
import Head from "next/head";
import { useState } from "react";

import ItemList from "../components/ItemList";
import TypeDropdown from "../components/TypeDropdown";
import YearDropdown from "../components/YearDropdown";
import * as types from "../types";

export default function Home({ items }) {
  let posts = recordsToPosts(items);
  const [typeFilter, setTypeFilter] = useState<types.ItemTypes | "">("");
  const [yearFilter, setYearFilter] = useState<string>("");
  if (typeFilter) {
    posts = posts.filter(p => p.type === typeFilter);
  }
  if (yearFilter) {
    posts = posts.filter(p => p.created.startsWith(yearFilter));
  }
  return (
    <div>
      <Head>
        <title>Jeff's Tumblog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-xl pt-4">
        <h1 className="title mb-4">Jeff's Tumblog</h1>
        <div className="flex flex-row">
          <div className="pr-4">
            <TypeDropdown typeSelected={typeFilter} changeHandler={setTypeFilter} />
          </div>
          <div>
            <YearDropdown yearSelected={yearFilter} changeHandler={setYearFilter} />
          </div>
        </div>
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
  queryParams.append("view", "To Show");
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
  return { props: { items }, revalidate: 1 };
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
