import type {NextPage} from "next";
import Head from "next/head";
import {Tabs} from "flowbite-react";
import OrgInfo from "../components/org/OrgInfo";
import ProjectList from "../components/ProjectList";
import {FaBookMedical, FaGrinBeam, FaInfoCircle, FaUsers} from "react-icons/fa";
import EmployeeList from "../components/EmployeeList";
import {Top} from "../components/nav/Top";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Be Connect</title>
                <meta name="description" content="Conectando pessoas"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Top />

            <main className="w-screen h-screen flex flex-col items-center">
                <div className="w-full px-4">
                    <h2 className="text-2xl">Org XXXX</h2>
                    <div className="py-2" />
                    <div className="rounded border border-1 shadow border-gray-300 min-w-full">
                        <Tabs.Group aria-label="Default tab" style="underline">
                            <Tabs.Item icon={FaInfoCircle} title="Informações" active={true}>
                                <OrgInfo />
                            </Tabs.Item>
                            <Tabs.Item icon={FaBookMedical} title="Projetos" active={true}>
                                <ProjectList />
                            </Tabs.Item>
                            <Tabs.Item icon={FaUsers} title="Funcionários" active={true}>
                                <EmployeeList />
                            </Tabs.Item>
                            <Tabs.Item icon={FaGrinBeam} title="Atendimentos" active={true}>Appointments content</Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
