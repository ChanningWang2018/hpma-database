import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Comprehensive Card Details",
    Svg: require("@site/static/img/duelling_club.svg").default,
    description: (
      <>Display detailed statistics and information for each card.</>
    ),
  },
  {
    title: "Community Shared Strategies",
    Svg: require("@site/static/img/herbology_classroom.svg").default,
    description: (
      <>Discover and share player strategies and guides with the community.</>
    ),
  },
  {
    title: "Open Source and Free",
    Svg: require("@site/static/img/ballroom.svg").default,
    description: (
      <>
        Our project is open source and free for everyone to use and contribute
        to.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
