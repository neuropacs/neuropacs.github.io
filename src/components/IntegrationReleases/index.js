import clsx from "clsx";
import styles from "./styles.module.css";

const releaseContext = require.context(
  "@site/src/data/integration-releases",
  true,
  /\.mdx?$/
);

const releaseItems = releaseContext.keys().map((key) => {
  const module = releaseContext(key);
  const [, integration, fileName] =
    key.match(/^\.\/([^/]+)\/(.+\.mdx?)$/) ?? [];

  return {
    integration,
    fileName,
    Component: module.default,
    frontMatter: module.frontMatter ?? {}
  };
});

function parseReleaseDate(value) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value) {
  const date = parseReleaseDate(value);

  if (!date) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(date);
}

function sortReleases(a, b) {
  const firstDate = parseReleaseDate(a.frontMatter.date)?.getTime() ?? 0;
  const secondDate = parseReleaseDate(b.frontMatter.date)?.getTime() ?? 0;

  if (firstDate !== secondDate) {
    return secondDate - firstDate;
  }

  return (b.frontMatter.version ?? b.fileName).localeCompare(
    a.frontMatter.version ?? a.fileName,
    undefined,
    { numeric: true }
  );
}

export default function IntegrationReleases({ integration }) {
  const releases = releaseItems
    .filter((release) => release.integration === integration)
    .sort(sortReleases);

  if (releases.length === 0) {
    return (
      <div className={clsx(styles.releaseEmptyState, "theme-admonition")}>
        <p>No releases have been published yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.releaseList}>
      {releases.map(({ Component, fileName, frontMatter }) => {
        const { title, version, date, summary, tags = [] } = frontMatter;
        const releaseTags = Array.isArray(tags) ? tags : [tags];

        return (
          <details className={styles.releaseCard} key={fileName}>
            <summary className={styles.releaseToggle}>
              <div className={styles.releaseHeader}>
                <div>
                  <h3 className={styles.releaseTitle}>
                    {title ?? version ?? fileName.replace(/\.mdx?$/, "")}
                  </h3>
                  <div className={styles.releaseMeta}>
                    {version && (
                      <span className={styles.releaseVersion}>{version}</span>
                    )}
                    {date && <time dateTime={date}>{formatDate(date)}</time>}
                  </div>
                </div>
                {releaseTags.length > 0 && (
                  <div className={styles.releaseTags}>
                    {releaseTags.map((tag) => (
                      <span className={styles.releaseTag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {summary && <p className={styles.releaseSummary}>{summary}</p>}
            </summary>
            <div className={styles.releaseBody}>
              <Component />
            </div>
          </details>
        );
      })}
    </div>
  );
}
