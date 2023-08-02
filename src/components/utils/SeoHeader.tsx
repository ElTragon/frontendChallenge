import Head from "next/head";

type Props = {
  route: string;
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

const baseUrl = "http://localhost:3000/";

export default function Meta(props: Props) {
  const title = props.title ? `${props.title} ` : `Frontend Challenge`;
  const url = baseUrl + props.route;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      {props.noIndex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {props.description && (
        <meta property="og:description" content={props.description} />
      )}
      {props.image && (
        <meta property="og:image" content={baseUrl + props.image} />
      )}
      <meta property="og:site_name" content="dotsFrontendChallenge" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      {props.description && (
        <meta name="twitter:description" content={props.description} />
      )}
      {props.image && (
        <meta name="twitter:image" content={baseUrl + props.image} />
      )}

      <link rel="canonical" href={url} />
    </Head>
  );
}
