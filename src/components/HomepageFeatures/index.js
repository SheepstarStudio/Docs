import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Connect',
        Svg: require('@site/static/img/connect.svg').default,
        description: (
            <>
                Connect with 100+ other discord servers and hang out with them in our server!
            </>
        ),
    },
    {
        title: 'Gain Achievements',
        Svg: require('@site/static/img/achievements.svg').default,
        description: (
            <>
                It's fun! Gain XP and level up to unlock achievements and get access to more features!
            </>
        ),
    },
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/dashboard.svg').default,
        description: (
            <>
                Our dashboard is easy to use and is designed to be user friendly!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
