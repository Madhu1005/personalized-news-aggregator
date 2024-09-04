import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Personalized News Aggregator" },
    { name: "description", content: "This is a Personalized News Aggregator!" },
  ];
};

export default function Index() {
  return <></>;
}
