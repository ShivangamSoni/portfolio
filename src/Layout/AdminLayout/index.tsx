import { SessionProvider } from "next-auth/react";
import type { FC, ReactNode } from "react";
import { Children } from "react";
import AdminHeader from "../../Site/AdminHeader";
import { Wrapper } from "./Styled";

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
    // @ts-expect-error
    const session = Children.toArray(children)[0]?.props?.session;

    return (
        <SessionProvider session={session}>
            <Wrapper>
                <AdminHeader />
                {children}
            </Wrapper>
        </SessionProvider>
    );
};

export default AdminLayout;
