import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '/./components/layout.module.css';
import {Metadata, Header, GrowthHero, Footer, Paragraph, Subtitle} from '../../components/layout';


export default function Growth() {
    return (
        <div className={styles.container}>
            <Metadata />
            <Header />
            <GrowthHero />
            <div className={styles.sectionContainer}>
                <h3>Growth is not possible without certain important ingredients! Feedback, reflection, and iteration are held close when thinking about growth for me and my team.</h3>
            </div>
            <div className={styles.sectionContainer}>
                <Subtitle Graphic="feedback" Content="
                    Feedback
                " />
                <Paragraph textSize="bodyNormal" Content="
                    Structured and unstructured feedback creates a space where ideas can flow freely between team members, challenging each of us to present our best work and expect great work from others. Critique is leveraged on both what gets done as well as *how* it gets done to allow for future work to be even better. Each person brings unique strengths, weaknesses, and perspectives, which when aired openly, can be combined to enhance our team capabilities. Published work must undergo peer critique to ensure excellence, and I encourage direct peer to peer feedback and well as upward feedback to address missed expectations and opportunities to broaden our understanding of the work and each other."></Paragraph>
            </div>

            <div className={styles.sectionContainer}>
                <Subtitle Graphic="reflection" Content="
                    Reflection
                " />
                {/* TODO: Update tense to be personal */}
                <Paragraph textSize="bodyNormal" Content="
                    When much of this feedback is leveraged, there's a specific focus on enhancing the related work or process. ~How can we get this to a place where it can be delivered.~ I think it's important to additionally take time as individuals and a team to reflect on feedback and our personal experience on a project; to check in with our feelings and thoughts. This can surface additional insights, often from a wider point of view, and is an important step in internalizing and processing smaller feedback to spot patterns that may require a shift in approach. These patterns lead to some of the strongest insights, leading to larger strides of growth for a team member or the team as a whole. Monthly team reflections are a great place to celebrate the wins and discuss opportunities for growth as a group, and consistent manager 1:1s are a great place to reflect on feedback given and received, and collaborate to identify patterns and actions that can enhance future work."></Paragraph>
            </div>

            <div className={styles.sectionContainer}>
                <Subtitle Graphic="iteration" Content="
                    Iteration
                " />
                <Paragraph textSize="bodyNormal" Content="
                    Once the feedback and insights have been gathered, discussed, and reflected upon, it's important to get the opportunity to take that growth into the next work you are working on. Intentionally repeating and iterating on projects and processes is important to identify what adjustments are making the right impact, and identify variables that may warrant a different approach. Additionally, it allows an individual to see themselves handle similar challenges better each time, providing that satisfying experience of developing mastery over time. I love iterating on a team process, such as onboarding, to make the experience even better for the new hire each time. Structured feedback and reflection throughout the experience tracks that growth."></Paragraph>
            </div>
            <Footer />
        </div>
    )
}