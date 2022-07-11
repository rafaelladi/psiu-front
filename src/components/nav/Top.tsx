import React from "react";
import {Button, Navbar} from "flowbite-react";
import Link from "next/link";

export const Top: React.FC = () => {
    return (
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
    );
}