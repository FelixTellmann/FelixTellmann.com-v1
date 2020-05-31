import React, { FC } from "react";
import './Page.scss';
import { Border } from "components/global/Border";

type PageProps = {
    loading: boolean
}

export const Page: FC<PageProps> = ({ children, loading }) => {
    return (
        <div className="page">
           {/* <Border loading={loading} width="7px" duration={3} />*/}
            {children}
        </div>
    );
};