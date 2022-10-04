import type { FC } from "react";

import SOCIAL_LINKS from "../../Constants/SocialLinks";
import { Link, LinkItem, Wrapper } from "./Styled";

const SocialLinksBar: FC = () => {
    return (
        <Wrapper>
            {SOCIAL_LINKS.map(({ id, label, Icon, iconColor, link }) => (
                <LinkItem key={id}>
                    <Link
                        href={link}
                        title={label}
                        target="_blank"
                        iconColor={iconColor}
                    >
                        <Icon />
                    </Link>
                </LinkItem>
            ))}
        </Wrapper>
    );
};

export default SocialLinksBar;
