import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Charlie';
export const siteTitle = 'Charlie Mouton';

function Metadata() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" /> {/*TODO: Add favicon */}
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


function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <Image
          priority
          src="/images/header-logo.svg"
          height={40}
          width={237}
          alt="" />

        <div className={styles.headerLink}> <Link href={"/"} >Growth </Link></div>
        <div className={styles.headerLink}> <Link href={"/"} >Order </Link></div>
        <Link href={"/"} className={styles.headerButton}>My Resume</Link>
      </div>
    </>
  )
};

function Hero() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <Image
          priority
          src="/images/hi-graphic.svg"
          height={100}
          width={66}
          alt="" />
        <div className={styles.heroTextContainer}>
          <h1>Nice to meet you</h1>
          <Paragraph textSize="bodyLarge" Content="
            I’m excited to share a bit about myself through this personal portfolio. You can read a bit more about me below or use the ‘Values’ links in the header to read a bit more about my management style.
            "></Paragraph>
        </div>
      </div>
    </>
  )
};

function PersonalStatement() {
  return (
    <div className={styles.sectionContainer} style={{ 'border-bottom': 'none' }}>
      <Paragraph textSize="bodyNormal" Content="
        I am a detail-oriented, compassionate manager that geeks out on enhancing processes to improve the quality of work and life for my team. I am thrilled to work directly with contributors to unlock potential, reduce stress, and discover satisfaction and meaning in the day to day. I am currently seeking an opportunity to work with a team of driven, fun folks to create digital experiences that empower users to do what they want and need with less effort and frustration along the way."></Paragraph>
    </div>
  )
}

function Footer() {
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

function Paragraph({Content, textSize}) {
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


export default function Layout({ children, home }) {
  return (    
    <div className={styles.container}>
      <Metadata />
      <Header />
      <Hero />
      <PersonalStatement />
      <Footer />
    </div>

  );
}