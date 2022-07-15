import {Button, Label, Spinner, TextInput} from "flowbite-react";
import {NextPage} from "next";
import Head from "next/head";
import {Top} from "../components/nav/Top";
import Link from "next/link";
import {useForm} from "../hooks/useForm";
import {signIn, SignInRequest} from "../api/auth";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter();

    const initialState: SignInRequest = {
        email: "",
        password: ""
    };

    const { onChange, onSubmit, values, isLoading } = useForm(initialState, async () => {
        await signIn(values);
        await router.push("/org")
    });

    return (
        <>
            <Head>
                <title>Bem vindo ao Be Connect</title>
                <meta name="description" content="Conectando pessoas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Top />

            <main className="w-screen h-screen flex flex-col items-center px-3">
                <h2 className="text-2xl">Bem vindo ao Be Connect</h2>
                <div className="py-2" />
                <div className="rounded-xl border border-1 shadow border-gray-300 w-full sm:w-1/2 p-3 items-center text-center">
                    <form onSubmit={onSubmit} className="flex flex-col gap-1">
                        <div className="block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            defaultValue={initialState.email}
                            onChange={onChange}
                            required={true}
                        />
                        <div className="block">
                            <Label htmlFor="password" value="Senha" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            defaultValue={initialState.password}
                            placeholder="Senha"
                            onChange={onChange}
                            required={true}
                        />
                        <div className="pt-3 flex flex-col items-end">
                            <Button disabled={isLoading} type="submit">
                                {
                                    isLoading ?
                                        <>
                                            <Spinner />
                                            <span className="pl-3">Entrar</span>
                                        </> :
                                        "Entrar"
                                }
                            </Button>
                        </div>
                    </form>
                    <div className="flex flex-col item-center pt-4">
                        <Link href="/test">
                            <a className="font-medium text-blue-700 hover:underline">
                                Não possui cadastro?
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;