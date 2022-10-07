import type { FC, ReactNode } from "react";
import AdminHeader from "../../Site/AdminHeader";
import { Wrapper } from "./Styled";

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
            <AdminHeader />
            {children}
        </Wrapper>
    );
};

export default AdminLayout;
