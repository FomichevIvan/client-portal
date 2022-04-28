import React, {ReactElement, ReactNode} from "react";
import StyledLinkButton from "./StyledLinkButton";
interface IChildren {
    children: ReactElement;
    onClickLink?: () => void;
}

export default function LinkButton ({children, onClickLink} : IChildren): ReactElement | null{
    return <StyledLinkButton>{children}</StyledLinkButton>
}

