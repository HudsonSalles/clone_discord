import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  min-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
      display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid #2D2F32;
  margin-bottom: 8px;
`;