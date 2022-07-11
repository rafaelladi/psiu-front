import {NextPage} from "next";
import {useRouter} from "next/router";
import {Label, Spinner, Textarea, TextInput, ToggleSwitch} from "flowbite-react";
import Head from "next/head";
import {Top} from "../../components/nav/Top";
import React from "react";

const ProjectDetail: NextPage = () => {
    const router = useRouter();

    if (!router.isReady) return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <Spinner aria-label="Default status example" />
        </div>
    );

    const { id } = router.query;

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
                    <h2 className="text-2xl font">{id}</h2> {/*Nome do projeto*/}
                    <div className="py-2" />
                    <div className="rounded border border-1 shadow border-gray-300 min-w-full">
                        <form className="flex flex-col gap-4 px-3 pt-3 pb-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="orgName" value="Nome" />
                                </div>
                                <TextInput
                                    id="orgName"
                                    type="text"
                                    placeholder="Org XXXX"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Descrição" />
                                </div>
                                <Textarea
                                    id="orgDescription"
                                    placeholder="Descrição"
                                    required={true}
                                    rows={4}
                                />
                            </div>
                            <div>
                                <ToggleSwitch checked={true} label="Ativo" onChange={() => console.log("test")} disabled={true} />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProjectDetail;