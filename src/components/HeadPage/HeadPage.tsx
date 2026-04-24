import { ReactNode } from "react";
import "./HeadPage.scss";

type Props = {
    children: ReactNode;
}

const HeadPage = ({ children }: Props) => {
    return (
        <div className="head-page">
            {children}
        </div>
    );
}

export default HeadPage;