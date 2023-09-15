import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Charlie';
export const siteTitle = 'Charlie Mouton';

export function Metadata() {
  return (
    <>
      <Head>
      <link rel="icon" href="images/favicon.ico?v=2" type="image/x-icon"/>
      </Head>
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js" // TODO: Update with a brief description
      />
      <meta
        property="og:image" // TODO: update with my graphic face?
        content="" /><meta name="og:title" content={siteTitle} /><meta name="twitter:card" content="summary_large_image" />
          </>
  )
};


export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image
            priority
            src="/images/header-logo.svg"
            height={40}
            width={237}
            alt="" 
          />
        </Link>
        <div className={styles.headerLink}> <Link href={"/values/growth"} >Growth </Link></div>
        <div className={styles.headerLink}> <Link href={"/values/order"} >Order </Link></div>
        <Link href={"/"} className={styles.headerButton}>My Resume</Link>
      </div>
    </>
  )
};

function LandingHero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Image
          priority
          src="/images/hi-graphic.svg"
          height={100}
          width={66}
          alt="" />
        <div className={styles.heroTextContainer}>
          <h1>Nice to meet you</h1>
          <Paragraph textSize="bodyLarge" Content="
            I’m excited to share a bit about myself through this personal portfolio. You can find my personal statement below or use the ‘Values’ links in the header to read a bit more about my management style.
            "></Paragraph>
        </div>
      </div>
    </>
  )
};

export function GrowthHero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Image
          priority
          src="/images/growth-graphic.svg"
          height={138}
          width={80}
          alt="" />
        <div className={styles.heroTextContainer}>
          <h2>Finding Joy in Growth</h2>
          <Paragraph textSize="bodyNormal" Content="
            Nothing gets me more energized and motivated quite like an opportunity to challenge myself or a peer to grow. I think development is one of the most satisfying experiences of human existence, and I relish being able to leverage that in my professional life.
            "></Paragraph>
        </div>
      </div>
    </>
  )
};

// export function OrderHero() {
//   return (
//     <>
//       <div className={styles.heroContainer}>
//         <Image
//           priority
//           src="/images/hi-graphic.svg"
//           height={100}
//           width={66}
//           alt="" />
//         <div className={styles.heroTextContainer}>
//           <h1>Nice to meet you</h1>
//           <Paragraph textSize="bodyLarge" Content="
//             I’m excited to share a bit about myself through this personal portfolio. You can find my personal statement below or use the ‘Values’ links in the header to read a bit more about my management style.
//             "></Paragraph>
//         </div>
//       </div>
//     </>
//   )
// };

export function PersonalStatement() {
  return (
    <div className={styles.sectionContainer} style={{'border-bottom': 'none' }}>
      <Paragraph textSize="bodyNormal" Content="
        I am a detail-oriented, compassionate manager that geeks out on enhancing processes to improve the quality of work and life for my team. I am thrilled to work directly with contributors to unlock potential, reduce stress, and discover satisfaction and meaning in the day to day. I am currently seeking an opportunity to work with a team of driven, fun folks to create digital experiences that empower users to do what they want and need with less effort and frustration along the way."></Paragraph>
    </div>
  )
}

export function Footer() {
  return (
      <div className={styles.footerContainer} >
          <div style={{ 
            'background-color': 'var(--teal)',
            width: '40px',
            height: '4px',
          }}></div>
          <div className='bodySmall' style={{ color: 'var(--white)' }}>
            Made with love
          </div>
      </div>
    )
  }

  export function Paragraph({Content, textSize}) {
  return (
    <>
      <div className={styles.paragraphContainer}>
        <div className={textSize}>
          {Content}
        </div>
      </div>
    </>
  )
};

export function Subtitle({Content, Graphic}) {
  return (
    <div>
      <h2 className={styles.subtitle + ' ' + styles[Graphic]}>
        {Content}
      </h2>
    </div>
  )
};



export default function Layout({ children, home }) {
  return (    
    <div className={styles.container}>
      <Metadata />
      <Header />
      <LandingHero />
      <PersonalStatement />
      <Footer />
    </div>

  );
}