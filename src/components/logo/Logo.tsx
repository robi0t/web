import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Icon = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 4rem;
    width: 4rem;
`;

const Text = styled.div`
    color: ${({ theme }) => theme.palette.accent.default};
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 2rem;
    font-size: 2rem;
    height: 100%;
    span + span {
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
`;

export const Logo: FC = () => {

    return (
        <Wrapper>
            <Icon>
                <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#EFE7DC"><g><path d="M4.2,5.5C3.9,4.9,3.8,4.4,4.6,4.1C4.1,4.1,3.8,4.5,3.7,5C3.7,5.2,3.9,5.5,4.2,5.5z"></path><path className="" d="M11.9,0H4.1C1.8,0,0,1.8,0,4.1v7.9C0,14.2,1.8,16,4.1,16h7.9c2.3,0,4.1-1.8,4.1-4.1V4.1C16,1.8,14.2,0,11.9,0z M3.5,5c0,0,0-0.1,0-0.2c0-0.4,0.2-0.7,0.6-0.9c0,0,0,0,0.1,0c0.4-0.2,1,0,1.1,0.5c0,0.2,0,0.4,0,0.5c-0.1,0.4-0.5,0.7-1,0.7 c-0.1,0-0.3,0-0.4,0C3.5,5.6,3.4,5.4,3.5,5z M2.2,8.9c0-0.3,0.1-0.7,0.4-0.8C3.2,7.6,4,7.6,4.7,7.9C4.9,8,5.2,8.1,5.4,8.3 c0.2,0.1,0.3,0.5,0.2,0.8C5.4,9.4,5.2,9.7,4.9,10c-0.5,0.7-1.5,0.8-2.3,0.2c0,0-0.1-0.1-0.2-0.2C2.3,9.7,2.1,9.3,2.2,8.9z M9.2,12.5c-0.8,0.2-1.7,0.7-2.6,0.5c-0.1,0-0.3-0.1-0.4-0.1c-0.7-0.3-1.4-0.5-2.2-0.5c-0.6-0.1-1.1-0.3-1.6-0.6c0.1,0,0.2,0,0.3,0 c0.5-0.1,1,0,1.5,0.2c0.6,0.3,1.2,0.4,1.8,0.8c0.4,0.1,0.8,0.2,1.2,0c0.4-0.1,0.8-0.2,1.3-0.3C8.7,12.4,9,12.4,9.2,12.5L9.2,12.5z M12.5,6.3L12.5,6.3l-0.1-0.4l-0.5,0.6c-0.3,0.3-0.7,0.4-1.1,0.4c-0.2,0-0.2-0.1-0.2-0.3c0-0.2,0-0.4,0-0.7c0-0.2,0.1-0.4,0.2-0.6 c-0.3-0.1-0.7,0.1-1,0.6c-0.2,0.4,0,0.7,0.5,1.2c-0.3,0-0.5,0-0.8-0.1C9.4,6.8,9.3,6.6,9.3,6.3c0.1-0.7,0.7-1.2,1.4-1.3 c0.7-0.1,1.5,0.2,1.8,0.9C12.6,6,12.5,6.2,12.5,6.3z"></path></g></svg>
            </Icon>
            <Text>
                <span>Dogehouse</span>
                <span>Revived</span>
            </Text>
        </Wrapper>
    );
};