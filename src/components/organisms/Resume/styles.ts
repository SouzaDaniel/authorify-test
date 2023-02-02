import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;

  column-gap: 1rem;

  animation: ${show} ${({ theme }) => theme.transition.slow};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;

  flex-shrink: 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  min-width: 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Label = styled.h5`
  margin: 0;

  font-size: 12px;
`;

export const Value = styled.h3`
  margin: 0;

  font-size: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
