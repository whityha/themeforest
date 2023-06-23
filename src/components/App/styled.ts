import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    box-shadow: ${({ theme }) => theme.shadows.shadowDropdown};
    padding: ${({ theme }) => theme.padding.p1}px;
`;
