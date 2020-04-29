import React, { FC } from "react";
import './Button.scss';

export const Button: FC = ({ children }) => {
    return (
        <div className="button">
            <span className="button__content">
                {children}
            </span>
        </div>
    );
};