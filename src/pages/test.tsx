import type { NextPage } from "next";
import Head from "next/head";
import {Alert, Button, Navbar} from "flowbite-react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Be Connect</title>
        <meta name="description" content="Conectando pessoas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar fluid={true} rounded={true} >
          <Navbar.Brand href="https://flowbite.com">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://flowbite.com/docs/images/logo.svg"
                   className="mr-3 h-6 sm:h-9"
                   alt="Flowbite logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Flowbite
              </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
              <Button>
                  Get started
              </Button>
              <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
              <Link href="/"><Navbar.Link href="/" active={true}>Home</Navbar.Link></Link>
              <Link href="/"><Navbar.Link href="/" active={true}>About</Navbar.Link></Link>
              <Link href="/"><Navbar.Link href="/" active={true}>Services</Navbar.Link></Link>
              <Link href="/"><Navbar.Link href="/" active={true}>Pricing</Navbar.Link></Link>
              <Link href="/"><Navbar.Link href="/" active={true}>Contact</Navbar.Link></Link>
          </Navbar.Collapse>
      </Navbar>


        test

      {/*<div className="w-screen h-screen flex flex-col justify-center items-center">*/}
      {/*  <div>*/}
      {/*      <Alert color="failure">*/}
      {/*          <span>*/}
      {/*              <span className="font-medium">*/}
      {/*                  Info alert!*/}
      {/*              </span>*/}
      {/*              {' '}Change a few things up and try submitting again.*/}
      {/*          </span>*/}
      {/*      </Alert>*/}
      {/*      <Button>*/}
      {/*          Default*/}
      {/*      </Button>*/}
      {/*      <Button color="success">*/}
      {/*          Success*/}
      {/*      </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Home;
