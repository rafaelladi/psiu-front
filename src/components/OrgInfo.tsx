import React from "react";
import {Label, Textarea, TextInput} from "flowbite-react";

const OrgInfo: React.FC = () => {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="orgName" value="Nome" />
                    </div>
                    <TextInput
                        id="orgName"
                        type="text"
                        value="Org XXXX"
                        required={true}
                        />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your message" />
                    </div>
                    <Textarea
                        id="orgDescription"
                        placeholder="Descrição"
                        required={true}
                        rows={4}
                        />
                </div>
            </form>
        </div>
    )
}

export default OrgInfo;