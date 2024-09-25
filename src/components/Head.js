import SEO from "./SEO";

function Head() {
  return (
    <div>
      <SEO title="Isheng webpage" description="home page of the site" url="/">
        <meta name="auhtor" content="Isheng Lee" />
        <meta
          name="description"
          content="Taste perfection at Little Lemon Restaurant! Discover delicious delights in every dish at our cozy spot in NY."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="english" />.
        <meta property="og:title" content="Mangata and Gallo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content=".\images\website images.png" />
        <meta property="og:url" content="localhost" />
        <meta
          property="og:description"
          content="Taste perfection at Little Lemon Restaurant! Discover delicious delights in every dish at our cozy spot in NY."
        />
      </SEO>
    </div>
  );
}

export default Head;
