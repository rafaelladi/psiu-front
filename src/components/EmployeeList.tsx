import { Table } from "flowbite-react";
import React from "react";
import Link from "next/link";
import {FaCheck, FaTimes} from "react-icons/fa";

const EmployeeList: React.FC = () => {
    return (
        <Table hoverable={true}>
            <Table.Head>
                <Table.HeadCell>
                    Nome
                </Table.HeadCell>
                <Table.HeadCell>
                    Descrição
                </Table.HeadCell>
                <Table.HeadCell>
                    Ativo
                </Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">
                        Edit
                    </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        Psiu, eu te escuto
                    </Table.Cell>
                    <Table.Cell>
                        Projeto de apoio emocional
                    </Table.Cell>
                    <Table.Cell>
                        <FaCheck color="green" />
                    </Table.Cell>
                    <Table.Cell>
                        <Link href="/test">
                            <a className="font-medium text-blue-600 hover:underline">
                                Edit
                            </a>
                        </Link>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        Psiu, eu te escuto
                    </Table.Cell>
                    <Table.Cell>
                        Projeto de apoio emocional
                    </Table.Cell>
                    <Table.Cell>
                        <FaTimes color="red" />
                    </Table.Cell>
                    <Table.Cell>
                        <Link href="/test">
                            <a className="font-medium text-blue-600 hover:underline">
                                Edit
                            </a>
                        </Link>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        Psiu, eu te escuto
                    </Table.Cell>
                    <Table.Cell>
                        Projeto de apoio emocional
                    </Table.Cell>
                    <Table.Cell>
                        <FaCheck color="green" />
                    </Table.Cell>
                    <Table.Cell>
                        <Link href="/test">
                            <a className="font-medium text-blue-600 hover:underline">
                                Edit
                            </a>
                        </Link>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        Psiu, eu te escuto
                    </Table.Cell>
                    <Table.Cell>
                        Projeto de apoio emocional
                    </Table.Cell>
                    <Table.Cell>
                        <FaTimes color="red" />
                    </Table.Cell>
                    <Table.Cell>
                        <Link href="/test">
                            <a className="font-medium text-blue-600 hover:underline">
                                Edit
                            </a>
                        </Link>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}

export default EmployeeList;