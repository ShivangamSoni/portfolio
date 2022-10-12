import { FC } from "react";

export interface IContacts {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    responded: boolean;
}

const ContactsComp: FC<{ contacts: IContacts[] }> = ({ contacts }) => {
    return (
        <div>
            <h1>ContactsComp</h1>
            <pre>{JSON.stringify(contacts, null, 4)}</pre>
        </div>
    );
};

export default ContactsComp;
