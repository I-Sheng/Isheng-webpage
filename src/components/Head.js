import SEO from "./SEO";

function Head() {
  return (
    <div>
      <SEO title="Isheng webpage" description="home page of the site" url="/">
        <meta name="auhtor" content="Isheng Lee" />
        <meta
          name="description"
          content="Welcome to Isheng's webpage, showcasing four projects that highlight my practical skills and expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="english" />.
        <meta property="og:title" content="Isheng webpage" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Welcome to Isheng's webpage, showcasing four projects that highlight my practical skills and expertise."
        />
      </SEO>
    </div>
  );
}

export default Head;

