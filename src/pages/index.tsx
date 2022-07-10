import type {NextPage} from "next";
import Head from "next/head";
import {Alert, Button, Card, Navbar, Tabs, Toast} from "flowbite-react";
import Link from "next/link";
import OrgInfo from "../components/OrgInfo";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Be Connect</title>
                <meta name="description" content="Conectando pessoas"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="https://flowbite.com">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://flowbite.com/docs/images/logo.svg"
                         className="mr-3 h-6 sm:h-9"
                         alt="Flowbite logo"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Be Connect
              </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        Get started
                    </Button>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Link href="/test"><Navbar.Link href="/test" active={true}>Home</Navbar.Link></Link>
                    <Link href="/test"><Navbar.Link href="/test" active={true}>About</Navbar.Link></Link>
                    <Link href="/"><Navbar.Link href="/" active={true}>Services</Navbar.Link></Link>
                    <Link href="/"><Navbar.Link href="/" active={true}>Pricing</Navbar.Link></Link>
                    <Link href="/"><Navbar.Link href="/" active={true}>Contact</Navbar.Link></Link>
                </Navbar.Collapse>
            </Navbar>

            <main className="w-screen h-screen flex flex-col items-center">
                <div className="w-full px-4">
                    <div className="rounded border border-1 shadow border-gray-300 min-w-full">
                        <Tabs.Group aria-label="Default tab" style="underline">
                            <Tabs.Item title="Informações" active={true}>
                                <OrgInfo />
                            </Tabs.Item>
                            <Tabs.Item title="Projetos" active={true}>Project content</Tabs.Item>
                            <Tabs.Item title="Funcionários" active={true}>Employee content</Tabs.Item>
                            <Tabs.Item title="Atendimentos" active={true}>Appointments content</Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
